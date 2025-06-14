import axios from "axios";
import { inngest } from "./client";
import { createClient } from "@deepgram/sdk";
import { GenerateImageScript } from "@/configs/AiModel";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const ImagePromptScript = `generate image prompt of cinematic {style} with all details for each scene for 30 seconds video : script :{script}
just give specifying image prompts depends on the story line
do not give camera angel image prompt
follow the following schema and return JSON data (max 4-5 images)
[
{
imagePrompt:'',
sceneContent:'<Script Content>'
}
]
`;
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

const BASE_URL = "https://aigurulab.tech";
export const GenerateVideoData = inngest.createFunction(
  { id: "generate-video-data" },
  { event: "generate-video-data" },
  async ({ event, step }) => {
    const { script, topic, title, caption, videoStyle, voice, recordId } = event?.data;
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL)
    const GenerateAudioFile = await step.run("GenerateAudioFile", async () => {
      const result = await axios.post(BASE_URL+'/api/text-to-speech',
          {
              input: script,
              voice: voice
          },
          {
              headers: {
                  'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
                  'Content-Type': 'application/json', // Content Type
              },
          })
       console.log(result.data.audio) //Output Result: Audio Mp3 Url

       return result.data.audio;
    //   return "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/audio%2F1743013086168.mp3?alt=media&token=17d15227-4020-486b-987f-88d46a2bf781";
    });

    const GenerateCaptions= await step.run(
        "generateCaptions",
       async ()=>{
           const deepgram  = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY)
           const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
            {
              url: GenerateAudioFile,
            },
            {
              model: "nova-3",
            }
          );
        return result.results?.channels[0]?.alternatives[0]?.words
       }
    )

    const GenerateImagePrompt = await step.run(
      "generateImagePrompt",
      async () => {
        const FINAL_PROMPT = ImagePromptScript.replace(
          "{style}",
          videoStyle
        ).replace("{script}", script);
        const result = await GenerateImageScript.sendMessage(FINAL_PROMPT);
        const resp = JSON.parse(result.response.text());
        return resp;
      }
    );

    const GenerateImage = await step.run("generateImages", async () => {
      let image = [];
      image = await Promise.all(
        GenerateImagePrompt.map(async (element) => {
          const result = await axios.post(
            BASE_URL + "/api/generate-image",
            {
              width: 1024,
              height: 1024,
              input: element?.imagePrompt,
              model: "sdxl", //'flux'
              aspectRatio: "1:1", //Applicable to Flux model only
            },
            {
              headers: {
                "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
                "Content-Type": "application/json", // Content Type
              },
            }
          );
          console.log(result.data.image); //Output Result: Base 64 Image
          return result.data.image
        })
      );
      return image
    });
 
     const UpdateDB = await step.run(
        'UpdateDB',
        async()=>{
            const result  =  await convex.mutation(api.videoData.UpdateVideoRecord,{
                recordId:recordId,
                audioUrl:GenerateAudioFile,
                captionJson:GenerateCaptions,
                images:GenerateImage
            })
            return result
        }
     )

    return 'Executed Successfully';
  }
);

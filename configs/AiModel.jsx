const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export const generateScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a two diffrent script for 30 secound on topic : kids Story\n- give me the response in JSON format and follow the schema\n {\nscripts:[\n{\ncontent:\n},\n],\n}\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"(SOUND of gentle music and children giggling)\\n\\nNARRATOR: (Warm, friendly voice) Once upon a time, nestled in a field of bright sunflowers, lived a little ladybug named Dot. Dot loved her spots, but she wished she had other colors too. (SOUND of a light 'boing' sound)\\n\\nDOT: (High-pitched, cheerful voice) Oh, wouldn't it be wonderful to be blue, or maybe even green?\\n\\nNARRATOR: One day, a rainbow landed right in her sunflower patch! (SOUND of magical tinkling)\\n\\nDOT: (Excited gasp) Wow!\\n\\nNARRATOR: The rainbow whispered, \\\"Use my colors, little Dot, but only share them with kindness.\\\" Dot painted all the flowers with the rainbow's colors, making everyone happy! (SOUND of happy buzzing and children's laughter fading slightly)\"\n    },\n    {\n      \"content\": \"(SOUND of rustling leaves and birds chirping)\\n\\nNARRATOR: (Calm, storytelling voice) Barnaby the bear wasn't like the other bears. He didn't like honey. (SOUND of a gentle sniff)\\n\\nBARNABY: (Grumbling, but sweet) Nope, too sticky!\\n\\nNARRATOR: Barnaby loved… blueberries! He spent all day searching for the juiciest, plumpest blueberries in the forest. (SOUND of 'crunch crunch' as he walks)\\n\\nBARNABY: (Happily) Almost… almost… there! (Sound of a surprised gasp)\\n\\nNARRATOR: One day, he found a bush covered, not in blueberries, but in glowing, silver berries! He cautiously took a bite. (SOUND of a tiny 'pop' and a happy sigh). They tasted like sunshine and laughter, and made Barnaby the happiest bear in the whole wide world!\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });


 export   const GenerateImageScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "generate image prompt of cinematic style with all details for each scene for 30 seconds video : script rosa parks refused to give up her set on a bus in 1995. her quiet act of defiance sparked the Montgomery bus boycott. a pivotal moment in the civil right movement. one person's bravery can inspire lasting  change for everyone.\n\njust give specifying image prompts depends on the story line\n\ndo not give camera angel image prompt\n\nfollow the following schema and return JSON data (max 4-5 images)\n\n[\n{\nimagePrompt:'',\nsceneContent:'<Script Content>'\n}\n]\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I am unable to generate images directly. Image generation is only enabled for the \"Gemini 2.0 Flash Experimental\" model when the selected output format is \"Images and text\". However, I can provide you with a JSON structure of image prompts based on your script, focusing on the visual aspects of each scene.\n\n```json\n[\n  {\n    \"imagePrompt\": \"A crowded bus interior, Montgomery, Alabama, 1955. Evening light filters through the windows. Rosa Parks, a Black woman with a determined but weary expression, sits quietly in a seat near the front. Other passengers, both Black and white, are visible. The atmosphere is tense and expectant.\",\n    \"sceneContent\": \"Rosa Parks refused to give up her seat on a bus in 1955.\"\n  },\n  {\n    \"imagePrompt\": \"Close-up on Rosa Parks' face. Her eyes reflect a quiet strength and resolve. She holds a handbag in her lap, her hands clasped tightly. The focus is on her inner strength and defiance.\",\n    \"sceneContent\": \"Her quiet act of defiance sparked the Montgomery bus boycott.\"\n  },\n  {\n    \"imagePrompt\": \"A wide shot of the Montgomery bus boycott in full swing. Black citizens walk along the road, determined and united. Empty buses pass them by. The scene conveys a sense of solidarity and collective action.\",\n    \"sceneContent\": \"A pivotal moment in the civil rights movement.\"\n  },\n  {\n    \"imagePrompt\": \"A montage of images: Rosa Parks' portrait; a crowd marching for civil rights; the signing of civil rights legislation. The style is historical and impactful, conveying the long-term consequences of her actions.\",\n    \"sceneContent\": \"One person's bravery can inspire lasting change for everyone.\"\n  }\n]\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "generate image prompt of cinematic style with all details for each scene for 30 seconds video : script rosa parks refused to give up her set on a bus in 1995. her quiet act of defiance sparked the Montgomery bus boycott. a pivotal moment in the civil right movement. one person's bravery can inspire lasting  change for everyone.\n\njust give specifying image prompts depends on the story line\n\ndo not give camera angel image prompt\n\nfollow the following schema and return JSON data (max 4-5 images)\n\n[\n{\nimagePrompt:'',\nsceneContent:'<Script Content>'\n}\n]\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The user wants image prompts for a 30-second video about Rosa Parks.\nThe script highlights:\n1. Rosa Parks refusing to give up her seat in 1955 (correction: the script incorrectly says 1995, I should use 1955 for historical accuracy).\n2. Her quiet defiance sparking the boycott.\n3. The boycott being a pivotal moment.\n4. The idea that one person's bravery inspires change.\n\nThe user wants:\n- Cinematic style image prompts.\n- Detailed prompts for each scene.\n- Prompts based on the storyline.\n- No camera angle specifications.\n- JSON format with `imagePrompt` and `sceneContent` keys.\n- Maximum 4-5 images.\n\nPlan:\n1.  **Scene 1:** Rosa Parks on the bus, refusing to give up her seat. Focus on the atmosphere, the setting (1955 Montgomery bus), her expression.\n2.  **Scene 2:** Focus on the act of defiance itself, perhaps a close-up or a view emphasizing her solitary stance against authority (police officer, bus driver).\n3.  **Scene 3:** Depict the Montgomery Bus Boycott - crowds walking, empty buses, solidarity.\n4.  **Scene 4:** Show the broader impact/legacy - connection to the Civil Rights Movement, inspiration.\n\nConstraint Checklist & Confidence Score:\n1. Cinematic style: Yes\n2. Details for each scene: Yes\n3. Based on storyline: Yes\n4. No camera angle prompts: Yes\n5. JSON format: Yes\n6. Max 4-5 images: Yes (Planning for 4)\n7. Correct historical date (1955, not 1995): Yes, will use 1955 in the prompts.\n\nConfidence Score: 5/5\n\nMental Sandbox:\n- Prompt 1: Could focus on the bus driver demanding the seat, or other passengers' reactions. Decided to keep it focused on Rosa Parks initially.\n- Prompt 2: Could show her being arrested. Decided to focus on the *quiet* defiance as mentioned in the script. Maybe a tight shot on her hands gripping her purse, or her steady gaze.\n- Prompt 3: Need to convey the scale and determination of the boycott. Walking people, maybe rain or difficult conditions to emphasize sacrifice.\n- Prompt 4: How to show lasting change? Montage seems appropriate. Could include modern scenes inspired by her action, but sticking to historical context might be stronger. decided on a montage mixing her image with movement imagery.\n\nKey Learnings from Sandbox:\n- Emphasize the \"quiet\" defiance.\n- Use 1955.\n- Clearly depict the boycott's nature (walking, empty buses).\n- Use a montage for the impact/legacy scene.\n\nRefinement: Ensure prompts specify the 1955 setting, clothing, and atmosphere accurately. Use evocative language for cinematic feel (e.g., \"warm, late afternoon light,\" \"determined dignity,\" \"sense of community resolve\")."},
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"Cinematic, 1955 Montgomery, Alabama bus interior. Warm, late afternoon light streams through the windows. Rosa Parks, a Black woman in period attire, sits calmly but firmly in her seat. A white bus driver stands nearby, gesturing sternly. Other passengers, reflecting the segregated society, watch with mixed expressions. Focus on Rosa's quiet resolve amidst the tension. kodachrome film aesthetic.\",\n    \"sceneContent\": \"Rosa Parks refused to give up her seat on a bus in 1955.\"\n  },\n  {\n    \"imagePrompt\": \"Close-up on Rosa Parks' face, bathed in the bus window light. Her expression shows weariness mixed with profound, unwavering dignity and quiet determination. She looks straight ahead, refusing to be intimidated. The background is slightly blurred, emphasizing her inner strength. 1950s period detail.\",\n    \"sceneContent\": \"Her quiet act of defiance sparked the Montgomery bus boycott.\"\n  },\n  {\n    \"imagePrompt\": \"Dramatic, wide shot of a Montgomery street during the boycott, 1955-1956. Scores of Black citizens, dressed for work or daily life, walk purposefully along the sidewalk, filling the frame. An empty city bus drives past them on the street. The mood is one of solidarity, resilience, and peaceful protest. Gritty, realistic cinematic lighting.\",\n    \"sceneContent\": \"A pivotal moment in the civil rights movement.\"\n  },\n  {\n    \"imagePrompt\": \"Symbolic, slightly desaturated cinematic image. A composite or split screen: one side shows Rosa Parks' iconic profile or booking photo radiating quiet strength; the other side shows diverse hands holding protest signs or linking arms in solidarity, representing the ongoing fight for equality inspired by her action. A soft, hopeful light unifies the image.\",\n    \"sceneContent\": \"One person's bravery can inspire lasting change for everyone.\"\n  }\n]\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "generate image prompt of cinematic style with all details for each scene for 30 seconds video : script rosa parks refused to give up her set on a bus in 1995. her quiet act of defiance sparked the Montgomery bus boycott. a pivotal moment in the civil right movement. one person's bravery can inspire lasting  change for everyone.\n\njust give specifying image prompts depends on the story line\n\ndo not give camera angel image prompt\n\nfollow the following schema and return JSON data (max 4-5 images)\n\n[\n{\nimagePrompt:'',\nsceneContent:'<Script Content>'\n}\n]"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I am unable to generate images directly. Image generation is only enabled for the \"Gemini 2.0 Flash Experimental\" model when the selected output format is \"Images and text\". However, I can provide you with a JSON structure of image prompts based on your script, focusing on the visual aspects of each scene.\n\n```json\n[\n  {\n    \"imagePrompt\": \"1950s Montgomery, Alabama. Interior of a crowded bus, evening. Rosa Parks, a dignified Black woman, sits calmly in her seat. A white bus driver argues with her, other passengers look on with concern. The atmosphere is thick with tension, a single act of defiance about to ignite a movement. Period clothing and details are essential.\",\n    \"sceneContent\": \"Rosa Parks refused to give up her seat on a bus in 1955.\"\n  },\n  {\n    \"imagePrompt\": \"Close-up of Rosa Parks' hands, clasped tightly in her lap. Her expression is resolute, though her eyes hint at the weight of the moment. The focus is on her inner strength and quiet rebellion. The scene must avoid sensationalism, emphasizing her peaceful defiance.\",\n    \"sceneContent\": \"Her quiet act of defiance sparked the Montgomery bus boycott.\"\n  },\n  {\n    \"imagePrompt\": \"The Montgomery Bus Boycott. A long line of Black citizens walking to work, united in their protest. Empty buses pass by. The scene should convey the scale and determination of the boycott, highlighting the community's solidarity. A vintage, documentary-style aesthetic would be suitable.\",\n    \"sceneContent\": \"A pivotal moment in the civil rights movement.\"\n  },\n  {\n    \"imagePrompt\": \"A montage of images: a photograph of Rosa Parks, newsreel footage of the boycott, and a scene of the Civil Rights Act being signed. These images symbolize the lasting impact of her actions. A cinematic treatment would connect these historical moments, emphasizing the power of individual bravery to create lasting change.\",\n    \"sceneContent\": \"One person's bravery can inspire lasting change for everyone.\"\n  }\n]\n```\n"},
          ],
        },
      ],
    }); 
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
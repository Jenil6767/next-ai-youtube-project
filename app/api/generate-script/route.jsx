import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";
const  SCRIPT_PROMPT =`write a two diffent script for 30 secounds video on Topic{topic},
- do not add Scene  description
-do not add Anything in Braces,Just Return the plain story in text 
- Give me response in JSON  format and follow the schema 
- { 
script:[
{
content:"
},
],
}
`
export async function POST(req){
  const {topic} = await req.json();
  const PROMPT = SCRIPT_PROMPT.replace('{topic}',topic)
  const result =  await generateScript.sendMessage(PROMPT)
  const resp= result?.response?.text();
  return NextResponse.json(JSON.parse(resp))
 }
"use client";
import React, { use, useState } from "react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import axios from "axios";
import { useAuthContext } from "@/app/provider";
const videoTopics = [
  "Funny",
  "Cartoon",
  "Entertainment",
  "Technology",
  "Gaming",
  "Education",
  "Travel",
  "Food",
  "Science",
  "Lifestyle",
];

function Topic({ onHandleInputChange }) {
  const [selected, selectedTopic] = useState();
  const [scripts, setScripts] = useState();
  const {user} = useAuthContext();
  const [loading, isloading] = useState(false);
  const [selectedScriptIndex,setSelectedScriptIndex] = useState()
  const generateScript = async () => {
    if(user?.credits<=0){
      console.log('please add more credits')
      return
    }
    isloading(true);
    setSelectedScriptIndex(null)
    try {
      const result = await axios.post("/api/generate-script", {
        topic: selected,
      });
      console.log(result.data);
      setScripts(result.data?.script);
    } catch (e) {
      console.log(e);
    }
    isloading(false);
  };
  return (
    <div>
      <h2 className="mb-2">Project Title</h2>
      <Input
        placeholder="enter project title"
        onChange={(event) => onHandleInputChange("title", event?.target.value)}
      />
      <div className="mt-5">
        <h2>Video Topic</h2>
        <p className="text-sm text-gray-600">Select Topic for Tag</p>
        <Tabs defaultValue="account" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="account">Suggestions</TabsTrigger>
            <TabsTrigger value="password">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div>
              {videoTopics.map((suggestion, index) => (
                <Button
                  className={`m-1 ${suggestion == selected && "bg-secondary"}`}
                  variant="outline"
                  key={index}
                  onClick={() => {
                    selectedTopic(suggestion);
                    onHandleInputChange("topic", suggestion);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div>
              <h2>Enter Your Topic</h2>
              <Textarea
                placeholder="enter your topic"
                onChange={(event) =>
                  onHandleInputChange("topic", event.target.value)
                }
              ></Textarea>
            </div>
          </TabsContent>
        </Tabs>

        {scripts?.length>0 && 
        <div className="mt-4">
          <h2>Select the script</h2>
          <div className="grid grid-cols-2 gap-5 mt-1">
            {scripts?.map((item, index) => (
              <div key={index} className={`p-3 border rounder-lg cursor-pointer ${selectedScriptIndex == index && 'border-white bg-secondary'}`}
              onClick={()=>{setSelectedScriptIndex(index)
                onHandleInputChange('script',item?.content)
              }}
              >
                <h2 className="line-clamp-4 text-sx text-gray-500">{item.content}</h2>
              </div>
            ))}
          </div>
          </div>
        }
      </div>
     {!scripts&& <Button
        className="mt-3"
        size="sm"
        onClick={generateScript}
        // disable={loading}
      >
        {loading ? <Loader2Icon className="animate-spin" /> : <SparkleIcon />}
        Generate Script
      </Button>}
    </div>
  );
}

export default Topic;

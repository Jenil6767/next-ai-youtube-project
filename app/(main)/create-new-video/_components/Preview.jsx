import React from "react";
import { options } from "./VideoStyle";
import Image from "next/image";
function Preview({ formData }) {
  const selectedVideoStyle =
    formData && options.find((item) => item?.name == formData?.videoStyle);
   console.log(formData)
    return (
    <div className="relative">
      <h2 className="mb-3 text-2xl">Preview</h2>
      <Image
        src={selectedVideoStyle?.image}
        alt={selectedVideoStyle?.name}
        height={300}
        width={1000}
        className="w-full h=[70vh] object-cover rounded-xl"
      />
      <h2 className={`${formData?.caption?.style} absolute bottom-7  w-full text-center`}>{formData?.caption?.caption}</h2>
    </div>
  );
}

export default Preview;

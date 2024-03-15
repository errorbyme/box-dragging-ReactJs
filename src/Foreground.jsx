import React, { useRef } from "react";
import Card from "./Card";

export default function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "hey how are you, hows u bro hope everything is well",
      filesize: "4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "hey how are you, hows u bro hope everything is well",
      filesize: "10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "upload", tagColor: "sky" },
    },
    {
      desc: "hey how are you, hows u bro hope everything is well",
      filesize: "6mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "red" },
    },
    {
      desc: "hey how are you, hows u bro hope everything is well",
      filesize: "8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
    },
  ];
  return (
    <div ref={ref} className="foreground">
      {data.map((value, i) => (
        <Card
          reference={ref}
          desc={value.desc}
          filesize={value.filesize}
          close={value.close}
          tag={value.tag}
        />
      ))}
    </div>
  );
}

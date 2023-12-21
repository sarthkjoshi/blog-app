"use client";
import Button from "@/components/Button/Button";
import { useUserContext } from "@/context/UserContext";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useUserContext();
  const router = useRouter();
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/post", {
        title,
        content,
        author: user._id,
      });

      router.push("/");
    } catch (error) {
      console.log("err");
    }
  };
  return (
    <div className="flex justify-center items-center p-5">
      <form onSubmit={handleForm} className="flex flex-col w-56 ">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-5 text-black rounded border border-pink-400 my-5 "
        />
        <textarea
          type="text"
          placeholder="Content"
          value={content}
          className="p-5 text-black rounded border border-pink-400 my-5"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />

        <Button> Post</Button>
      </form>
    </div>
  );
}

export default CreatePost;

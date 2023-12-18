"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";

function EditPost({ params }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  useEffect(() => {
    async function formData() {
      const res = await fetch(`http://localhost:3000/api/post/${params.id}`);
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
    }
    formData();
  }, [params.id]);
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/api/post/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      router.push("/");
    } catch (error) {
      console("err");
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

        <Button>Make Changes</Button>
      </form>
    </div>
  );
}

export default EditPost;

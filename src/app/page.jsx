"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/post");
        setPosts(response.data);
      } catch (error) {
        console.log("Yeh hai error :" + error);
      }
    };
    getData();
  }, []);

  return (
    <main className="p-3 overflow-scroll ">
      {posts &&
        posts.map((p) => {
          return (
            <li
              key={p._id}
              className="flex flex-col items-center justify-center mt-5 shadow-md rounded-md p-10  transition-transform transform hover:scale-105"
            >
              <Link href={`/post/${p._id}`}>
                <h2 className="text-pink-700 text-xl font-bold">{p.title}</h2>
              </Link>
              <p>{p.content}</p>
            </li>
          );
        })}
    </main>
  );
}

import Post from "@/models/post.models";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

await connect();

export const GET = async () => {
  const posts = await Post.find();

  return NextResponse.json(posts);
};

export const POST = async (request) => {
  const { title, content } = await request.json();

  const newPost = new Post({
    title,
    content,
  });
  await newPost.save();

  return NextResponse.json("Saved in database", { status: 200 });
};

import { getTokenData } from "@/helpers/getTokenData";
import Post from "@/models/post.models";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

await connect();

export const GET = async (req) => {
  const id = getTokenData(req);
  const posts = await Post.find({ author: id });
  return NextResponse.json(posts);
};

export const POST = async (request) => {
  try {
    const { title, content, author } = await request.json();

    const newPost = new Post({
      title,
      content,
      author,
    });
    await newPost.save();
  } catch (error) {
    return NextResponse.json({ messge: "Error" + error });
  }

  return NextResponse.json("Saved in database", { status: 200 });
};

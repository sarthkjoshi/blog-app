import Post from "@/models/post.models";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

await connect();

export const GET = async (request, { params }) => {
  const post = await Post.findById(params.id);

  return NextResponse.json(post);
};

export const PUT = async (req, { params }) => {
  const formData = await req.json();

  const post = await Post.findByIdAndUpdate(params.id, formData);
  return NextResponse.json(post);
};
export const DELETE = async (req, { params }) => {
  await Post.findByIdAndDelete({ _id: params.id });
  return NextResponse.json({ message: "Deleted" });
};

import User from "@/models/user.models";
import connect from "@/utils/db";
import bcryptjs, { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export const POST = async (req) => {
  await connect();
  const { email, password } = await req.json();
  const userdata = await User.findOne({ email });
  if (!userdata) {
    return NextResponse.json({ message: "No user Exist" }, { status: 400 });
  }
  const verify = await bcryptjs.compare(password, userdata.password);
  if (!verify) {
    return NextResponse.json({ message: "password dont match" });
  }

  const tokenData = {
    id: userdata._id,
    email: userdata.email,
  };
  const token = jwt.sign(tokenData, "yuyuyuio@", { expiresIn: "1d" });

  const response = NextResponse.json({ message: "login successful" });
  response.cookies.set("token", token, { httpOnly: true });

  return response;
};

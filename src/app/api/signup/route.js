import User from "@/models/user.models";
import connect from "@/utils/db";
import bcryptjs, { hash } from "bcryptjs";

import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connect();
  const { email, password } = await req.json();
  const userdata = await User.findOne({ email });
  if (userdata) {
    return NextResponse.json({ message: "User Aready Exists" });
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const newUser = User({
    email,
    password: hashedPassword,
  });
  await newUser.save();

  return NextResponse.json({ message: "SignedUp" }, { status: 200 });
};

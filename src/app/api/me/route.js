import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/user.models";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

connect();
export const GET = async (req) => {
  const id = getTokenData(req);
  const user = await User.findById({ _id: id });
  return NextResponse.json(user);
};

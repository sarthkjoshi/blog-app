import User from "@/models/user.models";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

import { getTokenData } from "@/helpers/getTokenData";
await connect();
export const GET = async (req) => {
  const id = getTokenData(req);

  const user = await User.findById({ _id: id });

  return NextResponse.json(user);
};

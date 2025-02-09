import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/next-auth";
import connectMongo from "@/lib/mongoose";
import User from "@/models/user";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  await connectMongo();

  const { id } = session.user;

  try {
    const user = await User.findById(id);

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

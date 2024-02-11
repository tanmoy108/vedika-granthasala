import mongoose from "mongoose";
import { blogs } from "@/lib/modal/blogs";
import { NextResponse } from "next/server";
export const revalidate = 0;
export async function GET() {
  let blogData = [];
  try {
    await mongoose.connect(process.env.DB);
    blogData = await blogs.find();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Caught a TypeError:", error.message);
    }
    blogData = `some problem: ${error.message}`;
    return NextResponse.json({ result: blogData, success: false });
  }
  return NextResponse.json({ result: blogData, success: true });
}

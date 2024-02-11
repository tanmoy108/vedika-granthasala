import mongoose from "mongoose";
import { books } from "@/lib/modal/books";
import { NextResponse } from "next/server";
export const revalidate = 0;
export async function GET(req, { params }) {
  let data = {};
  try {
    await mongoose.connect(process.env.DB);
    data = await books.findById(params.id);
  } catch (error) {
    data = "error";
    return NextResponse.json({ result: data, success: false });
  }
  return NextResponse.json({ result: data, success: true });
}

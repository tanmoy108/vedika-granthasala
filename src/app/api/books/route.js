import { books } from "@/lib/modal/books";
import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let bookData = [];
  try {
    await mongoose.connect(process.env.DB);
    bookData = await books.find();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Caught a TypeError:", error.message);
    }
    bookData = `some problem: ${error.message}`;
    return NextResponse.json({ result: bookData, success: false });
  }
  return NextResponse.json({ result: bookData, success: true });
}

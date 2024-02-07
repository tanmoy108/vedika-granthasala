import { gitaverses } from "@/lib/modal/gitaverses";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let data = {};

  try {
    await mongoose.connect(process.env.DB);
    data = await gitaverses.findOne({
      chapterno: params.chapter
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ result: null, success: false }, { status: 500 });
  }

  if (data && data.info) {
    const foundVerse = data.info.find((verse) => verse.verse_number === Number(params.verse));

    if (foundVerse) {
      return NextResponse.json({ result: foundVerse, success: true });
    } else {
      return NextResponse.json({ result: null, success: false }, { status: 404 });
    }
  } else {
    return NextResponse.json({ result: null, success: false }, { status: 404 });
  }
}

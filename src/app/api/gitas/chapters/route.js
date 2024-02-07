import { gitachapters } from "@/lib/modal/gitachapters";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let chapterData = [];
    try {
        await mongoose.connect(process.env.DB);
        chapterData = await gitachapters.find().sort({ chapter_number :1});
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught a TypeError:", error.message);
        }
        chapterData = `some problem: ${error.message}`;
        return NextResponse.json({ result: chapterData, success: false });
    }
    return NextResponse.json({ result: chapterData, success: true });
}

import { gitachapters } from "@/lib/modal/gitachapters";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
    let chapterData = [];
    try {
        await mongoose.connect(process.env.DB);
        chapterData = await gitachapters.findOne({ chapter_number: params.chapter });
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught a TypeError:", error.message);
        }
        chapterData = `some problem: ${error.message}`;
        return NextResponse.json({ result: chapterData, success: false });
    }
    return NextResponse.json({ result: chapterData, success: true });
}
// export async function GET(req,{params}) {
//     let chapterData = [];
//     try {
//         await mongoose.connect(process.env.DB);
//         chapterData = await gitachapters.findById(params.chapter);
//     } catch (error) {
//         if (error instanceof TypeError) {
//             console.error("Caught a TypeError:", error.message);
//         }
//         chapterData = `some problem: ${error.message}`;
//         return NextResponse.json({ result: chapterData, success: false });
//     }
//     return NextResponse.json({ result: chapterData, success: true });
// }

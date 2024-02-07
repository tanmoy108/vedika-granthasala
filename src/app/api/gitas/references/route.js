import { gitareferences } from "@/lib/modal/gitareferences";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let referenceData = [];
    try {
        await mongoose.connect(process.env.DB);
        referenceData = await gitareferences.find();
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught a TypeError:", error.message);
        }
        referenceData = `some problem: ${error.message}`;
        return NextResponse.json({ result: referenceData, success: false });
    }
    return NextResponse.json({ result: referenceData, success: true });
}

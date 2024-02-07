import { designs } from "@/lib/modal/designs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(process.env.DB);
  let designData = [];
  try {
    designData = await designs.find();
    return NextResponse.json({ success: true, result: designData, status: 200 });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] GET Error:`, error);
    designData = `some problem: ${error.message}`;
    return NextResponse.json({ success: false, result: designData, status: 500 });
  }
}

export async function POST(request) {
  await mongoose.connect(process.env.DB);
  const payload = await request.json();
  let result = null;
  try {
    const design = new designs(payload);
    result = await design.save();
    return NextResponse.json({ success: true, result, status: 201 });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] POST Error:`, error);
    return NextResponse.json({ success: false, result: `Error: ${error.message}`, status: 500 });
  }
}

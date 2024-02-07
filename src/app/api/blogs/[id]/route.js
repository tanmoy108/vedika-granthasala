import { blogs } from "@/lib/modal/blogs";
// import { users } from "@/lib/modal/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    let blogData = [];
    try {
        await mongoose.connect(process.env.DB);
        blogData = await blogs.find({ userId: params.id })
        // blogData = await blogs.find({ userId: params.id }).populate({
        //     path: 'userId',
        //     model: users, 
        //     select: 'name email number',
        // });
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught a TypeError:", error.message);
        }
        blogData = `some problem: ${error.message}`;
        return NextResponse.json({ result: blogData, success: false });
    }
    return NextResponse.json({ result: blogData, success: true });
}
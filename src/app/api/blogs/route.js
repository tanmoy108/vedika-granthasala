import mongoose from "mongoose";
import { blogs } from "@/lib/modal/blogs";
import { NextResponse } from "next/server";

export async function GET() {
    let blogData = [];
    try {
        await mongoose.connect(process.env.DB);
        blogData = await blogs.find();;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught a TypeError:", error.message);
        }
        blogData = `some problem: ${error.message}`;
        return NextResponse.json({ result: blogData, success: false });
    }
    return NextResponse.json({ result: blogData, success: true });
}

function hasNullValues(obj) {
    for (const key in obj) {
        if (obj[key] === null) {
            return true;
        }
    }
    return false;
}

export async function POST(request) {
    const payload = await request.json();
    let result = null;

    // Check for null values in the payload
    if (hasNullValues(payload)) {
        return NextResponse.json({ data: { error: 'Payload contains null values' } });
    }

    try {
        // Connect to the MongoDB database
        await mongoose.connect(process.env.DB);

        // Create a new blog instance with the payload
        const blog = new blogs(payload);

        // Save the blog to the database
        result = await blog.save();
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        result = { error: error.message };
    } finally {
        // Close the MongoDB connection, whether there was an error or not
        mongoose.disconnect();
    }

    return NextResponse.json({ data: result });
}

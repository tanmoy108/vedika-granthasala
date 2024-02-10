import { blogs } from "@/lib/modal/blogs";
// import { users } from "@/lib/modal/users";
import { extractPublicId } from "cloudinary-build-url";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import cloudinary from 'cloudinary';


// Configure Cloudinary at the beginning of your application
cloudinary.config({
    cloud_name: 'shtanmoy',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRETE,
});

export async function GET(req, { params }) {
    let blogData = {};

    try {
        // Check if the connection is already established
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.DB);
        }

        blogData = await blogs.findById(params.id);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            console.error("Validation Error:", error.message);
            return NextResponse.json({ result: `Validation Error: ${error.message}`, success: false });
        } else if (error instanceof mongoose.Error.CastError) {
            console.error("Cast Error:", error.message);
            return NextResponse.json({ result: `Invalid ID format: ${error.message}`, success: false });
        } else {
            console.error("Unexpected Error:", error.message);
            return NextResponse.json({ result: `Some problem: ${error.message}`, success: false });
        }
    }
    return NextResponse.json({ result: blogData, success: true });
}
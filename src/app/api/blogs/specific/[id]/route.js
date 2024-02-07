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

export async function DELETE(req, { params }) {
    let blogData = {};

    try {
        // Check if the connection is already established
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.DB);
        }

        blogData = await blogs.findById(params.id);

        if (!blogData) {
            return NextResponse.json({ result: 'Blog post not found', success: false });
        }

        const publicId = extractPublicId(blogData.blogimage);
        console.log(publicId);

        const deleteFromDB = await blogs.findByIdAndDelete(params.id);

        // Delete the associated image from Cloudinary
        const deleteFromCloud = await cloudinary.uploader.destroy(publicId);
        console.log(deleteFromCloud);

        if (deleteFromCloud.result !== 'ok') {
            console.error('Failed to delete image from Cloudinary');
            return NextResponse.json({ result: 'Failed to delete image', success: false });
        }

        return NextResponse.json({ result: 'Blog post will be delete after some time', success: true });
    } catch (error) {
        console.error('Error deleting blog post:', error.message);
        return NextResponse.json({ result: `Some problem: ${error.message}`, success: false });
    }
}

export async function PATCH(request, { params }) {
    const payload = await request.json();

    try {
        // Connect to the database
        await mongoose.connect(process.env.DB);

        // Check if the title and description are present in the payload
        if (!payload.title || !payload.description) {
            return NextResponse.json({ result: 'Title and description are required', success: false });
        }

        // Find the blog post by ID
        const blogData = await blogs.findById(params.id);

        if (!blogData) {
            return NextResponse.json({ result: 'Blog post not found', success: false });
        }

        const updatedData = await blogs.findByIdAndUpdate(params.id, { $set: { title: payload.title, description: payload.description } });

        return NextResponse.json({ result: 'Blog post will be update after some time', success: true });
    } catch (error) {
        console.error('Error updating blog post:', error);
        return NextResponse.json({ result: `Some problem: ${error.message}`, success: false });
    }
}
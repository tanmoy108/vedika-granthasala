import { blogs } from "@/lib/modal/blogs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const payload = await request.json();

  try {
    // Connect to the database
    await mongoose.connect(process.env.DB);
    const blogData = await blogs.findById(params.id);

    if (!blogData) {
      return NextResponse.json({
        result: "Blog post not found",
        success: false,
      });
    }

    const updatedData = await blogs.findByIdAndUpdate(params.id, {
      $set: { pending: payload.pending },
    });

    return NextResponse.json({
      result: "Blog post will be update after some time",
      success: true,
    });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json({
      result: `Some problem: ${error.message}`,
      success: false,
    });
  }
}

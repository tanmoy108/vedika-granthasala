import { designs } from "@/lib/modal/designs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await mongoose.connect(process.env.DB);

  try {
    const findPost = await designs.findById(params.id);
    
    if (!findPost) {
      return NextResponse.json({ result: "Post Not Found", success: false });
    }

    const deletedPost = await designs.findByIdAndDelete(params.id);

    if (!deletedPost) {
      console.error(`Failed to delete post with id ${params.id}`);
      return NextResponse.json({
        result: "Post Not Found",
        success: false,
      });
    }

    console.log(`Post with id ${params.id} successfully deleted`);
    return NextResponse.json({ result: "Post deleted successfully", success: true });

  } catch (error) {
    console.error(`Error deleting post with id ${params.id}:`, error.message);
    return NextResponse.json({
      result: "Failed to delete post",
      success: false,
    });
  }
}

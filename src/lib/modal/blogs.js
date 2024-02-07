import mongoose, { Schema } from "mongoose";

const blogSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  blogimage: { type: String, required: true },
  date: { type: Date, default: Date.now },
  pending:{type:Boolean,default:true}
});

const virtual = blogSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
blogSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const blogs =
  mongoose.models.blogs || mongoose.model("blogs", blogSchema);

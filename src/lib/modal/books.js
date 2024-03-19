import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    url:{type:String,required:true},
    cover:{type:String,required:true},
    description:{type:String,default:"N/A"},
    language: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: [String], required: true,default:"N/A" },
    publisher: {type:String,required:true,default:"N/A"},
    page: { type: Number },
    size: { type: String }
})

const virtual = bookSchema.virtual('id');
virtual.get(function () {
    return this._id;
})
bookSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

export const books = mongoose.models.books || mongoose.model("books",bookSchema)
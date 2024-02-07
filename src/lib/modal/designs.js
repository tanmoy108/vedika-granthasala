import mongoose from "mongoose";

const designSchema = mongoose.Schema({
    title: { type: String, required: true },
    url:{type:String,required:true},
})

const virtual = designSchema.virtual('id');
virtual.get(function () {
    return this._id;
})
designSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

export const designs = mongoose.models.designs || mongoose.model("designs",designSchema)
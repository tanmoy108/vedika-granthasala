const mongoose = require('mongoose');

// Schema for chapter
const gitaChaptersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    name_transliterated: { type: String, required: true },
    name_translated: { type: String, required: true },
    verses_count: { type: Number, required: true },
    chapter_number: { type: Number, required: true },
    name_meaning: { type: String, required: true },
    chapter_summary: { type: String, required: true },
    chapter_summary_hindi: { type: String, required: true },
});

const virtual = gitaChaptersSchema.virtual("id");
virtual.get(function () {
    return this._id;
});
gitaChaptersSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

export const gitachapters =
    mongoose.models.gitachapters || mongoose.model("gitachapters", gitaChaptersSchema);
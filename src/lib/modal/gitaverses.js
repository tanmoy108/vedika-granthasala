const mongoose = require('mongoose');

// Schema for translations
const translationSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true },
    author_name: { type: String, required: true },
    language: { type: String, required: true },
});

// Schema for commentaries
const commentarySchema = new mongoose.Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true },
    author_name: { type: String, required: true },
    language: { type: String, required: true },
});

// Schema for info
const infoSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    verse_number: { type: Number, required: true },
    chapter_number: { type: Number, required: true },
    slug: { type: String, required: true },
    text: { type: String, required: true },
    transliteration: { type: String },
    word_meanings: { type: String },
    translations: [translationSchema],
    commentaries: [commentarySchema],
});

// Schema for chapter
const gitaVersesSchema = new mongoose.Schema({
    chapterno: { type: Number, required: true },
    info: [infoSchema],
});

const virtual = gitaVersesSchema.virtual("id");
virtual.get(function () {
    return this._id;
});
gitaVersesSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

export const gitaverses =
    mongoose.models.gitaverses || mongoose.model("gitaverses", gitaVersesSchema);
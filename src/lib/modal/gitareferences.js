const mongoose = require('mongoose');

// Schema for chapter
const gitaReferencesSchema = new mongoose.Schema({
    chapter: Number,
    verse: [Number],
});

const virtual = gitaReferencesSchema.virtual("id");
virtual.get(function () {
    return this._id;
});
gitaReferencesSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

export const gitareferences =
    mongoose.models.gitareferences || mongoose.model("gitareferences", gitaReferencesSchema);
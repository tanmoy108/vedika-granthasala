import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  pending: { type: Boolean, default: true },
  password: { type: String, required: true },
  role:{type:String,required:true,default:"user"},
  date: { type: Date, default: Date.now },
});

const virtual = userSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { id: this.id},
    process.env.TOKENKEY,
    { expiresIn: "1d" }
  );
  return token;
};

export const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().label("Email"),
    number: Joi.number().integer().required().label("Number"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

export const users =
  mongoose.models.users || mongoose.model("users", userSchema);

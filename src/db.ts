import * as dotenv from 'dotenv';
dotenv.config({ quiet: true });
import mongoose, { model, Schema } from "mongoose";

mongoose.connect(process.env.Database!);

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

export const UserModel = model("User", UserSchema);
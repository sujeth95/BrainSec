import * as dotenv from 'dotenv';
dotenv.config({ quiet: true });
import mongoose, { model, Schema } from "mongoose";
mongoose.connect(process.env.Database);
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
export const UserModel = model("User", UserSchema);
const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});
export const ContentModel = model('Content', ContentSchema);
//# sourceMappingURL=db.js.map
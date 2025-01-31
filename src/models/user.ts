import mongoose, { Schema } from "mongoose"
import { UserDocument } from "../types/user.js"

const UserSchema = new Schema<UserDocument>(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true },
)

export default mongoose.model<UserDocument>("User", UserSchema)

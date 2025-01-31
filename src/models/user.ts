import mongoose, { Schema, Document } from "mongoose"

export interface UserDocument extends Document {
    username: string
    email: string
    password: string
}

const UserSchema = new Schema<UserDocument>(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true },
)

export default mongoose.model<UserDocument>("User", UserSchema)

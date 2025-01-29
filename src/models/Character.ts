import mongoose, { Schema } from "mongoose"
import { CharacterDocument } from "../types/Character.js"

const CharacterSchema = new Schema<CharacterDocument>(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

export default mongoose.model<CharacterDocument>("Character", CharacterSchema)

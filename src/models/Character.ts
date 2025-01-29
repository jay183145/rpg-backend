import mongoose, { Schema } from "mongoose"
import { CharacterDocument } from "../types/Character.js"

const CharacterSchema = new Schema<CharacterDocument>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

export default mongoose.model<CharacterDocument>("Character", CharacterSchema)

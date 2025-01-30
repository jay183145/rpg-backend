import mongoose, { Schema } from "mongoose"
import { CharacterDocument } from "../types/Character.js"

export const CharacterSchema = new Schema<CharacterDocument>({
    characterClass: {
        type: String,
        required: true,
        enum: [
            "Warrior",
            "Mage",
            "Archer",
            "Paladin",
            "Assassin",
            "Bard",
            "Druid",
            "Necromancer",
            "Monk",
            "Samurai",
            "Beastmaster",
        ],
    },
    description: { type: String, required: true },
    image: { type: String, required: true },
})

export default mongoose.model<CharacterDocument>("Character", CharacterSchema)

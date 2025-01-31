import mongoose, { Schema } from "mongoose"
import { CharacterDocument } from "../types/character.js"

const CharactersSchema = new Schema<CharacterDocument>(
    {
        owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        level: { type: Number, default: 1 },
        experience: { type: Number, default: 0 },
        hp: { type: Number, default: 100 },
        mp: { type: Number, default: 50 },
        attack: { type: Number, default: 10 },
        defense: { type: Number, default: 5 },
        gold: { type: Number, default: 0 },
        inventory: { type: [String], default: [] },
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
        description: { type: String },
        image: { type: String },
    },
    { timestamps: true },
)

export default mongoose.model<CharacterDocument>("Characters", CharactersSchema)

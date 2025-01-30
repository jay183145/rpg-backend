import mongoose, { Schema } from "mongoose"
import { PlayerDocument } from "../types/Player.js"

const PlayerSchema: Schema<PlayerDocument> = new Schema(
    {
        name: { type: String, required: true, unique: true },
        // 這裡列出 11 種職業
        type: {
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
        level: { type: Number, default: 1 },
        experience: { type: Number, default: 0 },
        hp: { type: Number, default: 100 },
        mp: { type: Number, default: 50 },
        attack: { type: Number, default: 10 },
        defense: { type: Number, default: 5 },
        gold: { type: Number, default: 0 },
        inventory: { type: [String], default: [] },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

export default mongoose.model<PlayerDocument>("Player", PlayerSchema)

import mongoose, { Schema } from "mongoose"
import { PlayerDocument } from "../types/Player.js"

const PlayerSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ["Warrior", "Mage", "Archer"] },
    level: { type: Number, default: 1 },
    experience: { type: Number, default: 0 },
    hp: { type: Number, default: 100 },
    mp: { type: Number, default: 50 },
    attack: { type: Number, default: 10 },
    defense: { type: Number, default: 5 },
    gold: { type: Number, default: 0 },
    inventory: { type: [String], default: [] },
})

export default mongoose.model<PlayerDocument>("Player", PlayerSchema)

import { Document, Types } from "mongoose"

export interface CharacterDocument extends Document, Character {}

export interface Character {
    owner: Types.ObjectId // 連到 Users
    name: string
    level: number
    experience: number
    hp: number
    mp: number
    attack: number
    defense: number
    gold: number
    inventory: string[]
    characterClass: string
    description: string
    image: string
}

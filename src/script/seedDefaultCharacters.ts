import mongoose from "mongoose"
import dotenv from "dotenv"
import { defaultCharacters } from "../types/defaultCharacter.js"
import DefaultCharacterModel from "../models/defaultCharacter.js"
import url from "url"

dotenv.config()

async function seedDefaultCharacters() {
    try {
        // 連線到 MongoDB
        const MONGO_URI = process.env.MONGO_URI
        if (!MONGO_URI) {
            console.error("MONGO_URI is not set in the environment variables")
            process.exit(1)
        }
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected...")

        // 可選：清除已存在資料
        await DefaultCharacterModel.deleteMany({})
        console.log("Cleared existing defaultCharacters...")

        // 插入預設角色資料
        const created = await DefaultCharacterModel.insertMany(defaultCharacters)
        console.log("Inserted default characters:", created)

        // 關閉連線
        await mongoose.connection.close()
        console.log("MongoDB connection closed.")
    } catch (error) {
        console.error("Error seeding default characters:", error)
        process.exit(1)
    }
}

/** 當檔案被直接執行時，呼叫 seedPlayers */
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    seedDefaultCharacters()
}

export { seedDefaultCharacters }

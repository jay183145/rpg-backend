import mongoose from "mongoose"
import dotenv from "dotenv"
import { defaultPlayers } from "../types/Player.js"
import PlayerModel from "../models/Player.js"
import url from "url"

dotenv.config()

async function seedPlayers() {
    try {
        // 連線到 MongoDB
        const MONGO_URI = process.env.MONGO_URI
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected...")

        // 可選：清除已存在資料
        await PlayerModel.deleteMany({})
        console.log("Cleared existing players...")

        // 插入預設角色資料
        const created = await PlayerModel.insertMany(defaultPlayers)
        console.log("Inserted default players:", created)

        // 關閉連線
        await mongoose.connection.close()
        console.log("MongoDB connection closed.")
    } catch (error) {
        console.error("Error seeding players:", error)
        process.exit(1)
    }
}

/** 當檔案被直接執行時，呼叫 seedPlayers */
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    seedPlayers()
}

export { seedPlayers }

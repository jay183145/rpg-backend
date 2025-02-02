import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import defaultCharacterRoutes from "./routes/defaultCharacterRoutes.js"
import usersRoutes from "./routes/userRoutes.js"
import characterRoutes from "./routes/characterRoutes.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000", // 使用環境變數，如果未設定則使用預設值
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
        allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
        credentials: true, // 允許 cookie 跨域
        optionsSuccessStatus: 200, // 解決 OPTIONS 預檢請求的問題
    }),
)

app.use(express.json())
app.use(cookieParser())
app.use("/characters", characterRoutes)
app.use("/defaultCharacters", defaultCharacterRoutes)
app.use("/", usersRoutes)

// 連接到 MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error("MongoDB connection error:", err)
    }
}

connectDB()

// 啟動服務器
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

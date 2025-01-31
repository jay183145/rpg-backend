import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import defaultCharacterRoutes from "./routes/defaultCharacterRoutes.js"
import usersRoutes from "./routes/users.js"
dotenv.config()

const app = express()
app.use(
    cors({
        origin: "*", // Frontend URL
        methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
        allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    }),
)

app.use(express.json())
app.use("/defaultCharacters", defaultCharacterRoutes)
app.use("/register", usersRoutes)

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
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

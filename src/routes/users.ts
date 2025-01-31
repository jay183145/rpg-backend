// routes/users.ts
import { Router, Request, Response } from "express"
import UserModel from "../models/user.js"

const router = Router()

/**
 * 建立新的 User (註冊)
 * POST /users
 * Body: { username, email, password }
 */
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body

        // 1. 基本檢查
        if (!username || !email || !password) {
            res.status(400).json({ error: "Missing required fields" })
            return
        }

        // 2. 檢查 username 或 email 是否已存在
        const existingUser = await UserModel.findOne({
            $or: [{ username }, { email }],
        })
        if (existingUser) {
            res.status(409).json({ error: "Username or email already taken" })
            return
        }

        // 3. 建立 User
        const newUser = new UserModel({ username, email, password })
        await newUser.save()

        // 4. 回傳成功資訊
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        })
    } catch (err) {
        console.error("Error creating user:", err)
        res.status(500).json({ error: "Failed to create user" })
    }
})

export default router

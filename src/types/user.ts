import { Document } from "mongoose"

export interface UserDocument extends Document {
    username: string
    email: string
    password: string
}

// 用於 JWT 的 payload
export interface UserPayload {
    _id: string
    username: string
    email: string
}

import express, { Request, Response } from "express"
import Player from "../models/Player.js"

const router = express.Router()

// Get all players
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
})

// Get a single player by ID
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const player = await Player.findById(req.params.id)
        if (!player) {
            res.status(404).json({ error: "Player not found" })
            return
        }
        res.json(player)
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
})

// Create a new player
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, type } = req.body
        if (!name || !type) {
            res.status(400).json({ error: "Name and type are required" })
            return
        }
        const player = new Player({ name, type })
        await player.save()
        res.status(201).json(player)
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
})

// Update a player
router.put("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedPlayer) {
            res.status(404).json({ error: "Player not found" })
            return
        }
        res.json(updatedPlayer)
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
})

// Delete a player
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id)
        if (!player) {
            res.status(404).json({ error: "Player not found" })
            return
        }
        res.json({ message: "Player deleted successfully" })
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
})

export default router

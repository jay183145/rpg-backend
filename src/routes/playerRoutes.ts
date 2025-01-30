import express, { Request, Response } from "express"
import Player from "../models/Player.js"

const router = express.Router()

// Get all players
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(err)
    }
})

// Get a single player by ID
router.get("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const player = await Player.findById(req.params._id)
        if (!player) {
            res.status(404).json({ error: "Player not found" })
            return
        }
        res.json(player)
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(err)
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
    } catch (err) {
        res.status(400).json({ error: err.message })
        console.log(err)
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
    } catch (err) {
        res.status(400).json({ error: err.message })
        console.log(err)
    }
})

// Delete a player
router.delete("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedPlayer = await Player.findByIdAndDelete(req.params._id)
        if (!deletedPlayer) {
            res.status(404).json({ error: `Player with id ${req.params._id} not found` })
            return
        }
        res.json({ message: "Player deleted successfully" })
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(err)
    }
})

export default router

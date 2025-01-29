import express, { Request, Response } from "express"
import CharacterModel from "../models/Character.js"

const router = express.Router()

// GET all characters
router.get("/", async (req: Request, res: Response) => {
    try {
        const characters = await CharacterModel.find()
        res.json(characters)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch characters." })
    }
})

// GET character by id
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        const character = await CharacterModel.findOne({ id: Number(id) })
        if (!character) {
            res.status(404).json({ error: `Character with id ${id} not found.` })
            return
        }
        res.json(character)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch the character." })
    }
})

// POST create a new character
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, name, description, image } = req.body
        // Ensure required fields
        if (id === undefined || !name || !description || !image) {
            res.status(400).json({ error: "Missing required fields." })
            return
        }

        // Check if the id already exists
        const existing = await CharacterModel.findOne({ id })
        if (existing) {
            res.status(409).json({ error: "Character with this id already exists." })
            return
        }

        const newCharacter = new CharacterModel({ id, name, description, image })
        const saved = await newCharacter.save()
        res.status(201).json(saved)
    } catch (err) {
        res.status(500).json({ error: "Failed to create character." })
        return
    }
})

// PUT update an existing character
router.put("/:id", async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        const updatedCharacter = await CharacterModel.findOneAndUpdate({ id: Number(id) }, req.body, { new: true })

        if (!updatedCharacter) {
            res.status(404).json({ error: `Character with id ${id} not found.` })
            return
        }
        res.json(updatedCharacter)
    } catch (err) {
        res.status(500).json({ error: "Failed to update character." })
        return
    }
})

// DELETE a character
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        const deletedCharacter = await CharacterModel.findOneAndDelete({ id: Number(id) })
        if (!deletedCharacter) {
            res.status(404).json({ error: `Character with id ${id} not found.` })
            return
        }
        res.json({ message: "Character deleted successfully." })
    } catch (err) {
        res.status(500).json({ error: "Failed to delete character." })
        return
    }
})

export default router

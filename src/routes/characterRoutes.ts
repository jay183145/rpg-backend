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
        console.log(err)
    }
})

// GET character by id
router.get("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const character = await CharacterModel.findById(req.params._id)
        if (!character) {
            res.status(404).json({ error: `Character with id ${req.params._id} not found.` })
            return
        }
        res.json(character)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch the character." })
        console.log(err)
    }
})

// POST create a new character
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, image } = req.body
        // Ensure required fields
        if (!name || !description || !image) {
            res.status(400).json({ error: "Missing required fields." })
            return
        }

        // Check if the name already exists
        const existing = await CharacterModel.findOne({ name })
        if (existing) {
            res.status(409).json({ error: "Character with this name already exists." })
            return
        }

        const newCharacter = new CharacterModel({ name, description, image })
        const saved = await newCharacter.save()
        res.status(201).json(saved)
    } catch (err) {
        res.status(500).json({ error: "Failed to create character." })
        console.log(err)
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
        console.log(err)
    }
})

// DELETE a character
router.delete("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedCharacter = await CharacterModel.findByIdAndDelete(req.params._id)
        if (!deletedCharacter) {
            res.status(404).json({ error: `Character with id ${req.params._id} not found.` })
            return
        }
        res.json({ message: "Character deleted successfully." })
    } catch (err) {
        res.status(500).json({ error: "Failed to delete character." })
        console.log(err)
    }
})

export default router

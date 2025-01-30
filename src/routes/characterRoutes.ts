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
        const { characterClass, description, image } = req.body
        // Ensure required fields
        if (!characterClass || !description || !image) {
            res.status(400).json({ error: "Missing required fields." })
            return
        }

        // Check if the characterClass already exists
        const existing = await CharacterModel.findOne({ characterClass })
        if (existing) {
            res.status(409).json({ error: "Character with this characterClass already exists." })
            return
        }

        const newCharacter = new CharacterModel({ characterClass, description, image })
        const saved = await newCharacter.save()
        res.status(201).json(saved)
    } catch (err) {
        res.status(500).json({ error: "Failed to create character." })
        console.log(err)
    }
})

// PUT update an existing character
router.put("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { characterClass, description, image } = req.body
        if (!characterClass || !description || !image) {
            res.status(400).json({ error: "CharacterClass, description, and image are required" })
            return
        }
        const updatedCharacter = await CharacterModel.findByIdAndUpdate(req.params._id, req.body, { new: true })

        if (!updatedCharacter) {
            res.status(404).json({ error: `Character with id ${req.params._id} not found.` })
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

import express, { Request, Response } from "express"
import DefaultCharacter from "../models/defaultCharacter.js"

const router = express.Router()

// Get all defaultCharacters
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const defaultCharacters = await DefaultCharacter.find()
        res.json(defaultCharacters)
    } catch (err) {
        res.status(500).json({ code: 500, error: err.message })
        console.log(err)
    }
})

// Get a single defaultCharacter by ID
router.get("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const defaultCharacter = await DefaultCharacter.findById(req.params._id)
        if (!defaultCharacter) {
            res.status(404).json({ code: 404, error: "DefaultCharacter not found" })
            return
        }
        res.json(defaultCharacter)
    } catch (err) {
        res.status(500).json({ code: 500, error: err.message })
        console.log(err)
    }
})

// Get a single defaultCharacter by characterClass
router.get("/class/:characterClass", async (req: Request, res: Response): Promise<void> => {
    try {
        const defaultCharacter = await DefaultCharacter.findOne({ characterClass: req.params.characterClass })
        if (!defaultCharacter) {
            res.status(404).json({ code: 404, error: "DefaultCharacter not found" })
            return
        }
        res.json(defaultCharacter)
    } catch (err) {
        res.status(500).json({ code: 500, error: err.message })
        console.log(err)
    }
})

// Create a new defaultCharacter
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const { characterClass, type, description, image, ...rest } = req.body
        if (!characterClass || !type || !description || !image) {
            res.status(400).json({ code: 400, error: "CharacterClass, type, description, and image are required" })
            return
        }
        const defaultCharacter = new DefaultCharacter({ characterClass, type, description, image, ...rest })
        await defaultCharacter.save()
        res.status(201).json(defaultCharacter)
    } catch (err) {
        res.status(400).json({ code: 400, error: err.message })
        console.log(err)
    }
})

// Update a defaultCharacter
router.put("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { characterClass, type, description, image } = req.body
        if (!characterClass || !type || !description || !image) {
            res.status(400).json({ code: 400, error: "CharacterClass, type, description, and image are required" })
            return
        }
        const updatedDefaultCharacter = await DefaultCharacter.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
        })
        if (!updatedDefaultCharacter) {
            res.status(404).json({ code: 404, error: "DefaultCharacter not found" })
            return
        }

        res.json(updatedDefaultCharacter)
    } catch (err) {
        res.status(400).json({ code: 400, error: err.message })
        console.log(err)
    }
})

// Delete a defaultCharacter
router.delete("/:_id", async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedDefaultCharacter = await DefaultCharacter.findByIdAndDelete(req.params._id)
        if (!deletedDefaultCharacter) {
            res.status(404).json({ code: 404, error: `DefaultCharacter with id ${req.params._id} not found` })
            return
        }
        res.json({ message: "DefaultCharacter deleted successfully" })
    } catch (err) {
        res.status(500).json({ code: 500, error: err.message })
        console.log(err)
    }
})

export default router

import { Router, Response, RequestHandler } from "express"
import { authMiddleware, AuthRequest } from "../middleware/auth.js"
import { Character } from "../types/character.js"
import CharacterModel from "../models/character.js"
import DefaultCharacterModel from "../models/defaultCharacter.js"

const router = Router()

/**
 * 創建新的角色 (POST /characters)
 * 需身分驗證 => authMiddleware
 */
router.post(
    "/",
    authMiddleware as RequestHandler,
    async (req: AuthRequest & { body: Character }, res: Response): Promise<void> => {
        try {
            const userId = req.user.userId
            const { characterClass, name, ...rest } = req.body satisfies Character

            let newCharacterData: Character = { owner: userId, name: name, characterClass: characterClass, ...rest }

            const defChar = await DefaultCharacterModel.findOne({ characterClass: characterClass })
            if (!defChar) {
                res.status(404).json({ error: "Default character not found" })
                return
            }

            newCharacterData = {
                owner: userId,
                name: name || defChar.name,
                level: defChar.level,
                experience: defChar.experience,
                hp: defChar.hp,
                mp: defChar.mp,
                attack: defChar.attack,
                defense: defChar.defense,
                gold: defChar.gold,
                inventory: defChar.inventory,
                characterClass: characterClass,
                description: defChar.description,
                image: defChar.image,
            }

            // 建立並儲存
            const character = new CharacterModel(newCharacterData)
            await character.save()
            res.status(201).json(character)
        } catch (err) {
            console.error("Error creating character:", err)
            res.status(500).json({ error: "Failed to create character" })
            return
        }
    },
)

export default router

import mongoose from "mongoose"
import dotenv from "dotenv"
import CharacterModel from "../models/Character.js"
import { Character } from "../types/Character.js"
import url from "url"

dotenv.config()

// 1. Define default data
const defaultCharacters: Character[] = [
    {
        id: 1,
        name: "Warrior",
        description: "Strong and brave fighter.",
        image: "/character/warrior.webp",
    },
    {
        id: 2,
        name: "Mage",
        description: "Master of magical spells.",
        image: "/character/mage.webp",
    },
    {
        id: 3,
        name: "Archer",
        description: "Precise and quick with the bow.",
        image: "/character/archer.webp",
    },
    {
        id: 4,
        name: "Paladin",
        description: "Righteous defender clad in gleaming armor.",
        image: "/character/paladin.webp",
    },
    {
        id: 5,
        name: "Assassin",
        description: "Stealthy rogue, deadly with concealed blades.",
        image: "/character/assassin.webp",
    },
    {
        id: 6,
        name: "Bard",
        description: "Wielder of music and magic for support and disruption.",
        image: "/character/bard.webp",
    },
    {
        id: 7,
        name: "Druid",
        description: "Guardian of nature with shapeshifting powers.",
        image: "/character/druid.webp",
    },
    {
        id: 8,
        name: "Necromancer",
        description: "Dark conjurer who commands undead forces.",
        image: "/character/necromancer.webp",
    },
    {
        id: 9,
        name: "Monk",
        description: "Disciplined martial artist balanced in mind and body.",
        image: "/character/monk.webp",
    },
    {
        id: 10,
        name: "Samurai",
        description: "Swift swordsman guided by honor and tradition.",
        image: "/character/samurai.webp",
    },
    {
        id: 11,
        name: "Beastmaster",
        description: "Tamer of wild creatures, forging strong bonds with animals.",
        image: "/character/beastmaster.webp",
    },
]

// 2. Seed function
async function seedCharacters() {
    try {
        // Connect to MongoDB
        const MONGO_URI = process.env.MONGO_URI
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected...")

        // Optional: Clear existing records
        // await CharacterModel.deleteMany({})
        // console.log("Cleared existing data...")

        // Insert default characters
        const created = await CharacterModel.insertMany(defaultCharacters)
        console.log("Inserted default characters:", created)

        // Close the connection
        await mongoose.connection.close()
        console.log("MongoDB connection closed.")
    } catch (error) {
        console.error("Error seeding characters:", error)
        process.exit(1)
    }
}

// 3. Execute the seed function if the file is run directly
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    seedCharacters()
}

export { seedCharacters }

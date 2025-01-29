import mongoose from "mongoose"
import dotenv from "dotenv"
import CharacterModel from "../models/Character.js"
import { defaultCharacters } from "../types/Character.js"
import url from "url"

dotenv.config()

async function seedCharacters() {
    try {
        // Connect to MongoDB
        const MONGO_URI = process.env.MONGO_URI
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected...")

        // Drop the existing index on id field
        // await mongoose.connection
        //     .collection("characters")
        //     .dropIndex("id_1")
        //     .catch((err) => console.log("No index to drop, continuing...", err))
        // console.log("Dropped old index...")

        // Clear existing records
        await CharacterModel.deleteMany({})
        console.log("Cleared existing data...")

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

if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    seedCharacters()
}

export { seedCharacters }

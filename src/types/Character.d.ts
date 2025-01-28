interface Character {
    id: number
    name: string
    description: string
    image: string
}

export interface CharacterDocument extends Document, Character {}

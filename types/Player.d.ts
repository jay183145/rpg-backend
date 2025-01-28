export interface Player {
    id: string
    type: string
    name: string
    level: number
    experience: number
    hp: number
    mp: number
    attack: number
    defense: number
    gold: number
    inventory: string[]
}

// Extend Mongoose's Document and combine it with Player
export interface PlayerDocument extends Document, Player {}

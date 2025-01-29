export interface CharacterDocument extends Document, Character {}

export interface Character {
    name: string
    description: string
    image: string
}

export const defaultCharacters: Character[] = [
    {
        name: "Warrior",
        description: "Strong and brave fighter.",
        image: "/character/warrior.webp",
    },
    {
        name: "Mage",
        description: "Master of magical spells.",
        image: "/character/mage.webp",
    },
    {
        name: "Archer",
        description: "Precise and quick with the bow.",
        image: "/character/archer.webp",
    },
    {
        name: "Paladin",
        description: "Righteous defender clad in gleaming armor.",
        image: "/character/paladin.webp",
    },
    {
        name: "Assassin",
        description: "Stealthy rogue, deadly with concealed blades.",
        image: "/character/assassin.webp",
    },
    {
        name: "Bard",
        description: "Wielder of music and magic for support and disruption.",
        image: "/character/bard.webp",
    },
    {
        name: "Druid",
        description: "Guardian of nature with shapeshifting powers.",
        image: "/character/druid.webp",
    },
    {
        name: "Necromancer",
        description: "Dark conjurer who commands undead forces.",
        image: "/character/necromancer.webp",
    },
    {
        name: "Monk",
        description: "Disciplined martial artist balanced in mind and body.",
        image: "/character/monk.webp",
    },
    {
        name: "Samurai",
        description: "Swift swordsman guided by honor and tradition.",
        image: "/character/samurai.webp",
    },
    {
        name: "Beastmaster",
        description: "Tamer of wild creatures, forging strong bonds with animals.",
        image: "/character/beastmaster.webp",
    },
]

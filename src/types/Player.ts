// Extend Mongoose's Document and combine it with Player
export interface PlayerDocument extends Document, Player {}

export interface Player {
    name: string
    type: string
    level: number
    experience: number
    hp: number
    mp: number
    attack: number
    defense: number
    gold: number
    inventory: string[]
    description: string
    image: string
}

export const defaultPlayers: Player[] = [
    {
        name: "Warrior",
        type: "Warrior",
        level: 1,
        experience: 0,
        hp: 120, // 戰士血量稍高
        mp: 20, // 戰士魔力較低
        attack: 15, // 攻擊力較高
        defense: 10, // 防禦力中上
        gold: 0,
        inventory: [],
        description: "Strong and brave fighter.",
        image: "/character/warrior.webp",
    },
    {
        name: "Mage",
        type: "Mage",
        level: 1,
        experience: 0,
        hp: 80, // 法師血量較低
        mp: 120, // 魔力高
        attack: 20, // 法術攻擊強
        defense: 5,
        gold: 0,
        inventory: [],
        description: "Master of magical spells.",
        image: "/character/mage.webp",
    },
    {
        name: "Archer",
        type: "Archer",
        level: 1,
        experience: 0,
        hp: 90,
        mp: 50,
        attack: 12, // 遠程輸出中等
        defense: 5,
        gold: 0,
        inventory: [],
        description: "Precise and quick with the bow.",
        image: "/character/archer.webp",
    },
    {
        name: "Paladin",
        type: "Paladin",
        level: 1,
        experience: 0,
        hp: 130,
        mp: 40,
        attack: 15,
        defense: 15, // 兼具坦度與攻擊力
        gold: 0,
        inventory: [],
        description: "Righteous defender clad in gleaming armor.",
        image: "/character/paladin.webp",
    },
    {
        name: "Assassin",
        type: "Assassin",
        level: 1,
        experience: 0,
        hp: 90,
        mp: 50,
        attack: 18, // 爆發攻擊高
        defense: 4, // 相對脆皮
        gold: 0,
        inventory: [],
        description: "Stealthy rogue, deadly with concealed blades.",
        image: "/character/assassin.webp",
    },
    {
        name: "Bard",
        type: "Bard",
        level: 1,
        experience: 0,
        hp: 100,
        mp: 70, // 較法師少一點魔力
        attack: 10,
        defense: 5,
        gold: 0,
        inventory: [],
        description: "Wielder of music and magic for support and disruption.",
        image: "/character/bard.webp",
    },
    {
        name: "Druid",
        type: "Druid",
        level: 1,
        experience: 0,
        hp: 110,
        mp: 70,
        attack: 12,
        defense: 7,
        gold: 0,
        inventory: [],
        description: "Guardian of nature with shapeshifting powers.",
        image: "/character/druid.webp",
    },
    {
        name: "Necromancer",
        type: "Necromancer",
        level: 1,
        experience: 0,
        hp: 80,
        mp: 130, // 死靈法師的魔力很高
        attack: 20, // 法系攻擊
        defense: 5,
        gold: 0,
        inventory: [],
        description: "Dark conjurer who commands undead forces.",
        image: "/character/necromancer.webp",
    },
    {
        name: "Monk",
        type: "Monk",
        level: 1,
        experience: 0,
        hp: 100,
        mp: 60,
        attack: 14, // 以拳腳為主的攻擊力
        defense: 8,
        gold: 0,
        inventory: [],
        description: "Disciplined martial artist balanced in mind and body.",
        image: "/character/monk.webp",
    },
    {
        name: "Samurai",
        type: "Samurai",
        level: 1,
        experience: 0,
        hp: 110,
        mp: 30,
        attack: 18, // 高攻擊力、低魔力
        defense: 8,
        gold: 0,
        inventory: [],
        description: "Swift swordsman guided by honor and tradition.",
        image: "/character/samurai.webp",
    },
    {
        name: "Beastmaster",
        type: "Beastmaster",
        level: 1,
        experience: 0,
        hp: 120,
        mp: 40,
        attack: 14,
        defense: 10,
        gold: 0,
        inventory: [],
        description: "Tamer of wild creatures, forging strong bonds with animals.",
        image: "/character/beastmaster.webp",
    },
]

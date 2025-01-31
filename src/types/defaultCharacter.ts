import { Document } from "mongoose"

export interface DefaultCharacterDocument extends Document, DefaultCharacter {}

export interface DefaultCharacter {
    name: string
    level: number
    experience: number
    hp: number
    mp: number
    attack: number
    defense: number
    gold: number
    inventory: string[]
    characterClass: string
    description: string
    image: string
}

export const defaultCharacters: DefaultCharacter[] = [
    {
        name: "Warrior",
        level: 1,
        experience: 0,
        hp: 120, // 戰士血量稍高
        mp: 20, // 戰士魔力較低
        attack: 15, // 攻擊力較高
        defense: 10, // 防禦力中上
        gold: 0,
        inventory: [],
        characterClass: "Warrior",
        description: "Strong and brave fighter.",
        image: "/character/warrior.webp",
    },
    {
        name: "Mage",
        level: 1,
        experience: 0,
        hp: 80, // 法師血量較低
        mp: 120, // 魔力高
        attack: 20, // 法術攻擊強
        defense: 5,
        gold: 0,
        inventory: [],
        characterClass: "Mage",
        description: "Master of magical spells.",
        image: "/character/mage.webp",
    },
    {
        name: "Archer",
        level: 1,
        experience: 0,
        hp: 90,
        mp: 50,
        attack: 12, // 遠程輸出中等
        defense: 5,
        gold: 0,
        inventory: [],
        characterClass: "Archer",
        description: "Precise and quick with the bow.",
        image: "/character/archer.webp",
    },
    {
        name: "Paladin",
        level: 1,
        experience: 0,
        hp: 130,
        mp: 40,
        attack: 15,
        defense: 15, // 兼具坦度與攻擊力
        gold: 0,
        inventory: [],
        characterClass: "Paladin",
        description: "Righteous defender clad in gleaming armor.",
        image: "/character/paladin.webp",
    },
    {
        name: "Assassin",
        level: 1,
        experience: 0,
        hp: 90,
        mp: 50,
        attack: 18, // 爆發攻擊高
        defense: 4, // 相對脆皮
        gold: 0,
        inventory: [],
        characterClass: "Assassin",
        description: "Stealthy rogue, deadly with concealed blades.",
        image: "/character/assassin.webp",
    },
    {
        name: "Bard",
        level: 1,
        experience: 0,
        hp: 100,
        mp: 70, // 較法師少一點魔力
        attack: 10,
        defense: 5,
        gold: 0,
        inventory: [],
        characterClass: "Bard",
        description: "Wielder of music and magic for support and disruption.",
        image: "/character/bard.webp",
    },
    {
        name: "Druid",
        level: 1,
        experience: 0,
        hp: 110,
        mp: 70,
        attack: 12,
        defense: 7,
        gold: 0,
        inventory: [],
        characterClass: "Druid",
        description: "Guardian of nature with shapeshifting powers.",
        image: "/character/druid.webp",
    },
    {
        name: "Necromancer",
        level: 1,
        experience: 0,
        hp: 80,
        mp: 130, // 死靈法師的魔力很高
        attack: 20, // 法系攻擊
        defense: 5,
        gold: 0,
        inventory: [],
        characterClass: "Necromancer",
        description: "Dark conjurer who commands undead forces.",
        image: "/character/necromancer.webp",
    },
    {
        name: "Monk",
        level: 1,
        experience: 0,
        hp: 100,
        mp: 60,
        attack: 14, // 以拳腳為主的攻擊力
        defense: 8,
        gold: 0,
        inventory: [],
        characterClass: "Monk",
        description: "Disciplined martial artist balanced in mind and body.",
        image: "/character/monk.webp",
    },
    {
        name: "Samurai",
        level: 1,
        experience: 0,
        hp: 110,
        mp: 30,
        attack: 18, // 高攻擊力、低魔力
        defense: 8,
        gold: 0,
        inventory: [],
        characterClass: "Samurai",
        description: "Swift swordsman guided by honor and tradition.",
        image: "/character/samurai.webp",
    },
    {
        name: "Beastmaster",
        level: 1,
        experience: 0,
        hp: 120,
        mp: 40,
        attack: 14,
        defense: 10,
        gold: 0,
        inventory: [],
        characterClass: "Beastmaster",
        description: "Tamer of wild creatures, forging strong bonds with animals.",
        image: "/character/beastmaster.webp",
    },
]

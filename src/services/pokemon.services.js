import { db } from "../database/db.js"
import { simplifyPokemonList } from "../utils/transform.js"

export const fetchFirstGen = async () => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()

    return simplifyPokemonList(data.results)
}

export const createManyService = async (nombres) => {
    const values = nombres.map(name => `('${name}', false, false)`).join(", ")
    const result = await db.query(`INSERT INTO pokedex (nombre, capturado, base) VALUES ${values} RETURNING *`)
    return result.rows
}
import { db } from "../database/db.js"

const getAllService = async () => {
    const result = await db.query('SELECT * FROM pokedex')
    return result.rows
}

const getOneService = async (id) => {
    const result = await db.query('SELECT * FROM pokedex WHERE id = $1', [id])
    return result.rows[0] || null
}

const createService = async (nombre) => {
    const result = await db.query('INSERT INTO pokedex (nombre, capturado) VALUES ($1, false) RETURNING *', [nombre])
    return result.rows[0]
}

const toggleService = async (id) => {
    const result = await db.query('UPDATE pokedex SET capturado = NOT capturado WHERE id = $1 RETURNING *', [id])
    return result.rows[0] || null
}

const removeService = async (id) => {
    const result = await db.query('DELETE FROM pokedex WHERE id = $1 RETURNING *', [id])
    return result.rows[0] || null    
}

export default { getAllService, getOneService, createService, toggleService, removeService }
import { db } from "../database/db.js"

export const getAllService = async () => {
    const result = await db.query('SELECT * FROM pokedex ORDER BY id ASC')
    return result.rows
}

export const getOneService = async (id) => {
    const result = await db.query('SELECT * FROM pokedex WHERE id = $1', [id])
    return result.rows[0] || null
}

export const createService = async (nombre, imageUrl) => {

    console.log('createService params:', nombre, imagen)

    const result = await db.query('INSERT INTO pokedex (nombre, capturado, bas, image_url) VALUES ($1, false, false, $2) RETURNING *', [nombre, imageUrl])

    console.log('row inserted:', result.rows[0])

    return result.rows[0]
}

export const toggleService = async (id) => {
    const result = await db.query('UPDATE pokedex SET capturado = NOT capturado WHERE id = $1 RETURNING *', [id])
    return result.rows[0] || null
}

export const removeService = async (id) => {
    const result = await db.query('DELETE FROM pokedex WHERE id = $1 and base = false RETURNING *', [id])
    return result.rows[0] || null    
}

export const removeAllService = async () => {
    await db.query('TRUNCATE TABLE pokedex RESTART IDENTITY')
    return { success: true }
}
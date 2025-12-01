import { db } from "../database/db.js"

export const getImagesService = async () => {
    const [rows] = await db.query('SELECT id, nombre, imagen_url FROM pokedex ORDER BY id')
    return rows
}
import { db } from "../database/db.js"

export const getImagesService = async () => {
    const result = await db.query('SELECT id, nombre, imagen_url FROM pokedex ORDER BY id')
    return result
}
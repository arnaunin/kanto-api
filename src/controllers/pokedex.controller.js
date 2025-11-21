import { db } from '../database/db'

const getAll = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM pokedex')
        res.json(rows)
    } catch (error){
        res.status(500).json({ error: 'Error getting Pokémon'})
    }
}

export default getAll
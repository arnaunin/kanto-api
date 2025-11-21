import { db } from '../database/db.js'

const getAll = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM pokedex')
        res.json(rows)
    } catch (error){
        res.status(500).json({ error: 'Error getting pokedex'})
    }
}

const getOne = async (req, res) => {
    try {
        const { id } = req.params
        const result = await db.query('SELECT * FROM pokedex WHERE id = $1', [id])
        if (result.rows.length === 0) return res.status(404).json({ error: "Not found" })
        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: 'Error getting pokemon'})
    }
}

const create = async (req, res) => {
    try {
        const { nombre } = req.body
        if (!nombre) return res.status(400).json({ error: "Nombre required" });
        const result = await db.query('INSERT INTO pokedex (nombre, capturado) VALUES ($1, false) RETURNING *', [nombre])
        res.status(201).json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: 'Error creating pokemon'})
    }
}

const toggle =  async (req, res) => {
    try {
        const { id } = req.params
        const result = await db.query('UPDATE pokedex SET capturado = NOT capturado WHERE id = $1 RETURNING *', [id])
        if (result.rows.length === 0) return res.status(404).json({ error: "Not found" })
        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: "Error updating pokemon" })
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params
        const { rowCount } = await db.query('DELETE FROM pokedex WHERE id = $1 RETURNING *', [id])
        if (rowCount === 0) return res.status(404).json({ message: "Pokemon not found"})
        res.json({ message: "Pokemon deleted" })
    } catch (error) {
        res.status(500).json({ error: "Error removing pokemon" })
    }
}

export default { getAll, getOne, create, toggle, remove }
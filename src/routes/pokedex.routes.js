import { Router } from "express"
import { db } from '../database/db.js'
import getAll from '../controllers/pokedex.controller.js'

const router = Router()

router.get('/', getAll)

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM pokedex WHERE id = $1', [id])

    if (rows.length === 0) {
        return res.status(404).json({ message: "Pokemon not found"})
    }
    res.json(rows[0])
})

router.post('/', async (req, res) => {
    const { nombre } = req.body
    await db.query('INSERT INTO pokedex (nombre, capturado) VALUES ($1, false)', [nombre])
    res.status(201).json({ message: "Pokemon created" })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    await db.query('UPDATE pokedex SET capturado = NOT capturado WHERE id = $1', [id])
    res.json({ message: "Pokemon updated" })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { rowCount } = await db.query('DELETE FROM pokedex WHERE id = $1', [id])

    if (rowCount === 0) {
        return res.status(404).json({ message: "Pokemon not found"})
    }
    res.json({ message: "Pokemon deleted" })
})

export default router
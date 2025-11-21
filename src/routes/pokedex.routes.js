import { Router } from "express"
import { db } from '../database/db'
import getAll from '../controllers/pokedex.controller'

const router = Router()

router.get('/', getAll)

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM pokemon WHERE id = $1', [id])

    if (rows.length === 0) {
        return res.status(404).json({ message: "Pokemon not found"})
    }
    res.json(rows)
})

router.post('/', async (req, res) => {
    const data = req.body
    const result = await db.query('INSERT INTO pokemon (nombre) VALUES ($1)', [data.nombre])
    res.sendStatus(204)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    const results = await db.query('UPDATE pokemon SET capturado = NOT capturado WHERE id = $1', [id])
    res.sendStatus(204)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { rowCount } = await db.query('DELETE FROM pokemon WHERE id = $1', [id])

    if (rowCount === 0) {
        return res.status(404).json({ message: "Pokemon not found"})
    }
    res.sendStatus(204)
})

export default router
import { Router } from "express"
import { pool } from '../database/db'

const router = Router()

router.get('/', getPokemons)

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query(`SELECT * FROM pokemon-db WHERE id = ${id}`)

    if (rows.length === 0) {
        return res.status(404).json({ message: "Pokemon not found"})
    }
    res.json(rows)
})

router.post('/', async (req, res) => {
    const data = req.body
    const result = await pool.query(`INSERT INTO pokedex-db (nombre) VALUES (${data.nombre})`)
    res.sendStatus(204)
})

router.put('/', async (req, res) => {
    const { id } = req.params

    const results = await pool.query(`UPDATE pokemon-db SET capturado = NOT capturado WHERE id = ${id}`)
    res.sendStatus(204)
})

router.delete('/', async (req, res) => {
    const { id } = req.params
    const { rowCount } = await pool.query(`DELETE FROM pokemon-db WHERE id = ${id}`)

    if (rowCount === 0) {
        return res.status(404).json({ message: "Pokemon not found"})
    }
    res.sendStatus(204)
})

export default router
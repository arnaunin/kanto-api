const getAll = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM pokemon-db')
        res.json(rows)
    } catch (error){
        res.status(500).json({ error: 'Error getting Pokémon'})
    }
}

export default getAll
import { fetchFirstGen, createManyService } from "../services/pokemon.services.js"

export const getFirstGen = async (req, res) => {
    try {
        const firstGen = await fetchFirstGen()
        res.json(firstGen)
    } catch (error) {
        res.status(500).json({ error: "Error fetching Pokémon data" })
    }
}

export const createFirstGen = async (req, res) => {
    try {
        const { nombres } = req.body
        await createManyService(nombres)
        res.json({ message: "Many pokemon created"})
    } catch (error) {
        res.status(500).json({ error: "Error creating many pokemon" })
    }
}
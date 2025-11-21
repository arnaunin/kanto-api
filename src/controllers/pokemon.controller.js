import fetchFirstGen from "../services/pokemon.service.js"

const getFirstGen = async (req, res) => {
    try {
        const firstGen = await fetchFirstGen()
        res.json(firstGen)
    } catch (error) {
        res.status(500).json({ error: "Error fetching Pokémon data" })
    }
}

export default getFirstGen
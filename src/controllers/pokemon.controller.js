import fetchPokemons from "../services/pokemon.service.js"

const getPokemons = async (req, res) => {
    try {
        const pokemons = await fetchPokemons()
        res.json(pokemons)
    } catch (error) {
        res.status(500).json({ error: "Error fetching Pokémon data" })
    }
}

export default getPokemons
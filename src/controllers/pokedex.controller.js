import {
    getAllService,
    getOneService,
    createService,
    toggleService,
    removeService,
    removeAllService
} from "../services/pokedex.services.js"

export const getAll = async (req, res) => {
    try {
        const pokemons = await getAllService()
        res.json(pokemons)
    } catch (error){
        res.status(500).json({ error: 'Error getting pokedex'})
    }
}

export const getOne = async (req, res) => {
    try {
        const { id } = req.params
        const pokemon = await getOneService(id)
        if (!pokemon) return res.status(404).json({ error: "Not found" })
        res.json(pokemon)
    } catch (error) {
        res.status(500).json({ error: 'Error getting pokemon'})
    }
}

export const create = async (req, res) => {
    try {
        const { nombre } = req.body
        if (!nombre) return res.status(400).json({ error: "Nombre required" });
        const pokemon = await createService(nombre)
        res.json({
            message: "Pokemon created",
            pokemon: pokemon
        })
    } catch (error) {
        res.status(500).json({ error: 'Error creating pokemon'})
    }
}

export const toggle =  async (req, res) => {
    try {
        const { id } = req.params
        const updated = await toggleService(id)
        if (!updated) return res.status(404).json({ error: "Pokemon not found" })
        res.json({
            message: "Pokemon updated",
            pokemon: updated
        })
    } catch (error) {
        res.status(500).json({ error: "Error updating pokemon" })
    }
}

export const remove = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await removeService(id)
        if (!deleted) return res.status(404).json({ error: "Pokemon not found"})
        res.json({
            message: "Pokemon deleted",
            pokemon: deleted
        })
    } catch (error) {
        res.status(500).json({ error: "Error removing pokemon" })
    }
}

export const removeAll = async (req, res) => {
    try {
        await removeAllService()
        res.json({ message: "All pokemon removed" })
    } catch (error) {
        res.status(500).json({ error: "Error removing all pokemon" })
    }
}
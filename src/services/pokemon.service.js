import simplifyPokemonList from "../utils/transform.js"

const fetchPokemons = async () => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()

    return simplifyPokemonList(data.results)
}

export default fetchPokemons
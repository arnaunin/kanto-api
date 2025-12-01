import { db } from "../src/database/db.js"

(async () => {
    try {
        for (let id = 1; id <= 151; id++) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const pokemon = await res.json()

            const imageUrl = pokemon.sprites.other['official-artwork'].front_default

            await db.query('UPDATE pokedex SET image_url = $1 WHERE id = $2', [imageUrl, id])

            console.log(`Pokémon ${id} actualizado con imagen: ${imageUrl}`)

        }
    } catch (error) {
        console.error("Error poblando las imágenes:", error)
    } finally {
        db.end()
    }
})()
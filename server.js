import express from "express"
import cors from "cors"
import pokemonRoutes from "./src/routes/pokemon.routes.js"
import pokedexRoutes from "./src/routes/pokedex.routes.js"

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use("/pokemon", pokemonRoutes)
app.use("/pokedex", pokedexRoutes)

app.get("/", (req, res) => {
  res.send("Kanto API is running");
})

export default app
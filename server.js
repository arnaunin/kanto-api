import express from "express"
import cors from "cors"
import pokemonRoutes from "./src/routes/pokemon.routes.js"

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use("/pokemon", pokemonRoutes)

export default app
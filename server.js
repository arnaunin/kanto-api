import express from "express"
import cors from "cors"
import pokemonRoutes from "./src/routes/pokemon.routes.js"

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use("/pokemon", pokemonRoutes)

app.get("/", (req, res) => {
  res.send("Kanto API is running");
})

export default app
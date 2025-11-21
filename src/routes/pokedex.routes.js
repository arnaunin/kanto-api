import { Router } from "express"
import pokedexController from "../controllers/pokedex.controller.js"

const router = Router()

router.get('/', pokedexController.getAll)
router.get('/:id', pokedexController.getOne)
router.post('/', pokedexController.create)
router.put('/:id', pokedexController.toggle)
router.delete('/:id', pokedexController.remove)

export default router
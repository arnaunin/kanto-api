import { Router } from "express"
import {
    getAll,
    getOne,
    create,
    toggle,
    remove
} from "../controllers/pokedex.controller.js"

const router = Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', toggle)
router.delete('/:id', remove)

export default router
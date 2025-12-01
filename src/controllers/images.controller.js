import { getImagesService } from '../services/images.services.js'

export const getImages = async (req, res) => {
    try {
        const images = await getImagesService()
        res.json(images)
    } catch (error) {
        res.status(500).json({ error: 'Error getting images'})
    }
}
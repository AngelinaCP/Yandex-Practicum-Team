import { Router } from 'express'
import { apiRouter } from '../api/router'

export const router = Router()

router.use(apiRouter)

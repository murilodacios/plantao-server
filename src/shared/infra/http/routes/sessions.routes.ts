import Router from 'express'
import { AuthenticateUserController } from '../../../../modules/operators/useCases/authenticateUser/authenticateUserController'

const sessionsRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

sessionsRoutes.post('/', authenticateUserController.handle)

export { sessionsRoutes } 
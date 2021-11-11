import Router from 'express'
import { operatorRoutes } from './operators.routes'
import { sessionsRoutes } from './sessions.routes'
import { taxPayersRoutes } from './taxpayers.routes'
import { meetingsRoutes } from './meetings.routes'

const routes = Router()

routes.use('/operators', operatorRoutes)
routes.use('/taxpayers', taxPayersRoutes)
routes.use('/meetings', meetingsRoutes)
routes.use('/sessions', sessionsRoutes)

export { routes }
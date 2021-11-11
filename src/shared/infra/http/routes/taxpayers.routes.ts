import Router from 'express'
import { CreateTaxPayerController } from '../../../../modules/taxpayers/useCases/createTaxPayer/CreateTaxPayerController'

const taxPayersRoutes = Router()

const createTaxPayerController = new CreateTaxPayerController()

taxPayersRoutes.post("/", createTaxPayerController.handle)

export { taxPayersRoutes }
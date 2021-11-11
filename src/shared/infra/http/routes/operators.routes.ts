import Router from 'express'
import { AlterAvailableController } from '../../../../modules/operators/useCases/alterAvailable/AlterAvailableController'
import { CreateOperatorController } from '../../../../modules/operators/useCases/createOperator/CreateOperatorController'
import { ListOneOperatorController } from '../../../../modules/operators/useCases/listOneOperator/ListOneOperatorController'
import { ListOperatorsController } from '../../../../modules/operators/useCases/listOperators/listOperatorsController'
import { SendMeetingToTaxPayerController } from '../../../../modules/operators/useCases/sendMeetingToTaxPayer/SendMeetingToTaxPayerController'

const operatorRoutes = Router()

const createOperatorController = new CreateOperatorController()
const sendMeetingToTaxPayerController = new SendMeetingToTaxPayerController()
const listOperatorsController = new ListOperatorsController()
const listOneOperatorController = new ListOneOperatorController()
const alterAvailableController = new AlterAvailableController()

operatorRoutes.get("/", listOperatorsController.handle)
operatorRoutes.get("/:id", listOneOperatorController.handle)
operatorRoutes.put("/available/:id", alterAvailableController.handle)
operatorRoutes.post('/', createOperatorController.handle)
operatorRoutes.post('/send-meeting', sendMeetingToTaxPayerController.handle)

export { operatorRoutes } 
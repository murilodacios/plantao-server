import Router from 'express'
import { CreateMeetingController } from '../../../../modules/meetings/useCases/createMeeting/CreateMeetingController'
import { EndMeetingController } from '../../../../modules/meetings/useCases/endMeeting/EndMeetingController'
import { ListMeetingsByOperatorController } from '../../../../modules/meetings/useCases/listMeetingsByOperator/ListMeetingsByOperatorController'
import { ListOneMeetingController } from '../../../../modules/meetings/useCases/listOneMeeting/ListOneMeetingController'

const meetingsRoutes = Router()

const createMeetingController = new CreateMeetingController()

const listMeetingsByOperatorController = new ListMeetingsByOperatorController()
const endMeetingController = new EndMeetingController()
const listOneMeetingController = new ListOneMeetingController()

meetingsRoutes.post('/', createMeetingController.handle)
meetingsRoutes.get("/operators/:id", listMeetingsByOperatorController.handle)
meetingsRoutes.put("/end", endMeetingController.handle)
meetingsRoutes.get('/:id', listOneMeetingController.handle)

export { meetingsRoutes } 
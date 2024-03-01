import { logger } from '../../../helpers/logger'
import { ApiHandler } from '../../../types'

const path: ApiHandler['path'] = '/getSettings'

const handler: ApiHandler['handler'] = (req, res) => {
	logger.info('getSettings')
	const deemix = req.app.get('deemix')
	res.send(deemix.getSettings())
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler

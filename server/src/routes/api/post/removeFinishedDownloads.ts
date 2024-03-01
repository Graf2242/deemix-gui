import { logger } from '../../../helpers/logger'
import { ApiHandler } from '../../../types'

const path = '/removeFinishedDownloads'

const handler: ApiHandler['handler'] = (req, res) => {
	logger.info('removeFinishedDownloads')
	const deemix = req.app.get('deemix')
	deemix.clearCompletedDownloads()
	res.send({ result: true })
}

const apiHandler = { path, handler }

export default apiHandler

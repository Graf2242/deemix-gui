import { logger } from '../../../helpers/logger'
import { ApiHandler } from '../../../types'

const path = '/cancelAllDownloads'

const handler: ApiHandler['handler'] = (req, res) => {
	logger.info('cancelAllDownloads')
	const deemix = req.app.get('deemix')
	deemix.cancelAllDownloads()
	res.send({ result: true })
}

const apiHandler = { path, handler }

export default apiHandler

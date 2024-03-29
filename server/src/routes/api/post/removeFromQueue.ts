import { logger } from '../../../helpers/logger'
import { ApiHandler } from '../../../types'

const path = '/removeFromQueue'

const handler: ApiHandler['handler'] = (req, res) => {
	logger.info('removeFromQueue')
	const deemix = req.app.get('deemix')
	const { uuid } = req.query
	if (uuid) {
		deemix.cancelDownload(uuid)
		res.send({ result: true })
	} else {
		res.send({ result: false })
	}
}

const apiHandler = { path, handler }

export default apiHandler

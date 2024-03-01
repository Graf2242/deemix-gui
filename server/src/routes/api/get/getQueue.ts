// import { Deezer } from 'deezer-js'
import { ApiHandler } from '../../../types'
import { logger } from '../../../helpers/logger'

const path: ApiHandler['path'] = '/getQueue'

// let homeCache: any

const handler: ApiHandler['handler'] = (req, res) => {
	logger.info('getQueue')
	const deemix = req.app.get('deemix')
	const result: any = deemix.getQueue()
	res.send(result)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler

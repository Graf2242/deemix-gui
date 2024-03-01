import { logger } from '../../../helpers/logger'
import { ApiHandler } from '../../../types'

const path: ApiHandler['path'] = '/checkForUpdates'

const handler: ApiHandler['handler'] = async (req, res) => {
	logger.info('checkForUpdates')
	const deemix = req.app.get('deemix')
	const latestCommit = await deemix.getLatestVersion()
	res.send({
		latestCommit,
		updateAvailable: deemix.isUpdateAvailable()
	})
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler

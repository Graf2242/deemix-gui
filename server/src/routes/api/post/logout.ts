// @ts-expect-error
import { Deezer } from 'deezer-js'
import { ApiHandler } from '../../../types'
import { sessionDZ } from '../../../app'
import { resetLoginCredentials } from '../../../helpers/loginStorage'
import { logger } from '../../../helpers/logger'

const path: ApiHandler['path'] = '/logout'

const handler: ApiHandler['handler'] = (req, res) => {
	logger.info('logout')
	sessionDZ[req.session.id] = new Deezer()
	res.send({ logged_out: true })
	if (req.app.get('isSingleUser')) resetLoginCredentials()
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler

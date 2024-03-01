import { ApiHandler } from '../../../types'
import { getAccessToken, getArlFromAccessToken } from '../../../app'
import { saveLoginCredentials } from '../../../helpers/loginStorage'
import { logger } from '../../../helpers/logger'

const path = '/loginEmail'

const handler: ApiHandler['handler'] = async (req, res) => {
	logger.info('loginEmail')
	const isSingleUser = req.app.get('isSingleUser')
	const { email, password } = req.body
	let accessToken = req.body.accessToken

	if (!accessToken) {
		accessToken = await getAccessToken(email, password)
		if (accessToken === 'undefined') accessToken = undefined
	}
	let arl
	if (accessToken) arl = await getArlFromAccessToken(accessToken)

	if (isSingleUser && accessToken)
		saveLoginCredentials({
			accessToken,
			arl: arl || null
		})

	res.send({ accessToken, arl })
}

const apiHandler = { path, handler }

export default apiHandler

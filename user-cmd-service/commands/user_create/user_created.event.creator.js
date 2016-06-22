const { USER_CREATED } = require('../event_types');
const uuid = require('node-uuid');

function userCreated({ role, tenantID, auth0ID, personID, companyIdentifier, email }) {
	console.log('EVENT CREATOR:', { role, tenantID, auth0ID, personID, companyIdentifier, email });
	const _id = uuid.v4();

	return {
		type: USER_CREATED,
		payload: { _id, role, tenantID, auth0ID, personID, companyIdentifier, email }
	};
}

module.exports = userCreated;

const { TENANT_CREATED } = require('../event_types');
const log = require('../../log');
const uuid = require('node-uuid');

function tenantCreated({ name, address, contact }) {
	log.info(TENANT_CREATED, ' : ', { name, address, contact });
	const _id = uuid.v4();

	return {
		type: TENANT_CREATED,
		payload: { _id, name, address, contact }
	};
}

module.exports = tenantCreated;

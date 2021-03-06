const {
	TENANT_CREATE,
	TENANT_EMPLOYEE_DATA_IMPORT
} = require('./command_types');
const {
	INVALID_COMMAND
} = require('../error_types');

const tenantCreateCommandHandler = require('./tenant_create');
const tenantEmployeeDataImportCommandHandler = require('./tenant_employee_data_import');

function commandHandler(command) {
	const { payload } = command;

	switch (command.type) {
		case TENANT_CREATE:
			return tenantCreateCommandHandler(payload);
		case TENANT_EMPLOYEE_DATA_IMPORT:
			return tenantEmployeeDataImportCommandHandler(payload);
		default:
			throw { type: INVALID_COMMAND };
	}
}

module.exports = commandHandler;

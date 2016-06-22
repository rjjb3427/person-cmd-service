const store = require('../../store/store');
const { unique, required, email, uuid, minLength, integer, createValidator } = require('validations');
const { VALIDATION_ERROR } = require('../../errorTypes');

const validatePerson = createValidator({
	_id: [required, unique, uuid],
	first_name: [required, minLength(1)],
	last_name: [required, minLength(1)],
	phone: [required, integer],
	carrier: [minLength(1)],
	email: [required, email]
});

function validatePersonCreateCommand(payload) {
	return new Promise((resolve, reject) => {
		const { personAggregate } = store.getState();
		const person = payload;

		const errors = validatePerson(person, null, personAggregate);
		const isErrors = Object.keys(errors).length;
		
		if(isErrors) {
			return reject({ type: VALIDATION_ERROR, errors });
		}
		
		return resolve(payload);
	});
}

module.exports = validatePersonCreateCommand;
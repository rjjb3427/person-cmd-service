const _ = require('lodash');
const {
	PERSON_CREATED,
	PERSON_FIRST_NAME_CHANGED,
	PERSON_LAST_NAME_CHANGED,
	PERSON_EMAIL_CHANGED,
	PERSON_PHONE_CHANGED,
	PERSON_CARRIER_CHANGED
} = require('../../event_types');

function reducer(persons = [], event) {
	switch(event.type) {
		case PERSON_CREATED:
			return personCreated(persons, event.payload);
		case PERSON_FIRST_NAME_CHANGED:
			return personFirstNameChanged(persons, event.payload);
		case PERSON_LAST_NAME_CHANGED:
			return personLastNameChanged(persons, event.payload);
		case PERSON_EMAIL_CHANGED:
			return personEmailChanged(persons, event.payload);
		case PERSON_PHONE_CHANGED:
			return personPhoneChanged(persons, event.payload);
		case PERSON_CARRIER_CHANGED:
			return personCarrierChanged(persons, event.payload);
		default:
			return persons;
	}
}

function personCreated(persons, payload) {
	return [...persons, payload];
}

function personFirstNameChanged(persons, payload) {
	const personIndex = _.findIndex(persons, person =>
		person._id === payload._id
	);
	const modifiedPerson = Object.assign({}, persons[personIndex], {
		 firstName: payload.firstName
	});
	return [
		...persons.slice(0, personIndex),
		modifiedPerson,
		...persons.slice(personIndex + 1)
	];
}

function personLastNameChanged(persons, payload) {
	const personIndex = _.findIndex(persons, person =>
		person._id === payload._id
	);
	const modifiedPerson = Object.assign({}, persons[personIndex], {
		 lastName: payload.lastName
	});
	return [
		...persons.slice(0, personIndex),
		modifiedPerson,
		...persons.slice(personIndex + 1)
	];
}

function personEmailChanged(persons, payload) {
	const personIndex = _.findIndex(persons, person =>
		person._id === payload._id
	);
	const modifiedPerson = Object.assign({}, persons[personIndex], {
		 email: payload.email
	});
	return [
		...persons.slice(0, personIndex),
		modifiedPerson,
		...persons.slice(personIndex + 1)
	];
}

function personPhoneChanged(persons, payload) {
	const personIndex = _.findIndex(persons, person =>
		person._id === payload._id
	);
	const modifiedPerson = Object.assign({}, persons[personIndex], {
		 phone: payload.phone
	});
	return [
		...persons.slice(0, personIndex),
		modifiedPerson,
		...persons.slice(personIndex + 1)
	];
}

function personCarrierChanged(persons, payload) {
	const personIndex = _.findIndex(persons, person =>
		person._id === payload._id
	);
	const modifiedPerson = Object.assign({}, persons[personIndex], {
		 carrier: payload.carrier
	});
	return [
		...persons.slice(0, personIndex),
		modifiedPerson,
		...persons.slice(personIndex + 1)
	];
}

module.exports = reducer;

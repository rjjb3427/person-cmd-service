const validateCommand = require('./point_increment.cmd.validator');
const createEvent = require('./point_incremented.event.creator');
const dispatchEvent = require('../../common/dispatch_event.chainable');
const persistEvent = require('../../common/persist_event.chainable');
const publishEvent = require('../../common/publish_event.chainable');
const log = require('../../log');

function pointIncrementCommandHandler(payload) {
	return validateCommand(payload)
		.then(createEvent)
		.then(dispatchEvent)
		.then(persistEvent)
		.then(publishEvent)
		.catch(function(err) {
			log.error('💥 ', err);
			throw err;
		});
}

module.exports = pointIncrementCommandHandler;

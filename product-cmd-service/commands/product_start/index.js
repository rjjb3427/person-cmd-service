const validateCommand = require('./product_start.cmd.validator.js');
const createEvent = require('./product_started.event.creator.js');
const dispatchEvent = require('../../common/dispatch_event.chainable');
const persistEvent = require('../../common/persist_event.chainable');
const publishEvent = require('../../common/publish_event.chainable');

function productStartCommandHandler(payload) {
	console.log('Handling PRODUCT_START command');

	return validateCommand(payload)
		.then(createEvent)
		.then(dispatchEvent)
		.then(persistEvent)
		.then(publishEvent)
		.catch(function(err) {
			console.log('Error: Need to handle errors better here ', err);
		});
}

module.exports = productStartCommandHandler;
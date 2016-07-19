const {
	CONTENT_CREATED,
	CONTENT_DELETED
} = require('../../commands/event_types');
const log = require('../../log');

function reducer(contents = [], action ) {
	log.debug('IN REDUCER');

	switch(action.type) {
		case CONTENT_CREATED:
			return contentCreated(contents, action.payload);
		case CONTENT_DELETED:
			return contentDeleted(contents, action.payload);
	}
	return contents;
}

function contentCreated(contents, payload) {
	console.log('contents', contents);
	console.log('payload', payload);
	return [...contents, payload];
}

function contentDeleted(contents, payload) {
	var contentIndex = _.findIndex(contents, function(i) {
		return i._id === payload._id;
	});
	const newContent = Object.assign({}, contents[contentIndex], {
		 isDeleted: true
	});
	return [
		...contents.slice(0, contentIndex),
		newContent,
		...contents.slice(contentIndex + 1)
	];
}

module.exports = reducer;

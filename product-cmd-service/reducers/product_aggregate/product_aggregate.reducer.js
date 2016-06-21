const _ = require('lodash');
const {
	PRODUCT_COMPLETED,
	PRODUCT_IMPROVED,
	PRODUCT_STARTED
} = require('../../commands/event_types');

//const initialState = [
//	{
//		_id: "1",
//		status: "started",
//		improvements: 0,
//		proposal_id: "3"
//	},
//	{
//		_id: "2",
//		status: "in progress",
//		improvements: 1,
//		proposal_id: "1"
//	},
//	{
//		_id: "3",
//		status: "completed",
//		improvements: 4,
//		proposal_id: "2"
//	}
//];

function reducer(products = [], action ) {
	switch(action.type) {
		case PRODUCT_STARTED:
			return productStarted(products, action);
		case PRODUCT_IMPROVED:
			return productImproved(products, action);
		case PRODUCT_COMPLETED:
			return productCompleted(products, action);
	}
	return products;
}

function productStarted(products, action) {
	return [...products, action.payload];
}

function productImproved(products, action) {
	const { _id } = action.payload;
	const index = _.findIndex(products, { _id });
	const product = products[index];

	const mutations = {
		status: 'in progress',
		improvements: product.improvements + 1
	};

	const improvedProduct = Object.assign({}, product, mutations);

	return [
		...products.slice(0, index),
		improvedProduct,
		...products.slice(index + 1)
	];
}

function productCompleted(products, action) {
	const { _id } = action.payload;
	const product = _.find(products, { _id });
	const index = _.findIndex(products, { _id });

	const mutations = {
		status: 'completed'
	};

	const completedProduct = Object.assign({}, product, mutations);

	return [
		...products.slice(0, index),
		completedProduct,
		...products.slice(index + 1)
	];
}

module.exports = reducer;
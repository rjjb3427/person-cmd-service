const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require('graphql');

const TenantContact = new GraphQLObjectType({
  name: 'TenantContact',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of the contact for the tenant'
    },
    email: {
      type: GraphQLString,
      description: 'Email of the contact for the tenant'
    },
    phone: {
      type: GraphQLFloat,
      description: 'Phone number of the contact for the tenant'
    }
  })
});

module.exports = TenantContact;

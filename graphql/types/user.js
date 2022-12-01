const { GraphQLString, GraphQLObjectType } = require("graphql");
// const eventTypeFile = require('./event')

const UserType = new GraphQLObjectType({
  name: "User",
  description: "This represents a User",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (user) => user.id,
    },
    name: {
      type: GraphQLString,
      resolve: (user) => user.name,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    phone: {
      type: GraphQLString,
      resolve: (user) => user.phone,
    },
    privilege: {
      type: GraphQLString,
      resolve: (user) => user.privilege,
    },
    // createdEvents: {
    //   type: [eventTypeFile.EventType],
    //   resolve: (user) => user.createdEvents,
    // },
    // registeredEvents: {
    //   type: [eventTypeFile.EventType],
    //   resolve: (user) => user.createdEvents,
    // },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user) => user.updatedAt,
    },
  }),
});

module.exports = { UserType };

const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models')

const resolvers = {
  Query: {
    Users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('savedBooks')
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('savedBooks')
    }    
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials')
      }

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Credentials')
      }
    }
  }

}
  
  module.exports = resolvers;
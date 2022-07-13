const { gql } = require("apollo-server");

const typeDefs = gql`
  type AdminType {
    id: ID
    email: String!
    password: String!
  }
  type AdminAuthType {
    token: String!
    tokenExpiration: Int!
    admin: AdminType
  }
  type VerifyType {
    admin: AdminType
  }
  type Query {
    getVerify: VerifyType
  }
  type Mutation {
    loginAdmin(email: String!, password: String!): AdminAuthType
  }
`;
module.exports = { typeDefs };

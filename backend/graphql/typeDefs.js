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
    # addAdmin(
    #   first_name: String!
    #   last_name: String!
    #   email: String!
    #   password: String!
    # ): AdminType
    loginAdmin(email: String!, password: String!): AdminAuthType
  }
`;
module.exports = { typeDefs };

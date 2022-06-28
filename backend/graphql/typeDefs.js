const { gql } = require("apollo-server");

const typeDefs = gql`
  type AdmenType {
    id: ID
    email: String!
    password: String!
  }
  type AdmenAuthType {
    token: String!
    tokenExpiration: Int!
    admen: AdmenType
  }
  type VerifyType {
    admen: AdmenType
  }
  type Query {
    getVerify: VerifyType
  }
  type Mutation {
    loginAdmen(email: String!, password: String!): AdmenAuthType
  }
`;
module.exports = { typeDefs };

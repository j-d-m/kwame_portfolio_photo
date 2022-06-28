import { gql } from "@apollo/client";

export const ADMIN_LOGIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginAdmen(email: $email, password: $password) {
      token
      tokenExpiration
      user {
        email
        id
      }
    }
  }
`;

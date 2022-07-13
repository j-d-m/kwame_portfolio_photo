import { gql } from "@apollo/client";

export const ADMIN_LOGIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      token
      tokenExpiration
      admin {
        id
        email
        password
      }
    }
  }
`;

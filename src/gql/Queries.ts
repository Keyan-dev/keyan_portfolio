import { gql } from "@apollo/client";
export const PING=gql`
query Ping {
  ping {
    message
    statusCode
  }
}
`;
export const getCodeLabsData=gql`
  query getCodeLabs($userId:ID!){
    user(id: $userId) {
    id
    codelabs {
      description,
      id
    }
  }
  }
`
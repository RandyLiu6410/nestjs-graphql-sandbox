import { User } from "../types/User";

const ENDPOINT = "http://localhost:8000/graphql";

export const getUsers = async (): Promise<Array<User>> => {
  const query = `
    query {
        users {
        id
        firstName
        lastName
        fullName
        email
        phone
        comments {
            id
            content
        }
        createdAt
        updatedAt
        }
    }
    `;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return await res.json();
};

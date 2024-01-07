import { Comment, CreateCommentInput } from "../types/Comment";

const ENDPOINT = "http://localhost:8000/graphql";

export const getComments = async (): Promise<Array<Comment>> => {
  const query = `
    query comments {
        comments {
        id
        creatorId
        content
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

export const addComment = async (value: CreateCommentInput) => {
  const mutation = `
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      creatorId
      content
    }
  }
`;

  const variables = {
    createCommentInput: value,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  return await res.json();
};

import { Comment } from "./Comment";

export type User = {
  id?: number;

  firstName?: string;

  lastName?: string;

  fullName?: string;

  phone?: string;

  email?: string;

  createdAt?: string;

  updatedAt?: string;

  comments?: Array<Comment>;
};

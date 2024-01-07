export type Comment = {
  id?: number;

  creatorId?: number;

  content?: string;

  createdAt?: string;

  updatedAt?: string;
};

export type CreateCommentInput = {
  creatorId: number;

  content: string;
};

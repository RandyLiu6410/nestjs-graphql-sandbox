import { memo } from "react";
import data from "../../../data/comments";
import { User } from "../../../types/User";
import CommentItem from "../CommentItem";
import styles from "./index.module.css";

interface CommentListProps {
  users: Array<User>;
}

const CommentList = memo<CommentListProps>(({ users }) => {
  return (
    <div className={styles.CommentList__wrapper}>
      {data.map((comment) =>
        !comment.id ? null : users.find((user) => user.id === comment.id) ? (
          <CommentItem
            user={users.find((user) => user.id === comment.id)!}
            comment={comment}
          />
        ) : null
      )}
    </div>
  );
});

export default CommentList;

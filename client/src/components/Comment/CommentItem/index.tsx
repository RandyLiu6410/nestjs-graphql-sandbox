import { memo } from "react";
import { Comment } from "../../../types/Comment";
import { User } from "../../../types/User";
import { Avatar, Col, Row, Space, Typography } from "antd";
import styles from "./index.module.css";

interface CommentItemProps {
  user: User;
  comment: Comment;
}

const CommentItem = memo<CommentItemProps>(({ user, comment }) => {
  return (
    <Row className={styles.CommentItem__wrapper}>
      <Col className={styles.CommentItem__avatarWrapper} span={4}>
        <Space direction="vertical">
          <Avatar size={40}>{user.firstName?.[0]}</Avatar>
          <Typography>{user.fullName}</Typography>
        </Space>
      </Col>
      <Col className={styles.CommentItem__commentWrapper} span={20}>
        <Typography>{comment.content}</Typography>
      </Col>
    </Row>
  );
});

export default CommentItem;

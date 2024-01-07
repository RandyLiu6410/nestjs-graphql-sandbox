import { memo, useState } from "react";
import styles from "./index.module.css";
import { Button, Input } from "antd";

interface CommentSenderProps {
  onSubmit?: (value: string) => void;
}

const CommentSender = memo<CommentSenderProps>(({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onSubmitClick = () => {
    onSubmit?.(value);
    setValue("");
  };

  return (
    <div className={styles.CommentSender__wrapper}>
      <Input.TextArea
        rows={3}
        className={styles.CommentSender__input}
        placeholder="請輸入..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={onSubmitClick}>傳送</Button>
    </div>
  );
});

export default CommentSender;

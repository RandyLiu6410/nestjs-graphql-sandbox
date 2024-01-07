import { memo } from "react";
import { User } from "../../types/User";
import data from "../../data/users";
import { Avatar, Space, Tooltip, Typography } from "antd";
import styles from "./index.module.css";

interface UserSelectorProps {
  onSelect?: (user: User) => void;
}

const UserSelector = memo<UserSelectorProps>(({ onSelect }) => {

  return (
    <Space
      className={styles.UserSelector__wrapper}
      direction="vertical"
      align="center"
    >
      <Typography>請選擇用戶</Typography>
      <Space align="center">
        {data.map((user) => (
          <Tooltip
            title={user.fullName}
            placement="bottom"
          >
            <Avatar
              className={styles.UserSelector__avatar}
              size={40}
              onClick={() => onSelect?.(user)}
            >
              {user.firstName?.[0]}
            </Avatar>
          </Tooltip>
        ))}
      </Space>
    </Space>
  );
});

export default UserSelector;

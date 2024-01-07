import React, { useState } from "react";
import { ConfigProvider, Layout, Space, theme } from "antd";
import styles from "./App.module.css";
import { User } from "./types/User";
import UserSelector from "./components/UserSelector";
import CommentList from "./components/Comment/CommentList";
import users from "./data/users";
import CommentSender from "./components/Comment/CommentSender";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User>();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout className={styles.layout__root}>
        <Layout.Content className={styles.layout__content}>
          {currentUser ? (
            <Space direction="vertical" size="large">
              <CommentList users={users} />
              <CommentSender />
            </Space>
          ) : (
            <UserSelector onSelect={setCurrentUser} />
          )}
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;

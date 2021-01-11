import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from './UserInfo';
import styles from './RightSideBar.module.scss';

const RightSideBar = () => {
  const { selectedUser } = useSelector((store) => store.users);
  const isNotEmpty = Object.keys(selectedUser).length > 0;

  return (
    <div className={styles.section}>
      {isNotEmpty && <UserInfo user={selectedUser} />}
      {!isNotEmpty && (
        <div className={styles.isEmpty}>Пользователь не выбран</div>
      )}
    </div>
  );
};

export default RightSideBar;

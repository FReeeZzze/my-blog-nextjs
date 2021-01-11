import React from 'react';
import { object } from 'prop-types';
import { useRouter } from 'next/router';
import ViewPostsButton from './ViewPostsButton';
import styles from './UserInfo.module.scss';

const UserInfo = ({ user }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`posts/${user.id}`);
  };

  return (
    <>
      <div className={styles.head}>
        <h3>{user.name}</h3>
        <span>{user.email}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.address}>
          <span>
            <b>Город:</b> {user.address.city}
          </span>
          <span>
            <b>Улица:</b> {user.address.street}
          </span>
          <span>
            <b>Место:</b> {user.address.suite}
          </span>
        </div>
        <div className={styles.other}>
          <span>
            <b>Телефон:</b> {user.phone}
          </span>
          <span>
            <b>Веб-сайт:</b> {user.website}
          </span>
          <span>
            <b>Компания:</b> {user.company.name}
          </span>
        </div>
      </div>
      {router.pathname !== '/posts/[id]' && (
        <ViewPostsButton title="Смотреть посты" onClick={handleClick} />
      )}
    </>
  );
};

UserInfo.defaultProps = {
  user: {
    name: '',
    email: '',
  },
};

UserInfo.propTypes = {
  user: object,
};

export default UserInfo;

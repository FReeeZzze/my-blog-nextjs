import React from 'react';
import WrapperContainer from 'components/WrapperContainer';
import NavLink from 'components/NavLink';
import BlockItem from 'components/BlockItem';
import { selectUser } from 'store/thunks/usersThunks';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UsersPage.module.scss';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);

  return (
    <div className={styles.section}>
      <WrapperContainer title="Пользователи">
        {users.map((item) => (
          <BlockItem
            key={`keyUsers:${item.id}`}
            title={item.name}
            subtitle={item.address.city}
            classNameTitle={styles.title}
            onClick={() => dispatch(selectUser(item))}
          >
            <NavLink
              url={`posts/${item.id}`}
              title="Смотреть посты"
              className={styles.link}
            />
          </BlockItem>
        ))}
      </WrapperContainer>
    </div>
  );
};

export default React.memo(UsersPage);

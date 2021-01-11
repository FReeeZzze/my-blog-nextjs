import React from 'react';
import BaseLayout from 'layouts/BaseLayout';
import UsersPage from 'pages/UsersPage';
import { array } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setUsers } from 'store/thunks/usersThunks';
import { setPosts } from 'store/thunks/postsThunks';

export default function Home({ users, posts }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUsers(users));
    dispatch(setPosts(posts));
  }, [dispatch, users, posts]);

  return (
    <BaseLayout title="Пользователи">
      <UsersPage />
    </BaseLayout>
  );
}

Home.propTypes = {
  users: array,
  posts: array,
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.apiSite}/users`);
  const users = await res.json();
  const res2 = await fetch(`${process.env.apiSite}/posts`);
  const posts = await res2.json();

  return { props: { users, posts } };
}

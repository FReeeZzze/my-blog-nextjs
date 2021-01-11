import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WrapperContainer from 'components/WrapperContainer';
import BlockItem from 'components/BlockItem';
import CommentsContainer from 'pages/PostsPage/CommentsContainer';
import { useRouter } from 'next/router';
import { selectUser } from 'store/thunks/usersThunks';
import styles from './PostsPage.module.scss';

const PostsPage = () => {
  const { posts } = useSelector((store) => store.posts);
  const { users, selectedUser } = useSelector((store) => store.users);
  const router = useRouter();
  const dispatch = useDispatch();
  const filteredPosts = posts.filter(
    (item) => item.userId === +router.query.id
  );

  React.useEffect(() => {
    if (Object.keys(selectedUser).length === 0) {
      const user = users.find((user) => user.id === +router.query.id);
      dispatch(selectUser(user));
    }
  }, [dispatch, router, selectedUser, users]);

  return (
    <div className={styles.section}>
      <WrapperContainer title="Посты">
        {filteredPosts.map((item) => (
          <BlockItem
            key={`keyPosts:${item.id}`}
            title={item.title}
            subtitle={item.body}
            classNameTitle={styles.title}
            classNameSubtitle={styles.subtitle}
          >
            <CommentsContainer postId={item.id} />
          </BlockItem>
        ))}
      </WrapperContainer>
    </div>
  );
};

export default React.memo(PostsPage);

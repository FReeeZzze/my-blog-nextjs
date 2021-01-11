import React from 'react';
import { number } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsByPostId } from 'store/thunks/postsThunks';
import CommentButton from './CommentButton';
import CommentItem from './CommentItem';
import styles from './CommentContainer.module.scss';

const CommentsContainer = ({ postId }) => {
  const [isOpen, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { comments } = useSelector((store) => store.posts);
  const filteredComments = comments.filter((item) => item.postId === postId);

  const handleClick = () => {
    const exists = comments.find((item) => item.postId === postId);
    if (!exists) dispatch(fetchCommentsByPostId(postId));
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <CommentButton isOpen={isOpen} onClick={handleClick} />
      <div className={!isOpen ? styles.closed : styles.opened}>
        {filteredComments.map((item) => (
          <CommentItem key={`keyComment:${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};

CommentsContainer.defaultProps = {
  postId: 1,
};

CommentsContainer.propTypes = {
  postId: number,
};

export default CommentsContainer;

import React from 'react';
import { string } from 'prop-types';
import styles from './CommentItem.module.scss';

const CommentItem = ({ name, body }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.title}>{name}</div>
      <span>{body}</span>
    </div>
  );
};

CommentItem.defaultProps = {
  name: '',
  body: '',
};

CommentItem.propTypes = {
  name: string,
  body: string,
};

export default CommentItem;

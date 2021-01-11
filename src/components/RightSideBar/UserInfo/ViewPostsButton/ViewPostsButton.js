import React from 'react';
import { string, func } from 'prop-types';
import Comment from './icon/comment.svg';
import styles from './ViewPostsButton.module.scss';

const ViewPostsButton = ({ title, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.button}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
      onClick={onClick}
    >
      <Comment />
      <span>{title}</span>
    </div>
  );
};

ViewPostsButton.defaultProps = {
  title: '',
  onClick: () => {},
};

ViewPostsButton.propTypes = {
  title: string,
  onClick: func,
};

export default ViewPostsButton;

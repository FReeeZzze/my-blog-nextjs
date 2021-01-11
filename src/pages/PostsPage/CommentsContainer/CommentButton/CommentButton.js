import React from 'react';
import { bool, func } from 'prop-types';
import styles from './CommentButton.module.scss';

const CommentButton = ({ isOpen, onClick }) => {
  return (
    <div
      role="button"
      tabIndex="0"
      className={styles.button}
      onKeyPress={(e) => e.key === 'Enter' && onClick}
      onClick={onClick}
    >
      {!isOpen ? 'Открыть комментарии' : 'Скрыть комментарии'}
    </div>
  );
};

CommentButton.defaultProps = {
  isOpen: false,
  onClick: () => {},
};

CommentButton.propTypes = {
  isOpen: bool,
  onClick: func,
};

export default CommentButton;

import React from 'react';
import { string, node, func } from 'prop-types';
import styles from './BlockItem.module.scss';

const BlockItem = ({
  title,
  subtitle,
  onClick,
  className,
  classNameTitle,
  classNameSubtitle,
  children,
}) => {
  return (
    <div className={`${styles.item} ${className}`}>
      <div
        role="button"
        tabIndex={0}
        className={`${styles.title} ${classNameTitle}`}
        onKeyPress={(e) => e.key === 'Enter' && onClick()}
        onClick={onClick}
      >
        {title}
      </div>
      <span className={classNameSubtitle}>{subtitle}</span>
      {children}
    </div>
  );
};

BlockItem.defaultProps = {
  title: '',
  subtitle: '',
  className: '',
  classNameTitle: '',
  classNameSubtitle: '',
  onClick: () => {},
};

BlockItem.propTypes = {
  className: string,
  classNameTitle: string,
  classNameSubtitle: string,
  title: string,
  subtitle: string,
  children: node,
  onClick: func,
};

export default BlockItem;

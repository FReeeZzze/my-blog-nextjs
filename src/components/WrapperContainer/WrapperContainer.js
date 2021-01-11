import React from 'react';
import { string, node } from 'prop-types';
import styles from './WrapperContainer.module.scss';

const WrapperContainer = ({ title, className, children }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.items}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

WrapperContainer.defaultProps = {
  className: '',
};

WrapperContainer.propTypes = {
  className: string,
  children: node,
  title: string,
};

export default React.memo(WrapperContainer);

import React from 'react';
import { useRouter } from 'next/router';
import departments from 'constatns/departments';
import styles from './LeftSideBar.module.scss';

export default function LeftSideBar() {
  const router = useRouter();

  return (
    <div className={styles.section}>
      <div className={styles.menu}>
        {departments.map((item) => (
          <div
            key={`keyLink:${item.title}`}
            className={
              router.pathname === item.url
                ? styles.activeLink
                : styles.defaultLink
            }
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

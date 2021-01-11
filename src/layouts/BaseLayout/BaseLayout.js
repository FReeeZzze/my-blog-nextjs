import React from 'react';
import { node, string } from 'prop-types';
import Head from 'next/head';
import LeftSideBar from 'components/LeftSideBar';
import RightSideBar from 'components/RightSideBar';
import s from './BaseLayout.module.scss';

const BaseLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={s.wrapperPage}>
          <LeftSideBar />
          {children}
          <RightSideBar />
        </div>
      </main>
    </>
  );
};

BaseLayout.defaultProps = {
  title: 'default title',
};

BaseLayout.propTypes = {
  children: node,
  title: string,
};

export default React.memo(BaseLayout);

import React from 'react';
import { string } from 'prop-types';
import { useRouter } from 'next/router';

export default function NavLink({ title, url, className }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
      onClick={handleClick}
    >
      {title}
    </div>
  );
}

NavLink.defaultProps = {
  className: '',
  url: '/',
  title: '',
};

NavLink.propTypes = {
  className: string,
  title: string,
  url: string,
};

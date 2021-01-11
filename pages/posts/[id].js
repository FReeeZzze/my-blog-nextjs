import React from 'react';
import BaseLayout from 'layouts/BaseLayout';
import PostsPage from 'pages/PostsPage';

export default function Id() {
  return (
    <BaseLayout title="Посты">
      <PostsPage />
    </BaseLayout>
  );
}

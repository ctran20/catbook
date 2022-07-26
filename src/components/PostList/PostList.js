import React from 'react';
import Post from '../Post/Post';

const PostList = () => {
  return (
    <div className="center flex flex-column">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;

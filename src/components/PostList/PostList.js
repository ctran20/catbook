import React from 'react';
import Post from '../Post/Post';

const PostList = () => {
  return (
    <div className="pl3 flex flex-column">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;

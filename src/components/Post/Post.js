import React from 'react';
import Comment from './Comment';
import './Post.style.css';
import { IoMdGlobe } from 'react-icons/io';

const Post = ({ postInfo }) => {
  const {
    displayName,
    profileImage,
    postDate,
    postContent,
    postStats,
    comments,
  } = postInfo;

  return (
    <div className="post">
      <div className="post-heading">
        <img
          className="post-user-image"
          alt="post_user_img"
          src={profileImage}
        />
        <div>
          <div className="post-display-name">{displayName}</div>
          <div className="post-date">
            {`${postDate} ·`}
            <IoMdGlobe style={{ marginLeft: '0.25em', fontSize: '0.85rem' }} />
          </div>
        </div>
      </div>

      <div className="post-content">{postContent.text}</div>
      {postContent.image ? (
        <img
          alt="post_img"
          width="100%"
          height="auto"
          src={postContent.image}
        />
      ) : (
        <div />
      )}

      <div className="post-stats">
        <div>😺 {postStats.hearts}</div>
        <div style={{ fontSize: '0.875rem' }}>
          {`${postStats.comments} Comments \u00a0${postStats.shares} Shares`}
        </div>
      </div>

      <div className="line-break" />

      <div className="mcs-buttons-container">
        <div className="mcs-buttons">😺 Meow</div>
        <div className="mcs-buttons">💬 Comment</div>
        <div className="mcs-buttons">📣 Share</div>
      </div>

      <div className="line-break" />

      <div className="comment-section">
        {comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Post;

import React from 'react';
import Comment from './Comment';
import './Post.style.css';
import { IoMdGlobe } from 'react-icons/io';

const Post = () => {
  const imgUrl =
    'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg';
  const profileUrl =
    'https://www.thesprucepets.com/thmb/EAU60oC1d_bm-81ErOgM760RjGs=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg';

  const tempDate = Date(new Date()).slice(3, 10);

  const postInfo = {
    displayName: 'Tuxedo Tran',
    profileImage: profileUrl,
    postDate: tempDate,
    postContent: 'Meow, meow meow! Meow meow meow.',
    postStats: {
      hearts: 45,
      comments: 20,
      shares: 16,
    },
    comments: [
      {
        displayName: 'Tuxedo Tran',
        profileImage: profileUrl,
        meows: 12,
        commentDate: tempDate,
        commentContent:
          'Meow!! Meow meow, meow meow meow? Meow meow, meow meow meow. ',
      },
      {
        displayName: 'Tuxedo Tran',
        profileImage: profileUrl,
        meows: 1,
        commentDate: tempDate,
        commentContent: 'Meow!! 😹😹😹',
      },
    ],
  };

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
        <img className="post-user-image" alt="post_user_img" src={profileUrl} />
        <div>
          <div className="post-display-name">{displayName}</div>
          <div className="post-date">
            {`${postDate} ·`}
            <IoMdGlobe style={{ marginLeft: '0.25em', fontSize: '0.85rem' }} />
          </div>
        </div>
      </div>

      <div className="post-content">{'Meow, meow meow! Meow meow meow.'}</div>
      <img alt="post_img" width="100%" height="auto" src={imgUrl} />

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

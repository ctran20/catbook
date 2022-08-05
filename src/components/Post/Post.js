import React from 'react';
import './Post.style.css';
import { IoMdGlobe } from 'react-icons/io';

const Post = () => {
  const imgUrl =
    'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg';
  const profileUrl =
    'https://www.thesprucepets.com/thmb/EAU60oC1d_bm-81ErOgM760RjGs=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg';

  const date = new Date();
  const tempDate = Date(new Date()).slice(3, 10) + ' ·';

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
        commentDate: tempDate,
        commentContent:
          'Meow!! Meow meow, meow meow meow? Meow meow, meow meow meow.',
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
            {postDate} <IoMdGlobe style={{ marginLeft: '0.25em' }} />
          </div>
        </div>
      </div>

      <div className="post-content">{'Meow, meow meow! Meow meow meow.'}</div>
      <img alt="post_img" width="100%" height="auto" src={imgUrl} />

      <div className="post-stats">
        <div>😻 {postStats.hearts}</div>
        <div>
          {postStats.comments} Comments {postStats.shares} Shares
        </div>
      </div>

      <hr className="line-break" />

      <div className="hcs-buttons-container">
        <div className="hcs-buttons">😻 Meow</div>
        <div className="hcs-buttons">💬 Comment</div>
        <div className="hcs-buttons">📣 Share</div>
      </div>

      <hr className="line-break" />

      <div className="bt b--light-silver mv3" />

      <div className="flex ph3 mb3">
        <img
          className="ba b--gray br-100"
          alt="post_img"
          src={profileUrl}
          width="40px"
          height="40px"
        />
        <div className="ml2 pa2 br3 bg-light-gray">
          <div className="blue f6 b">Tuxedo Tran</div>
          <div className="gray f6 ">
            Meow!! Meow meow, meow meow meow? Meow meow, meow meow meow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

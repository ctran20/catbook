import React from 'react';
import './Post.style.css';

const Post = ({ postInfo }) => {
  //const { displayName, profileImage, postDate, postContent, postStats } = postInfo;
  const imgUrl =
    'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg';
  const profileUrl =
    'https://www.thesprucepets.com/thmb/EAU60oC1d_bm-81ErOgM760RjGs=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg';

  return (
    <div className="post">
      <div className="post-heading">
        <img className="post-user-image" alt="post_user_img" src={profileUrl} />
        <div>
          <div className="blue b ml2">Tuxedo Tran</div>
          <div className="gray f6 ml2">June 30</div>
        </div>
      </div>
      <div style={{ paddingLeft: '1em' }}>
        <p>{'Meow, meow meow! Meow meow meow.'}</p>
      </div>

      <img alt="post_img" width="100%" height="auto" src={imgUrl} />

      <div
        className=" ma3"
        style={{ display: 'flex', justifyContent: 'flex-start' }}
      >
        <button className="grow">👍</button>
        <button className="grow ml1 mr1">💬</button>
        <button className="grow">📣</button>
      </div>
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

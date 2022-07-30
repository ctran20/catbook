import React from 'react';

const Post = () => {
  const imgUrl =
    'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg';
  const profileUrl =
    'https://www.thesprucepets.com/thmb/EAU60oC1d_bm-81ErOgM760RjGs=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg';
  const theme = 'bg-white ba b--light-silver shadow-4 dib br3 pa3 mb3';

  return (
    <div className={theme}>
      <div className="mb3 flex items-start">
        <img
          className="ba b--gray br-100"
          alt="post_img"
          src={profileUrl}
          width="50px"
          height="50px"
        />
        <div className="blue b ml2">Tuxedo Tran</div>
      </div>

      <img alt="post_img" src={imgUrl} />
      <div>
        <p>{'Meow, meow meow! Meow meow meow.'}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="grow">👍</button>
        <button className="grow ml1 mr1">💬</button>
        <button className="grow">📣</button>
      </div>
    </div>
  );
};

export default Post;

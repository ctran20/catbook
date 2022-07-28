import React from 'react';

const Post = () => {
  const imgUrl =
    'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg';
  const theme = 'bg-white dib br3 pa3 ma2 grow';

  return (
    <div className={theme}>
      <img alt="robots_img" src={imgUrl} />
      <div>
        <p>{'Meow, meow meow! Meow meow meow.'}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button>👍</button>
        <button>💬</button>
        <button>📣</button>
      </div>
    </div>
  );
};

export default Post;

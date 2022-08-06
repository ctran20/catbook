import React from 'react';
import Post from '../Post/Post';

const PostList = () => {
  const tempDate = Date(new Date()).slice(3, 10);
  const imgUrl =
    'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg';
  const profileUrl =
    'https://www.thesprucepets.com/thmb/EAU60oC1d_bm-81ErOgM760RjGs=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg';
  const sampleUrl =
    'https://i.chzbgr.com/full/9110961152/h3B970DB7/tuxedo-cat-cat';
  const sampleUrl2 =
    'https://alastairadversaria.files.wordpress.com/2017/12/cat.jpg';
  const sampleUrl3 =
    'https://media.vanityfair.com/photos/5e27310def889c00087c7928/master/pass/taylor-swift-cats.jpg';

  const posts = [
    {
      displayName: 'Tuxedo Tran',
      profileImage: profileUrl,
      postDate: tempDate,
      postContent: {
        text: 'Meow, meow meow! Meow meow meow.',
        image: sampleUrl3,
      },
      postStats: {
        hearts: 7,
        comments: 1,
        shares: 3,
      },
      comments: [
        {
          displayName: 'Oreo Tran',
          profileImage: sampleUrl,
          meows: 3,
          commentDate: tempDate,
          commentContent: 'Meow meow, meow meow meow? 😹😹😹',
        },
      ],
    },

    {
      displayName: 'Tuxedo Tran',
      profileImage: profileUrl,
      postDate: tempDate,
      postContent: {
        text: 'Meow, meow meow! 😼😼😼',
        image: null,
      },
      postStats: {
        hearts: 1,
        comments: 0,
        shares: 0,
      },
      comments: [],
    },
    {
      displayName: 'Tuxedo Tran',
      profileImage: profileUrl,
      postDate: tempDate,
      postContent: {
        text: 'Meow, meow meow! Meow meow meow.',
        image: imgUrl,
      },
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
          displayName: 'Cat Net Door',
          profileImage: sampleUrl2,
          meows: 1,
          commentDate: tempDate,
          commentContent: 'Meow!! 😹😹😹',
        },
      ],
    },
  ];

  return (
    <div className="pl3 flex flex-column">
      {posts.map((post) => {
        return <Post postInfo={post} />;
      })}
    </div>
  );
};

export default PostList;

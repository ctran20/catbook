import Friend from './Friend';
import './Friends.style.css';

const Friends = () => {
  const sampleUrl =
    'https://i.chzbgr.com/full/9110961152/h3B970DB7/tuxedo-cat-cat';
  const sampleUrl2 =
    'https://alastairadversaria.files.wordpress.com/2017/12/cat.jpg';

  const userInfo = {
    friend_count: 1352,
    friends: [
      {
        displayName: 'Oreo Tran',
        profileImage: sampleUrl,
      },
      {
        displayName: 'Cat Next Door',
        profileImage: sampleUrl2,
      },
    ],
  };

  const { friend_count, friends } = userInfo;

  return (
    <div className="sidebox">
      <div className="sidebox-title">Friends</div>
      <div className="friend-count">
        {friend_count.toLocaleString('en-US')} friends
      </div>
      <div className="friends-container">
        {friends.map((friend) => {
          return <Friend friendInfo={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;

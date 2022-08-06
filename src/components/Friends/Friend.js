import './Friends.style.css';

const Friend = ({ friendInfo }) => {
  return (
    <div className="friend">
      <img
        className="friend-profile-image"
        alt="friend_pic"
        src={friendInfo.profileImage}
      />
      <div className="friend-display-name">{friendInfo.displayName}</div>
    </div>
  );
};

export default Friend;

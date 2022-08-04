import ProfileNav from './ProfileNav';

const ProfileHeader = ({ userInfo }) => {
  const { profileUrl, coverUrl, firstName, lastName } = userInfo;
  const name = `${firstName} ${lastName}`;
  return (
    <div
      className="profile_header cover_image"
      style={{
        backgroundImage: `url(${coverUrl})`,
      }}
    >
      <ProfileNav name={name} profileUrl={profileUrl} />
    </div>
  );
};

export default ProfileHeader;

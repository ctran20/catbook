import './Comment.style.css';

const Comment = ({ comment }) => {
  const { profileImage, displayName, commentContent, meows, commentDate } =
    comment;

  return (
    <div className="a-comment">
      <img
        className="post-user-image comment"
        alt="comment_profile_image"
        src={profileImage}
      />
      <div className="comment-content">
        <div className="comment-box">
          <div className="post-display-name comment">{displayName}</div>
          <div className="f6 ">{commentContent}</div>
        </div>
        <div className="comment-meows">😺 {meows}</div>
        <div className="comment-tail">
          <div className="meows-button">Meows</div>
          <div className="post-date">{commentDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

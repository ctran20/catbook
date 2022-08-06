import './Photos.style.css';

const Photo = ({ photoUrl, index }) => {
  return index > 2 ? (
    <img className="photo below" alt="photo" src={photoUrl} />
  ) : (
    <img className="photo" alt="photo" src={photoUrl} />
  );
};

export default Photo;

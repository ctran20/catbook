const Friends = () => {
  const sampleUrl =
    'https://i.chzbgr.com/full/9110961152/h3B970DB7/tuxedo-cat-cat';
  const sampleUrl2 =
    'https://alastairadversaria.files.wordpress.com/2017/12/cat.jpg';

  return (
    <div className="ba b--light-silver shadow-4 br2 bg-white mb3 pa3 pb2">
      <div className="b f4">Friends</div>
      <div className="pb3">1,152 friends</div>
      <div className="flex flex-wrap">
        <div className="mb3 mr2" style={{ width: '31%' }}>
          <img
            className=" br3"
            alt="friend_pic"
            src={sampleUrl}
            width="100%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
          <div className="f6 b">Oreo Tran</div>
        </div>
        <div className="mb3 mr2" style={{ width: '31%' }}>
          <img
            className=" br3"
            alt="friend_pic"
            src={sampleUrl2}
            width="100%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
          <div className="f6 b">Cat Next Door</div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

import React from 'react';

const Ads = () => {
  const sampleUrl =
    'https://images.newscientist.com/wp-content/uploads/2022/06/14160014/SEI_109723294.jpg';
  const sampleUrl2 =
    'https://images-na.ssl-images-amazon.com/images/I/51ssQmkyWgL._SY473_BO1,204,203,200_.jpg';

  return (
    <div>
      <div className="sidebox sidebox-title">Sponsored</div>
      <div className="mr2 flex" style={{ width: '100%' }}>
        <div
          className="ba pa1 br4 ma1 b--light-silver bg-white center_v"
          style={{ width: '48%' }}
        >
          <div className="f5 b mt2 blue">Catnip Litter</div>
          <div className="f6 mb2 gray">greenlitter.com</div>
          <img
            className="br3 ma1"
            alt="friend_pic"
            src={sampleUrl}
            width="60%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
          <div className="f6 ma2 ph2">
            {
              'Meow! Meow meow meow? Meow meooow. Meow meow meow meoow meow, meow meow meow meow meow meow meow meow.'
            }
          </div>
        </div>

        <div
          className="ba pa1 br4 ma1 b--light-silver bg-white center_v"
          style={{ width: '48%' }}
        >
          <div className="f5 b mt2 blue">Sexy Cats Perfume</div>
          <div className="f6 mb2 gray">sexycats.com</div>
          <img
            className="br3 ma1"
            alt="friend_pic"
            src={sampleUrl2}
            width="60%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
          <div className="f6 ma2 ph2">
            {
              'Meow meooow. Meow meow meow meoow meow, meow meow meow meow meow meow meow meow :)'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;

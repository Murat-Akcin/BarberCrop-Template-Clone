import React from 'react';
import g1 from './aboutImages/g1.jpg';
import g2 from './aboutImages/g2.jpg';
import g3 from './aboutImages/g3.jpg';
import g4 from './aboutImages/g4.jpg';

const AboutGallery = () => {
  return (
    <div className="flex w-[300px] space-x-5 mb-20 ml-32 mx-auto">
      <img
        src={g1}
        alt=""
        className=" grayscale hover:filter-none duration-500  hover:scale-110"
      />
      <img
        src={g2}
        alt=""
        className="grayscale hover:filter-none duration-500 hover:scale-110"
      />
      <img
        src={g3}
        alt=""
        className="grayscale hover:filter-none duration-500 hover:scale-110"
      />
      <img
        src={g4}
        alt=""
        className="grayscale hover:filter-none duration-500 hover:scale-110"
      />
    </div>
  );
};

export default AboutGallery;

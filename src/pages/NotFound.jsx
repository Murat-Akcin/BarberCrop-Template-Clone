import React from 'react';
import { Link } from 'react-router-dom';
import Not404 from './pagesImage/Not404.png';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className=" overflow-hidden">
        <span className="text-4xl font-bold mb-8 p- mt-20 inline-block whitespace-nowrap animate-slide">
          PAGE NOT FOUND
        </span>

        <div>
          Volutpat vitae proin consectetur netus nunc ultrices consequat. Massa
          ac lectus tristique.
        </div>
        <button className="bg-red-600 w-1/12 ">BACK TO HOME PAGE</button>
      </div>
      <div className="notfound-right">2</div>

      <div className="bg-blue-400 h-screen">
        <img src={Not404} alt="" />
      </div>
    </div>
  );
};

export default NotFound;

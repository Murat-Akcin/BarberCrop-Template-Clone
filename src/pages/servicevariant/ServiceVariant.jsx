import React from 'react';
import m1 from '../services/serviceImages/m1.png';
import m2 from '../services/serviceImages/m2.png';
import m3 from '../services/serviceImages/mb3.png';
import m4 from '../services/serviceImages/mb4.png';
import m5 from '../services/serviceImages/mb5.png';
import m6 from '../services/serviceImages/mb6.png';

const ServiceVariant = () => {
  return (
    <div>
      {' '}
      <section className="w-10/12 ml-auto">
        <div className="text-white flex space-x-[700px] mt-40">
          <p className="text-4xl font-bold mb-20">WHAT WE PROVIDE</p>
          <button className="nav-btn font-bold">VIEW SERVİCES</button>
        </div>

        <div className="flex text-white mb-20">
          <div className=" space-y-5 mt-16">
            <div className="flex hover:border-orange-600 hover:border-[1px] h-[200px]  w-[400px] space-x-3 ">
              <div>
                <img src={m1} alt="" className="w-11/12 " />
              </div>
              <div className="space-y-3">
                <span className="text-2xl font-bold flex mb-4">HAIRCUT</span>
                <p>
                  A dui aliquam ultrices eros lorem <br /> nibhfrrg vivamus.
                  Quis aliquam <br /> duis pharetra faucibus ultrices volutpat.
                </p>
                <p className="text-orange-500">FROM $40</p>
              </div>
            </div>
            <div>
              {' '}
              <div className="flex hover:border-orange-600 hover:border-[1px] h-[200px]  w-[400px] space-x-3 ">
                <div>
                  <img src={m2} alt="" className="w-11/12 " />
                </div>
                <div className="space-y-3">
                  <span className="text-2xl font-bold flex mb-4">STACKING</span>
                  <p>
                    A dui aliquam ultrices eros lorem <br /> nibhfrrg vivamus.
                    Quis aliquam <br /> duis pharetra faucibus ultrices
                    volutpat.
                  </p>
                  <p className="text-orange-500">FROM $10</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-5 ">
            <div className="flex hover:border-orange-600 hover:border-[1px] h-[200px]  w-[400px] space-x-3 ">
              <div>
                <img src={m3} alt="" className="w-11/12 " />
              </div>
              <div className="space-y-3">
                <span className="text-2xl font-bold flex mb-4">MOUSTACHE</span>
                <p>
                  A dui aliquam ultrices eros lorem <br /> nibhfrrg vivamus.
                  Quis aliquam <br /> duis pharetra faucibus ultrices volutpat.
                </p>
                <p className="text-orange-500">FROM $30</p>
              </div>
            </div>
            <div>
              {' '}
              <div className="flex hover:border-orange-600 hover:border-[1px] h-[200px]  w-[400px] space-x-3 ">
                <div>
                  <img src={m4} alt="" className="w-11/12 " />
                </div>
                <div className="space-y-3">
                  <span className="text-2xl font-bold flex mb-4">
                    BREADTRIM
                  </span>
                  <p>
                    A dui aliquam ultrices eros lorem <br /> nibhfrrg vivamus.
                    Quis aliquam <br /> duis pharetra faucibus ultrices
                    volutpat.
                  </p>
                  <p className="text-orange-500">FROM $40</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-5 mt-16">
            <div className="flex hover:border-orange-600 hover:border-[1px] h-[200px]  w-[400px] space-x-3 ">
              <div>
                <img src={m5} alt="" className="w-11/12 " />
              </div>
              <div className="space-y-3">
                <span className="text-2xl font-bold flex mb-4">SHAVE</span>
                <p>
                  A dui aliquam ultrices eros lorem <br /> nibhfrrg vivamus.
                  Quis aliquam <br /> duis pharetra faucibus ultrices volutpat.
                </p>
                <p className="text-orange-500">FROM $10</p>
              </div>
            </div>
            <div>
              {' '}
              <div className="flex hover:border-orange-600 hover:border-[1px] h-[200px]  w-[400px] space-x-3 ">
                <div>
                  <img src={m6} alt="" className="w-11/12 " />
                </div>
                <div className="space-y-3">
                  <span className="text-2xl font-bold flex mb-4">
                    HAIR DYEING
                  </span>
                  <p>
                    A dui aliquam ultrices eros lorem <br /> nibhfrrg vivamus.
                    Quis aliquam <br /> duis pharetra faucibus ultrices
                    volutpat.
                  </p>
                  <p className="text-orange-500">FROM $15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceVariant;

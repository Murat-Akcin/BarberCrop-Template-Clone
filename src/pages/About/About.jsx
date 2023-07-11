import React from 'react';
import k1 from './aboutImages/k1.jpg';
import k2 from './aboutImages/k2.jpg';
import k3 from './aboutImages/k3.jpg';
import AboutGallery from './AboutGallery';
import m1 from './aboutImages/m1.png';
import m2 from './aboutImages/m2.png';
import m3 from './aboutImages/mb3.png';
import m4 from './aboutImages/mb4.png';
import m5 from './aboutImages/mb5.png';
import m6 from './aboutImages/mb6.png';

const About = () => {
  return (
    <div className="mx-auto">
      <section className="mb-32 mt-16 w-10/12 ml-44">
        <div className="flex  text-white space-x-16">
          <div className="w-2/5 mt-16">
            <span className="text-4xl font-bold ">
              PROFESSIONAL BARBERSHOP FOR MEN ONLY
            </span>
          </div>
          <div className="w-3/6 mt-16">
            <div className="flex  space-x-10 mb-5">
              <div>
                <span className=" flex text-2xl font-bold">SINCE 2015</span>
                <br />
                <span className="renkyazi">
                  Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim
                  duis.
                </span>
              </div>
              <div>
                <span className="flex text-2xl font-bold">1000+ CLIENTS</span>
                <br />
                <span className="renkyazi">
                  Metus varius vitae habitant lorem. Porta scelerisque facilisi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-1 h-[500px] flex items-center justify-center mb-5  w-full">
          <img src="" alt="" />
        </div>
        <div className="flex text-white space-x-5 mb-20 bg-transparent p-8">
          <p className="w-1/2 ">
            Praesent nunc odio pulvinar id scelerisque suscipit. Arcu metus,
            malesuada auctor cras. Odio id tincidunt adipiscing commodo duis
            adipiscing tellus donec neque. Potenti pretium at lectus cursus quis
            egestas nullam porttitor. Ut maecenas tincidunt suspendisse mattis
            donec in arcu. Tellus eget arcu arcu, elementum.
          </p>
          <p className="w-1/2">
            Nulla integer porta lacus, at aliquam ultrices. Sed metus magna
            ornare amet. A dictum sit non orci, maecenas in ultrices viverra.
            Odio praesent condimentum volutpat, cum nec. Enim, viverra gravida
            ipsum habitant urna tincidunt. Scelerisque odio adipiscing sagittis
            pharetra quam dictumst. Elit dictumst.
          </p>
        </div>
      </section>
      {/**----------------------------------------Section--------------------------------------------- */}
      <section className="w-10/12 mx-auto">
        <span className="text-4xl font-bold text-white mb-20 flex ml-10">
          MEET THE MASTERS
        </span>
        <div className="flex text-white space-x-12 m-10 font-bold text-xl">
          <div className="flex flex-col w-1/3">
            <img src={k1} alt="" className="mb-5" />
            <p className="mb-5">RALPH EDWARDS</p>
            <p className="mb-5 text-orange-600">TOP BARBER</p>
          </div>
          <div className="flex flex-col w-1/3">
            <img src={k2} alt="" className="mb-5" />
            <p className="mb-5">MARVIN MCKINNEY</p>
            <p className="mb-5 text-orange-600">HAIR STYLIST</p>
          </div>
          <div className="flex flex-col w-1/3">
            <img src={k3} alt="" className="mb-5" />
            <p className="mb-5">ALBERT FLORES</p>
            <p className="mb-5 text-orange-600">BARBER</p>
          </div>
        </div>
      </section>
      {/**----------------------------------------Section--------------------------------------------- */}
      <section className=" w-10/12 ml-44">
        <p className="text-white text-3xl font-bold justify-center items-center flex mb-20 mr-20">
          OUR WORKS
        </p>
      </section>
      <section className="">
        <AboutGallery />
      </section>

      <section className="w-10/12 mx-auto">
        <div className="text-white flex space-x-[700px]">
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
          <div className=" space-y-5 pb-10">
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

export default About;

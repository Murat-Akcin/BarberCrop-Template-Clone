import React from 'react';
import BackgroundSlider from './BackgroundSlider.js';
import '../../index.css';
import icon1 from './HomepageImages/m1.png';
import icon2 from './HomepageImages/m2.png';
import icon3 from './HomepageImages/mb3.png';
import icon4 from './HomepageImages/mb4.png';
import icon5 from './HomepageImages/mb5.png';
import icon6 from './HomepageImages/mb6.png';
import fotolink1 from './HomepageImages/h1.jpg';
import fotolink2 from './HomepageImages/h2.jpg';
import fotolink3 from './HomepageImages/h3.jpg';
import '../../App.css';
import { AiFillPhone } from 'react-icons/ai';
import bb1 from './HomepageImages/bb1.jpg';
import { useEffect } from 'react';

const Home = () => {
  return (
    <div>
      <section className="relative  h-screen mb-32 text-white">
        <BackgroundSlider />
        <div className="z-10  absolute top-20 left-0 right-0 w-4/6 flex flex-col slide-in-text font-bold ml-40">
          <span className="text-6xl mt-10 mb-10">
            WE WILL KEEP YOU <br /> AN IMPECCABLE LOOK
          </span>
          <span className="mb-5">
            {' '}
            3891 Ranchview Dr. Richardson, <br /> California 62639
          </span>

          <span className="text-2xl flex ">
            <AiFillPhone size={35} />
            +1 234 567 890
          </span>
        </div>
      </section>

      <section className="mb-32 w-10/12 ml-44">
        <div className="flex  text-white space-x-16">
          <div className="w-2/5 mt-16">
            <span className="text-4xl font-bold ">
              PROFESSIONAL BARBERSHOP FOR MEN ONLY
            </span>
          </div>
          <div className="w-3/6 mt-16">
            <p className="renkyazi mb-16 text-lg ">
              Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh
              pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id.
              Amet arcu lobortis sed pulvinar cursus pretium sit pretium.
            </p>
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
        <button className="flex bg-navbtncolor h-12 w-32 items-center justify-center cursor-pointer hover:bg-slate-800 text-white ml-[625px] mt-4 mb-16 font-bold">
          ABOUT US
        </button>
      </section>
      <section className="text-white mb-20 orta">
        <div className="ml-40">
          <div className=" flex flex-col   ">
            <span className="text-4xl font-bold mb-3 mt-10">
              WHAT WE PROVIDE
            </span>
            <span className=" renkyazi mb-20 font-bold">
              Risus odio lobortis ullamcorper felis vitae bibendum mi. <br />{' '}
              Penatibus fusce consequat donec vitae porttitor elementum.
            </span>
          </div>
          {/* -----------------------------------------------------------------------------------------------*/}
          <div className="flex mb-10">
            <div className="flex space-x-3 w-1/3">
              <div>
                <img src={icon1} alt="" />
              </div>
              <div className="grid ">
                <span className="font-bold text-xl mb-3">HAIRCUT</span>
                <span className="mb-3 renkyazi">
                  A dui aliquam ultrices eros lorem <br /> nibhfrrg vivamus.
                  Quis aliquam duis <br /> pharetra faucibus ultrices volutpat.
                </span>
                <span className="text-orange-600 mb-10">FORM $40</span>
                <div />
              </div>
            </div>
            {/* ----------------------------------------------------------------------------------------*/}
            <div className="flex space-x-3 w-1/3">
              <div>
                <img src={icon2} alt="" />
              </div>
              <div className="grid ">
                <span className="font-bold text-xl mb-3">MOUSTACHE</span>
                <span className="mb-3 renkyazi">
                  Viverra duis ut orci mi id. Eget ultricies <br /> facilisi
                  elementum nec vel a gravida <br /> facilisis in. Tellus felis
                  sapien.
                </span>
                <span className="text-orange-600 mb-10">FORM $30</span>
              </div>
            </div>

            {/* ----------------------------------------------------------------------------------* */}

            <div className="flex space-x-3 w-1/3">
              <div>
                <img src={icon3} alt="" />
              </div>
              <div className="grid ">
                <span className="font-bold text-xl mb-3">SHAVE</span>
                <span className="mb-3 renkyazi">
                  Lorem velit parturient consectetur <br /> cursus tincidunt
                  tristique pretium <br /> volutpat urna. Vitae scelerisque.
                </span>
                <span className="text-orange-600 mb-10">FORM $10</span>
                <div />
              </div>
            </div>
          </div>

          <div className="flex mb-10">
            <div className="flex space-x-3 w-1/3">
              <div>
                <img src={icon4} alt="" />
              </div>
              <div className="grid ">
                <span className="font-bold text-xl mb-3">STACKING</span>
                <span className="mb-3 renkyazi">
                  Dapibus ac mattis semper hendrerit eu <br /> dolor aliquam.
                  Vitae sem orci non diam. <br /> Venenatis augue arcu.
                </span>
                <span className="text-orange-600 mb-10">FORM $10</span>
                <div />
              </div>
            </div>
            {/* ----------------------------------------------------------------------------------------*/}
            <div className="flex space-x-3 w-1/3">
              <div>
                <img src={icon5} alt="" />
              </div>
              <div className="grid ">
                <span className="font-bold text-xl mb-3">BREADTRIM</span>
                <span className="mb-3 renkyazi">
                  Interdum tincidunt condimentum <br /> vestibulum feugiat arcu,
                  in. Maecenas sit <br /> sem erat pellentesque.
                </span>
                <span className="text-orange-600 mb-10">FORM $15</span>
              </div>
            </div>

            {/* ----------------------------------------------------------------------------------* */}

            <div className="flex space-x-3 w-1/3">
              <div>
                <img src={icon6} alt="" />
              </div>
              <div className="grid ">
                <span className="font-bold text-xl mb-3">HAIR DYEING</span>
                <span className="mb-3 renkyazi">
                  Congue pulvinar morbi pharetra tincidunt <br /> vel tincidunt.
                  Amet, morbi neque tellus <br /> vivamus venenatis.
                </span>
                <span className="text-orange-600 mb-20">FORM $40</span>
                <div />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------SECTION----------------------------------------------------------* */}

      <section
        className="text-white h-3/5 mb-32 w-10/12 ml-44"
        style={{ backgroundImage: "url('./HomepageImages/g6.jpg')" }}
      >
        <div className="flex">
          <div className="w-1/2 p-2">
            <span className="flex text-4xl font-bold mb-8">
              TEAM OF PROFESSIONALS <br /> IS WAITING FOR YOU
            </span>
            <p className=" font-bold mb-12">
              isus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus{' '}
              <br />
              fusce consequat donec vitae porttitor elementum volutpat gravida.{' '}
              <br />
              Tellus hac tristique nisi, id amet cras tempor.
            </p>
            <button className="  flex bg-navbtncolor h-12 w-28 items-center justify-center cursor-pointer  hover:bg-slate-800 ml-0">
              Book Now
            </button>
          </div>

          <div className="flex flex-col p-2">
            <span className="font-bold text-4xl mb-10">
              SPECIAL OPENING HOURS
            </span>
            <div className="flex space-x-20 font-bold">
              <div className="flex flex-col space-y-4">
                <span>MONDAY: 9:00 AM – 7:30 PM</span>
                <span>TUESDAY: 9:00 AM – 7:30 PM</span>
                <span>WEDNESDAY: 9:00 AM – 7:30 PM</span>
              </div>
              <div className="flex flex-col space-y-4">
                <span>THURSDAY: 9:00 AM – 7:30 PM</span>
                <span>FRIDAY: 9:00 AM – 7:30 PM</span>
                <span>SAT/SUN: CLOSED</span>
              </div>
            </div>
            <div>
              <p className="mt-10 border border-orange-600 p-3 font-bold">
                EVERY TUESDAY WE GIVE A DISCOUNT 12% 12% 12% 12% 12% 12% 12% 12%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------SECTION----------------------------------------------------------* */}

      <section className="text-white mb-32 w-10/12 ml-44">
        <span className="flex text-4xl font-bold mb-20">OUR BLOG</span>
        <div className="flex space-x-8 justify-center items-center ">
          <div className="flex-1">
            <a href="http://localhost:3000/blog/">
              <img src={fotolink1} alt="" className="h-[300px] w-[400px]" />
            </a>
            <div className="mt-3">
              <a href="http://localhost:3000/blog/" className="font-bold">
                OH MAMMA, I’M IN LOVE WITH GRADIENT
              </a>
              <p className="mt-3 text-orange-600 mb-5 ">AUGUST 15, 2020</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Nullam a euismod ante, eu vestibulum lectus.
              </span>
            </div>
          </div>
          <div className=" flex-1 ">
            <a href="http://localhost:3000/blog/">
              <img src={fotolink2} alt="" className="h-[300px] w-[400px]" />
            </a>
            <div className="mt-3">
              <a href="http://localhost:3000/blog/" className="font-bold">
                OH MAMMA, I’M IN LOVE WITH GRADIENT
              </a>
              <p className="mt-2 text-orange-600 mb-5">AUGUST 15, 2020</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Nullam a euismod ante, eu vestibulum lectus.
              </span>
            </div>
          </div>
          <div className=" flex-1 ">
            <a href="http://localhost:3000/blog/">
              <img src={fotolink3} alt="" className="h-[300px] w-[400px]" />
            </a>
            <div className="mt-3">
              <a href="http://localhost:3000/blog/" className="font-bold">
                OH MAMMA, I’M IN LOVE WITH GRADIENT
              </a>
              <p className="mt-2 text-orange-600 mb-5">AUGUST 15, 2020</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Nullam a euismod ante, eu vestibulum lectus.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

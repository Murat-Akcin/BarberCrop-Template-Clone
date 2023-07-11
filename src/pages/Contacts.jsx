import React from 'react';
import renkyazi from '../App.css';

const Contacts = () => {
  return (
    <div className="text-white w-10/12 ml-44">
      <div className="contacts-top-p text-white mt-28 mb-10">
        <p className="mb-20">LET’S TALK OR BOOK NOW</p>
      </div>

      <section>
        <div className="contacts-middle">
          <div className="contacts-middle-1">
            <div className="mt-16">
              <p className="contacts-middle-1-titles mb-2">EMAIL</p>
              <p className="renkyazi mb-8">barbercrop@example.com</p>
            </div>
            <div>
              <p className="contacts-middle-1-titles mb-2">ADDRESS</p>
              <p className="renkyazi mb-8">
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </div>
            <div>
              <p className="contacts-middle-1-titles mb-5">PHONE</p>
              <p>+1 234 567 890</p>
              <p>+1 234 567 890</p>
            </div>
            <div></div>
          </div>
          <div className="contacts-middle-2">
            <div>
              <p className="font-bold mb-8 mt-16">NAME AND SURENAME</p>
              <input
                type="text"
                placeholder="Your Name Here"
                size={39}
                className="rounded-full first-letter:first-line:backdrop: px-6 py-4 bg-gray-200 text-gray-800 placeholder-gray-400 focus:outline-red focus:ring-10 focus:ring-blue-500"
              />
            </div>
            <div>
              <p className="font-bold mb-8 mt-16">YOUR PHONE NUMBER</p>
              <input
                type="text"
                placeholder="your phone number"
                size={39}
                className="rounded-full first-letter:first-line:backdrop: px-6 py-4 bg-gray-200 text-gray-800 placeholder-gray-400 focus:outline-red focus:ring-10 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="contacts-middle-3">
            <div>
              <p className="font-bold mb-8 mt-16">CHOOSE A SERVICE</p>
              <input
                type="text"
                list="services"
                placeholder="Services"
                size={39}
                className="rounded-full first-letter:first-line:backdrop: px-6 py-4 bg-gray-200 text-gray-800 placeholder-gray-400 focus:outline-red focus:ring-10 focus:ring-blue-500"
              />
              <datalist id="services">
                <option value="Haircut"></option>
                <option value="Hair Process" key=""></option>
              </datalist>
            </div>
            <div>
              <p className="font-bold mb-8 mt-16">CHOOSE AN APPOINTMENT DATE</p>
              <input
                type="date"
                placeholder="dd//mm//yyyy"
                className="rounded-full first-letter:first-line:backdrop: px-6 py-4 bg-gray-200 text-gray-800 placeholder-gray-400 focus:outline-red focus:ring-10 focus:ring-blue-500 text-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="contacts-bottom ">
          <p className="mt-16 text-left items-start justify-start mr-[310px] font-bold text-2xl">
            MESSAGE
          </p>
          <textarea
            cols="100"
            rows="6"
            placeholder="Your Message Here"
            className="p-3 ml-[350px] mt-5 bg-transparentrounded-full first-letter:first-line:backdrop: px-6 py-4 bg-gray-200  placeholder-gray-400 focus:outline-red focus:ring-10 focus:ring-blue-500 mb-10  rounded-xl text-gray-400"
          ></textarea>
          <button className="nav-btn ml-0">BOOK NOW</button>
        </div>
      </section>
      <section>
        <div>Map</div>
      </section>
    </div>
  );
};

export default Contacts;

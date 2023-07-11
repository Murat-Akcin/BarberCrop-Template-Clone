import React, { useState } from 'react';
import logo from './1.png';
import { LuPhoneCall } from 'react-icons/lu';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <di className="footer-logo">
        <img src={logo} alt="" />
      </di>
      <div className="footer-middle">
        <div className="footer-middle-top">
          <LuPhoneCall size={35} />
          <p>+1 234 567 890</p>
        </div>

        <div>
          <div className="footer-middle-middle">
            3891 Ranchview Dr. Richardson, California 62639
            barbercrop@example.com
          </div>
          <div />
          <div className="footer-icons">
            <BsFacebook size={30} className="footer-icons-facebook" />
            <AiFillTwitterCircle size={33} className="footer-icons-twitter" />
            <AiFillYoutube size={35} className="footer-icons-youtube" />
          </div>
          <div className="footer-middle-middle">
            Merkulove © Barberctop Template All rights reserved 2021
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-top">SUBSCRIBE OUR NEWSLETTER</div>
        <div className="footer-bottom-middle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
          interdum volutpat urna neque varius congue.
        </div>
        <div>
          <input
            className="footer-input"
            type="email"
            placeholder="   Email@"
          />
          <button className="footer-bottom-button">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

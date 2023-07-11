import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '300px',
    height: '150px',
    margin: 'auto',
    background: '#A0A0A0',
    borderRadius: '10px',
    padding: '20px',
  },
};

const NavbarRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const page = () => {
    return (window.location.href = '/services/');
  };

  const page2 = () => {
    return (window.location.href = '/servicevariant/');
  };

  return (
    <div className="navr space-x-12">
      <div className=" hover:text-orange-600">
        <Link to="/">HOME</Link>
      </div>
      <div className=" hover:text-orange-600 ">
        <Link to="/about">ABOUT</Link>
      </div>

      <button onClick={openModal} className=" hover:text-orange-600">
        SERVICES
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        ariaHideApp={false}
      >
        <h2 className="font-bold">SERVICES</h2>
        <p className="cursor-pointer" onClick={page}>
          service 1
        </p>
        <p className="cursor-pointer" onClick={page2}>
          service 2
        </p>
        <button className="bg-gray-500 text-black w-32 " onClick={closeModal}>
          Kapat
        </button>
      </Modal>

      <div className=" hover:text-orange-600">
        <Link to="gallery/">GALLERY</Link>
      </div>
      <div className=" hover:text-orange-600">
        <Link to="blog/">BLOG</Link>
      </div>
      <div className=" hover:text-orange-600">
        <Link to="contacts/">CONTACTS</Link>
      </div>
      <div className="nav-btn">
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default NavbarRight;

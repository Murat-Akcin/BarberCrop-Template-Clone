import React, { useState, useEffect } from 'react';
import '../../App.css';
import hbg1 from './HomepageImages/hbg1.jpg';
import hbg2 from './HomepageImages/hbg2.jpg';
import hbg3 from './HomepageImages/hbg3.jpg';

const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hbg1, hbg2, hbg3]; // Örnek resim dosyalarının listesi

  useEffect(() => {
    // Otomatik olarak fotoğraf değiştirmek için zamanlayıcı kullanma
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Her 3 saniyede bir fotoğrafı değiştir

    return () => clearInterval(interval); // Komponent kaldırıldığında zamanlayıcıyı temizle
  }, []);

  return (
    <div className="background-slider">
      <div className="slider-wrapper">
        <img
          src={images[currentImage]}
          alt=""
          className="slider-image active"
        />
      </div>
    </div>
  );
};

export default BackgroundSlider;

import React, { useState } from 'react';
import './Gallery.css';

// Example images – replace these with your own local or online image URLs
import img1 from '../About-us/vision.jpg';
import img2 from '../About-us/banner.jpeg';
import img3 from '../About-us/mission2.jpeg';
import Header from '../../components/Header/Header';

// ✅ Inline ImageCard Component
const ImageCard = ({ src, onClick }) => {
  return (
    <div className="gallery-item" onClick={() => onClick(src)}>
      <img src={src} alt="Gallery" />
    </div>
  );
};

const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (src) => {
    setModalImg(src);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  const images = [img1, img2, img3];  

  return (
    <>
    <Header/>
     
      <h3 className="gallery-subtitle">UNNATI SAMAROH</h3>

      <div className="gallery">
        {images.map((img, index) => (
          <ImageCard key={index} src={img} onClick={openModal} />
        ))}
      </div>

      {modalImg && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImg} alt="Modal View" />
        </div>
      )}
    </>
  );
};

export default Gallery;

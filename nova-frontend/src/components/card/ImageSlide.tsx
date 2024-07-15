import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: 'left' | 'right') => {
    setImageIndex((prevIndex) => {
      if (prevIndex === null) {
        return null;
      }

      if (direction === 'left') {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="slider flex gap-4">
      {imageIndex !== null && (
        <div className="fullSlider fixed inset-0 bg-black flex justify-between items-center z-50">
          <div className="arrow flex items-center justify-center" onClick={() => changeSlide('left')}>
            <FaArrowLeft className="w-8 h-8 text-white" />
          </div>
          <div className="imgContainer flex-1">
            <img src={images[imageIndex]} alt="Full Image" className="w-full h-full object-cover" />
          </div>
          <div className="arrow flex items-center justify-center" onClick={() => changeSlide('right')}>
            <FaArrowRight className="w-8 h-8 text-white" />
          </div>
          <div className="close absolute top-0 right-0 text-white text-4xl font-bold p-4 cursor-pointer" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage flex-3">
        <img src={images[0]} alt="Thumbnail" className="w-full h-full object-cover cursor-pointer" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages flex-1 flex flex-col gap-4">
        {images.slice(1).map((image, index) => (
          <img
            key={index + 1}
            src={image}
            alt="Thumbnail"
            className="w-30 h-30 object-cover cursor-pointer"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;


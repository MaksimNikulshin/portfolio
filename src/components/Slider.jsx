import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MySlider({ items }) {
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 550,
    draggable: true,
    infinite: true,
    swipe: true,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageClick = (id) => {
    if (!isDragging) {
      navigate(`/blog/${id}`);
    }
  };

  console.log(handleMouseDown, handleMouseUp)

  return (
    <Slider {...settings}>
      {items.map((child) => (
        <div
          className="post"
          key={child.id}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <img
            src={child.image}
            alt="item"
            className="mobileImg"
            onClick={() => handleImageClick(child.id)}
          />
          <img
            src={child.image}
            alt="item"
            className="desktopImg"
            onClick={() => handleImageClick(child.id)}
          />
          <p className="theme">{child.name}</p>
        </div>
      ))}
    </Slider>
  );
}

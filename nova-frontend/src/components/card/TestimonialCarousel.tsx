import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    image: "https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=110&d=mm&r=g",
    review: "“This is genuinely the best theme I have ever bought in terms of super easy & clear instructions to follow.”",
    name: "Jhon Doe",
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.j2lXstuunazuTq-vInac8AHaIp?w=166&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name: "Mary Jane",
    review: "“This is genuinely the best theme I have ever bought in terms of super easy & clear instructions to follow.”",
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/OIP.ckMmlGABdJPAvV-pOzP40wHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name: "Jane Doe",
    review: "“This is genuinely the best theme I have ever bought in terms of super easy & clear instructions to follow.”",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="w-3/4 m-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Customers Love Us</h2>
      <div className="mt-20">
        <Slider {...settings}>
          {testimonials.map((d) => (
            <div key={d.id} className="bg-white rounded-xl text-black h-[450px]">
              <div className="h-56 rounded-t-xl bg-[#ffc72c] flex justify-center items-center">
                <img src={d.image} alt={d.name} className="rounded-full h-44 w-44" />
              </div>
              <div className="flex flex-col p-4 gap-4 justify-center items-center">
                <h3 className="font-semibold text-xl">{d.name}</h3>
                <p>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

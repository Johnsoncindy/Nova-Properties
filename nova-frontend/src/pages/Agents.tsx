import PartnerSection from "../components/card/PartnerSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const agents = [
  {
    name: "Agent One",
    role: "Senior Real Estate Agent",
    email: "agentone@example.com",
    phone: "(123) 456-7890",
    photo:
      "https://th.bing.com/th/id/OIP.j2lXstuunazuTq-vInac8AHaIp?w=166&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Agent Two",
    role: "Real Estate Agent",
    email: "agenttwo@example.com",
    phone: "(123) 456-7890",
    photo:
      "https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=110&d=mm&r=g",
  },
  {
    name: "Agent Three",
    role: "Junior Real Estate Agent",
    email: "agentthree@example.com",
    phone: "(123) 456-7890",
    photo:
      "https://th.bing.com/th/id/OIP.ckMmlGABdJPAvV-pOzP40wHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MeetOurAgents = () => {
  return (
    <div className="container mx-auto p-4">
      <div
        className="relative bg-cover bg-center h-96 mb-10 rounded-xl"
        style={{ backgroundImage: `url('/meet-agents.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Meet Our Agents</h1>
        </div>
      </div>
      <div className="mt-5 p-5">
        <Slider {...settings}>
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-xl text-black h-[450px]"
            >
              <div className="h-56 rounded-t-xl bg-[#ffc72c] flex justify-center items-center">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="rounded-full h-44 w-44"
                />
              </div>
              <div className="flex flex-col p-4 gap-4 justify-center items-center">
                <h3 className="font-semibold text-xl">{agent.name}</h3>
                <p>{agent.role}</p>
                <p>{agent.email}</p>
                <p>{agent.phone}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-5">
        <PartnerSection />
      </div>
    </div>
  );
};

export default MeetOurAgents;

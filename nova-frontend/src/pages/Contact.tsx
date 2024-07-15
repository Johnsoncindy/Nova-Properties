import PartnerSection from "../components/card/PartnerSection";
import ScheduleTourCard from "../components/card/ScheduleTourCard";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <div
        className="relative bg-cover bg-center h-96 mb-10 rounded-xl"
        style={{ backgroundImage: `url('/book-a-tour.gif')` }}
      ></div>
      <div className="mt-5">
        <ScheduleTourCard />
      </div>
      <div className="mt-5">
        <PartnerSection />
      </div>
    </div>
  );
};

export default Contact;

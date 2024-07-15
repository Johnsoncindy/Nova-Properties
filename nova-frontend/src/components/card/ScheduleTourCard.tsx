import React from 'react';
import { Card, Button } from 'flowbite-react';
import ScheduleTourForm from '../form/ScheduleTourForm';

const ScheduleTourCard: React.FC = () => {
  const handleSendMessage = () => {
    // Implement your logic for sending a message here
    console.log("Send a message functionality goes here");
  };

  return (
    <Card className="max-w-full p-4">
      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Schedule A Tour</h4>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <ScheduleTourForm />
        </div>
        <div className="flex-1 md:ml-4 mt-4 md:mt-0">
          <img
            src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way-818x417.jpg"
            alt="Property"
            className="w-full h-auto rounded-lg"
          />
          <h5 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
            Discover your dream property
          </h5>
          <p className="text-gray-700 dark:text-gray-400">
            Immerse yourself in the captivating ambiance of our properties. Book a personalized
            tour to explore the exquisite beauty and unique features of our property. Our
            knowledgeable staff will guide you through the property, answering any questions you
            may have.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            Or Want to have a chat before booking a Tour? Send Us a Message
          </p>
          <div className="mt-4 text-center">
            <Button
              className="bg-[#ffc72c]"
              onClick={handleSendMessage}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ScheduleTourCard;

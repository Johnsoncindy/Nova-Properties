import { Card } from 'flowbite-react';
import PartnerSection from "../components/card/PartnerSection";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative bg-cover bg-center h-96 mb-10 rounded-xl" style={{ backgroundImage: `url('/about-us.webp')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">About Nova-Properties</h1>
        </div>
      </div>
      <div className="mt-5 max-w-4xl mx-auto">
        <Card className="mb-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Nova-Properties, our mission is to simplify the process of finding rental and sale properties in Liberia. We strive to provide a seamless and efficient experience for individuals looking to discover, view, and inquire about properties. Our platform integrates real-time chat functionality to facilitate immediate communication between users and agents, ensuring a smooth and responsive service.
          </p>
        </Card>
        <Card className="mb-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a future where Nova-Properties is the leading real estate platform in Liberia, known for its innovative solutions and commitment to excellence. Our goal is to make property transactions as hassle-free as possible, empowering users to find their perfect place with ease and confidence.
          </p>
        </Card>
        <Card className="mb-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Customer Satisfaction: We prioritize the needs and satisfaction of our customers above all else.</li>
            <li>Innovation: We continually seek innovative solutions to enhance our platform and services.</li>
            <li>Integrity: We operate with honesty and integrity, building trust with our users and partners.</li>
            <li>Excellence: We strive for excellence in all aspects of our business, from technology to customer service.</li>
          </ul>
        </Card>
        <Card className="mb-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Why Us</h2>
          <p className="text-gray-600 mb-2">
            Choosing Nova-Properties means partnering with a team dedicated to making your property search as smooth and efficient as possible. Here's why we stand out:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Localized Expertise: We understand the Liberian real estate market and provide tailored solutions to meet your needs.</li>
            <li>Real-Time Communication: Our integrated chat functionality allows for instant communication between users and agents.</li>
            <li>Comprehensive Listings: From homes and apartments to shops, stores, and lands, we offer a wide range of property listings.</li>
            <li>Hassle-Free Transactions: We handle the advertising, client interactions, and property tours, making the process stress-free for you.</li>
          </ul>
        </Card>
        <Card className="mb-10 p-4">
          <h2 className="text-2xl font-bold mb-4">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src="/cindy.jpg" alt="Cindy Tetama Johnson" className="w-24 h-24 rounded-full mr-4 mb-4 md:mb-0" />
            <div>
              <h3 className="text-xl font-bold">Cindy Tetama Johnson</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-600">
                Cindy Johnson is the visionary behind Nova-Properties. With a passion for real estate and technology, Cindy aims to revolutionize the property market in Liberia by creating a user-friendly platform that connects buyers, sellers, and renters effortlessly.
              </p>
              <a href="mailto:cindyjohnson745@gmail.com" className="text-blue-600 hover:underline">cindyjohnson745@gmail.com</a>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-5">
        <PartnerSection />
      </div>
    </div>
  );
};

export default About;

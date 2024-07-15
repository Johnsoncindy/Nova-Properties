import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import PartnerSection from "../components/card/PartnerSection";

const Faq = () => {
  return (
    <div className="container mx-auto p-4">
      <div
        className="relative bg-cover bg-center h-96 mb-10 rounded-xl"
        style={{ backgroundImage: `url('/faqs.png')` }}
      ></div>
      <div className="mt-5">
        <Accordion className="bg-white">
          <AccordionPanel>
            <AccordionTitle>What is Nova-Properties?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Nova-Properties is a comprehensive web service designed to
                facilitate the renting, selling, and leasing of properties in
                Liberia. The platform provides a seamless user experience for
                individuals looking to discover, view, and inquire about various
                types of properties.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>How do I search for properties?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can search for properties using the search bar on the
                homepage. Simply enter your desired location, select the type of
                property (buy, rent, lease), and set your price range to view
                relevant listings.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>
              What types of properties are available?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Nova-Properties offers a wide range of properties including
                homes, apartments, shops, stores, and lands. Each listing
                provides detailed descriptions, high-quality images, and
                essential property information.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>How can I contact an agent?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our platform features an integrated real-time chat functionality
                that allows you to communicate directly with agents. Simply
                click on the chat icon in the property listing to start a
                conversation.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>Is my personal information secure?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, Nova-Properties is committed to protecting your personal
                information. We implement robust security measures to ensure
                that your data is secure and confidential.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>How can I list my property?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                To list your property, you should contact us concerning listing
                your property. After which, one or more of our agents will be
                assigned to you depending on the number of properties you want
                to list. Our agent will guide you through the entire process,
                followed by collecting all necessary information about the
                property to list it.
              </p>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel>
            <AccordionTitle>
              After my property is listed, what next?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                After our agent has gathered the relevant information about your
                property and listed it on our site, all you have to do is sit
                back and relax. We will handle advertising your property,
                getting clients, and managing all the stress of tours and
                property viewings by prospective clients. Only when the client
                is ready to sign a deal on your property will we contact you to
                seal the deal.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
      <div className="mt-5">
        <PartnerSection />
      </div>
    </div>
  );
};

export default Faq;

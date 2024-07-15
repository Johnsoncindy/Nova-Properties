import React from 'react';

const PartnerSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-16 rounded-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Partners of Nova-Properties</h2>
          <p className="mt-2 text-gray-600">Trusted partners who support our mission.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          {/* Partner 1 */}
          <div className="flex justify-center items-center">
            <img
              className="w-40 h-auto mx-auto border border-gray-200 rounded-lg transition duration-300 hover:border-blue-500"
              src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png"
              alt="Partner 1"
            />
          </div>

          {/* Partner 2 */}
          <div className="flex justify-center items-center">
            <img
              className="w-40 h-auto mx-auto border border-gray-200 rounded-lg transition duration-300 hover:border-blue-500"
              src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Ironwood-Apartments.png"
              alt="Partner 2"
            />
          </div>

          {/* Partner 3 */}
          <div className="flex justify-center items-center">
            <img
              className="w-40 h-auto mx-auto border border-gray-200 rounded-lg transition duration-300 hover:border-blue-500"
              src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Rosewood-Homes.png"
              alt="Partner 3"
            />
          </div>

          {/* Partner 4 */}
          <div className="flex justify-center items-center">
            <img
              className="w-40 h-auto mx-auto border border-gray-200 rounded-lg transition duration-300 hover:border-blue-500"
              src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/The-Capital.png"
              alt="Partner 4"
            />
          </div>

          {/* Partner 5 */}
          <div className="flex justify-center items-center">
            <img
              className="w-40 h-auto mx-auto border border-gray-200 rounded-lg transition duration-300 hover:border-blue-500"
              src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Adobe-Homes.png"
              alt="Partner 5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;


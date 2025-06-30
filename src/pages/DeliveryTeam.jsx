import { FaTools } from "react-icons/fa";

const DeliveryTeam = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-secondaryBgColor-100 to-secondaryBgColor-300">
      <div className="text-center px-6">
        <div className="text-6xl text-yellow-700 animate-bounce mb-4 inline-block">
          <FaTools />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Delivery Team Page Under Construction
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          We’re working hard to bring you something amazing! 🚧
        </p>
        <p className="mt-4 text-gray-600 text-sm">Check back soon.</p>
      </div>
    </div>
  );
};

export default DeliveryTeam;

const PromoSection = () => {
  return (
    <div className="bg-black text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <img
            src="assets/promo.png"
            alt="Bookshelf"
            className="mx-auto md:mx-0 mb-4"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Your favourite <span className="text-yellow-500">Reads</span> <br />
            <span className="text-yellow-500">Are Here!</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Buy your favorite books online with ease! Enjoy exclusive offers and
            discounts on selected titles. Dive into our collection and find
            special deals that make reading more affordable. Shop now and unlock
            more savings with every purchase!
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <h3 className="text-yellow-600 text-xl font-semibold">800+</h3>
              <p className="text-gray-300 text-sm">Book Listing</p>
            </div>
            <div>
              <h3 className="text-yellow-600 text-xl font-semibold">1K+</h3>
              <p className="text-gray-300 text-sm">Registered Members</p>
            </div>
            <div>
              <h3 className="text-yellow-600 text-xl font-semibold">50+</h3>
              <p className="text-gray-300 text-sm">Branch Count</p>
            </div>
          </div>

          <button className="mt-6 px-6 py-2 border border-yellow-600 text-white rounded hover:bg-yellow-700  transition">
            Explore More
          </button>
        </div>
      </div>
              <div className="flex items-center space-x-2">
          <img
            src="assets/footer.png"
            alt="Neth BookPoint Logo"
            className="h-30"
          />
        </div>
    </div>
  );
};

export default PromoSection;

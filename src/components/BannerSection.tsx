const BannerSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-16 mb-20 bg-black">
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/21/49/f1/2149f169b237958026f8ca241179a523.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-20 text-white">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          {/* Top Border Line */}
          <div className="w-16 h-1 bg-white mb-4 mx-auto md:mx-0"></div>

          <h1 className="text-4xl md:text-6xl font-bold">Fruit Juice Drinks</h1>

          {/* Bottom Border Line */}
          <div className="w-16 h-1 bg-white mt-4 mx-auto md:mx-0"></div>

          <p className="mt-6 text-lg md:text-xl leading-relaxed">
            Enjoy with all your senses... Products with a special twist are more in demand than ever!
          </p>
        </div>

        {/* Fruit Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://www.austriajuice.com/hs-fs/hubfs/fruit%20juice%20right.png?width=1276&height=1276&name=fruit%20juice%20right.png"
            alt="Fruit Bottle"
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

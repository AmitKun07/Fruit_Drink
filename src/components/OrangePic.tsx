const OrangePic = () => {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[500px]">

        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src="https://www.austriajuice.com/hubfs/Austria%20Juice%20Theme%202023/image/marble-banner-1.jpg"
          alt="Background"
        />

        {/* Left Side Overlay Image */}
        <img
          className="absolute left-0 top-1/2 transform -translate-y-1/2 "
          src="https://www.austriajuice.com/hs-fs/hubfs/Austria%20Juice%202018/Assets/leafImage.png?width=782&height=738&name=leafImage.png"
          alt="Left Overlay"
        />

        {/* Right Side Overlay Image */}
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          src="https://www.austriajuice.com/hs-fs/hubfs/Austria%20Juice%202018/Assets/Interested-in-more-Right.png?width=699&height=618&name=Interested-in-more-Right.png"
          alt="Right Overlay"
        />

        {/* Center Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center p-4 z-10">
          <h1 className="text-5xl font-bold mb-2">Interested in more?</h1>
          <p className="text-4xl mb-4">Get in touch with our team!</p>
          <button className="bg-green-400 text-black px-4 py-2 rounded hover:bg-white hover:text-green-400 transition-all">
            Contact Us ✚
          </button>
        </div>
      </div>

      {/* Optional Extra Content */}
      <div className="mt-6 text-center text-xl">
        <h2></h2>
      </div>
    </div>
  );
};

export default OrangePic;

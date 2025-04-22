const FruitPic = () => {
  return (
    <div className="bg-white w-full h-auto py-10 px-4">
      <div className="flex flex-wrap justify-evenly gap-5">
        {/* IMAGE 1 WITH TEXT OVERLAY */}
        <div className="relative w-[500px] h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://www.austriajuice.com/hubfs/Austria%20Juice%202018/Assets/Markets-We-Serve-BG.jpg"
            alt="Fruit Market"
            className="w-full h-full object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 text-black flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-3xl font-bold mb-2 drop-shadow-md">Markets We Serve</h2>

            <div className="w-[50px] h-[50px] rounded-full bg-green-400 flex items-center justify-center shadow-md">
              <img
                className="w-[30px] h-[30px]"
                src="https://www.austriajuice.com/hubfs/wine-galss-icon.svg"
                alt=""
              />
            </div>

            <p className="text-lg mb-4 mt-2 drop-shadow-sm">
              We’re proud to serve a wide range of needs and markets in the beverage industry. What can we do for you?
            </p>

            <button className="w-50 h-10 text-white rounded bg-green-500 hover:bg-white hover:text-green-500 transition-all text-2xl px-4 shadow-md">
              Learn More ✚
            </button>
          </div>
        </div>

        {/* IMAGE 2 WITH TEXT OVERLAY */}
        <div className="relative w-[500px] h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://www.austriajuice.com/hubfs/oneBackground-Image.jpg"
            alt="Juice Varieties"
            className="w-full h-full object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 text-black flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-3xl font-bold mb-2 drop-shadow-md">Product Portfolio</h2>

            <div className="w-[50px] h-[50px] rounded-full bg-green-400 flex items-center justify-center shadow-md">
              <img
                className="w-[30px] h-[30px]"
                src="https://www.austriajuice.com/hubfs/Icons/juice.svg"
                alt=""
              />
            </div>

            <p className="text-lg mb-4 mt-2 drop-shadow-sm">
              Discover our wide range of high-quality products for any organisation in the food and beverage industry
            </p>

            <button className="w-50 h-10 text-white rounded bg-green-500 hover:bg-white hover:text-green-500 transition-all text-2xl px-4 shadow-md">
              Learn More ✚
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitPic;

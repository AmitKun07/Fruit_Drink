const Cards = () => {
    const cards = [
      {
        title: "Fruit Juice Concentrate",
        desc:
          "From standard concentrates and individual recipes to organic and high acidity concentrates, Austria Juice has you covered.",
        bg: "https://www.austriajuice.com/hubfs/oneBackground-Image.jpg",
        overlay:
          "https://www.austriajuice.com/hs-fs/hubfs/Austria%20Juice%202018/Assets/Fruit-Juice-Concentrates-1.png?width=554&height=492&name=Fruit-Juice-Concentrates-1.png",
      },
      {
        title: "Beverage Compounds",
        desc:
          "Our beverage compounds contain the highest-quality materials, including fruit, vitamin, and mineral fortifiers.",
        bg: "https://www.austriajuice.com/hubfs/oneBackground-Image.jpg",
        overlay:
          "https://www.austriajuice.com/hs-fs/hubfs/beverage%20compouds%20subcategory.png?width=1463&height=1464&name=beverage%20compouds%20subcategory.png",
      },
      {
        title: "Natural Flavours",
        desc:
          "With our international flavourist expertise and access to the best fruit raw materials, we offer high-quality natural flavours.",
        bg: "https://www.austriajuice.com/hubfs/oneBackground-Image.jpg",
        overlay:
          "https://www.austriajuice.com/hs-fs/hubfs/Austria%20Juice%202018/Assets/Natural-Flavours.png?width=639&height=647&name=Natural-Flavours.png",
      },
      {
        title: "Not From Concentrate Juices",
        desc:
          "Austria Juice specializes in producing high-quality NFC juices with consistent product stability.",
        bg: "https://www.austriajuice.com/hubfs/oneBackground-Image.jpg",
        overlay:
          "https://www.austriajuice.com/hs-fs/hubfs/Austria%20Juice%202018/Assets/Not-From-Concentrate-Juices.png?width=645&height=584&name=Not-From-Concentrate-Juices.png",
      },
      {
        title: "Fruit Sweetness",
        desc:
          "Whether pure or as part of a beverage compound, our fruit sweetness products will delight your customers.",
        bg: "https://www.austriajuice.com/hubfs/oneBackground-Image.jpg",
        overlay:
          "https://www.austriajuice.com/hs-fs/hubfs/Austria%20Juice%202018/Assets/Fruit-Sweetness.png?width=900&height=597&name=Fruit-Sweetness.png",
      },
      {
        title: "Special Flavours",
        desc:
          "With advanced techniques and ingredients, we provide special flavour solutions tailored to your needs.",
        bg: "https://www.austriajuice.com/hubfs/oneBackground-Image.jpg",
        overlay:
          "https://www.austriajuice.com/hs-fs/hubfs/Fruit-Wines-_-Ciders_Master.png?width=722&height=731&name=Fruit-Wines-_-Ciders_Master.png",
      },
    ];
  
    return (
      <div className="mt-10 w-full px-4">
        {/* Header Section */}
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-10">
          Austria Juice Portfolio For Fruit Juice Drinks
        </h2>
  
        {/* Portfolio Section */}
        <div className="flex flex-wrap justify-between gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full sm:w-[48%] lg:w-[30%]"
            >
              {/* Image Wrapper with individual background and overlay */}
              <div className="relative h-60 w-auto">
                <img
                  className="h-full w-auto"
                  src={card.bg}
                  alt={card.title}
                />
                <img
                  src={card.overlay}
                  alt={`${card.title} overlay`}
                  className="absolute top-0 left-0 h-full w-full object-contain pointer-events-none"
                />
              </div>
  
              <h3 className="text-black font-bold text-lg md:text-xl mt-4">
                {card.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg mt-4">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cards;
  
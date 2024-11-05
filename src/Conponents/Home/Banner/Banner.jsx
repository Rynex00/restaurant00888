import React from "react";

const Banner = () => {
  const divStyle = {
    backgroundImage: "url(https://i.postimg.cc/8kKsH9xd/Frame-1707477989.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={divStyle} className=" pb-32 lg:py-32 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 relative  md:pt-32 max-w-[1373px] mx-auto px-4">
        <div className="space-y-8 md:w-[946px] md:h-[446px] relative mt-32 mb-4">
          <h2 className="uppercase text-white text-4xl md:text-7xl font-bold md:bg-gradient-to-l from-red-500/30">
            Taste the authentic Saudi cuisine
          </h2>
          <p className="text-white text-lg">
            Among the best Saudi chefs in the world, serving <br /> you
            something beyond flavor.
          </p>
          <button className="btn bg-yellow-500 text-black outline-none border-none rounded-none text-lg">
            Explore Menu
          </button>
        </div>
        <div className="">
          <img src="https://i.postimg.cc/W1WvLc6S/image-1.png" alt="" />
          <div className="absolute bottom-5 right-6 md:-right-12 w-[140px] h-[140px] rounded-full  bg-yellow-400 flex items-center justify-center shadow-lg  ">
            <div className="">
              <h2 className="uppercase  text-2xl text-black font-semibold border-dashed border-2 border-red-500 w-[120px] h-[120px] rounded-full flex items-center justify-center p-10 ">
                Today Offer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

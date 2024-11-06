import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSquareFull } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./CustomersSay.css";
import Footer from "../Footer/Footer";

const CustomersSay = () => {
  const swiperRef = useRef(null);

  return (
    <div>
      <div className="bg-white py-32 relative">
        <div className="max-w-[1373px] mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-2">
                <FaSquareFull className="text-red-800" />
                <p className="text-red-800 text-2xl font-bold">
                  Crispy, Every Bite Taste
                </p>
              </div>
              <h2 className="text-5xl font-bold">
                What Some of my Customers Say
              </h2>
            </div>
          </div>

          <div className="order-first relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              // breakpoints={{
              //   640: {
              //     slidesPerView: 1,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //   },
              //   1024: {
              //     slidesPerView: 3,
              //   },
              // }}
              className="mySwiper"
              ref={swiperRef}
            >
              <SwiperSlide>
                <div className="">
                  <div className="card  w-full  flex-col lg:flex-row-reverse">
                    <div className=" md:w-[556px] bg-yellow-500 order-last ">
                      <div className=" md:p-8 pt-4 p-4">
                        <div className="w-10">
                          <img
                            src="https://i.postimg.cc/L5B8QhJC/text.png"
                            alt=""
                          />
                        </div>
                        <h2 className="  md:w-[459px] text-center text-xl indent-8">
                          You can't go wrong with Chicken Mandi, I had it twice.
                          The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          defiantly recommend it.
                        </h2>
                      </div>
                      <div className="flex justify-between p-4 md:pt-52">
                        <div>
                          <h2 className="card-title">Khalid Al Dawsry</h2>
                          <h2 className="mr-12">Jeddah, Saudi</h2>
                        </div>
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-12 h-12 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <figure className="bg-yellow-500 rounded-none">
                      <img
                        src="https://i.postimg.cc/Ss1X7nzW/Video.png"
                        alt="Album"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div className="card  w-full  flex-col lg:flex-row-reverse">
                    <div className=" md:w-[556px] bg-yellow-500 order-last ">
                      <div className=" md:p-8 pt-4 p-4">
                        <div className="w-10">
                          <img
                            src="https://i.postimg.cc/L5B8QhJC/text.png"
                            alt=""
                          />
                        </div>
                        <h2 className="  md:w-[459px] text-center text-xl indent-8">
                          You can't go wrong with Chicken Mandi, I had it twice.
                          The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          defiantly recommend it.
                        </h2>
                      </div>
                      <div className="flex justify-between p-4 md:pt-52">
                        <div>
                          <h2 className="card-title">Khalid Al Dawsry</h2>
                          <h2 className="mr-12">Jeddah, Saudi</h2>
                        </div>
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-12 h-12 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <figure className="bg-yellow-500 rounded-none">
                      <img
                        src="https://i.postimg.cc/Ss1X7nzW/Video.png"
                        alt="Album"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            className="flex gap-12 order-last md:order-fast absolute md:top-32 right-0 mt-8 left-28 md:left-[1380px]
        "
          >
            <div
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="navigation-button w-16 h-16 rounded-full shadow-xl flex justify-center items-center bg-white"
            >
              <IoIosArrowBack className="text-4xl hover:text-red-500 " />
            </div>
            <div
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="navigation-button w-16 h-16 rounded-full shadow-xl flex justify-center items-center bg-white"
            >
              <IoIosArrowForward className="text-4xl hover:text-red-500" />
            </div>
          </div>
        </div>

        <div className="w-52 absolute  top-60 hidden md:flex">
          <img src="https://i.postimg.cc/ZnZTNZwr/220.png" alt="" />
        </div>
        <div className="absolute bottom-8 right-0 hidden md:flex  rounded-full">
          <img src="https://i.postimg.cc/5y3fqGrD/12.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomersSay;

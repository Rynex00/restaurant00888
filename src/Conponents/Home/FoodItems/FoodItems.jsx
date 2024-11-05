import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSquareFull } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./FoodItems.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const FoodItems = () => {
  const swiperRef = useRef(null);
  return (
    <div className="bg-[#FBF7F2] py-32 relative">
      <div className="max-w-[1373px] mx-auto px-4">


        <div className="flex justify-between items-center">
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-2">
              <FaSquareFull className="text-red-800" />
              <p className="text-red-800 text-1xl font-bold">Crispy, Every Bite Taste</p>
            </div>
            <h2 className="text-4xl font-semibold">POPULAR FOOD ITEMS</h2>
          </div>


        </div>


        <div className="order-first relative">
          <Swiper
            onSliderFirstMove={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
            ref={swiperRef}
          >

            <SwiperSlide>
              <div className=" bg-base-100 w-96 ">
                <figure className="px-10 pt-10 h-60 ">
                  <img
                    src="https://i.postimg.cc/xjxv39jF/4.png"
                    alt=""
                    className="rounded-xl  " />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">vegetables burger</h2>
                  <p>Barbecue Italian cuisine pizza</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-base-100 w-96 ">
                <figure className="px-16 pt-8  h-60 ">
                  <img
                    sizes="16"
                    src="https://i.postimg.cc/2y64NKGw/2.png"
                    alt=""
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">vegetables burger</h2>
                  <p>Barbecue Italian cuisine pizza</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-base-100 w-96 ">
                <figure className="px-10 pt-10 h-60">
                  <img
                    src="https://i.postimg.cc/TwQrS6V1/1.png"
                    alt=""
                    className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">vegetables burger</h2>
                  <p>Barbecue Italian cuisine pizza</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-base-100 w-96 ">
                <figure className="px-10 pt-10 h-60">
                  <img
                    src="https://i.postimg.cc/4ySpfQFT/3.png"
                    alt=""
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">vegetables burger</h2>
                  <p>Barbecue Italian cuisine pizza</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex gap-12 order-last md:order-fast absolute md:top-32 right-0 mt-8 left-28 md:left-[1380px]
        ">
          <div onClick={() => swiperRef.current.swiper.slidePrev()} className="navigation-button w-16 h-16 rounded-full shadow-xl flex justify-center items-center bg-white">
            <IoIosArrowBack className="text-4xl hover:text-red-500 " />
          </div>
          <div onClick={() => swiperRef.current.swiper.slideNext()} className="navigation-button w-16 h-16 rounded-full shadow-xl flex justify-center items-center bg-white">
            <IoIosArrowForward className="text-4xl hover:text-red-500" />
          </div>
        </div>

      </div>


      <div className="w-60 absolute  top-60 hidden md:flex">
        <img src="https://i.postimg.cc/KjqDK2jw/Frame-1707478073.png" alt="" />
      </div>
    </div>
  );
};

export default FoodItems;

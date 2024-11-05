import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { RiMedalLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import './about.css'

const About = () => {
  return (
    <div className="relative mt-32  mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1373px] mx-auto px-4 gap-8">
        <div className="">
          <img src="https://i.postimg.cc/L6RKJ3Hc/Image.png" alt="" />
        </div>
        <div>
          <div role="tablist" className="tabs tabs-bordered ">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab "
              aria-label="About"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content pt-5 space-y-7">
              <h2 className="text-3xl md:text-6xl uppercase font-semibold">
                Exceptional culinary experience and delicious food
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex gap-20 items-center">
                <button className="btn bg-yellow-500 text-black outline-none border-none rounded-none text-lg uppercase">
                  About More
                </button>
                <div className="flex gap-2 items-center">
                  <LuPhoneCall className="text-2xl text-red-600" />
                  <p>+88 3426 739 485</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Experience"
            />
            <div role="tabpanel" className="tab-content pt-5 space-y-7">
              <h2 className="text-3xl md:text-6xl uppercase font-semibold">
                10+ years in project management and marketing.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex gap-20 items-center">
                <button className="btn bg-yellow-500 text-black outline-none border-none rounded-none text-lg uppercase">
                  About More
                </button>
                <div className="flex gap-2 items-center">
                  <LuPhoneCall className="text-2xl text-red-600" />
                  <p>+88 3426 739 485</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Contact"
            />
            <div role="tabpanel" className="tab-content pt-5 space-y-7">
              <h2 className="text-3xl md:text-6xl uppercase font-semibold">
                Email us at call (123)456-7890 or info@rk.com
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex md:gap-20 gap-16 items-center">
                <button className="btn bg-yellow-500 text-black outline-none border-none rounded-none text-lg uppercase">
                  About More
                </button>
                <div className="flex gap-2 items-center">
                  <LuPhoneCall className="text-2xl text-red-600" />
                  <p>+88 3426 739 485</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1373px] mx-auto px-4 mt-16">
        <div className="flex items-center gap-4 ">
          <div className="w-16 h-16 rounded-full shadow-xl flex justify-center items-center">
            <FiBox className="text-2xl text-red-500" />
          </div>
          <div>
            <h2 className="uppercase text-2xl font-semibold">fast delivery</h2>
            <p>Within 30 minutes</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8 md:mt-0">
          <div className="w-16 h-16 rounded-full shadow-xl flex justify-center items-center">
            <RiMedalLine className="text-2xl text-red-500" />
          </div>
          <div>
            <h2 className="uppercase text-2xl font-semibold">
              absolute dining
            </h2>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8 md:mt-0">
          <div className="w-16 h-16 rounded-full shadow-xl flex justify-center items-center">
            <FiShoppingBag className="text-2xl text-red-500" />
          </div>
          <div>
            <h2 className="uppercase text-2xl font-semibold">
              pickup delivery
            </h2>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-0 hidden md:flex  rounded-full">
        <img
          src="https://i.postimg.cc/VkRTTJb2/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal-2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;

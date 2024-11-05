import React from "react";
import { FaSquareFull } from "react-icons/fa";
import Swal from "sweetalert2";

const BookNow = () => {
  const handleForm = (e) => {
    console.log(e);
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      date: e.target.date.value,
      number: e.target.number.value,
      message: e.target.message.value,
    };
    console.log(data);
    if (data) {
      e.target.reset();
      Swal.fire({
        title: "Form submitted successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1373px] mx-auto px-4 ">
        <div className="absolute z-20 md:mt-32 mt-6 md:w-[735px] h-full ">
          <div className="flex items-center gap-2  ">
            <FaSquareFull className="text-red-800" />
            <p className="text-red-800 text-1xl font-bold">Book Now</p>
          </div>
          <div className="text-white">
            <h2 className="text-6xl">Book Your Table</h2>
            <p className="text-lg">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          <div className="my-8 ">
            <form onSubmit={handleForm} className="text-center">
              <div className="md:flex gap-8  text-white ">
                <label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered bg-transparent border border-white w-[350px] md:w-[350px] rounded-none mb-4"
                    required
                  />
                </label>
                <label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="input input-bordered bg-transparent border border-white w-[350px] md:w-[350px] rounded-none mb-4 "
                    required
                  />
                </label>
              </div>
              <div className="md:flex gap-8  text-white">
                <label>
                  <input
                    name="date"
                    type="date"
                    placeholder="Reservation Date"
                    className="input input-bordered bg-transparent border border-white w-[350px] md:w-[350px] rounded-none mb-4 text-white"
                  />
                </label>
                <label>
                  <input
                    name="number"
                    type="number"
                    placeholder="Total People"
                    className="input input-bordered bg-transparent border border-white w-[350px] md:w-[350px] rounded-none mb-4"
                  />
                </label>
              </div>
              <div className="md:flex gap-8  text-white">
                <label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className=" p-4 bg-transparent border border-white w-[350px] md:w-[732px] md:h-[140px]  rounded-none mb-4 text-white"
                  />
                </label>
              </div>
              <div className="md:flex gap-8  text-white">
                <label>
                  <input
                    type="submit"
                    value="Submit"
                    className=" btn w-[350px] md:w-[732px]  rounded-none mb-4 text-black"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[700px] md:h-auto">
        <img
          className="w-full h-full object-cover"
          src="https://i.postimg.cc/wvzVZ2nf/Frame-1707478003.png"
          alt="Responsive image"
        />
      </div>
    </div>
  );
};

export default BookNow;

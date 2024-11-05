import React from "react";
import { MdAccessTime } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const divStyle = {
    backgroundImage: "url(https://i.postimg.cc/RCRmYkPD/Footer.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={divStyle}>
      <footer className=" max-w-[1373px] mx-auto px-4 p-10  text-white">
        <div className="my-16">
          <h2 className="text-center text-5xl mb-16">
            We ready to have you the best dining experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="text-center space-y-5">
              <div className="flex justify-center text-yellow-500">
                <MdAccessTime size={44} />
              </div>
              <h2 className="text-xl ">Opening hours</h2>
              <div className="my-5 text-[16px]">
                <p>Monday - Sunday</p>
                <p>9:00 AM to 11:30 PM</p>
              </div>
            </div>

            <div className="text-center space-y-5">
              <div className="flex justify-center text-yellow-500">
                <TbPhoneCall size={40} />
              </div>
              <h2 className="text-xl ">LET'S TALK</h2>
              <div className="my-5 text-[16px]">
                <p>Phone: 1-800-222-4545</p>
                <p>Fax: 1-800-222-4545</p>
              </div>
            </div>

            <div className="text-center space-y-5">
              <div className="flex justify-center text-yellow-500">
                <FaRegEnvelope size={40} />
              </div>
              <h2 className="text-xl">BOOK A TABLE</h2>
              <div className="my-5 text-[16px]">
                <p>Email: demo@website.com</p>
                <p>Support: support@website.com </p>
              </div>
            </div>

            <div className="text-center space-y-5">
              <div className="flex justify-center text-yellow-500">
                <GrLocation size={40} />
              </div>
              <h2 className="text-xl">Our Address</h2>
              <div className="my-5 text-[16px]">
                <p>123 Stree New York City , United </p>
                <p>States Of America. </p>
              </div>
            </div>
          </div>
          <div className="text-white mt-24">
            <div className="flex justify-center gap-8 my-8">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                <FaFacebook size={24} />
              </div>
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                <FaTwitter size={24} />
              </div>
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                <FaInstagram size={24} />
              </div>
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                <FaLinkedin size={24} />
              </div>
            </div>
            <h2 className="text-center text-xl">
              © 2023 <span className="text-yellow-500">Niomax</span> All Rights
              Reserved{" "}
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

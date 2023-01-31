import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare, FaGoogle, FaApple } from "react-icons/fa";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

const Login = () => {

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="">
            <div className="shadow-2xl">
              <button
                type="button"
                className="bg-googleRed hover:bg-white flex items-center p-3 rounded-lg cursor-pointer outline-none w-full text-white hover:text-googleRed text-sm"
              >
                <FaGoogle className="text-xl mr-3 w-5" />
                <span className="pr-4">Login in with Google</span>
              </button>
            </div>

            <div className="mt-5">
              <button
                className="bg-facebookBlue hover:bg-white flex items-center p-3 rounded-lg cursor-pointer outline-none text-white hover:text-facebookBlue w-full text-sm"
              >
                <FaFacebookSquare className="mr-3 text-xl w-5" />
                <span className="pr-4">Login with Facebook</span>
              </button>
            </div>

            <div className="mt-5">
              <button className="bg-mainColor flex items-center p-3 rounded-lg cursor-pointer outline-non w-full text-sm">
                <FaApple className="mr-3 text-xl w-5" />
                <span className="pr-4">Login with Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

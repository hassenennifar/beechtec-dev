import React from 'react'
import { Link } from 'react-router-dom'
import shareVideo from '../assets/share.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CgBee } from "react-icons/cg";
import { GoSearch } from "react-icons/go"


const Home = () => {
  return (
    <div>
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-screen h-screen object-cover"
        />
      </div>

      <div className="absolute h-full w-full top-0 right-0 left-0 bottom-0 bg-betueloverlay">
        <div className='relative p-10 max-w-[1200px] mx-[auto] my-[0] h-full'>
          <div className='flex items-center z-10'>
            <div className='flex items-center'>
              <CgBee className='text-[#CB2D6F] text-3xl mr-3'/>
              <div className='text-[#14A098] text-3xl uppercase'>Beechtec</div>
            </div>
            <div>
              <ul className='flex items-center justify-between w-full text-[#FFFFFF] text ml-10'>
                <li className='px-4'>Products</li>
                <li className='px-4'>Solutions</li>
                <li className='px-4'>Customers</li>
                <li className='px-4'>About us</li>
                <li className='px-4'>Career</li>
              </ul>
            </div>
            <div className='flex items-center w-full justify-end'>
              <Link to="*">
                <GoSearch className='text-[#FFFFFF] text-xl ml-10' />
              </Link>
              <Link
                  className="text-white text rounded-lg px-4 py-2 bg-[#14A098] ml-10"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-white text rounded-lg px-4 py-2 bg-[#CB2D6F] ml-5"
                  to="/login"
                >
                  Register
                </Link>
            </div>
          </div>
          <div className='relative flex flex-col h-full justify-center'>
            <div className="">
              <h1 className="text-[#FFFFFF] text-5xl mb-10 items-center">
                BUSINESS SERVICES
              </h1>
              <p className=" text-[#FFFFFF] text-2xl uppercase">
                Neue Geschäftsprozesse und veränderte
              </p>
              <p className="text-[#FFFFFF] text-2xl uppercase mb-20">
                {" "}
                Marktanforderungen für die digitale Transformation
              </p>
              <Link
                className="text-white text-xl rounded-lg px-9 py-3 bg-[#14A098]"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="text-white text-xl rounded-lg px-9 py-3 bg-[#CB2D6F] ml-5"
                to="/login"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home
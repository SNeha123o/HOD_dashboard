import React from 'react'
import {FacebookShareButton,EmailShareButton,LinkedinShareButton,TelegramShareButton,WhatsappShareButton} from 'react-share'


function BackenddeveloperPage() {
  return (
    <>
    <div>
    <h2 className='font-bold relative text-2xl md:text-4xl lg:text-5xl z-10 py-8 pt-20 text-center'>
      AI CHEF MASTER</h2>
      <h2 className='text-center text-2xl'>Backend Developer Internship</h2>
      <h2 className='text-center text-1xl'>Remote Job | Posted Date:-</h2>
      <div className='flex justify-around'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl md:text-2xl shadow-2xl  mr-8 my-8 ">
      
      <span className=" text-white">I am Interested</span>
      </button>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl md:text-2xl shadow-2xl  mr-8 my-8 pl-500">
      
      <span className=" text-white">Refer a friend</span>
      </button>
    </div>
    </div>
    
    </>
  )
}

export default BackenddeveloperPage

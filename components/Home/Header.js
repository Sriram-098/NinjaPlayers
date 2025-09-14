import React from 'react'
import Image from "next/image";

import { HiPencilSquare ,HiArrowLeftOnRectangle  } from "react-icons/hi2";
const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
const Header = () => {
  return (
    <div className="flex flex-row justify-between p-3  border-b-[2px] border-[#FF3366]">
       <img src="/logo.png" alt="Logo" width={150}/>
       <div className="flex gap-4">
          <button className=" bg-black p-2 px-3 text-white rounded-full"><span className="hidden sm:block">CREATE POST</span>< HiPencilSquare className="sm:hidden"/></button>
          <button className="bg-white text-gray-500 p-2 rounded-full px-3 border-[1px]"><span className="hidden sm:block">SIGN IN</span><HiArrowLeftOnRectangle className="sm:hidden"/></button>
          <Image 
            src={USER_IMAGE} 
            alt='user image'
            className='rounded-full cursor-pointer' 
            width={40} 
            height={40} />
       </div>

    


      
    </div>
  )
}

export default Header

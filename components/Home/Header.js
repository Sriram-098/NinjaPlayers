"use client"

import React from "react"
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"
import { HiPencilSquare, HiArrowLeftOnRectangle } from "react-icons/hi2"

// Placeholder user image
const USER_IMAGE =
  "https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg"

export default function Header() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-row justify-between p-3 border-b-[2px] border-[#FF3366]">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" width={150} />

      {/* Action buttons */}
      <div className="flex gap-4 items-center">
        {/* Create Post */}
        <button className="bg-black p-2 px-3 text-white rounded-full flex items-center gap-2">
          <span className="hidden sm:block">CREATE POST</span>
          <HiPencilSquare className="sm:hidden" />
        </button>

        {/* Sign In / Logout */}
        {session ? (
          <button
            className="bg-white text-gray-500 p-2 rounded-full px-3 border-[1px] flex items-center gap-2"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <span className="hidden sm:block">LOGOUT</span>
            <HiArrowLeftOnRectangle className="sm:hidden" />
          </button>
        ) : (
          <button
            className="bg-white text-gray-500 p-2 rounded-full px-3 border-[1px] flex items-center gap-2"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <span className="hidden sm:block">SIGN IN</span>
            <HiArrowLeftOnRectangle className="sm:hidden" />
          </button>
        )}

        {/* User image */}
        <Image
          src={session?session?.user?.image:USER_IMAGE}
          alt="user image"
          className="rounded-full cursor-pointer"
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}

import React from 'react'
import { RiTwitterXFill } from 'react-icons/ri'
import { GoHomeFill } from 'react-icons/go'
import { IoSearch } from 'react-icons/io5'
import { RiNotification4Line } from 'react-icons/ri'
import { TbMail } from 'react-icons/tb'
import { RiFileListFill } from 'react-icons/ri'
import { LuBookmark } from 'react-icons/lu'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { AiOutlineUser } from 'react-icons/ai'
import { CgMoreO } from 'react-icons/cg'

const navDivClass =
  'inline rounded-3xl py-[10px]  pl-[10px] pr-[30px] align-middle group-hover/li:bg-gray-800'
const Circle = () => {
  return (
    <header className="h-full w-[275px] bg-black px-[20px] py-[20px] text-white">
      <a href="/home">
        <h1 className="pl-[10px]">
          <RiTwitterXFill className="text-[25px]" />
        </h1>
      </a>
      <nav className="mt-[25px] text-[20px]">
        <ul className="[&>li]:mt-[25px]">
          <li>
            <a href="/home" className="group/li block">
              <div className={navDivClass}>
                <GoHomeFill className="mr-[10px] inline text-[23px]" />
                Home
              </div>
            </a>
          </li>
          <li>
            <a href="/explore" className="group/li block">
              <div className={navDivClass}>
                <IoSearch className="mr-[10px] inline text-[23px]" />
                Explore
              </div>
            </a>
          </li>
          <li>
            <a href="/notification" className="group/li block">
              <div className={navDivClass}>
                <RiNotification4Line className="mr-[10px] inline text-[23px]" />
                Notification
              </div>
            </a>
          </li>
          <li>
            <a href="/messages" className="group/li block">
              <div className={navDivClass}>
                <TbMail className="mr-[10px] inline text-[23px]" />
                Messages
              </div>
            </a>
          </li>
          <li>
            <a href="/lists" className="group/li block">
              <div className={navDivClass}>
                <RiFileListFill className="mr-[10px] inline text-[23px]" />
                Lists
              </div>
            </a>
          </li>
          <li>
            <a href="/bookmarks" className="group/li block">
              <div className={navDivClass}>
                <LuBookmark className="mr-[10px] inline text-[23px]" />
                Bookmarks
              </div>
            </a>
          </li>
          <li>
            <a href="/communities" className="group/li block">
              <div className={navDivClass}>
                <LiaUserFriendsSolid className="mr-[10px] inline text-[23px]" />
                Communities
              </div>
            </a>
          </li>
          <li>
            <a href="/premium" className="group/li block">
              <div className={navDivClass}>
                <RiTwitterXFill className="mr-[10px] inline text-[23px]" />
                Premium
              </div>
            </a>
          </li>
          <li>
            <a href="/profile" className="group/li block">
              <div className={navDivClass}>
                <AiOutlineUser className="mr-[10px] inline text-[23px]" />
                Profile
              </div>
            </a>
          </li>
          <li>
            <a href="/more" className="group/li block">
              <div className={navDivClass}>
                <CgMoreO className="mr-[10px] inline text-[23px]" />
                Profile
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Circle

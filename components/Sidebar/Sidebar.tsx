import React from "react";
import TwitterHome from "../icons/TwitterHome";
import SidebarLink from "./SidebarLink";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <TwitterHome color="white" width="32px" height="32px" />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button className="bg-[#1d9bf0] mx-auto rounded-full text-white p-4">
        <span className="hidden xl:inline-block p-0 px-20">Tweet</span>
        <PencilIcon className="h-7 xl:hidden" />
      </button>

      <button className="flex items-center justify-items-stretch justify-evenly mt-auto mb-4 hover:bg-opacity-10 hover:bg-white py-4 rounded-full w-full text-[#d9d9d9]">
        <Image
          className="h-10 w-10 rounded-full xl:mr-2.5"
          src={
            "https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
          }
          width={32}
          height={32}
        />
        <div className="hidden xl:inline-block leading-5 text-white">
          <h4 className="text-white font-bold">Furkan Kaynak</h4>
          <span className="text-[#8b98a5]">@furkannkaynak</span>
        </div>
        <DotsCircleHorizontalIcon className="h-7 hidden xl:inline-block" />
      </button>
    </div>
  );
};

export default Sidebar;

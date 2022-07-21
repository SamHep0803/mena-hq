import React from "react";
import Img from "next/future/image";
import { Divider } from "./Divider";
import { IconType } from "react-icons";
import { FiAward, FiHome, FiUser } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { useRouter } from "next/router";
import NextLink from "next/link";

interface SidebarProps {
}

type NavItemProps = {
  name: string;
  link: string;
  icon: IconType;
};

const NavItemGroups: Array<Array<NavItemProps>> = [
  [
    {
      name: "Home",
      link: "/",
      icon: FiHome,
    },
  ],
  [
    {
      name: "My Profile",
      link: "/me",
      icon: FiUser,
    },
    {
      name: "Training",
      link: "/training",
      icon: FiAward,
    },
  ],
  [
    {
      name: "Discord",
      link: "/discord",
      icon: FaDiscord,
    },
  ],
];

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col fixed top-0 bottom-0 lg:left-0 p-2 w-[256px] h-full overflow-y-auto text-center bg-stone-900 z-10 border-r border-r-stone-700">
      <div className="flex h-20 items-center my-4 mx-8 justify-between">
        <Img src={"/MENA-logo.png"} alt={"VATMENA Logo"} />
      </div>
      <Divider />
      <div className="flex flex-col mt-8">
        {NavItemGroups.map((item, index) => (
          <div key={index} className="flex flex-col mb-6">
            {item.map((item, index) => (
              <NextLink key={index} href={item.link}>
                <div
                  className={`flex items-center my-1 mx-1 px-4 py-2 text-slate-300 rounded-md hover:bg-stone-700 hover:cursor-pointer transition ${
                    router.pathname === item.link ? "bg-stone-800" : ""
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </div>
              </NextLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

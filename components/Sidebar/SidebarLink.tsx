import React from "react";

interface SidebarLinkProps {
  text: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
  active?: boolean;
}

const activeStyles = "font-bold bg-white bg-opacity-5 ";

const SidebarLink = ({ text, Icon, active }: SidebarLinkProps) => {
  return (
    <div
      className={`text-[#d9d9d9] flex text-xl space-x-3 items-center justify-center hoverAnimation xl:justify-start xl:pl-2 ${
        active && activeStyles
      }`}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default SidebarLink;

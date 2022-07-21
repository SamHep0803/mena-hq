import React from "react";

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex px-4 h-20 items-center bg-stone-900 justify-end w-full fixed border-b-[1px] border-b-stone-700">
      <button type="button" className="flex rounded-full bg-green-400">
      </button>
    </div>
  );
};

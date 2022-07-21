import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-stone-800 text-slate-300">
      <Sidebar />
      <Header />
      <div className="ml-[256px] w-full">
        <div className="mt-20 p-6 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

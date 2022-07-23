import { useUser } from "@/lib/user";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<LayoutProps> = ({ children }) => {
  const user = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user]);

  let layout;

  if (!user) {
    return layout = (
      <div className="flex h-screen w-full">
        {children}
      </div>
    );
  }

  layout = (
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

  return layout;
};

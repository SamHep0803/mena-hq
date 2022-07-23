import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "@/utils/trpc";
import Image from "next/future/image";
import NextLink from "next/link";

const Login: NextPage = () => {
  return (
    <div className="w-full h-full flex bg-login-bg bg-no-repeat bg-cover bg-center items-center justify-center">
      <div className="w-full h-full flex bg-opacity-60 bg-black items-center justify-center">
        <div className="flex flex-col bg-stone-800 h-[400px] w-[400px] rounded-lg shadow-lg text-white items-center ">
          <div className="flex text-5xl font-bold justify-center w-full py-16">
            VATMENA HQ
          </div>
          <div className="flex w-full max-w-[256px] border-t border-stone-900" />
          <div className="flex flex-col w-full h-full justify-center items-center">
            <NextLink className="flex" href="/api/auth/callback">
              <div className="flex w-full max-w-xs p-4 text-3xl font-bold bg-green-600 hover:bg-green-700 hover:cursor-pointer rounded-xl justify-center transition">
                Login with{" "}
                <Image
                  src={"/VATSIM.png"}
                  className="w-32 ml-2 "
                />
              </div>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import Image from "next/image";
// import { Loader } from "./ui/footerLogo";
import { Social } from "./ui/footerSocialMedia";

export const Footer = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row items-center justify-center text-white">
        <div className="flex flex-col items-center">
          <Social />
          <p className="font-bold text-white p-2 rounded-xl text-base bg-gradient-to-r from-blue-500 to-cyan-500">
            ©Copyright 2024 Zephorium
          </p>
        </div>
      </div>
      <div className="inset-0">{/* <Loader /> */}</div>
    </div>
  );
};

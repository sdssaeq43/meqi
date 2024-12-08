// import Image from "next/image";
// import { Loader } from "./ui/footerLogo";
import { Social } from "./ui/footerSocialMedia";

export const Footer = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row items-center justify-center text-white">
        <div className="">
          <Social />
          <p>
            A boundless blockchain adventure ignited by a spark of innovation
            —ZEPH!
          </p>
        </div>
      </div>
      <div className="inset-0">{/* <Loader /> */}</div>
    </div>
  );
};

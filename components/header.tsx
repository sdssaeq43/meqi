import Image from "next/image";
import { MainText } from "./ui/headerText";
import { Dispatch, SetStateAction, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

interface SidebarProps {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setSidebar }: SidebarProps) => {
  const [isSidebar, setisSidebar] = useState(false);

  // Toggle the sidebar visibility
  function toggleSidebar() {
    setisSidebar((prevState) => !prevState);
    setSidebar((prevState) => !prevState); // Toggles between true and false
  }

  return (
    <div className="z-50 h-1/5 flex w-full">
      <div className="max-md:absolute max-md:-top-5 max-md:left-10 max-xs:flex max-xs:items-center max-xs:w-full ">
        <Image src="/logotxt.png" alt="Logo Text" width={200} height={200} />
      </div>
      <div className="flex max-md:justify-center max-xs:justify-end text-white w-full">
        <div className="flex items-center gap-4 max-xs:hidden">
          <div className="font-bold relative border-2 rounded-lg p-2">
            <MainText text="Resources" />
          </div>
          <div className="font-bold relative border-2 rounded-lg p-2">
            <MainText text="NFT Vault" />
          </div>
          <div className="font-bold relative border-2 rounded-lg p-2">
            <MainText text="Earn ZEPH" />
          </div>
        </div>
        <div
          className="z-10 flex items-center p-4 max-sm:hidden"
          onClick={toggleSidebar}
        >
          {isSidebar ? (
            <div className="">
              <FaXmark size={25} color="#fff" />
            </div>
          ) : (
            <IoReorderThreeOutline size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

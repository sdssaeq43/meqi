"use client";
import { Meteors } from "@/components/ui/meteors";
import { SparklesCore } from "@/components/ui/sparkles";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MainLoader } from "@/components/ui/mainLogo";
import HyperText from "@/components/ui/hyper-text";
import { useState } from "react";
import { Sidebar } from "../components/sidebar";

export default function Home() {
  const [SidebarShow, setSidebarShow] = useState(false);

  return (
    <div className="bg-black max-xs:text-xs font-[family-name:var(--font-orbitron)]">
      <main className="min-h-screen grid grid-rows-[1fr_auto]">
        <Header setSidebar={setSidebarShow} />
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
          <Meteors number={30} />
        </div>
        <section className="absolute inset-0 flex justify-center items-center text-white">
          {SidebarShow && <Sidebar />}
          <div className="flex justify-center items-center pb-8">
            <div>
              <div className="p-4">
                <p className="font-extrabold text-3xl max-xs:text-base">
                  What Makes Zephorium Unique?
                </p>
                <p className="text-xl max-xs:text-base">
                  A boundless blockchain adventure ignited by a spark of
                  innovation —ZEPH!
                </p>
              </div>

              <div className="max-xs:pt-8 pt-40 text-xl max-xs:text-xs">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold">TOP LEADER</p>
                  <div>
                    <HyperText text="-" className="text-2xl text-white" />
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">TOTAL USER</p>
                    <div>
                      <HyperText text="-" className="text-2xl  text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">TOTAL MINING</p>
                    <div>
                      <HyperText text="-" className="text-2xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-30 hidden">
              <MainLoader />
            </div>
          </div>
        </section>
        <SparklesCore
          id="tsparticlesfullpage"
          background="black"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={5}
          className="absolute inset-0 h-dvh"
          particleColor="#3b82f6"
        />
        <Footer />
      </main>
    </div>
  );
}

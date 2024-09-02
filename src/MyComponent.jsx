import React from "react";
import Divider from "./Divider";
import GallerySection from "./GallerySection";
import About from "./About";
import Navbar from "./Navbar";
import SideIcon from "./SideIcon";

export default function MyComponent() {
  return (
    <>
      <main className="main flex justify-between">
        <div className="left w-1/2"></div>
        <div className="right w-1/2 h-screen  place-content-center pt-5">
          <section className="flex border justify-around pt-4 w-100  h-96 shadow-[6px_6px_4px_rgba(0,0,0,0.4)] rounded-2xl bg-side-1">
            <SideIcon />
            <div className="flex flex-col">
              <Navbar />
              <About />
            </div>
            <div className="flex shrink-0 my-auto w-2 h-16 rounded-lg shadow-[4px_4px_5px_rgba(0,0,0,0.25)] bg-gradient-to-b from-bar-1 to-bar-2 ..." />
          </section>

          <Divider />

          <section className="flex border pl-3 mt-4 pt-4 w-100  h-96 shadow-[6px_6px_4px_rgba(0,0,0,0.4)] rounded-2xl bg-side-1">
            <SideIcon />
            <div className="flex flex-col ml-3">
              <div className="flex justify-between w-98  h-14 items-center rounded-3xl text-gray-400">
                <div className="left">
                  <button className="flex bg-black font-medium  hover:text-white hover:scale-110 transition duration-200 ease-in-out  rounded-2xl p-2 h-12 w-32  place-content-center place-items-center cursor-pointer hover:shadow-2xl hover:shadow-black">
                    Gallery
                  </button>
                </div>
                <div className="right flex w-1/2 items-center">
                <div className="shadow-lg ml-4 rounded-3xl shadow-black w-32"> 
                  <button className="flex rounded-3xl  p-2 h-11 w-32  bg-white bg-opacity-0  place-content-center place-items-center cursor-pointer  shadow-[0px_0px_7px_rgba(255,255,255,0.25)]">
                   + About Me
                  </button>
                  </div>
                  <div className=" cursor-pointer  w-24 bg-cover h-24  bg-left" />
                  <div className=" cursor-pointer   w-24 bg-cover h-24 bg-right" />
                </div>
              </div>
              <GallerySection/>
            </div>
          </section>

          <Divider />
        </div>
      </main>

      {/* <main className="flex overflow-hidden flex-col items-end px-20 py-24 rounded-3xl shadow-2xl max-md:px-5">
          <section className="flex gap-4 px-3.5 pt-4 pb-7 ml-0 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)]">
            <SideIcon/>
            <div className="flex flex-col max-md:max-w-full">
              <Navbar/>
              <About/>
            </div>
            <div className="flex shrink-0 my-auto w-2 h-16 rounded-lg shadow-[4px_4px_5px_rgba(0,0,0,0.25)]" />
          </section>
          <Divider />
          <section className="flex flex-wrap gap-4 px-5 pt-0.5 pb-5 mt-4 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)] max-md:pr-5">
            <SideIcon />
            <GallerySection />
          </section>
          <Divider />
        </main> */}
    </>
  );
}

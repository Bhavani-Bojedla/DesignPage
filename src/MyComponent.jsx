import React, { useState } from "react";
import Divider from "./Divider";
import GallerySection from "./GallerySection";
import About from "./About";
import Navbar from "./Navbar";
import SideIcon from "./SideIcon";

export default function MyComponent() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <main className="flex justify-between w-full main">
        <div className="w-1/ left "></div>
        <div className="w-1/2 pt-5 2560:h-screen right place-content-center">
          <section className="flex 2560:pl-7 mt-4 lg:pt-4 2560:pt-7 2560:w-110 lg:w-100 px-5 lg:h-96 2560:h-95 shadow-[6px_6px_4px_rgba(0,0,0,0.4)] rounded-2xl bg-side-1">
            <SideIcon />
            <div className="flex flex-col ml-5 2560:ml-10">
              <Navbar />
              <About />
            </div>
            <div className="flex 2560:ml-9 lg:ml-5 shrink-0 my-auto w-2 h-16 rounded-lg shadow-[4px_4px_5px_rgba(0,0,0,0.25)] bg-gradient-to-b from-bar-1 to-bar-2 ..." />
          </section>

          <Divider />

          <section className="flex 2560:pl-7 lg:pl-5 pt-4  2560:w-110 lg:w-100  h-auto pb-10 shadow-[6px_6px_4px_rgba(0,0,0,0.4)] rounded-2xl bg-side-1">
            <SideIcon />
            <div className="flex flex-col 2560:ml-10 lg:ml-5">
              <div className="flex items-center text-gray-400 2560:gap-x-72 lg:justify-between 2560:w-100 lg:w-98 h-14 rounded-3xl">
                <div className="left">
                  <button className="flex w-32 h-12 p-2 text-lg font-normal text-white bg-black cursor-pointer hover:text-white rounded-2xl place-content-center place-items-center hover:shadow-2xl hover:shadow-black">
                    Gallery
                  </button>
                </div>
                <div className="flex items-center w-1/2 right">
          
                  <div className="w-32 ml-4 shadow-lg rounded-3xl shadow-black">
                    <label className="flex rounded-3xl text-sm p-2 h-11 w-32 text-white font-medium bg-white bg-opacity-0 place-content-center place-items-center cursor-pointer shadow-[inset_0px_0px_5px_rgba(255,255,255,0.3),0px_0px_9px_rgba(255,255,255,0.3)]">
                      + ADD IMAGE
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden"
                        onChange={handleImageUpload} 
                      />
                    </label>
                  </div>
                  
                <div className="w-24 h-24 mt-1 bg-left bg-cover cursor-pointer " />
                <div className="w-24 h-24 mt-1 bg-right bg-cover cursor-pointer " />
              </div>
               
              </div>

              
             

              {/* Newly Added Images */}
              <div className="flex flex-wrap mt-4">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className="w-40 h-40 m-4 ml-5 bg-center bg-cover rounded-3xl " 
                    style={{ backgroundImage: `url(${image})` }} 
                  />
                ))}
              </div>

              <GallerySection />
            </div>
            
          </section>
          <Divider/>
        </div>
      </main>
    </>
  );
}

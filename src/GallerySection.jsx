import React from 'react'

export default function GallerySection() {

    return (
      <div className="flex flex-col mt-6 ">
              <div className="flex justify-between 2560:w-100 lg:w-98 ">
                <img  className="w-40 h-40 bg-cover bg-rect rounded-3xl" />
                <img  className="w-40 h-40 bg-cover bg-rect rounded-3xl" />
                <img  className="w-40 h-40 bg-cover bg-rect rounded-3xl" />
              </div>
      </div>
    );
  }
import React from 'react'

export default function GallerySection() {

    return (
      <div className="flex flex-col mt-6 ">
              <div className="flex justify-between 2560:w-100 lg:w-98 ">
                <img  className="bg-cover h-36 w-36 bg-rect rounded-3xl" />
                <img  className="bg-cover h-36 w-36 bg-rect rounded-3xl" />
                <img  className="bg-cover h-36 w-36 bg-rect rounded-3xl" />
              </div>
      </div>
    );
  }
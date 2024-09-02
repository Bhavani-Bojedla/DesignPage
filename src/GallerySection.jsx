import React from 'react'

export default function GallerySection() {

    return (
      <div className="flex flex-col mt-6 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="flex w-98 justify-between ">
                <img  className="bg-rect h-40  w-40 bg-cover rounded-3xl" />
                <img  className="bg-rect h-40 w-40 bg-cover rounded-3xl" />
                <img  className="bg-rect h-40 w-40  bg-cover rounded-3xl" />
              </div>
      </div>
    );
  }
// import React from 'react'
// import { GrCircleQuestion } from "react-icons/gr";
// export default function SideIcon() {
//       return (
//         <div className="flex flex-col self-start">
//           <div  className="mt-4 ml-3 cursor-pointer  w-6  aspect-square bg-que" />
//           <div className="flex flex-wrap gap-px items-start mt-28 w-full rounded-sm max-md:mt-10">
//             {/* {[...Array(6)].map((_, index) => (
//               <div
//                 key={index}
//                 className={`flex ${index < 4 ? 'shrink-0' : 'grow shrink h-2.5'} rounded-sm bg-neutral-600 ${index < 4 ? 'h-[9px] w-[9px]' : 'w-[7px]'}`}
//               />
//             ))} */}
//              <div  className="mt-4 ml-3 cursor-pointer  w-6  aspect-square bg-box" />
//           </div>
//         </div>
//       );
//     }
import React from 'react'
export default function SideIcon() {
      return (
        <div className="flex flex-col self-start">
          <div  className=" cursor-pointer  w-6  aspect-square bg-que" />
          <div  className="mt-20  cursor-pointer  w-6 h-8  aspect-square bg-box" />
        </div>
      );
    }
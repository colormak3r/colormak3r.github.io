"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageModal() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex h-screen w-screen p-20 bg-mine-1 z-50"
          onClick={() => e.stopPropagation()}
        >
          <button className="fixed top-0 right-0 m-5 px-4 py-2 bg-mine-4 hover:bg-mine-5 rounded-md">
            X
          </button>
          <div className="relative flex w-full h-full rounded-2xl">
            <Image
              //src="/img/oddinaryfarm/gameplay1.jg"
              src="/img/profile/about.jpg"
              fill
              alt=""
              className="object-contain"
            />
          </div>
          {/* <div
                onClick={(e) => e.stopPropagation()}
                className="w-5/6 h-5/6 bg-mine-1 flex flex-col rounded-md justify-center items-center  shadow-2xl z-50 border-mine-8 border-1"
            >
                <div className="w-full p-2 bg-mine-3 flex justify-between items-center rounded-t-md font-bold">
                    <div>Modal</div>
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 hover:bg-mine-5 rounded-md"
                    >
                        X
                    </button>
                </div>
                
            </div> */}
        </div>
      )}
    </>
  );
}

// 'use client';

// import Image from "next/image";
// import { useState } from "react";

// export default function ImageModal() {
//   const [showModal, setShowModal] = useState(true);
//   return (
//     <>
//       {showModal && (
//         <div
//             className="fixed inset-0 flex justify-center items-center h-screen w-screen pt-20"
//             onClick={() => setShowModal(false)}
//         >
//             <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="w-5/6 h-5/6 bg-mine-1 flex flex-col rounded-md justify-center items-center  shadow-2xl z-50 border-mine-8 border-1"
//             >
//                 <div className="w-full p-2 bg-mine-3 flex justify-between items-center rounded-t-md font-bold">
//                     <div>Modal</div>
//                     <button
//                         onClick={() => setShowModal(false)}
//                         className="px-4 py-2 hover:bg-mine-5 rounded-md"
//                     >
//                         X
//                     </button>
//                 </div>
//                 <div className="relative flex w-full h-full rounded-2xl">
//                     <Image
//                         // src="/img/oddinaryfarm/gameplay1.jpg"
//                         src="/img/profile/about.jpg"
//                         fill
//                         alt=""
//                         className="object-contain"
//                     />
//                 </div>
//             </div>
//         </div>
//       )}
//     </>
//   );
// }

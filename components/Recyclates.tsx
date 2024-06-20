import React from "react";

export default function Recyclates() {
  return (
    <div className="mx-auto bg-white">
      <div className="w-full">
      <div className="flex">
        <div className="w-[700px]  relative -top-24 lg:top-[-320px] -mr-10 lg:-mr-32">
           <img className="w-full object-cover " src="images/left.png" alt="" />
        </div>
        <div className="w-[700px]  relative -top-24 lg:top-[-320px] -mx-10 lg:-mx-32">
           <img className="w-full object-cover " src="images/front.png" alt="" />
        </div>
        <div className="w-[700px]  relative -top-24 lg:top-[-320px] -ml-10 lg:-ml-32">
           <img className="w-full object-cover " src="images/right.png" alt="" />
        </div>
      
      </div>
      </div>
    </div>
  );
}

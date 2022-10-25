import React, { useState } from "react";
import Image from "next/image";

function Card() {
  const [cardClassName, setCardClassName] = useState(false);
  const [widen, setWiden] = useState();
  const widthHandler = () => {
    setWiden(true);
  };
  return (
    <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="relative flex my-5 h-full w-5/6">
        <div className="absolute bg-[url('/2.jpg')] bg-auto bg-center bg-no-repeat flex-1 overflow-hidden">
          deneme
        </div>
        <div className="bg-[url('/1.jpg')] bg-auto bg-center bg-no-repeat  overflow-hidden">
          deneme
        </div>
        <div className="bg-[url('/3.jpg')] bg-auto bg-center bg-no-repeat  overflow-hidden">
          deneme
        </div>
        <div className="bg-[url('/4.jpg')] bg-auto bg-center bg-no-repeat  overflow-hidden">
          deneme
        </div>
        <div className="bg-[url('/5.jpg')] bg-auto bg-center bg-no-repeat overflow-hidden">
          deneme
        </div>
      </div>
    </div>
  );
}

export default Card;

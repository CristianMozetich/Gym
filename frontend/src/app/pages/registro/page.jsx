import React from "react";
import Register from "../../components/RegisterForm/RegisterForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="/img/gymregister.jpg"
        alt="logo"
        layout="fill" objectFit="cover"   
      ></Image>
      <Register />
    </div>
  );
};

export default page;

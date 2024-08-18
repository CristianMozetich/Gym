import React from "react";
import FaceIcon from "@/app/icons/FaceIcon";
import InstaIcon from "@/app/icons/InstaIcon";
import LinkedInIcon from "@/app/icons/LinkedInIcon";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-96 justify-center grid grid-cols-12 bg-slate-50 dark:bg-gray-950 dark:text-white p-8">
      <div className="col-span-3 flex m-3 justify-start">
        <h1 className="text-5xl">
          <span className="text-button dark:text-slate-100">180</span>{" "}
          <span className="text-blue-500 dark:text-green-500">Funcional</span>
        </h1>
      </div>
      <div className="col-span-9 flex justify-between m-6 gap-8 w-4/5">
        <div className="m-5 flex flex-col gap-2">
          <h2 className="text-xl">Córdoba, Argentina</h2>
          <h2>
            Desarrollado por{" "}
            <Link
              target="_blank"
              className="hover:text-blue-500 text-button  dark:text-blue-300 tracking-wide"
              href={"https://github.com/CristianMozetich"}
            >
              Cristian
            </Link>
          </h2>
        </div>
        <div className="m-5 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <h2 className="hover:text-blue-500 cursor-pointer">Linkedin</h2>
            <LinkedInIcon />
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="hover:text-blue-500 cursor-pointer">Instagram</h2>
            <InstaIcon />
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="hover:text-blue-500 cursor-pointer">Facebook</h2>
            <FaceIcon />
          </div>
        </div>
        <div className="m-5">
          <form className="flex flex-col gap-2">
            <h1>Dejanos tu mensaje</h1>
            <input className="border border-solid rounded-lg" type="text" />
            <Button className="bg-button text-white hover:bg-blue-800 w-16">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

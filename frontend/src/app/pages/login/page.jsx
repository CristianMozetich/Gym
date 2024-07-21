"use client";
import React from "react";
import Login from "../../components/LoginForm/LoginForm";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/react";
import GoogleIcon from "../../icons/GoogleIcon";
import FaceIcon from "../../icons/FaceIcon";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="h-screen w-full relative ">
      <Image src="/img/gym.jpg" alt="logo" layout="fill" objectFit="cover" />
      <div className="absolute m-4 w-1/2 h-5/6 flex items-center justify-center flex-col rounded-xl right-3 bg-slate-50">
        <div className="w-lg flex flex-col items-center">
          <h1 className="text-black text-4xl">Bienvenido a 180 Funcional</h1>
          <span className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            a, Lorem
          </span>
        </div>
        <Login />
        <Divider orientation="horizontal" className="w-1/2" />
        <div className="m-4">
          <span className="text-black">¿No tienes cuenta?</span>
          <Link href={"/pages/registro"} className="text-black font-bold m-2">
            Registrate
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => signIn("google")}
            className="w-80 h-9 gap-5 bg-slate-200 dark:bg-button  rounded-xl  flex items-center justify-center"
          >
            <GoogleIcon />
            <span>Ingresa con Google</span>
          </Button>
          <Button
            onClick={() => signIn("facebook")}
            className="w-80 h-9 gap-1 bg-slate-200 dark:bg-button  rounded-xl  flex items-center justify-center"
          >
            <FaceIcon />
            <span>Ingresa con Facebook</span>
          </Button>
          <Button onClick={() => signOut()}>Sing Out</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

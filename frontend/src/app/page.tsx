import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
export default function Home() {
  return (
<main className="min-h-screen max-w-full gap-6 grid grid-cols-2">
  <div className="flex items-center justify-center m-3">
    <Image
      src="/img/funcional.jpg"
      alt="logo"
      className="rounded-xl shadow-md"
      width={400}
      height={400}
    ></Image>
  </div>
  <div className="flex items-center justify-start m-3">
    <div className="flex gap-4 flex-col justify-center max-w-lg">
      <h1 className="text-8xl tracking-wider">180 Funcional</h1>
      <h2 className="tracking-wider text-2xl">
        En nuestro portal de fitness personalizado te ofrecemos una plataforma
        diseñada para ayudarte a alcanzar tus objetivos de manera efectiva y
        personalizada. Ya sea que estés buscando perder peso, ganar músculo o
        simplemente mejorar tu salud general, estamos aquí para acompañarte en
        cada paso del camino.
      </h2>
      <Button
        className="w-32 tracking-wider"
        as={Link}
        color="primary"
        href="/pages/registro"
        variant="flat"
      >
        Registro
      </Button>
      <Button
        className="w-32 tracking-wider"
        as={Link}
        color="primary"
        href="/pages/login"
        variant="flat"
      >
        Login
      </Button>
    </div>
  </div>
  <div className="flex items-center justify-end m-5">
    <div className="flex flex-col gap-4 max-w-lg">
      <h1 className="text-4xl tracking-wider">
        Trabajamos de manera personalizada en base a tus objetivos
      </h1>
      <h2 className="tracking-wider text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vel
        omnis vero maiores reprehenderit libero harum accusamus doloremque
        dolorem, tenetur, officiis deleniti porro veniam ex? Dolor repellat
        corrupti quo aspernatur.
      </h2>
    </div>
  </div>
  <div className="flex items-center justify-center m-5">
    <Image
      src={"/img/pesas.jpg"}
      alt="logo"
      width={400}
      height={400}
      className="rounded-xl shadow-md"
    ></Image>
  </div>
</main>

  );
}

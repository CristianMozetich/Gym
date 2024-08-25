import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
export default function Home() {
  return (
    <main className="min-h-screen max-w-full gap-6 lg:grid lg:grid-cols-2 items-center justify-center flex flex-col overflow-hidden">
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
          <h1 className="md:text-8xl text-6xl tracking-wider">
            <span className="text-button dark:text-slate-100">180 </span>
            <span className="text-blue-500 dark:text-green-500">Funcional</span>
          </h1>
          <h2 className="tracking-wider text-3xl">
            Te ofrecemos una plataforma diseñada para ayudarte a organizar tus
            entrenamientos de manera simple.
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
            Organización personalizada y en base a tus objetivos
          </h1>
          <h2 className="tracking-wider text-2xl">
            Nuestra plataforma te brinda la posibilidad de administrar tus planes de
            entrenamientos diferenciando la entrada en calor, el desarollo y la vuelta a la calma.
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

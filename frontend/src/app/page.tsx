import ModalComponent from "./components/modal";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-col gap-4 m-4">
        <h1 className="text-3xl">Bienvenidos al Gym</h1>
        <h2>
          Tu Espacio Personalizado para Alcanzar tus Metas En nuestro portal de
          fitness personalizado, te ofrecemos una plataforma diseñada para
          ayudarte a alcanzar tus objetivos de manera efectiva y personalizada.
          Ya sea que estés buscando perder peso, ganar músculo o simplemente
          mejorar tu salud general, estamos aquí para acompañarte en cada paso
          del camino.
        </h2>
      </div>
      <ModalComponent />
    </main>
  );
}

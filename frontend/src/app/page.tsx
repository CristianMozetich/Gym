import ModalComponent from "./components/modal";
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="flex flex-col gap-4 m-4">
        <h1 className="text-3xl">Bienvenidos al Gym</h1>
        <h2>¿Cuales son tus objetivos?</h2>
        <h1>Aquí puedes encontrar tu plan de entrenamiento</h1>
      </div>
      <ModalComponent />
    </main>
  );
}

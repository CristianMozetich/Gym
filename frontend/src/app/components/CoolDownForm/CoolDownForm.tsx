import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { Fetching } from "../../api/fetching";

const CoolDownForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { postCooldown } = Fetching();
  return (
    <div>
      <h1>Cool Down</h1>
      <form
        onSubmit={postCooldown}
        className="flex flex-col max-w-96  items-center"
        ref={formRef}
      >
        <Input
          name="ejercicioUno"
          className="rounded-lg m-2 p-2"
          type="text"
          placeholder="Ejercicio 1"
        />
        <Input
          name="ejercicioDos"
          className="rounded-lg m-2 p-2"
          type="text"
          placeholder="Ejercicio 2"
        />
        <Input
          name="ejercicioTres"
          className="rounded-lg m-2 p-2"
          type="text"
          placeholder="Ejercicio 3"
        />
        <Input
          placeholder="duration"
          name="duration"
          type="string"
          className="rounded-lg m-2 p-2"
        />
        <Input
          placeholder="sets"
          name="sets"
          type="string"
          className="rounded-lg m-2 p-2"
        />
        <Button type="submit" className="w-42" color="primary">
          Create
        </Button>
      </form>
    </div>
  );
};

export default CoolDownForm;

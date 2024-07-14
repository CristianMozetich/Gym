import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { Fetching } from "../../api/fetching";
const MainForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { postMain } = Fetching();
  return (
    <div>
      <h1>Main</h1>
      <form ref={formRef} onSubmit={postMain} className="flex flex-col max-w-96 items-center">
        <Input
          placeholder="name"
          name="name"
          type="text"
          className="rounded-lg m-2 p-2"
        />
        <Input
          placeholder="description"
          name="description"
          type="text"
          className="rounded-lg m-2 p-2"
        />
        <Input
          placeholder="duration"
          name="duration"
          type="number"
          className="rounded-lg m-2 p-2"
        />
        <Input
          placeholder="sets"
          name="sets"
          type="number"
          className="rounded-lg m-2 p-2"
        />
        <Input
          placeholder="reps"
          name="reps"
          type="number"
          className="rounded-lg m-2 p-2"
        />
        <Input
          placeholder="rest"
          name="rest"
          type="number"
          className="rounded-lg m-2 p-2"
        />
        <Input
          name="userId"
          type="text"
          placeholder="userId"
          className="rounded-lg m-2 p-2"
        />
        <Button type="submit" className="w-42" color="primary">
          Create
        </Button>
      </form>
    </div>
  );
};

export default MainForm;

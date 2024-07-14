import { useEffect, useState } from "react";
import { Fetching } from "@/app/api/fetching";

const GetUsersAdmin = () => {
  const { users, getUsers } = Fetching();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const toggleObjetive = (userId: string) => {
    if (selectedUserId === userId){
      setSelectedUserId(null);
    } else {
      setSelectedUserId(userId);
    } 
     
  };

  const selectedUser = users.find(user => user._id === selectedUserId);

  return (
    <div className="grid grid-cols-2">
      {/* Lista de usuarios */}
      <div className="flex flex-col">
        {users.map((user: any) => (
          <div key={user._id}>
            <button
              onClick={() => toggleObjetive(user._id)}
              className="font-bold text-xl mb-2"
            >
              {user.name}
            </button>
          </div>
        ))}
      </div>

      {/* Lista de objetivos */}
      <div>
        {selectedUser && (
          <div className="grid grid-cols-1 gap-4">
            {selectedUser.objetive.map((obj: any) => (
              <div
                className="flex flex-col items-center border border-solid rounded-xl p-4"
                key={obj._id}
              >
                <p className="font-bold">{obj.name}</p>
                <p>{obj.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUsersAdmin;


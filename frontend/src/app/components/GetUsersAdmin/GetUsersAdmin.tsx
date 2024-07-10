import { useEffect, useState } from "react";
import { Fetching } from "@/app/api/fetching";

const GetUsersAdmin = () => {
  const { users, getUsers } = Fetching();
  const [openObjetives, setOpenObjetives] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const toggleObjetive = (userId: string) => {
    setOpenObjetives((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <div>
      {users.map((user: any) => (
        <div key={user._id}>
          <button onClick={() => toggleObjetive(user._id)} className="font-bold text-xl">
            {user.name}
          </button>
          {openObjetives[user._id] && (
            <div className="flex flex-col items-center">
              {user.objetive.map((obj: any) => (
                <div className="flex flex-col items-center m-2 gap-2" key={obj._id}>
                  <p className="font-bold">{obj.name}</p>
                  <p>{obj.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GetUsersAdmin;


import { useEffect, useState } from "react";
import Biodatas from "./Biodatas";

const UserDetails = () => {
  const [userData, setUser] = useState([]);
  console.log(userData);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then(res => res.json())
      .then(data => {
        setUser(data);

        console.log(data);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl text-center font-bold mt-10 text-[#18c4cc]">
        Biodata Details
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
        {userData.map(user => (
          <Biodatas key={user._id} user={user}></Biodatas>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;

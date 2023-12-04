import { useEffect, useState } from "react";

const useUser = () => {
  const [userData, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return [userData, loading];
};

export default useUser;

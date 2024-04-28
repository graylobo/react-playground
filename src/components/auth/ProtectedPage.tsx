// src/components/ProtectedPage.js
import React, { useEffect, useState } from "react";
import { getProtectedData } from "../../services/api";

const ProtectedPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const protectedData = await getProtectedData();
        setData(protectedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Page</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default ProtectedPage;

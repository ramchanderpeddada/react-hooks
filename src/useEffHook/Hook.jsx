import { useState, useEffect } from "react";

const apiUrl = "https://my-fake-api.com/endpoint";

export default function Hook() {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setState({ loading: false, data, error: null });
      } catch (error) {
        setState({ loading: false, data: null, error });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error.message}</p>}
      {state.data && (
        <ul>
          {state.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

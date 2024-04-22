import { createRoot, useState } from "react-dom/client";
import { useState, useEffect } from "react";

const API_URL = process.env.API_URL || "http://localhost:8080/api";

console.log("API_URL", API_URL);
console.log("env", process.env.API_URL);
console.log("node_env", process.env.NODE_ENV);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCount().then((res) => setCount(res.count));
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          addToCount().then(() => {
            getCount().then((res) => setCount(res.count));
          });
        }}
      >
        Add Record to Count Database
      </button>
    </div>
  );
}

function getCount() {
  return fetch(API_URL).then((res) => res.json());
}

async function addToCount() {
  return fetch(`${API_URL}/add`).then((res) => res.json());
}

const root = createRoot(document.getElementById("target"));
root.render(<App />);

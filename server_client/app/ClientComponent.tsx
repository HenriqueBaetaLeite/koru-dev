"use client";

import { useState, useEffect } from "react";

export default function ClientBox() {
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(false);

  useEffect(() => setMount(true), []);

  return (
    <div className="border-4 border-red-600 bg-red-100 rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-red-800 mb-2">
        🔴 Client Component
      </h2>
      <p>
        Este conteúdo depende do <b>JavaScript do navegador.</b>
      </p>
      {mount && (
        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
        >
          Cliquei {count} vezes
        </button>
      )}
    </div>
  );
}

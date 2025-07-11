import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Full Stack Test
        </h1>
        <p className="text-gray-600 mb-4">
          Frontend is running with Tailwind CSS!
        </p>
        <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
          <p className="text-blue-700">
            ✅ React + Vite + Tailwind CSS working
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

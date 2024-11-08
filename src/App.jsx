// App.jsx
import React from "react";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="w-1/3 bg-gray-800 text-white flex flex-col">
       
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">WS</h2>
          <button className="text-gray-400 hover:text-white">⋮</button>
        </div>

       
        <div className="p-4 border-b border-gray-700">
          <input
            type="text"
            placeholder="Buscar o empezar un chat nuevo"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

       
        <div className="flex-grow overflow-y-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
            >
             
              <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>

            
              <div className="ml-4 flex-grow">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">Rusa {index + 1}</h3>
                  <span className="text-xs text-gray-400">P.M</span>
                </div>
                <p className="text-sm text-gray-400 truncate">
                  Msj
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área de Chat (Placeholder) */}
      <div className="w-2/3 bg-black flex items-center justify-center text-gray-500">
        <p>Open Chat</p>
      </div>
    </div>
  );
}

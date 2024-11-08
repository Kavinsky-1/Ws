import React, { useState } from "react";

export default function App() {

  const [isOpen, setIsOpen] = useState(null);

  const contacts = [
    "Rusa 1",
    "Rusa 2",
    "Rusa 3",
    "Rusa 4",
    "Rusa 5",
    "Rusa 6",
    "Rusa 7",
    "Rusa 8",
    "Rusa 9",
    "Rusa 10",
  ];

  return (
    <div className="flex h-screen bg-gray-900">

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
          {contacts.map((contact, index) => (
            <div
            key={index}
            onClick={() => setIsOpen(index)}
            className={`flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 ${
              isOpen === index ? "bg-gray-700" : ""
            }`}
          >
          
              <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
              <div className="ml-4 flex-grow">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">{contact}</h3>
                  <span className="text-xs text-gray-400">P.M</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Msj</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/3 bg-black flex flex-col">
        {isOpen !== null ? (
          <div className="flex flex-col h-full">
     
            <header className="flex items-center justify-between bg-gray-800 p-2 border-b border-gray-700 text-white">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-3"></div>
                <h2>{contacts[isOpen]}</h2>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-gray-400 hover:text-white">Call</button>
                <button className="text-gray-400 hover:text-white">⋮</button>
              </div>
            </header>

            <div className="flex-grow overflow-y-auto p-4 text-whiteb bg-gray-800">
              
            </div>

            <div className="p-4 border-t border-gray-700 flex items-center bg-gray-800">
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="ml-2 text-white hover:text-gray-400">Enviar</button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>No hay ningun chat abierto todavia....</p>
          </div>
        )}
      </div>
    </div>
  );
}

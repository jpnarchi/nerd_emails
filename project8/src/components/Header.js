import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">MotoRide</div>
      <nav>
        <button className="bg-blue-500 px-4 py-2 rounded-full">Menú</button>
      </nav>
    </header>
  );
};

export default Header;
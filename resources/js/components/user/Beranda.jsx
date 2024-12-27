import React from 'react';

const Beranda = () => {
  const handleRegister = () => {
    alert('Fitur Daftar Sekarang akan segera tersedia!');
  };

  return (
    <div
      className="text-center h-[75vh] bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/b4/bb/c6/b4bbc6d92cf040d7a1e23baa29ad1ff6.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-3">DESACANG</h1>
      <p className="text-lg text-gray-100 mb-6">
        Website Untuk Mendata Penduduk Desa
      </p>
      <button
        onClick={handleRegister}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
      >
        Daftar Sekarang
      </button>
    </div>
  );
};

export default Beranda;

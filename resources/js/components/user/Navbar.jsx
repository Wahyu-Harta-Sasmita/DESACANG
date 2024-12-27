import React from "react";

const Navbar = () => {
    return (
        <div className="bg-green-500 py-2 px-4 flex justify-between text-white">
            <a href="" className="font-bold text-[30px]">DESACANG</a>
            <div className="flex justify-between w-[50vh]">
                <a href="" className="hover:bg-gray-700 p-3 rounded-md">Data Penduduk</a>
                <a href="" className="hover:bg-gray-700 p-3 rounded-md">Daftar Penduduk</a>
            </div>
        </div>
    );
};

export default Navbar;

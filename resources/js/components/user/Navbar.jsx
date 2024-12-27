import React from "react";
import { Link } from '@inertiajs/react';

const Navbar = () => {
    return (
        <div className="bg-green-500 py-2 px-4 flex justify-between text-white">
            <Link href="/" className="font-bold text-[30px]">DESACANG</Link>
            <div className="flex justify-between w-[70vh]">
                <Link href="/notifikasi" className="hover:bg-gray-700 p-3 rounded-md font-semibold">Notifikasi</Link>
                <Link href="/data-penduduk" className="hover:bg-gray-700 p-3 rounded-md font-semibold">Data Saya</Link>
                <Link href="/daftar-penduduk" className="hover:bg-gray-700 p-3 rounded-md font-semibold">Daftar Penduduk</Link>
            </div>
        </div>
    );
};

export default Navbar;

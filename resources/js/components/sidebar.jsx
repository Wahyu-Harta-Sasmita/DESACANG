import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white h-screen">
            <div className="p-4 text-center text-xl font-bold border-b border-gray-700">Admin Dashboard</div>
            <ul className="mt-6 space-y-2">
                <li>
                    <a href="/validasi" className="block py-2 px-4 hover:bg-gray-700 bg-gray-700">Validasi Data</a>
                </li>
                <li>
                    <a href="/pendaftaran" className="block py-2 px-4 hover:bg-gray-700">Pendaftaran Manual</a>
                </li>
                <li>
                    <a href="/manajemen" className="block py-2 px-4 hover:bg-gray-700">Manajemen Data</a>
                </li>
                <li>
                    <a href="/laporan" className="block py-2 px-4 hover:bg-gray-700">Laporan Data</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
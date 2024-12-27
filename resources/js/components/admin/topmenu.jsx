import React from 'react';

const TopMenu = ({ username, onLogout }) => {
    return (
        <div className="items-center justify-between bg-gray-800 text-white px-4 py-2 shadow">
           
            {/* Menu kanan */}
            <div className="flex items-center ml-auto space-x-4">
                {/* Notifikasi */}
                <button className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-300 hover:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10 2a6 6 0 016 6v3.586l.707.707A1 1 0 0116.414 14H3.586a1 1 0 01-.707-1.707L4 11.586V8a6 6 0 016-6z" />
                        <path
                            fillRule="evenodd"
                            d="M8 18a2 2 0 104 0H8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {/* Nama Pengguna */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-300">Hi, {username}</span>
                    <button
                        onClick={onLogout}
                        className="text-sm bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;

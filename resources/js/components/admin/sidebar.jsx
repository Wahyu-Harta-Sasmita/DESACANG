import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Logika custom untuk memeriksa rute aktif (khusus kasus Validasi)
    const isValidasiActive = location.pathname === '/admin' || location.pathname === '/validasi';

    return (
        <div className="w-64 bg-gray-800 text-white h-screen">
            <div className="p-4 text-center text-xl font-bold border-b border-gray-700">
                Desacang
            </div>
            <ul className="mt-6 space-y-2">
                <li>
                    <NavLink
                        to="/validasi"
                        className={({ isActive }) =>
                            isActive || isValidasiActive
                                ? 'block py-2 px-4 bg-gray-700 text-white rounded'
                                : 'block py-2 px-4 hover:bg-gray-600 rounded'
                        }
                    >
                        Validasi Data
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pendaftaran"
                        className={({ isActive }) =>
                            isActive
                                ? 'block py-2 px-4 bg-gray-700 text-white rounded'
                                : 'block py-2 px-4 hover:bg-gray-600 rounded'
                        }
                    >
                        Pendaftaran Manual
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/manajemen"
                        className={({ isActive }) =>
                            isActive
                                ? 'block py-2 px-4 bg-gray-700 text-white rounded'
                                : 'block py-2 px-4 hover:bg-gray-600 rounded'
                        }
                    >
                        Manajemen Data
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/laporan"
                        className={({ isActive }) =>
                            isActive
                                ? 'block py-2 px-4 bg-gray-700 text-white rounded'
                                : 'block py-2 px-4 hover:bg-gray-600 rounded'
                        }
                    >
                        Laporan Data
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

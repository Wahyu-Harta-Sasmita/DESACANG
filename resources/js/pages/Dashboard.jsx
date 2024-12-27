import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ValidasiData from "../components/admin/validasidata";
import PendaftaranManual from "../components/admin/pendaftaran";
import ManajemenData from "../components/admin/manajemen";
import LaporanData from "../components/admin/laporan";
import Sidebar from "../components/admin/sidebar";
import TopMenu from "../components/admin/topmenu"; // Import TopMenu

const Dashboard = () => {
    const handleLogout = () => {
        console.log("Logout berhasil");
        // Tambahkan logika logout di sini
    };

    return (
        <Router>
            <div className="flex flex-col h-screen">
                {/* Top Menu */}
                <TopMenu username="Admin" onLogout={handleLogout} />

                <div className="flex flex-1">
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Konten Halaman */}
                    <div className="flex-grow p-4">
                        {/* Konten Halaman berdasarkan rute */}
                        <Routes>
                            <Route path="/admin" element={<ValidasiData />} />
                            <Route
                                path="/validasi"
                                element={<ValidasiData />}
                            />
                            <Route
                                path="/pendaftaran"
                                element={<PendaftaranManual />}
                            />
                            <Route
                                path="/manajemen"
                                element={<ManajemenData />}
                            />
                            <Route path="/laporan" element={<LaporanData />} />
                            <Route
                                path="/"
                                element={<Navigate to="/admin" />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ValidasiData from "../components/admin/validasidata";
import PendaftaranManual from "../components/admin/pendaftaran";
import ManajemenData from "../components/admin/manajemen";
import LaporanData from "../components/admin/laporan";
import Sidebar from "../components/admin/sidebar";
import TopMenu from "../components/admin/topmenu";
import SearchButton from "../components/admin/search"; // Import SearchButton

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleLogout = () => {
        console.log("Logout berhasil");
        // Tambahkan logika logout di sini
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        console.log("Search query:", query);
        // Anda dapat menambahkan logika pencarian global di sini
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
                        {/* Search Bar */}
                        <div className="mb-4">
                            <SearchButton onSearch={handleSearch} />
                        </div>

                        {/* Konten Halaman berdasarkan rute */}
                        <Routes>
                            <Route path="/admin" element={<ValidasiData searchQuery={searchQuery} />} />
                            <Route path="/validasi" element={<ValidasiData searchQuery={searchQuery} />} />
                            <Route path="/pendaftaran" element={<PendaftaranManual searchQuery={searchQuery} />} />
                            <Route path="/manajemen" element={<ManajemenData searchQuery={searchQuery} />} />
                            <Route path="/laporan" element={<LaporanData searchQuery={searchQuery} />} />
                            <Route path="/" element={<Navigate to="/admin" />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;
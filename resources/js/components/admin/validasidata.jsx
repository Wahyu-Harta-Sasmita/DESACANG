import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './admin/sidebar';

const ValidasiData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/validasi');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const validasiData = async (nik) => {
        try {
            await axios.post(`/api/validasi/${nik}/approve`);
            alert(`Data dengan NIK ${nik} berhasil divalidasi.`);
            fetchData();
        } catch (error) {
            console.error('Error validating data:', error);
        }
    };

    const tolakData = async (nik) => {
        const alasan = prompt(`Masukkan alasan penolakan untuk NIK ${nik}:`);
        if (alasan) {
            try {
                await axios.post(`/api/validasi/${nik}/reject`, { alasan });
                alert(`Data dengan NIK ${nik} ditolak dengan alasan: ${alasan}`);
                fetchData();
            } catch (error) {
                console.error('Error rejecting data:', error);
            }
        }
    };

    return (
        <div className="flex">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold text-center text-gray-800">Validasi Data</h1>

                {/* Tabel Validasi */}
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h2 className="text-lg font-semibold mb-4">Daftar Data untuk Validasi</h2>
                    <table className="table-auto w-full bg-white rounded-lg shadow">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-4 py-2">Nama</th>
                                <th className="px-4 py-2">NIK</th>
                                <th className="px-4 py-2">Alamat</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {data.map((item) => (
                                <tr key={item.nik} className="border-t">
                                    <td className="px-4 py-2">{item.nama}</td>
                                    <td className="px-4 py-2">{item.nik}</td>
                                    <td className="px-4 py-2">{item.alamat}</td>
                                    <td className="px-4 py-2">{item.status}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-700"
                                            onClick={() => validasiData(item.nik)}
                                        >
                                            Validasi
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-700 ml-2"
                                            onClick={() => tolakData(item.nik)}
                                        >
                                            Tolak
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ValidasiData;
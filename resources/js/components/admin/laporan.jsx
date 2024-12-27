import React, { useState } from 'react';

const LaporanData = () => {
    const [filter, setFilter] = useState({ kategori: '', dariTanggal: '', sampaiTanggal: '' });
    const [laporan, setLaporan] = useState([]);
    const [showLaporan, setShowLaporan] = useState(false);

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [id]: value
        }));
    };

    const generateReport = () => {
        const data = [
            { nama: "John Doe", nik: "1234567890123456", alamat: "Jl. Raya Desa No. 1", kategori: "Krama Desa Adat", tanggal: "2024-12-23" },
            { nama: "Jane Doe", nik: "6543210987654321", alamat: "Jl. Raya Desa No. 2", kategori: "Krama Tamiu", tanggal: "2024-12-22" }
        ];

        const filteredData = data.filter((item) => {
            const matchKategori = !filter.kategori || item.kategori === filter.kategori;
            const matchDariTanggal = !filter.dariTanggal || new Date(item.tanggal) >= new Date(filter.dariTanggal);
            const matchSampaiTanggal = !filter.sampaiTanggal || new Date(item.tanggal) <= new Date(filter.sampaiTanggal);
            return matchKategori && matchDariTanggal && matchSampaiTanggal;
        });

        setLaporan(filteredData);
        setShowLaporan(true);
    };

    return (
        <div className="flex-1 p-4">
            <h1 className="text-2xl font-bold text-center text-green-800">Laporan Data Penduduk</h1>

            {!showLaporan ? (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h2 className="text-lg font-semibold mb-4">Filter Laporan</h2>
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-green-700">Kategori Penduduk</label>
                            <select
                                id="kategori"
                                value={filter.kategori}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full rounded border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                            >
                                <option value="">Semua Kategori</option>
                                <option value="Krama Desa Adat">Krama Desa Adat</option>
                                <option value="Krama Tamiu">Krama Tamiu</option>
                                <option value="Tamiu">Tamiu</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-green-700">Dari Tanggal</label>
                            <input
                                type="date"
                                id="dariTanggal"
                                value={filter.dariTanggal}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full rounded border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-green-700">Sampai Tanggal</label>
                            <input
                                type="date"
                                id="sampaiTanggal"
                                value={filter.sampaiTanggal}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full rounded border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>

                        <div className="md:col-span-3 text-right">
                            <button
                                type="button"
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                                onClick={generateReport}
                            >
                                Tampilkan Laporan
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                    <div className="text-right mb-4">
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                            onClick={() => setShowLaporan(false)}
                        >
                            Kembali
                        </button>
                    </div>

                    <h2 className="text-lg font-semibold mb-4">Hasil Laporan</h2>
                    <table className="table-auto w-full bg-white rounded-lg shadow">
                        <thead className="bg-green-800 text-white">
                            <tr>
                                <th className="px-4 py-2 text-center">Nama</th>
                                <th className="px-4 py-2 text-center">NIK</th>
                                <th className="px-4 py-2 text-center">Alamat</th>
                                <th className="px-4 py-2 text-center">Kategori</th>
                                <th className="px-4 py-2 text-center">Tanggal Pendaftaran</th>
                            </tr>
                        </thead>
                        <tbody className="text-green-700">
                            {laporan.map((item, index) => (
                                <tr key={index} className="border-t text-center">
                                    <td className="px-4 py-2">{item.nama}</td>
                                    <td className="px-4 py-2">{item.nik}</td>
                                    <td className="px-4 py-2">{item.alamat}</td>
                                    <td className="px-4 py-2">{item.kategori}</td>
                                    <td className="px-4 py-2">{item.tanggal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default LaporanData;
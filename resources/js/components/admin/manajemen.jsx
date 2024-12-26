import React from 'react';

const ManajemenData = () => {
    const dataPenduduk = [
        {
            nama: 'John Doe',
            nik: '1234567890123456',
            alamat: 'Jl. Raya Desa No. 1',
            kategori: 'Krama Desa Adat'
        }
        // Data lainnya bisa ditambahkan di sini
    ];

    const editData = (nik) => {
        alert(`Fitur edit untuk NIK ${nik} sedang dikembangkan.`);
    };

    const hapusData = (nik) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus data dengan NIK ${nik}?`)) {
            alert(`Data dengan NIK ${nik} telah dihapus.`);
        }
    };

    return (
        <div className="flex-1 p-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">Manajemen Data Penduduk</h1>

            {/* Tabel Data Penduduk */}
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h2 className="text-lg font-semibold mb-4">Daftar Data Penduduk</h2>
                <table className="table-auto w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2">Nama</th>
                            <th className="px-4 py-2">NIK</th>
                            <th className="px-4 py-2">Alamat</th>
                            <th className="px-4 py-2">Kategori</th>
                            <th className="px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {dataPenduduk.map((item) => (
                            <tr key={item.nik} className="border-t">
                                <td className="px-4 py-2">{item.nama}</td>
                                <td className="px-4 py-2">{item.nik}</td>
                                <td className="px-4 py-2">{item.alamat}</td>
                                <td className="px-4 py-2">{item.kategori}</td>
                                <td className="px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-700"
                                        onClick={() => editData(item.nik)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-700 ml-2"
                                        onClick={() => hapusData(item.nik)}
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManajemenData;

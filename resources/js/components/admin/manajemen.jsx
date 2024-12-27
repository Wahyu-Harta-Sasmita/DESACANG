import React, { useState } from 'react';

const ManajemenData = () => {
    const [dataPenduduk, setDataPenduduk] = useState([
        {
            nama: 'John Doe',
            nik: '1234567890123456',
            alamat: 'Jl. Raya Desa No. 1',
            kategori: 'Krama Desa Adat'
        }
    ]);
    const [editingData, setEditingData] = useState(null);

    const editData = (nik) => {
        const penduduk = dataPenduduk.find((item) => item.nik === nik);
        setEditingData(penduduk);
    };

    const hapusData = (nik) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus data dengan NIK ${nik}?`)) {
            setDataPenduduk((prev) => prev.filter((item) => item.nik !== nik));
            alert(`Data dengan NIK ${nik} telah dihapus.`);
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingData((prev) => ({ ...prev, [name]: value }));
    };

    const saveEdit = () => {
        setDataPenduduk((prev) =>
            prev.map((item) => (item.nik === editingData.nik ? editingData : item))
        );
        setEditingData(null);
        alert('Data berhasil diperbarui!');
    };

    return (
        <div className="flex-1 p-4">
            <h1 className="text-2xl font-bold text-center text-green-800">Manajemen Data Penduduk</h1>

            {editingData ? (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h2 className="text-lg font-semibold mb-4">Edit Data Penduduk</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-green-700">Nama</label>
                            <input
                                type="text"
                                name="nama"
                                value={editingData.nama}
                                onChange={handleEditChange}
                                className="mt-1 block w-full rounded border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-green-700">NIK</label>
                            <input
                                type="text"
                                name="nik"
                                value={editingData.nik}
                                onChange={handleEditChange}
                                disabled
                                className="mt-1 block w-full rounded border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-green-700">Alamat</label>
                            <input
                                type="text"
                                name="alamat"
                                value={editingData.alamat}
                                onChange={handleEditChange}
                                className="mt-1 block w-full rounded border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-green-700">Kategori</label>
                            <select
                                name="kategori"
                                value={editingData.kategori}
                                onChange={handleEditChange}
                                className="mt-1 block w-full rounded border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                            >
                                <option value="Krama Desa Adat">Krama Desa Adat</option>
                                <option value="Krama Tamiu">Krama Tamiu</option>
                                <option value="Tamiu">Tamiu</option>
                            </select>
                        </div>
                        <div className="text-right space-x-2">
                            <button
                                type="button"
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                                onClick={() => setEditingData(null)}
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                                onClick={saveEdit}
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h2 className="text-lg font-semibold mb-4">Daftar Data Penduduk</h2>
                    <table className="table-auto w-full bg-white rounded-lg shadow">
                        <thead className="bg-green-800 text-white">
                            <tr>
                                <th className="px-4 py-2 text-center">Nama</th>
                                <th className="px-4 py-2 text-center">NIK</th>
                                <th className="px-4 py-2 text-center">Alamat</th>
                                <th className="px-4 py-2 text-center">Kategori</th>
                                <th className="px-4 py-2 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-green-700">
                            {dataPenduduk.map((item) => (
                                <tr key={item.nik} className="border-t text-center">
                                    <td className="px-4 py-2">{item.nama}</td>
                                    <td className="px-4 py-2">{item.nik}</td>
                                    <td className="px-4 py-2">{item.alamat}</td>
                                    <td className="px-4 py-2">{item.kategori}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-700"
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
            )}
        </div>
    );
};

export default ManajemenData;

import React, { useState } from 'react';

const PendaftaranManual = () => {
    const [formData, setFormData] = useState({
        nama: '',
        nik: '',
        tanggalLahir: '',
        alamat: '',
        kategori: '',
        telepon: '',
        email: ''
    });
    const [pendudukList, setPendudukList] = useState([]);
    const [showRiwayat, setShowRiwayat] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPenduduk = {
            ...formData,
            tanggal: new Date().toLocaleDateString()
        };

        setPendudukList((prevList) => [...prevList, newPenduduk]);
        setFormData({
            nama: '',
            nik: '',
            tanggalLahir: '',
            alamat: '',
            kategori: '',
            telepon: '',
            email: ''
        });

        alert('Penduduk berhasil didaftarkan!');
    };

    return (
        <div className="flex-1 p-4 space-y-6">
            {/* Tombol Riwayat Pendaftaran */}
            <div className="text-right">
                <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                    onClick={() => setShowRiwayat(!showRiwayat)}
                >
                    {showRiwayat ? 'Tutup Riwayat' : 'Lihat Riwayat'}
                </button>
            </div>

            {/* Pendaftaran Baru */}
            {!showRiwayat && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800">Pendaftaran Manual Penduduk</h1>
                    <h2 className="text-lg font-semibold mb-4 mt-6">Formulir Pendaftaran</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Nama Lengkap"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">NIK</label>
                                <input
                                    type="text"
                                    id="nik"
                                    value={formData.nik}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Nomor Induk Kependudukan"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    id="tanggalLahir"
                                    value={formData.tanggalLahir}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Alamat</label>
                                <textarea
                                    id="alamat"
                                    value={formData.alamat}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Alamat"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Kategori Penduduk</label>
                                <select
                                    id="kategori"
                                    value={formData.kategori}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="">Pilih Kategori</option>
                                    <option value="Krama Desa Adat">Krama Desa Adat</option>
                                    <option value="Krama Tamiu">Krama Tamiu</option>
                                    <option value="Tamiu">Tamiu</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                                <input
                                    type="tel"
                                    id="telepon"
                                    value={formData.telepon}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Nomor Telepon"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email (Opsional)</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="mt-6 text-right">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Riwayat Pendaftaran */}
            {showRiwayat && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Riwayat Pendaftaran Manual</h2>
                    <table className="table-auto w-full bg-white rounded-lg shadow">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-4 py-2">Nama</th>
                                <th className="px-4 py-2">NIK</th>
                                <th className="px-4 py-2">Kategori</th>
                                <th className="px-4 py-2">Tanggal Pendaftaran</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {pendudukList.map((item, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2">{item.nama}</td>
                                    <td className="px-4 py-2">{item.nik}</td>
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

export default PendaftaranManual;

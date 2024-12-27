import React, { useState } from "react";

const AddForm = () => {
    // State untuk formData
    const [formData, setFormData] = useState({
        nama: "",
        nik: "",
        tanggalLahir: "",
        alamat: "",
        kategori: "",
        telepon: "",
        email: "",
    });

    // Fungsi untuk menangani perubahan input form
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log data form saat disubmit (dapat diganti dengan aksi yang sesuai)
        console.log(formData);
    };

    return (
        <div className="h-[75vh] bg-white">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Formulir Pendaftaran
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nama Lengkap
                            </label>
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
                            <label className="block text-sm font-medium text-gray-700">
                                NIK
                            </label>
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
                            <label className="block text-sm font-medium text-gray-700">
                                Tanggal Lahir
                            </label>
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
                            <label className="block text-sm font-medium text-gray-700">
                                Alamat
                            </label>
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
                            <label className="text-2xl font-bold text-gray-800">
                                Kategori Penduduk
                            </label>
                            <select
                                id="kategori"
                                value={formData.kategori}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Pilih Kategori</option>
                                <option value="Krama Desa Adat">
                                    Krama Desa Adat
                                </option>
                                <option value="Krama Tamiu">Krama Tamiu</option>
                                <option value="Tamiu">Tamiu</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nomor Telepon
                            </label>
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
                            <label className="block text-sm font-medium text-gray-700">
                                Email (Opsional)
                            </label>
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

                    <div className="text-right mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddForm;

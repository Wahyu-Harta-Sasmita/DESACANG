import React from "react";

const DataPenduduk = () => {
    return (
        <div className="p-6 space-y-8">
            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Biodata</h1>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tempat Lahir</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Lahir</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agama</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pendidikan/Pekerjaan</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1234567890</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jakarta</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1990-01-01</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Laki-laki</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Islam</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Software Engineer</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Belum Menikah</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Keluarga</h1>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. KK</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK Kepala Keluarga</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hubungan dengan Kepala Keluarga</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Orang dalam Keluarga</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3216549870</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0987654321</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Anak</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Rumah</h1>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Luas</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat Sekarang</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat Asal</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Geolocation</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">120m²</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jl. Merdeka No. 10, Jakarta</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jl. Kemerdekaan No. 5, Bogor</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">S-6.1742 E106.8261</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Bantuan</h1>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PKH</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PBH</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KIP</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KIS</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ya</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tidak</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ya</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tidak</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Ekonomi</h1>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pendapatan</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pengeluaran</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pendapatan Total Keluarga</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggungan</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5,000,000</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2,000,000</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8,000,000</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataPenduduk;
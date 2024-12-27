import React from 'react';

const Notifikasi = () => {
  const notifications = [
    { id: 1, message: 'Pesanan Anda telah dikirim.', time: '1 jam yang lalu' },
    { id: 2, message: 'Pembayaran berhasil diterima.', time: '2 jam yang lalu' },
    { id: 3, message: 'Diskon 50% untuk produk pilihan.', time: 'Kemarin' },
  ];

  return (
    <div className="p-6 font-sans w-[75vh]">
      <h2 className="text-2xl font-semibold mb-4">Notifikasi</h2>
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="p-4 mb-3 border border-gray-300 rounded-lg bg-gray-50"
          >
            <p className="font-semibold">{notif.message}</p>
            <span className="text-sm text-gray-500">{notif.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifikasi;

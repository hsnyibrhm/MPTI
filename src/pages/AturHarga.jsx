import { Sidebar } from "../components/SideBar";
import { useState } from "react";

export const AturHarga = () => {
  const [tanggal, setTanggal] = useState("2024-03-23");
  const [hargaJual, setHargaJual] = useState(21000);
  const [hargaBeli, setHargaBeli] = useState(19800);

  const handleTanggalChange = (event) => {
    setTanggal(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <Sidebar active="Atur Stok" />
      <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl w-full">
        <h1 className="text-5xl font-semibold text-green-600 mb-4">
          Atur Harga
        </h1>
        <p className="text-3xl text-green-600 mb-6">
          Mengubah harga saat ini dengan harga baru
        </p>
        <div className="space-y-6">
          <div className="flex justify-between items-center p-6 bg-green-50 rounded-lg shadow-sm">
            <span className="text-2xl text-green-600">Pilih Tanggal</span>
            <input
              type="date"
              value={tanggal}
              onChange={handleTanggalChange}
              className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-md"
            />
          </div>
          <div className="flex justify-between items-center p-6 bg-green-50 rounded-lg shadow-sm">
            <span className="text-2xl text-green-600">Harga Jual</span>
            <span className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-md">
              {hargaJual}
            </span>
          </div>
          <div className="flex justify-between items-center p-6 bg-green-50 rounded-lg shadow-sm">
            <span className="text-2xl text-green-600">Harga Beli</span>
            <span className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-md">
              {hargaBeli}
            </span>
          </div>
        </div>
        <button className="mt-6 bg-green-600 text-white px-12 py-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
          Perbarui harga
        </button>
      </div>
    </div>
  );
};

export default AturHarga;

import { useState, useEffect } from "react";
import { Sidebar } from "../components/SideBar"; // Assuming Sidebar is imported from a separate component

const ReStok = () => {
  const [tanggal, setTanggal] = useState("");
  const [stokLPG, setStokLPG] = useState(34);
  const [stokTambah, setStokTambah] = useState(66);
  const [keterangan, setKeterangan] = useState("Pengiriman PT");

  useEffect(() => {
    const today = new Date();
    const date = today.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setTanggal(date);
  }, []);

  const handlePerbaruiStok = () => {
    console.log("Stok diperbarui:", {
      tanggal,
      stokLPG,
      stokTambah,
      keterangan,
    });
  };

  return (
    <div className="bg-white min-h-screen flex">
      <Sidebar active="Atur Stok" />
      <div className="flex flex-col items-start justify-center w-full p-10">
        <h1
          className="text-green-500 text-[35px] font-semibold mb-4"
          style={{ fontFamily: "Poppins", textAlign: "left" }}
        >
          ReStok
        </h1>
        <div className="text-container">
          {" "}
          {/* Wrap text in flex container */}
          <p
            className="text-green-500 text-3xl font-normal mb-10"
            style={{ fontFamily: "Poppins" }}
          >
            Melengkapi Stok saat dengan stok baru
          </p>
        </div>
        <div className="w-full max-w-lg">
          <div className="mb-6">
            <label
              className="block text-green-500 text-[26px] font-medium mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Pilih Tanggal
            </label>
            <div className="bg-green-500 text-white rounded-full p-3 mt-2 flex justify-center w-[942px] h-[43px]">
              {tanggal}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-green-500 text-[26px] font-medium mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Stok LPG 3 Kg
            </label>
            <div className="bg-green-300 text-white rounded-full p-3 mt-2 flex justify-center w-[942px] h-[43px]">
              {stokLPG}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-green-500 text-[26px] font-medium mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Jumlah Stok yang Ditambahkan:
            </label>
            <div className="bg-green-300 text-white rounded-full p-3 mt-2 flex justify-center w-[942px] h-[43px]">
              {stokTambah}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-green-500 text-[26px] font-medium mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Keterangan
            </label>
            <div className="bg-green-300 text-white rounded-full p-3 mt-2 flex justify-center w-[942px] h-[43px]">
              {keterangan}
            </div>
          </div>

          <div className="flex justify-end w-full">
            {" "}
            <button
              onClick={handlePerbaruiStok}
              className="bg-green-500 text-white rounded-full px-6 py-3 mt-4 w-[618px] h-[57px]"
            >
              Perbarui Stok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReStok;

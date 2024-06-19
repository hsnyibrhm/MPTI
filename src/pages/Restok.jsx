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
          <p
            className="text-green-500 text-3xl font-normal mb-10"
            style={{ fontFamily: "Poppins" }}
          >
            Melengkapi Stok saat ini dengan stok baru
          </p>
        </div>
        <div className="w-full max-w-lgm ">
          <div className="mb-6">
            <label
              className="block text-green-500 text-[26px] font-medium mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Pilih Tanggal
            </label>
            <div className="w-[942px] h-[43px] bg-green-500 rounded-[10px] shadow text-white p-3 mt-2 flex justify-center">
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
            <div className="w-[942px] h-[43px] bg-green-500 rounded-[10px] shadow text-white p-3 mt-2 flex justify-center">
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
            <div className="w-[942px] h-[43px] bg-green-500 rounded-[10px] shadow text-white p-3 mt-2 flex justify-center">
              {stokTambah}
            </div>
          </div>

          <div className="mb-6 ">
            <label
              className="block text-green-500 text-[26px] font-medium mb-2"
              style={{ fontFamily: "Poppins" }}
            >
              Keterangan
            </label>
            <div className="w-[942px] h-[43px] bg-green-500 rounded-[10px] shadow text-white p-3 mt-2 flex justify-center">
              {keterangan}
            </div>
          </div>
          <div className="flex justify-end w-full">
            <button
              onClick={handlePerbaruiStok}
              className="text-white rounded-[10px] shadow px-6 py-3 mt-4 transform"
              style={{
                backgroundColor: "#4AAE64",
                fontSize: "25px",
                fontWeight: "medium",
                fontFamily: "Poppins",
                width: "618px",
                height: "57px",
                transform: "translateX(200px)",
              }}
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

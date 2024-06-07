import { useState, useEffect } from "react";
import { Sidebar } from "../components/SideBar";

const AturHarga = () => {
  const [tanggal, setTanggal] = useState("");
  const [hargaJual, setHargaJual] = useState(21000);
  const [hargaBeli, setHargaBeli] = useState(19800);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;
    setTanggal(formattedDate);
  }, []);

  const handleUpdatePrice = () => {
    console.log("Tanggal:", tanggal);
    console.log("Harga Jual:", hargaJual);
    console.log("Harga Beli:", hargaBeli);
  };

  return (
    <div
      className="container mx-auto p-4"
      style={{ width: "100%", height: "100%" }}
    >
      <Sidebar active="Atur Stok" />
      <h1
        className="font-bold mb-4"
        style={{ fontSize: "35px", color: "#4AAE64" }}
      >
        Atur Harga
      </h1>

      <div className="w-full mb-4">
        <label
          className="block text-green-600 mb-2"
          style={{ fontSize: "30px" }}
        >
          Pilih Tanggal
        </label>
        <input
          type="text"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-green-200 text-green-700"
          style={{ fontSize: "24px", height: "56.583px", width: "986px" }}
        />
      </div>

      <div className="w-full mb-4">
        <label
          className="block text-green-600 mb-2"
          style={{ fontSize: "30px" }}
        >
          Harga Jual
        </label>
        <input
          type="number"
          value={hargaJual}
          onChange={(e) => setHargaJual(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-green-200 text-green-700"
          style={{ fontSize: "24px", height: "56.583px", width: "986px" }}
        />
      </div>

      <div className="w-full mb-6">
        <label
          className="block text-green-600 mb-2"
          style={{ fontSize: "30px" }}
        >
          Harga Beli
        </label>
        <input
          type="number"
          value={hargaBeli}
          onChange={(e) => setHargaBeli(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-green-200 text-green-700"
          style={{ fontSize: "24px", height: "56.583px", width: "986px" }}
        />
      </div>

      <button
        onClick={handleUpdatePrice}
        className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        style={{ fontSize: "24px", height: "56.583px", width: "986px" }}
      >
        Perbarui harga
      </button>
    </div>
  );
};

export default AturHarga;

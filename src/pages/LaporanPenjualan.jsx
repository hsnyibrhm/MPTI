import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sidebar } from "../components/SideBar";

const LaporanPenjualan = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="bg-white min-h-screen flex flex-col items-start p-10">
      <Sidebar active="Laporan Penjualan" />
      <h1 className="text-green-600 text-3xl font-bold mb-10 self-start">
        Laporan Penjualan
      </h1>
      <div className="w-full" style={{ maxWidth: "911px" }}>
        {/* batas */}
        <div className="mb-6 w-full">
          <label
            className="text-green-600 text-xl font-semibold mb-2 block"
            style={{ textAlign: "left" }}
          >
            Pilih Tanggal Rentang Waktu
          </label>
          <div className="flex items-center justify-start w-full">
            {" "}
            {/* Mengubah justify-end menjadi justify-start */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="bg-green-500 text-white rounded-full p-3 mt-2"
              wrapperClassName="date-picker-wrapper"
              style={{ marginLeft: "0" }} // Mengatur margin-left ke 0
            />
            <span className="mx-4">-</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="bg-green-500 text-white rounded-full p-3 mt-2"
              wrapperClassName="date-picker-wrapper"
              style={{ marginLeft: "0" }} // Mengatur margin-left ke 0
            />
          </div>
        </div>

        <div
          className="rounded-2xl shadow-lg p-6 mb-6"
          style={{
            backgroundColor: "#49AD63",
            width: "911px",
            height: "190px",
          }}
        >
          <h2 className="text-2xl font-semibold text-white mb-2">
            Keuntungan Penjualan
          </h2>
          <p className="text-3xl font-bold text-white">Rp. 0</p>
          <p className="mt-4 text-white">
            Total Produk 0{" "}
            <span className="font-semibold">Tabung LPG 3 Kg</span>
          </p>
        </div>

        <div
          className="rounded-2xl shadow-lg p-6 mb-6"
          style={{
            backgroundColor: "#49AD63",
            width: "911px",
            height: "190px",
          }}
        >
          <h2 className="text-2xl font-semibold text-white mb-2">
            Keuntungan Penjualan
          </h2>
          <p className="text-xl text-white">Rp. 0</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Modal</h2>
          <p className="text-xl text-white">Rp. 0</p>
        </div>

        <div
          className="rounded-2xl shadow-lg p-6"
          style={{
            backgroundColor: "#49AD63",
            width: "911px",
            height: "190px",
          }}
        >
          <h2 className="text-2xl font-semibold text-white mb-2">
            Data Penjualan
          </h2>
          <p className="mb-4 text-white">Belum ada produk terjual</p>
          <button className="bg-white text-green-600 rounded-full px-6 py-2">
            Cetak
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaporanPenjualan;

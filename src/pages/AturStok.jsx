import { Sidebar } from "../components/SideBar";
import { Link } from "react-router-dom";

// export const AturStok = () => {
//   return (
//     <div className="bg-white h-full w-full flex">
//       <div className="flex-grow">
//         <Sidebar active="Atur Stok" />
//       </div>

//       {/* content*/}
//     </div>
//   );
// };

export const AturStok = () => {
  return (
    <div className="container mx-auto p-4">
      <Sidebar active="Atur Stok" />
      <h2 className="font-bold mb-4 text-3xl text-[#4AAE64]">
        Atur Stok Produk
      </h2>

      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-2xl text-[#4AAE64]">Stok LPG 2 kg Saat ini</h3>
            <p className="text-2xl text-[#4AAE64]">0 Tabung</p>
          </div>
          <Link to="/riwayat-stok" className="text-[#4AAE64]">
            Riwayat Stok
          </Link>
        </div>
        <div
          className="bg-[#4AAE64] p-4 rounded-lg shadow-md flex items-center justify-between cursor-pointer"
          style={{ width: "986px", height: "90px", flexShrink: 0 }}
        >
          <div>
            <h4 className="text-white text-xl">ReStok</h4>
            <p className="text-white text-lg">Melengkapi stok saat ini</p>
          </div>
          <div className="text-white text-3xl"></div>
        </div>
      </section>

      <section>
        <div
          className="bg-[#4AAE64] p-4 rounded-lg shadow-md"
          style={{ width: "986px", height: "345px", flexShrink: 0 }}
        >
          <h4 className="text-white text-xl mb-4">Atur Harga Produk</h4>
          <div className="text-white mb-4">
            <p>Harga Beli (Harga Per Tabung)</p>
            <p className="text-2xl">Rp 14250</p>
          </div>
          <div className="text-white mb-4">
            <p>Harga Jual (Harga Per Tabung)</p>
            <p className="text-2xl">Rp 15500</p>
          </div>
          <button
            className="bg-white text-[#4AAE64] px-4 py-2 rounded-lg hover:bg-gray-100"
            style={{ width: "400px" }}
          >
            Atur Harga Beli dan Harga Jual
          </button>
        </div>
      </section>
    </div>
  );
};

export default AturStok;

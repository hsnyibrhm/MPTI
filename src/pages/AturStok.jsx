import { Sidebar } from "../components/SideBar";
import { useNavigate, Link } from "react-router-dom";

export const AturStok = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Restok");
  };

  return (
    <div className="container mx-auto p-4 flex">
      <Sidebar active="Atur Stok" />
      <div className="flex-grow">
        <h2 className="font-semibold mb-4 text-[35px] text-green-500 font-['Poppins']">
          Atur Stok Produk
        </h2>

        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-3xl text-green-500 font-normal font-['Poppins']">
                Stok LPG 2 kg Saat ini
              </h3>
              <p className="text-3xl text-green-500 font-semibold font-['Poppins']">
                0 Tabung
              </p>
            </div>
            <Link
              to="/riwayat-stok"
              className="text-[27px] text-green-500 font-semibold underline font-['Poppins']"
            >
              Riwayat Stok
            </Link>
          </div>
          <div
            className="bg-[#4AAE64] p-4 rounded-[20px] flex items-center justify-between cursor-pointer"
            style={{
              width: "986px",
              height: "90px",
              flexShrink: 0,
              boxShadow: "9px 10px 14.9px 0px rgba(0, 0, 0, 0.25)",
            }}
            onClick={handleNavigate}
          >
            <div>
              <h4 className="text-white text-2xl font-bold font-['Poppins']">
                ReStok
              </h4>
              <p className="text-white text-xl font-normal font-['Poppins']">
                Melengkapi stok saat ini
              </p>
            </div>
            <div className="text-white text-3xl"></div>
          </div>
        </section>

        <section>
          <div
            className="bg-[#4AAE64] p-4 rounded-[20px] flex flex-col items-center"
            style={{
              width: "100%", // Ubah lebar menjadi responsif
              minHeight: "345px", // Gunakan minHeight untuk ketinggian fleksibel
              boxShadow: "9px 10px 14.9px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h4 className="text-white text-2xl font-bold font-['Poppins'] mb-4">
              Atur Harga Produk
            </h4>
            <div className="text-white mb-4 text-center">
              <p>Harga Beli (Harga Per Tabung)</p>
              <p className="text-xl">Rp 14250</p>
            </div>
            <div className="text-white mb-4 text-center">
              <p>Harga Jual (Harga Per Tabung)</p>
              <p className="text-xl">Rp 15500</p>
            </div>
            <Link
              to="/aturharga"
              className="bg-white text-green-500 px-4 py-2 rounded-[20px] hover:bg-gray-100 text-center font-medium text-[25px] font-['Poppins'] mt-10"
              style={{ width: "433px", height: "53px" }}
            >
              Atur Harga Beli dan Harga Jual
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AturStok;

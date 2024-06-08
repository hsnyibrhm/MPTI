import { useState } from "react";
import { Sidebar } from "../components/SideBar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CekNik = () => {
  const [nik, setNik] = useState("");
  const [nikValid, setNikValid] = useState(true);

  const handleCheckNIK = () => {
    // Simple validation for demonstration purposes
    // NIK should be 16 digits long
    const isValid = nik.length === 16 && !isNaN(nik);
    setNikValid(isValid);

    if (isValid) {
      // Logic to check NIK goes here
      // For example, sending nik to an API endpoint
      console.log("NIK is valid:", nik);
      // Perform API call or further processing
    } else {
      console.log("NIK is invalid:", nik);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar active="Cek NIK" />
      <div className="flex-1 flex flex-col items-center justify-center p-10 gap-6 ml-4">
        {/* Section 1: Cek NIK */}
        <div
          className="bg-[#49ad63] rounded-[30px] shadow-lg p-8 w-full max-w-4xl relative flex flex-col items-center justify-center"
          style={{
            width: "989px",
            height: "320px",
            flexShrink: 0,
            boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="text-white w-full text-center">
            <h1 className="text-3xl font-bold mb-2">NIK KTP Pelanggan</h1>
            <p className="text-xl mb-4">
              Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi LPG 3
              Kg
            </p>
            <div className="flex flex-col items-start w-full">
              <input
                type="text"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                placeholder="Masukkan 16 digit NIK KTP Pelanggan"
                pattern="[0-9]{16}"
                title="NIK harus terdiri dari 16 digit angka"
                className={`w-full p-3 rounded-md border ${
                  nikValid ? "border-gray-300" : "border-red-500"
                } text-gray-800`}
              />
              {!nikValid && (
                <p className="text-red-500 mt-2 text-left">
                  NIK harus terdiri dari 16 digit angka
                </p>
              )}
            </div>
            <Button onClick={handleCheckNIK} className="w-40 h-12 mt-4">
              Cek
            </Button>
          </div>
        </div>

        {/* Section 2: Daftarkan Pelanggan Baru */}
        <div
          className="bg-[#49ad63] rounded-[30px] shadow-lg p-8 w-full max-w-4xl relative"
          style={{
            width: "989px",
            height: "286px",
            flexShrink: 0,
            boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-2">
              Pelanggan Belum Terdaftar?
            </h1>
            <p className="text-xl mb-4">
              Daftarkan pelanggan rumah tangga atau usaha mikro untuk dapat
              transaksi LPG 3 Kg
            </p>
            <Link to="/Daftarkan">
              <Button className="w-full h-12">Daftarkan Pelanggan Baru</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CekNik;

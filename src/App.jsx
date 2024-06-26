import LoginPage from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LupaSandi } from "./pages/LupaSandi";
import { Daftarkan } from "./pages/DaftarPelanggan";
import { AturStok } from "./pages/AturStok";
import Profile from "./pages/Profile";
import RiwayatStok from "./pages/RiwayatStok";
import AturHarga from "./pages/AturHarga";
import CekNik from "./pages/CekNIK";
import LaporanPenjualan from "./pages/LaporanPenjualan";
import ReStok from "./pages/Restok";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/lupasandi" element={<LupaSandi />} />
            <Route path="/ceknik" element={<CekNik />} />
            <Route path="/Daftarkan" element={<Daftarkan />} />
            <Route path="/Laporanpenjualan" element={<LaporanPenjualan />} />
            <Route path="/atur-stok" element={<AturStok />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/riwayat-stok" element={<RiwayatStok />} />
            <Route path="/aturharga" element={<AturHarga />} />
            <Route path="/Restok" element={<ReStok />} />
            {/* <Route path="/signup" element={<SignupPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

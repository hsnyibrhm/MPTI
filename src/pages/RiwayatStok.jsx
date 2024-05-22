import { Sidebar } from "../components/SideBar";

export const RiwayatStok = () => {
  const riwayat = [
    {
      restok: "Restok",
      tambah: "100 tabung",
      tanggal: "18/02/2024",
      keterangan: "pengiriman",
    },
    {
      restok: "Restok",
      tambah: "100 tabung",
      tanggal: "15/02/2024",
      keterangan: "pengiriman",
    },
    {
      restok: "Restok",
      tambah: "100 tabung",
      tanggal: "10/02/2024",
      keterangan: "pengiriman",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Sidebar active="Atur Stok" />
      <h2
        className="font-bold mb-4"
        style={{ fontSize: "35px", color: "#4AAE64" }}
      >
        Riwayat Stok
      </h2>
      <h3
        className="font-semibold mb-4"
        style={{ fontSize: "30px", color: "#4AAE64" }}
      >
        Riwayat Perubahan stok LPG 3 kg
      </h3>

      {riwayat.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg" style={{ fontSize: "24px", color: "#4AAE64" }}>
            {item.restok}
          </p>
          <p className="text-lg" style={{ fontSize: "24px", color: "#4AAE64" }}>
            Tambah: {item.tambah}
          </p>
          <p className="text-lg" style={{ fontSize: "24px", color: "#4AAE64" }}>
            Tanggal: {item.tanggal}
          </p>
          <p className="text-lg" style={{ fontSize: "24px", color: "#4AAE64" }}>
            Keterangan: {item.keterangan}
          </p>
          {index < riwayat.length - 1 && (
            <hr className="border-t border-[#4AAE64] my-4" />
          )}
        </div>
      ))}
    </div>
  );
};
export default RiwayatStok;

import { Sidebar } from "../components/SideBar";

const Profile = () => {
  return (
    <div
      className="container mx-auto p-4"
      style={{ width: "100%", height: "100%" }}
    >
      <Sidebar active="Profile" />
      <h2
        className="font-bold mb-4"
        style={{ fontSize: "35px", color: "#4AAE64" }}
      >
        Profil Saya
      </h2>

      <section className="mb-6">
        <h3
          className="font-semibold mb-2"
          style={{ fontSize: "30px", color: "#4AAE64" }}
        >
          Identitas Pangkalan LPG 3Kg
        </h3>
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
          style={{
            height: "274px",
            width: "986px",
            fontSize: "24px",
            flexShrink: 0,
            color: "#4AAE64",
          }}
        >
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>Agen</span>
            <span>791732 - PT.GRAHA GAS NIAGA</span>
          </div>
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>MID</span>
            <span>LPG_021035</span>
          </div>
          <div className="flex justify-between pb-2">
            <span>Nama Pangkalan LPG 3 Kg</span>
            <span>EGI RAHAYU</span>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h3
          className="font-semibold mb-2"
          style={{ fontSize: "30px", color: "#4AAE64" }}
        >
          Informasi Pemilik Pangkalan LPG 3 Kg
        </h3>
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
          style={{
            height: "348px",
            width: "986px",
            fontSize: "24px",
            flexShrink: 0,
            color: "#4AAE64",
          }}
        >
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>Nama Pemilik</span>
            <span>EGI RAHAYU</span>
          </div>
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>No. KTP</span>
            <span>3310185802690001</span>
          </div>
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>No. Handphone</span>
            <span>081329031131</span>
          </div>
          <div className="flex justify-between pb-2">
            <span>Email</span>
            <span>rahayuegi18@gmail.com</span>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h3
          className="font-semibold mb-2"
          style={{ fontSize: "30px", color: "#4AAE64" }}
        >
          Kontak Pangkalan LPG 3 Kg
        </h3>
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-md"
          style={{
            height: "95px",
            width: "986px",
            fontSize: "24px",
            flexShrink: 0,
            color: "#4AAE64",
          }}
        >
          <div className="flex justify-between">
            <span>No. Telpon</span>
            <span>081329031131</span>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h3
          className="font-semibold mb-2"
          style={{ fontSize: "30px", color: "#4AAE64" }}
        >
          Alamat Pangkalan LPG 3 Kg
        </h3>
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
          style={{
            height: "493px",
            width: "986px",
            fontSize: "24px",
            flexShrink: 0,
            color: "#4AAE64",
          }}
        >
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>Provinsi</span>
            <span>JAWA TENGAH</span>
          </div>
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>Kota/Kab.</span>
            <span>KABUPATEN KLATEN</span>
          </div>
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>Kecamatan</span>
            <span>KARANGANOM</span>
          </div>
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>Kelurahan</span>
            <span>GLEDEG</span>
          </div>
          <div className="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span>Kode Pos</span>
            <span>57475</span>
          </div>
          <div className="flex justify-between pb-2">
            <span>Alamat</span>
            <span>GLEDEG RT.002 RW.003</span>
          </div>
        </div>
      </section>

      {/* <div className="flex justify-center mb-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          style={{
            width: "498px",
            height: "55px",
            flexShrink: 0,
            borderRadius: "20px",
          }}
        >
          Ubah Profil
        </button>
      </div> */}

      <section>
        <h3
          className="font-semibold mb-2"
          style={{ fontSize: "30px", color: "#4AAE64" }}
        >
          Lokasi Pangkalan LPG 3 Kg
        </h3>
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
          style={{ width: "985px", color: "#4AAE64" }}
        >
          <div className="flex justify-between mb-2">
            <span>Kordinat Lokasi</span>
            <span>-7.604501990901252,110.64885834672177</span>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              style={{ width: "880px", height: "56.583px", flexShrink: 0 }}
            >
              Tampilkan Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

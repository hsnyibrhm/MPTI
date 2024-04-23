import Button from "../components/Button";
import { Sidebar } from "../components/SideBar";
import { Link } from "react-router-dom";

export const CekNik = () => {
  return (
    <div className="bg-white min-h-screen flex">
      <div className="flex-grow">
        <Sidebar active="Cek NIK" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex-grow-0 relative top-[50px] w-[1019px] h-[306px]">
          <div className="bg-[#49ad63] rounded-[30px] shadow-[9px_10px_14.9px_#00000040] relative">
            <div className="relative w-[1019px] h-[306px] top-[-30px] left-[40px] bg-[url(/group-6.png)] bg-[100%_100%]">
              <div className="absolute w-[842px] h-[150px] top-[40px] left-[40px]">
                <div className="flex flex-col items-start gap-5 absolute w-[842px] h-[134px] top-0 left-0">
                  <p className="relative self-stretch font-bold text-white text-3xl">
                    NIK KTP Pelanggan
                    <br />
                  </p>
                  <p className="relative self-stretch font-normal text-white text-xl">
                    Masukkan dan cek NIK pelanggan untuk melanjutkan transaksi
                    LPG 3 Kg
                  </p>
                </div>
                <p className="absolute w-[525px] top-[112px] left-0 font-normal text-white text-base">
                  Masukkan 16 digit NIK KTP Pelanggan
                </p>
              </div>
              <div className="absolute w-[858px] h-[80px] top-[190px] left-[55px]">
                <form className="flex flex-col items-center">
                  <input
                    type="text"
                    className="w-full rounded-md bg-none border border-gray-300 px-4 py-3 text-lg text-gray-800 mb-4"
                    placeholder="Masukkan 16 digit NIK KTP Pelanggan"
                    pattern="[0-9]{16}"
                    title="NIK harus terdiri dari 16 digit angka"
                  />
                  <Button className="w-[164px] h-[43px] ">Cek</Button>
                </form>
                <div className="absolute w-[525px] bottom-0 left-[4px] font-normal text-[#e4151573] text-xl">
                  *wajib diisi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow-0 relative top-[50px] w-[1019px] h-[306px]">
          <div className="bg-[#49ad63] rounded-[30px] shadow-[9px_10px_14.9px_#00000040] relative">
            <div className="relative w-[1019px] h-[306px] top-[-30px] left-[40px] bg-[url(/group-6.png)] bg-[100%_100%]">
              <div className="absolute w-[842px] h-[150px] top-[40px] left-[40px]">
                <div className="flex flex-col items-start gap-5 absolute w-[842px] h-[134px] top-0 left-0">
                  <p className="relative self-stretch font-bold text-white text-3xl">
                    Pelanggan Belum Terdaftar?
                    <br />
                  </p>
                  <p className="relative self-stretch font-normal text-white text-xl">
                    Daftarkan pelanggan rumah tangga atau usaha mikro untuk
                    dapat transaksi LPG 3 Kg
                  </p>
                </div>
                {/* <p className="absolute w-[525px] top-[112px] left-0 font-normal text-white text-base">
                  Masukkan 16 digit NIK KTP Pelanggan
                </p> */}
              </div>
              <div className="absolute w-[858px] h-[80px] top-[190px] left-[55px]">
                <form className="flex flex-col items-center">
                  {/* <input
                    type="text"
                    className="w-full rounded-md bg-none border border-gray-300 px-4 py-3 text-lg text-gray-800 mb-4"
                    placeholder="Masukkan 16 digit NIK KTP Pelanggan"
                    pattern="[0-9]{16}"
                    title="NIK harus terdiri dari 16 digit angka"
                  /> */}
                  {/* example:
                    <Link to="/dashboard">
                        <Button style={myStyle}>
                          <p>Click Me!</p>
                        </Button>
                    </Link>
                  
                  */}

                  <Button className="w-[488px] h-[43px]">
                    <Link to="/Daftarkan">Daftarkan Pelanggan Baru</Link>
                  </Button>
                </form>
                {/* <div className="absolute w-[525px] bottom-0 left-[4px] font-normal text-[#e4151573] text-xl">
                  *wajib diisi
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

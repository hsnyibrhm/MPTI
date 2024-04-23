import Button from "../components/Button";
import { Sidebar } from "../components/SideBar";

export const Daftarkan = () => {
  return (
    <div className="bg-white min-h-screen">
      <Sidebar active="Cek NIK" />
      <div className="relative top-[50px] w-[1019px] h-[306px]">
        <div className="bg-[#49ad63] rounded-[30px] shadow-[9px_10px_14.9px_#00000040] relative">
          <div className="relative w-[1019px] h-[306px] top-[-30px] left-[40px] bg-[url(/group-6.png)] bg-[100%_100%]">
            <div className="absolute w-[842px] h-[150px] top-[40px] left-[40px]">
              <div className="flex flex-col items-start gap-5 absolute w-[842px] h-[134px] top-0 left-0">
                <p className="relative self-stretch font-bold text-white text-3xl">
                  Daftarkan Pelanggan
                  <br />
                </p>
                <p className="relative self-stretch font-normal text-white text-xl">
                  Masukkan NIK pelanggan untuk pengecekan status pendaftaran.
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
                  className="w-full bg-white rounded-md border border-gray-300 px-4 py-3 text-lg text-gray-800 mb-4"
                  placeholder="NIK"
                  pattern="[0-9]{16}"
                  title="NIK harus terdiri dari 16 digit angka"
                />
                <Button className="w-[164px] h-[43px]">Cek</Button>
              </form>
              <div className="absolute w-[525px] bottom-0 left-[4px] font-normal text-[#e4151573] text-xl">
                *wajib diisi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

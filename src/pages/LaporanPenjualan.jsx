import { Sidebar } from "../components/SideBar";

export const LaporanPenjualan = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="flex-grow">
        <Sidebar active="Laporan Penjualan" />
      </div>
      <div className="bg-white w-[1440px] h-[1125px] relative">
        <div className="absolute top-[103px] left-[418px] font-bold text-[#49ad63] text-[36px] tracking-[0] leading-[normal]">
          Laporan Penjualan
        </div>
        <div className="absolute top-[190px] left-[423px] font-medium text-[#49ad63] text-[24px] tracking-[0] leading-[normal]">
          Pilih Tanggal Rentang Waktu
        </div>
        <div className="absolute w-[912px] h-[43px] top-[235px] left-[417px]">
          <div className="relative w-[910px] h-[43px] bg-[#49ad63] rounded-[20px] shadow-[8px_11px_9px_#00000040]">
            <p className="absolute w-[300px] top-[6px] left-[31px] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
              14 Mar 2024 - 14 Mar 2024
            </p>
          </div>
        </div>
        <div className="absolute w-[915px] h-[190px] top-[313px] left-[417px]">
          <div className="relative w-[911px] h-[190px] bg-[#49ad63] rounded-[30px] shadow-[4px_4px_15px_#00000040]">
            <div className="absolute w-[284px] h-[90px] top-[15px] left-[41px]">
              <div className="absolute w-[248px] top-0 left-0 font-semibold text-[#ffffffd1] text-[30px] tracking-[0] leading-[normal]">
                Total Penjualan
              </div>
              <div className="absolute w-[248px] top-[36px] left-[36px] font-semibold text-white text-[40px] tracking-[0] leading-[normal]">
                Rp. 0
              </div>
            </div>
            <div className="absolute w-[851px] h-[43px] top-[123px] left-[32px]">
              <div className="relative w-[849px] h-[43px] bg-white rounded-[30px]">
                <p className="absolute w-[436px] top-[6px] left-[20px] font-normal text-transparent text-[20px] tracking-[0] leading-[normal]">
                  <span className="text-[#49ad63]">Total Produk</span>
                  <span className="text-[#ffffff73]">&nbsp;</span>
                  <span className="font-bold text-[#49ad63]">
                    0 Tabung LPG 3 Kg
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[919px] h-[222px] top-[539px] left-[418px]">
          <div className="relative w-[911px] h-[222px] bg-[#49ad63] rounded-[30px] shadow-[4px_4px_15px_#00000040]">
            <div className="absolute w-[248px] top-[16px] left-[30px] font-bold text-white text-[30px] tracking-[0] leading-[normal]">
              Total Penjualan
            </div>
            <div className="absolute w-[248px] top-[116px] left-[31px] font-bold text-white text-[30px] tracking-[0] leading-[normal]">
              Modal
            </div>
            <div className="top-[61px] absolute w-[248px] left-[51px] font-semibold text-white text-[30px] tracking-[0] leading-[normal]">
              Rp. 0
            </div>
            <div className="top-[159px] absolute w-[248px] left-[51px] font-semibold text-white text-[30px] tracking-[0] leading-[normal]">
              Rp. 0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

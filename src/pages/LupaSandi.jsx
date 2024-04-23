import Button from "../components/Button";

export const LupaSandi = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="bg-[#49ad63] rounded-[35px] shadow-[9px_10px_14.9px_#00000040] w-full max-w-md px-8 py-12">
        <h1 className="font-poppins font-bold text-white text-3xl text-center mb-8">
          LUPA KATA SANDI
        </h1>
        <form className="flex flex-col items-center">
          <p className="font-poppins font-light text-white text-lg text-center mb-6">
            Masukkan alamat email Anda untuk menerima link reset Kata Sandi.
          </p>
          <input
            type="text"
            className="w-full bg-white rounded-md border border-gray-300 px-4 py-3 text-lg text-gray-800 mb-4"
            placeholder="Email"
          />
          <Button className="w-[164px] h-[43px]" onClick={() => {}}>
            KIRIM EMAIL
          </Button>
        </form>
      </div>
    </div>
  );
};

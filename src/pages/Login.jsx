import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here.
    // If login is successful, navigate to the "cek nik" page.
    navigate("/ceknik");
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="bg-[#49ad63] rounded-[35px] shadow-[9px_10px_14.9px_#00000040] w-full max-w-md px-8 py-12">
        <h1 className="font-poppins font-bold text-white text-3xl text-center mb-8">
          LOGIN
        </h1>
        <form className="flex flex-col items-center">
          <input
            type="text"
            className="w-full bg-white rounded-md border border-gray-300 px-4 py-3 text-lg text-gray-800 mb-4"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full bg-white rounded-md border border-gray-300 px-4 py-3 text-lg text-gray-800 mb-4"
            placeholder="Password"
          />
          <div className="font-poppins font-light italic text-white text-lg text-center mb-6">
            <Link to="/Lupasandi">Lupa Kata Sandi?</Link>
          </div>
          <Button className="w-[164px] h-[43px]" onClick={handleLogin}>
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
}

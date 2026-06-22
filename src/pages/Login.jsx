import React from "react";
import BgLogin from "../assets/images/bg-login.jpg";
import Logo from "../assets/images/chill-app-icon.png";
import EyeOffIcon from "../assets/images/eye-off-icon.png";
import GoogleLogo from "../assets/images/google.png";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    navigate('/home'); 
  };

  return (
    <>
      <main
        className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
        style={{ backgroundImage: `url(${BgLogin})` }}
      >
        <div className="w-full max-w-md bg-black/70 p-8 rounded-2xl shadow-xl flex flex-col items-center">
          
          <img src={Logo} alt="chill-app-icon" className="h-12 w-auto mb-6 object-contain" />
          
          <div className="text-center mb-6 w-full">
            <h1 className="text-2xl font-bold text-white mb-1">Masuk</h1>
            <p className="text-sm text-white">Selamat datang kembali!</p>
          </div>
          
          <form action="#" method="POST" onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-sm text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Masukkan username"
                required
                className="w-full px-4 py-2 border border-zinc-700 rounded-3xl text-sm text-white"
              />
            </div>
            
            <PasswordInput label="Kata Sandi" input="Masukkan kata sandi"/>
            
            <div className="flex items-center justify-between text-xs text-zinc-600 my-1">
              <p>
                Belum punya akun? <Link to="/register" className="text-zinc-300 font-semibold hover:underline">Daftar</Link>
              </p>
              <a href="#" className="text-zinc-300 hover:underline">Lupa kata sandi?</a>
            </div>
            
            <div className="flex flex-col items-center gap-3 mt-2 w-full">
              <button 
                type="submit" 
                className="w-full py-2.5 bg-zinc-700 hover:bg-zinc-900 text-white font-medium rounded-3xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Masuk
              </button>
              
              <p className="text-xs text-zinc-500 font-medium">atau</p>
              
              <button 
                type="button" 
                className="w-full py-2.5 border border-zinc-700 bg-transparent hover:bg-zinc-800 text-white font-medium rounded-3xl text-sm flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
              >
                <img src={GoogleLogo} alt="Google" className="h-4 w-4" />
                <span>Masuk dengan Google</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

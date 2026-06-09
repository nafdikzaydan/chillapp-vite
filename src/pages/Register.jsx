import React from "react";
import Logo from "../assets/images/chill-app-icon.png";
import BgRegister from "../assets/images/bg-register.jpg";
import EyeOffIcon from "../assets/images/eye-off-icon.png";
import GoogleLogo from "../assets/images/google.png";
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <>
      <main
        className="login-container"
        style={{
          backgroundImage: `url(${BgRegister})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="login-card">
          <img src={Logo} alt="chill-app-icon" id="logo" />
          <div className="login-card-title">
            <h1>Daftar</h1>
            <p>Selamat datang kembali!</p>
          </div>
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Masukkan username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Kata Sandi</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan kata sandi"
                required
              />
              <img src={EyeOffIcon} alt="" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Konfirmasi kata sandi"
                required
              />
              <img src={EyeOffIcon} alt="" />
            </div>
            <div className="login-card-additional-action">
              <p>
                Sudah punya akun? <Link to="/login">Masuk</Link>
              </p>
            </div>
            <div className="login-card-action">
              <button type="submit" className="login-button">
                Masuk
              </button>
              <p>atau</p>
              <button type="button" className="google-login-btn">
                <img src={GoogleLogo} alt="" />
                <p>Masuk dengan Google</p>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

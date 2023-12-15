import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Input } from "antd";
import logoImage from "../../assets/images/logo2.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginAdmin } from "../../services/admin/login-admin";
import { toast } from "react-toastify";

export const AdminLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate: dataLogin, status, isSuccess, isError, error } = useLoginAdmin();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.err);
    }
    if (isSuccess) {
      toast.success("Login Berhasil");
      navigate("/admin/dashboard");
    }
  }, [status]);

  const handleLogin = () => {
    if (!Email || !Password) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    dataLogin({
      email: Email,
      password: Password,
    });
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-[30%] bg-purple-700 flex justify-center items-center">
        <img src={logoImage} className="w-1/2" alt="logo" />
      </div>
      <div className="w-[70%] flex flex-col justify-center items-center gap-5">
        <div className="w-1/3 flex flex-col gap-2">
          <h2 className="text-purple-700 text-center mb-5 font-bold">Login</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email Admin</label>
            <Input
              onChange={handleInput}
              id="email"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Masukkan Email Admin"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between">
              <label className="font-normal text-sm">Password</label>
              <label className="text-xs text-purple-700 hover:text-purple-900" style={{ cursor: "pointer" }}>
                Lupa Kata Sandi
              </label>
            </div>
            <Input.Password
              onChange={handleInput}
              id="password"
              className="hover:border-purple-700"
              placeholder="Masukkan Password"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div>
            <button
              className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-lg mt-2"
              onClick={() => {
                handleLogin();
              }}
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

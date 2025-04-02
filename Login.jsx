import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login, replace with real auth
    localStorage.setItem("user", "authenticated");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <button className="mt-4 p-2 bg-blue-600 text-white rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

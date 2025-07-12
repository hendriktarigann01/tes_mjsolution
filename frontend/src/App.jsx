import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";

const App = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      const { token } = response.data;

      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Terjadi kesalahan");
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default App;

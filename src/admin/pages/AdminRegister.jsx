import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AdminRegister() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!username || !password) {
      alert("All fields required");
      return;
    }

    localStorage.setItem(
      "adminUser",
      JSON.stringify({ username, password })
    );

    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          Admin Register
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Already registered?{" "}
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

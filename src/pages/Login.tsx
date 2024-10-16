import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulasi login, bisa tambahkan autentikasi
    navigate('/');
  };

  const handleGuest = () => {
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleLogin}
      >
        Login as User
      </button>
      <button
        className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
        onClick={handleGuest}
      >
        Continue as Guest
      </button>
    </div>
  );
};

export default Login;

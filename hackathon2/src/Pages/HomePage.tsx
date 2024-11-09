import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container"> {/* Asegúrate de que esta clase esté aquí */}
      <h1>Bienvenido a la App de Ecommerce</h1>
      <p>Elige una opción para continuar:</p>
      <button onClick={goToRegister}>Registrarse</button>
      <button onClick={goToLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default HomePage;
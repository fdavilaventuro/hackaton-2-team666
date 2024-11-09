// src/Components/Login.tsx

import React, { useState } from 'react';

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Nuevo estado para controlar si el usuario está logueado

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Guarda el token en localStorage
        setIsLoggedIn(true); // Cambia el estado para mostrar el mensaje de éxito
        setMessage('Inicio de sesión exitoso.');
        
      } else if (response.status === 401) {
        setMessage('Credenciales inválidas.');
      } else if (response.status === 400) {
        setMessage('Campos faltantes o inválidos.');
      } else if (response.status === 500) {
        setMessage('Error interno del servidor. Avisa a los TAs.');
      }
    } catch (error) {
      setMessage('Error al iniciar sesión. Inténtalo de nuevo.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {message && <p>{message}</p>}
      {isLoggedIn && <p>¡Bienvenido! Has iniciado sesión con éxito.</p>}
    </div>
  );
};

export default Login;

import React, { useState } from 'react';

interface RegisterForm {
  username: string;
  password: string;
  role: 'admin' | 'client';
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    username: '',
    password: '',
    role: 'client',
  });
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        setMessage(data.message);
        window.location.href='/productlist'
      } else if (response.status === 409) {
        setMessage('El usuario ya existe.');
      } else if (response.status === 400) {
        setMessage('Campos faltantes o inválidos.');
      } else if (response.status === 500) {
        setMessage('Error interno del servidor. Avisa a los TAs.');
      }
    } catch (error) {
      setMessage('Error al registrar el usuario. Inténtalo de nuevo.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
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
        <label>
          Rol:
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="client">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
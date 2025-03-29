import React, { useState } from 'react';

const DriverRegistration = ({ onRegistrationComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    documentId: '',
    motoType: '',
    motoModel: '',
    motoYear: '',
    licenseNumber: ''
  });

  const motoTypes = [
    'Scooter', 
    'Deportiva', 
    'Naked', 
    'Touring', 
    'Cross'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones básicas
    const requiredFields = [
      'firstName', 
      'lastName', 
      'documentId', 
      'motoType', 
      'motoModel'
    ];

    const isValid = requiredFields.every(field => formData[field].trim() !== '');

    if (isValid) {
      onRegistrationComplete(formData);
    } else {
      alert('Por favor completa todos los campos obligatorios');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Registro de Conductor
      </h2>
      <form 
        onSubmit={handleSubmit} 
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Apellido</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Ingresa tu apellido"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Documento de Identidad</label>
          <input
            type="text"
            name="documentId"
            value={formData.documentId}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Número de documento"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Tipo de Moto</label>
          <select
            name="motoType"
            value={formData.motoType}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">Selecciona un tipo</option>
            {motoTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Modelo de Moto</label>
          <input
            type="text"
            name="motoModel"
            value={formData.motoModel}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Ej: Honda CBR 250R"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Año de la Moto</label>
          <input
            type="number"
            name="motoYear"
            value={formData.motoYear}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Año de fabricación"
            min="2000"
            max="2024"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Número de Licencia</label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Número de licencia de conducir"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Registrarme como Conductor
        </button>
      </form>
    </div>
  );
};

export default DriverRegistration;
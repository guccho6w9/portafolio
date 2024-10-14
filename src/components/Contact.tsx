import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image'; // Importamos Image para los iconos

const ContactForm = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Correo enviado correctamente');
      handleReset();
    } else {
      alert('Error al enviar el correo');
    }
  };

  return (
    <div id="contacto" className={`py-16 px-8 md:px-20 xl:mx-20 rounded-lg shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-fuchsia-50 text-black'}`}
    style={{
      backgroundColor: isDarkMode
        ? "rgba(68, 16, 107, 0.2)" // Fondo semitransparente oscuro
        : "rgba(255, 182, 193, 0.0)", // Fondo semitransparente claro
    }}
    >

      <h2 className="text-5xl font-extrabold font-barlow mb-2 text-center">CONTÁCTO</h2>

      <div className="w-48 h-1 mx-auto mb-8">
  <hr className={`border ${isDarkMode ? 'border-white' : 'border-black'}`} />
</div>


      <div className={`p-6 border rounded-lg transition-all duration-300 ${isDarkMode ? 'border-teal-500 bg-gradient-to-br from-black to-teal-900' : 'bg-white border-fuchsia-500'}`}>
        <form onSubmit={handleSubmit}>
          {/* Nombre  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 pr-10 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-teal-500' : 'bg-gray-100 border-gray-300 text-black focus:ring-fuchsia-500'
                  }`}
                  required
                />
                <Image
                  src="/iconos-contact/user.svg"
                  alt="User Icon"
                  width={24}
                  height={24}
                  className={`absolute right-3 ${isDarkMode ? 'filter invert' : ''}`}
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="relative">
              <label htmlFor="email" className="block mb-1 font-medium">Correo Electrónico</label>
              <div className="flex items-center">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 pr-10 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-teal-500' : 'bg-gray-100 border-gray-300 text-black focus:ring-fuchsia-500'
                  }`}
                  required
                />
                <Image
                  src="/iconos-contact/mail.svg"
                  alt="Mail Icon"
                  width={24}
                  height={24}
                  className={`absolute right-3 ${isDarkMode ? 'filter invert' : ''}`}
                />
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-teal-500' : 'bg-gray-100 border-gray-300 text-black focus:ring-fuchsia-500'
              }`}
              rows={5}
              required
            />
          </div>

          {/* Botones */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleReset}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              Limpiar
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isDarkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-fuchsia-500 text-white hover:bg-fuchsia-600'
              }`}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

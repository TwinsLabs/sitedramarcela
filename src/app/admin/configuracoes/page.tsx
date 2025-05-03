'use client';

import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

export default function ConfiguracoesAdmin() {
  const [contactInfo, setContactInfo] = useState({
    whatsapp: '(34) 98401-5538',
    email: 'dramarcellaribeirovieira@gmail.com',
    instagram: 'https://www.instagram.com/marcellarivieira',
    linkedin: 'http://linkedin.com/in/marcella-r-31373a235',
  });

  const [editingField, setEditingField] = useState<string | null>(
    null
  );
  const [editedValue, setEditedValue] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleEditClick = (field: string, value: string) => {
    setEditingField(field);
    setEditedValue(value);
    setSuccessMessage('');
  };

  const handleSaveClick = () => {
    if (editingField) {
      // Atualizar o campo no estado
      setContactInfo({
        ...contactInfo,
        [editingField]: editedValue,
      });

      setEditingField(null);
      setSuccessMessage('Informação atualizada com sucesso!');

      // Em uma implementação real, aqui seria feita uma chamada à API para salvar as alterações
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  const handleCancelClick = () => {
    setEditingField(null);
    setSuccessMessage('');
  };

  return (
    <div>
      <h1 className="text-3xl font-serif text-[#394240] mb-6">
        Configurações
      </h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-serif text-[#394240] mb-6">
          Informações de Contato
        </h2>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-[#394240]">
                WhatsApp
              </h3>
              {editingField !== 'whatsapp' ? (
                <button
                  onClick={() =>
                    handleEditClick('whatsapp', contactInfo.whatsapp)
                  }
                  className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                >
                  <FaEdit className="mr-1" /> Editar
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveClick}
                    className="flex items-center text-green-600 hover:text-green-800"
                  >
                    <FaSave className="mr-1" /> Salvar
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="flex items-center text-red-600 hover:text-red-800"
                  >
                    <FaTimes className="mr-1" /> Cancelar
                  </button>
                </div>
              )}
            </div>

            {editingField === 'whatsapp' ? (
              <input
                type="text"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
              />
            ) : (
              <div className="bg-gray-50 p-3 rounded-md">
                {contactInfo.whatsapp}
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-[#394240]">
                E-mail
              </h3>
              {editingField !== 'email' ? (
                <button
                  onClick={() =>
                    handleEditClick('email', contactInfo.email)
                  }
                  className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                >
                  <FaEdit className="mr-1" /> Editar
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveClick}
                    className="flex items-center text-green-600 hover:text-green-800"
                  >
                    <FaSave className="mr-1" /> Salvar
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="flex items-center text-red-600 hover:text-red-800"
                  >
                    <FaTimes className="mr-1" /> Cancelar
                  </button>
                </div>
              )}
            </div>

            {editingField === 'email' ? (
              <input
                type="email"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
              />
            ) : (
              <div className="bg-gray-50 p-3 rounded-md">
                {contactInfo.email}
              </div>
            )}
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-[#394240]">
                Instagram
              </h3>
              {editingField !== 'instagram' ? (
                <button
                  onClick={() =>
                    handleEditClick(
                      'instagram',
                      contactInfo.instagram
                    )
                  }
                  className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                >
                  <FaEdit className="mr-1" /> Editar
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveClick}
                    className="flex items-center text-green-600 hover:text-green-800"
                  >
                    <FaSave className="mr-1" /> Salvar
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="flex items-center text-red-600 hover:text-red-800"
                  >
                    <FaTimes className="mr-1" /> Cancelar
                  </button>
                </div>
              )}
            </div>

            {editingField === 'instagram' ? (
              <input
                type="url"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
              />
            ) : (
              <div className="bg-gray-50 p-3 rounded-md">
                {contactInfo.instagram}
              </div>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-[#394240]">
                LinkedIn
              </h3>
              {editingField !== 'linkedin' ? (
                <button
                  onClick={() =>
                    handleEditClick('linkedin', contactInfo.linkedin)
                  }
                  className="flex items-center text-[#A5776C] hover:text-[#5C6857]"
                >
                  <FaEdit className="mr-1" /> Editar
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveClick}
                    className="flex items-center text-green-600 hover:text-green-800"
                  >
                    <FaSave className="mr-1" /> Salvar
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="flex items-center text-red-600 hover:text-red-800"
                  >
                    <FaTimes className="mr-1" /> Cancelar
                  </button>
                </div>
              )}
            </div>

            {editingField === 'linkedin' ? (
              <input
                type="url"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C6857]"
              />
            ) : (
              <div className="bg-gray-50 p-3 rounded-md">
                {contactInfo.linkedin}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { FaUpload, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

interface ImageItem {
  id: string;
  name: string;
  url: string;
  section: string;
  uploadDate: string;
}

export default function ImagensAdmin() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  // Dados mockados para simular as imagens
  useEffect(() => {
    const mockImages: ImageItem[] = [
      {
        id: 'img1',
        name: 'hero-image.jpg',
        url: '/images/hero-image.jpg',
        section: 'hero',
        uploadDate: '2025-04-01'
      },
      {
        id: 'img2',
        name: 'about-image.jpg',
        url: '/images/about-image.jpg',
        section: 'about',
        uploadDate: '2025-04-01'
      },
      {
        id: 'img3',
        name: 'panel-image.jpg',
        url: '/images/panel-image.jpg',
        section: 'panel',
        uploadDate: '2025-04-01'
      },
      {
        id: 'img4',
        name: 'service-icon-1.svg',
        url: '/images/service-icon-1.svg',
        section: 'services',
        uploadDate: '2025-04-01'
      },
      {
        id: 'img5',
        name: 'service-icon-2.svg',
        url: '/images/service-icon-2.svg',
        section: 'services',
        uploadDate: '2025-04-01'
      },
      {
        id: 'img6',
        name: 'service-icon-3.svg',
        url: '/images/service-icon-3.svg',
        section: 'services',
        uploadDate: '2025-04-01'
      }
    ];

    setImages(mockImages);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/gif'];
    
    if (!allowedTypes.includes(file.type)) {
      setErrorMessage('Formato de arquivo não suportado. Use JPEG, PNG, SVG ou GIF.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }
    
    // Simulando upload
    setUploadingImage(true);
    
    setTimeout(() => {
      // Em uma implementação real, aqui seria feito o upload para um servidor
      const newImage: ImageItem = {
        id: `img${Date.now()}`,
        name: file.name,
        url: URL.createObjectURL(file),
        section: 'uploads',
        uploadDate: new Date().toISOString().split('T')[0]
      };
      
      setImages([...images, newImage]);
      setUploadingImage(false);
      setSuccessMessage('Imagem enviada com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 1500);
  };

  const handleDeleteImage = (id: string) => {
    setSelectedImage(id);
  };

  const confirmDeleteImage = () => {
    if (selectedImage) {
      // Remover a imagem do estado
      const updatedImages = images.filter(img => img.id !== selectedImage);
      setImages(updatedImages);
      setSelectedImage(null);
      setSuccessMessage('Imagem excluída com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000);
      
      // Em uma implementação real, aqui seria feita uma chamada à API para excluir a imagem
    }
  };

  const cancelDeleteImage = () => {
    setSelectedImage(null);
  };

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.section === filter);

  return (
    <div>
      <h1 className="text-3xl font-serif text-[#394240] mb-6">Gerenciar Imagens</h1>
      
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}
      
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-serif text-[#394240] mb-4">Enviar Nova Imagem</h2>
          <div className="flex items-center">
            <label className="flex items-center justify-center px-4 py-2 bg-[#5C6857] text-white rounded-md cursor-pointer hover:bg-opacity-90 transition-all">
              <FaUpload className="mr-2" />
              {uploadingImage ? 'Enviando...' : 'Selecionar Arquivo'}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploadingImage}
              />
            </label>
            <span className="ml-4 text-sm text-gray-500">
              Formatos suportados: JPEG, PNG, SVG, GIF
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-serif text-[#394240] mb-4">Imagens do Site</h2>
          
          <div className="flex mb-4 border-b pb-4">
            <button
              onClick={() => setFilter('all')}
              className={`mr-2 px-3 py-1 rounded-md text-sm ${
                filter === 'all'
                  ? 'bg-[#5C6857] text-white'
                  : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('hero')}
              className={`mr-2 px-3 py-1 rounded-md text-sm ${
                filter === 'hero'
                  ? 'bg-[#5C6857] text-white'
                  : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
              }`}
            >
              Hero
            </button>
            <button
              onClick={() => setFilter('about')}
              className={`mr-2 px-3 py-1 rounded-md text-sm ${
                filter === 'about'
                  ? 'bg-[#5C6857] text-white'
                  : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => setFilter('services')}
              className={`mr-2 px-3 py-1 rounded-md text-sm ${
                filter === 'services'
                  ? 'bg-[#5C6857] text-white'
                  : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => setFilter('panel')}
              className={`mr-2 px-3 py-1 rounded-md text-sm ${
                filter === 'panel'
                  ? 'bg-[#5C6857] text-white'
                  : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
              }`}
            >
              Painel
            </button>
            <button
              onClick={() => setFilter('uploads')}
              className={`mr-2 px-3 py-1 rounded-md text-sm ${
                filter === 'uploads'
                  ? 'bg-[#5C6857] text-white'
                  : 'bg-gray-100 text-[#394240] hover:bg-gray-200'
              }`}
            >
              Uploads
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(img => (
              <div key={img.id} className="border rounded-md overflow-hidden">
                <div className="relative h-40 bg-gray-100">
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-[#394240] truncate" title={img.name}>
                      {img.name}
                    </h3>
                    {selectedImage === img.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={confirmDeleteImage}
                          className="text-green-600 hover:text-green-800"
                          title="Confirmar exclusão"
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={cancelDeleteImage}
                          className="text-red-600 hover:text-red-800"
                          title="Cancelar exclusão"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDeleteImage(img.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Excluir imagem"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="capitalize">{img.section}</span>
                    <span>{img.uploadDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Nenhuma imagem encontrada para o filtro selecionado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

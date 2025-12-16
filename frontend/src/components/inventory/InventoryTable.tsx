
'use client';

import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  sku: string;
  brand: string;
  stock: number;
  threshold: number;
  category: string;
}

const getStatus = (stock: number, threshold: number) => {
  if (stock === 0) return 'out-of-stock';
  if (stock <= threshold) return 'low-stock';
  return 'in-stock';
};

const getStatusClasses = (status: string) => {
  switch (status) {
    case 'in-stock':
      return 'bg-green-100 text-green-800';
    case 'low-stock':
      return 'bg-yellow-100 text-yellow-800';
    case 'out-of-stock':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const InventoryTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/debug/products`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md h-full flex items-center justify-center">
        <p className="text-gray-500">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md h-full flex items-center justify-center">
        <p className="text-red-500">Error al cargar productos: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Inventario de Productos</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar por nombre o SKU..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todas las categorías</option>
            <option value="serum">Serums</option>
            <option value="crema">Cremas</option>
            <option value="mascarilla">Mascarillas</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marca</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => {
              const status = getStatus(product.stock, product.threshold);
              return (
                <tr key={product.id}>
                  <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{product.sku}</td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{product.brand}</td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(status)}`}>
                      {status === 'in-stock' ? 'En Stock' : status === 'low-stock' ? 'Stock Bajo' : 'Agotado'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;

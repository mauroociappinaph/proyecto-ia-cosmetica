
import React from 'react';

const products = [
  { id: 1, name: 'Serum Facial Hidratante', sku: 'SFH-001', brand: 'Cosmetica Natural', stock: 42, status: 'in-stock' },
  { id: 2, name: 'Crema Contorno de Ojos', sku: 'CCO-002', brand: 'Bella Piel', stock: 15, status: 'in-stock' },
  { id: 3, name: 'Mascarilla Facial de Arcilla', sku: 'MFA-003', brand: 'Tierra Pura', stock: 0, status: 'out-of-stock' },
  { id: 4, name: 'Protector Solar SPF 50', sku: 'PSS-004', brand: 'Sol Radiante', stock: 5, status: 'low-stock' },
  { id: 5, name: 'Tónico Facial Refrescante', sku: 'TFR-005', brand: 'Agua Viva', stock: 30, status: 'in-stock' },
];

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
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{product.sku}</td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{product.brand}</td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(product.status)}`}>
                    {product.status === 'in-stock' ? 'En Stock' : product.status === 'low-stock' ? 'Stock Bajo' : 'Agotado'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;

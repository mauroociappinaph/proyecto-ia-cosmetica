
import InventoryTable from '@/components/inventory/InventoryTable';
import Chat from '@/components/chat/Chat';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Asistente de Inventario IA
            </h1>
            <p className="text-md text-gray-500">Panel de Cosméticos</p>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Izquierda: Dashboard de Inventario */}
          <div className="lg:col-span-2">
            <InventoryTable />
          </div>
          {/* Columna Derecha: Chat Estático */}
          <div className="lg:col-span-1">
            <Chat />
          </div>
        </div>
      </main>
    </div>
  );
}

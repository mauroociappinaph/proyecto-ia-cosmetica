## 📁 Estructura del repositorio

> Nota: Esta estructura está diseñada para la primera versión de implementación del proyecto. Algunos directorios/archivos pueden no existir todavía mientras el desarrollo está en curso.

```
.
├── backend/
│   ├── src/
│   │   ├── mcp/
│   │   │   ├── tools/          # Implementación de tools MCP
│   │   │   └── server.ts       # Servidor MCP / API backend
│   │   ├── db/
│   │   │   └── prismaClient.ts
│   │   ├── routes/
│   │   │   └── chat.ts         # Endpoint /api/chat
│   │   └── index.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── app/
│   │   ├── page.tsx            # Dashboard + chat
│   │   └── api/                # (opcional) rutas API de Next
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatInput.tsx   # SRP: Solo entrada de texto
│   │   │   ├── Message.tsx     # SRP: Componente de mensaje
│   │   │   ├── index.ts        # Barrel export
│   │   ├── inventory/
│   │   │   ├── InventoryTable.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── index.ts        # Barrel export
│   │   ├── ui/                 # Componentes reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── index.ts        # Barrel export
│   │   └── index.ts            # Barrel export principal
│   ├── stores/                 # Estado global con Zustand (diseñado para implementación)
│   │   ├── chatStore.ts        # Estado del chat
│   │   ├── inventoryStore.ts   # Estado de inventario
│   │   ├── uiStore.ts          # Estado de UI
│   │   └── index.ts            # Barrel export
│   ├── hooks/                  # Custom hooks (DRY)
│   │   ├── useChat.ts          # Lógica del chat
│   │   ├── useInventory.ts     # Lógica de inventario
│   │   └── index.ts            # Barrel export
│   ├── lib/                    # Utilidades y helpers
│   │   ├── api.ts              # Cliente API
│   │   ├── utils.ts            # Funciones helper
│   │   └── index.ts            # Barrel export
│   ├── package.json
│   └── .env.example
│
├── docs/                       # Documentación detallada (nombres orientativos)
│   ├── overview.md
│   ├── architecture.md
│   ├── features.md
│   ├── stack.md
│   ├── model.md
│   ├── logic.md
│   ├── mcp.md
│   ├── ui.md
│   ├── installation.md
│   ├── usage.md
│   ├── limitations.md
│   ├── roadmap.md
│   ├── project-management.md    # Gestión del proyecto y GitHub Issues
│   └── structure.md
│
├── README.md
├── LICENSE
├── .gitignore
└── package.json (root, opcional)

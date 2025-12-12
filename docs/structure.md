## 📁 Estructura del repositorio

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
│   │   ├── Chat.tsx
│   │   └── InventoryTable.tsx
│   ├── lib/
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
│   └── structure.md
│
├── README.md
├── LICENSE
├── .gitignore
└── package.json (root, opcional)

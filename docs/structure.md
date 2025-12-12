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
│   ├── app/ o src/
│   │   ├── pages/ o app/
│   │   │   ├── index.tsx       # Dashboard + chat
│   │   │   └── api/ (si se usa Next API)
│   │   ├── components/
│   │   │   ├── Chat.tsx
│   │   │   └── InventoryTable.tsx
│   │   └── lib/
│   ├── package.json
│   └── .env.example
│
├── docs/                       # Documentación detallada
│   ├── architecture.md
│   ├── features.md
│   ├── installation.md
│   ├── limitations.md
│   ├── model.md
│   ├── roadmap.md
│   ├── stack.md
│   ├── structure.md
│   ├── ui.md
│   └── usage.md
│
├── README.md
├── LICENSE
├── .gitignore
└── package.json (root, opcional)

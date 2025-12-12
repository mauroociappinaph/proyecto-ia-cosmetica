## 🚀 Instalación y configuración

> Nota: Los nombres de carpetas/scripts son orientativos. Ajusta según tu implementación real.

### 9.1 Requisitos previos

- Node.js >= 18
- npm / pnpm / yarn
- API key de Mistral AI
- Git
- (Opcional) Docker + PostgreSQL si quieres usar Postgres en lugar de SQLite

### 9.2 Clonar repositorio

```bash
git clone https://github.com/mauroociappinaph/proyecto-ia-cosmetica.git
cd proyecto-ia-cosmetica
```

### 9.3 Configurar API de Mistral

Obtén tu API key desde [Mistral AI](https://mistral.ai/).
Configura la variable de entorno con tu API key.

### 9.4 Backend / MCP

```bash
cd backend
cp .env.example .env
npm install
```

En el archivo `.env`, configurar por ejemplo:

```env
# Base de datos (SQLite por defecto)
DATABASE_URL="file:./dev.db"

# API de Mistral AI
MISTRAL_API_KEY="tu-api-key-aqui"
LLM_PROVIDER="mistral"
LLM_MODEL="mistral-medium"

# Puerto del servidor backend/MCP
PORT=4000
```

**Migraciones y seed:**
```bash
npx prisma migrate dev
npx prisma db seed   # si tienes script de seed configurado
```

**Ejecutar backend:**
```bash
npm run dev
```

Por defecto debería levantar en http://localhost:4000.

### 9.5 Frontend (Next.js)

```bash
cd ../frontend
cp .env.example .env
npm install
```

En `.env` (frontend):

```env
NEXT_PUBLIC_API_URL="http://localhost:4000"
```

**Ejecutar frontend:**
```bash
npm run dev
```

Frontend disponible en http://localhost:3000 (por defecto).

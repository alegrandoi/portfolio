# 🐳 Guía de Docker para Portfolio

Este proyecto incluye configuración completa de Docker para desarrollo y pruebas locales.

## 📋 Prerrequisitos

- Docker Desktop instalado y ejecutándose
- Tu API Key de Gemini (obtenerla de https://aistudio.google.com/app/apikey)

## 🚀 Inicio Rápido

### 1. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# En PowerShell
Copy-Item .env.local.example .env.local
# Luego edita .env.local y agrega tu API key real
```

### 2. Construir y ejecutar con Docker Compose

```bash
# Construir la imagen
docker-compose build

# Iniciar el contenedor
docker-compose up
```

La aplicación estará disponible en: http://localhost:3000

### 3. Detener el contenedor

```bash
# Detener (Ctrl+C en la terminal o)
docker-compose down
```

## 🛠️ Comandos Útiles

### Reconstruir después de cambios en el código

```bash
# Reconstruir la imagen
docker-compose build --no-cache

# Reiniciar el contenedor
docker-compose up
```

### Ver logs en tiempo real

```bash
docker-compose logs -f
```

### Ejecutar en segundo plano

```bash
docker-compose up -d
```

### Ver contenedores en ejecución

```bash
docker ps
```

### Acceder al contenedor

```bash
docker exec -it portfolio-app sh
```

### Limpiar todo (contenedores, imágenes, volúmenes)

```bash
docker-compose down -v
docker system prune -a
```

## 🔧 Solución de Problemas

### El contenedor no inicia

1. Verifica que Docker Desktop esté ejecutándose
2. Asegúrate de que el puerto 3000 no esté en uso:
   ```bash
   # En PowerShell
   Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess
   ```

### La API de Gemini no funciona

1. Verifica que `.env.local` exista y tenga la API key correcta
2. Reconstruye la imagen:
   ```bash
   docker-compose down
   docker-compose build --no-cache
   docker-compose up
   ```

### Cambios en el código no se reflejan

Docker cachea las capas. Reconstruye sin caché:
```bash
docker-compose build --no-cache
```

## 📦 Estructura de Archivos Docker

- `Dockerfile` - Configuración de la imagen Docker
- `docker-compose.yml` - Orquestación de servicios
- `.dockerignore` - Archivos excluidos del build
- `.env.local` - Variables de entorno (no se sube a Git)

## 🎯 Flujo de Trabajo Recomendado

1. **Desarrollo local:** `npm run dev` (más rápido, hot reload)
2. **Prueba pre-deploy:** Docker (simula producción)
3. **Deploy:** Firebase App Hosting

```bash
# Desarrollo
npm run dev

# Probar en Docker antes de deploy
docker-compose up --build

# Si todo funciona, deploy a Firebase
git add .
git commit -m "tu mensaje"
git push
```

## 🔐 Variables de Entorno

El contenedor necesita estas variables:

- `GEMINI_API_KEY` - Tu API key de Google Gemini (requerida)
- `NODE_ENV` - Configurado automáticamente a "production"

## ⚡ Optimizaciones

El Dockerfile usa:
- **Multi-stage builds** para imágenes más pequeñas
- **Node.js 22 Alpine** (imagen base ligera)
- **Standalone output** de Next.js (solo archivos necesarios)
- **Usuario no-root** para seguridad

## 📊 Tamaño de la Imagen

- Imagen base: ~180MB
- Imagen final: ~200-250MB (dependiendo de dependencias)

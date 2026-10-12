# CuteURL — Frontend

> Acorta cualquier link al instante. Interfaz web para el servicio [CuteURL](https://github.com/M4NUEL-CERON/CuteURL).

![demo](docs/demo.png)

---

## Vista previa

| Inicio | Link acortado |
|--------|--------------|
| ![inicio](docs/screenshot-inicio.png) | ![resultado](docs/screenshot-resultado.png) |

---

## Stack

- **React 18** + **TypeScript**
- **Vite 6** — build tool
- **GitHub Pages** — hosting estático
- **GitHub Actions** — deploy automático en cada push a `main`

---

## Arquitectura

```
Usuario
  │
  ▼
GitHub Pages          (este repo — archivos estáticos)
  │  fetch POST /shorten
  ▼
Railway               (CuteURL backend — Spring Boot)
  │  SETNX
  ▼
Redis Cloud           (almacenamiento clave-valor)
```

---

## Desarrollo local

### Requisitos
- Node.js 20+
- El [backend](https://github.com/M4NUEL-CERON/CuteURL) corriendo en `http://localhost:8080`

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Crear variables de entorno locales
echo "VITE_API_URL=http://localhost:8080" > .env.local

# 3. Arrancar el servidor de desarrollo
npm run dev
```

La app queda disponible en `http://localhost:5173`.

---

## Deploy

El deploy es automático via GitHub Actions cada vez que haces push a `main`.

### Configuración necesaria (una sola vez)

1. En GitHub: **Settings → Pages → Source → GitHub Actions**
2. En GitHub: **Settings → Secrets → Actions** — agregar:

| Secret | Valor |
|--------|-------|
| `VITE_API_URL` | URL de tu backend en Railway |

---

## Variables de entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_URL` | URL base del backend | `https://cuteurl.up.railway.app` |

---

## Repositorio del backend

El backend (Spring Boot + Redis) vive en un repo separado:
👉 [M4NUEL-CERON/CuteURL](https://github.com/M4NUEL-CERON/CuteURL)
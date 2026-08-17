# 🌍 The News Explorer 2026 - Frontend

> La interfaz de usuario moderna e interactiva de News Explorer. Una SPA (Single Page Application) construida con React y estilizada con CSS puro desde cero, permitiendo una experiencia de usuario rápida y fluida.

[![Proyecto desplegado](https://img.shields.io/badge/Link%20aplicación%20desplegada-8A2BE2)](https://www.news-explorer-2026.mooo.com/)

---

### ✨ Características del Cliente

- **Diseño a Medida (CSS Puro):** Interfaz limpia, responsiva y maquetada sin librerías externas de estilos (sin Tailwind ni Bootstrap).
- **Manejo de Sesión (Local Storage):** Persistencia del token JWT en el navegador para mantener la sesión del usuario activa.
- **Rutas Protegidas:** Implementación de guards en el enrutador para evitar que usuarios no autenticados accedan a secciones privadas (como el panel de marcadores).
- **Consumo de API:** Comunicación asíncrona con el servidor para búsquedas en tiempo real y gestión de favoritos.

---

### 🛠️ Tecnologías

<p align="left">
  <a href="https://react.dev" target="_blank" rel="noreferrer"> <img src="https://www.vhv.rs/dpng/d/612-6126558_react-logo-png-react-js-logo-svg-transparent.png" alt="react" width="45" height="45"/> </a>
  <a href="https://mozilla.org" target="_blank" rel="noreferrer"> <img src="https://githubusercontent.com" alt="css3" width="45" height="45"/> </a>
  <a href="https://mozilla.org" target="_blank" rel="noreferrer"> <img src="https://githubusercontent.com" alt="javascript" width="45" height="45"/> </a>
</p>

---

### 🚀 Instalación y Configuración Local

#### 1. Clonar el repositorio

```bash
git clone https://github.com
cd news-explorer-frontend
```

#### 2. Instalar las dependencias

```bash
npm install
```

#### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto para apuntar a tu servidor local o de producción:

```env
VITE_API_URL=http://localhost:5000/api
# Nota: Cambia el prefijo si usas Create React App (REACT_APP_API_URL)
```

#### 4. Ejecutar el proyecto

```bash
npm run dev # o npm start
```

---

> [!IMPORTANT]
> Este proyecto requiere que el servidor backend esté corriendo de manera simultánea para poder realizar inicios de sesión, registros o guardar noticias.

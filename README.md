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
  <a href="https://react.dev" target="_blank" rel="noreferrer"> <img src="https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png" alt="react" width="45" height="45"/> </a>
  <a href="https://dev.w3.org/html5/spec-LC/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="html5" width="45" height="45"/> </a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer"> <img src="https://e7.pngegg.com/pngimages/603/759/png-clipart-css3-cascading-style-sheets-logo-html-world-wide-web-blue-angle-thumbnail.png" alt="css3" width="45" height="45"/> </a>
  <a href="https://www.javascript.com" target="_blank" rel="noreferrer"> <img src="https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png" alt="javascript" width="45" height="45"/> </a>
</p>

---

### 🚀 Instalación y Configuración Local

#### 1. Clonar el repositorio

```bash
git clone https://github.com/PacoZ2024/news-explorer-frontend.git
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

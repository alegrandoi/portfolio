git add .
# Portfolio Profesional con Next.js e Inteligencia Artificial

Este repositorio contiene el código fuente de un portfolio profesional interactivo, desarrollado para mostrar proyectos, habilidades y experiencia de una manera moderna y atractiva. La aplicación está construida con tecnologías de vanguardia y cuenta con una integración de IA para generar contenido dinámico.

## ✨ Características Principales

- **Diseño Moderno y Responsivo:** Interfaz limpia y adaptable a cualquier dispositivo (escritorio, tablet o móvil).
- **Tema Claro y Oscuro:** Permite al usuario elegir su preferencia visual, que se guarda para futuras visitas.
- **Internacionalización (i18n):** Soporte para múltiples idiomas (español e inglés) con cambio dinámico.
- **Generación de Contenido con IA:** Una sección interactiva donde un modelo de lenguaje (LLM) de Google genera una "proyección profesional" basada en el perfil del desarrollador.
- **Control de Creatividad de la IA:** Un slider permite al usuario ajustar la "temperatura" del modelo para obtener respuestas más o menos creativas.
- **Optimizado para SEO:** Uso de metadatos de Next.js y generación de `sitemap` para un mejor posicionamiento en buscadores.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto es una aplicación web moderna, de página única (SPA), construida con un enfoque en el rendimiento, la experiencia de usuario y las últimas tecnologías de desarrollo.

#### Core y Frontend:

- **Framework:** **Next.js 15 (App Router)** - Se utiliza la última versión de Next.js con su nuevo paradigma de `App Router`, que optimiza el rendimiento mediante el uso de **Componentes de Servidor de React (RSC)** por defecto.
- **Lenguaje:** **TypeScript** - Aporta un tipado estático robusto, mejora la calidad del código y facilita el mantenimiento.
- **Librería UI:** **React 18** - Se aprovechan sus características más recientes como los **Hooks** para la gestión del estado y la lógica.

#### Estilos y Diseño de Interfaz (UI/UX):

- **Framework de CSS:** **Tailwind CSS** - Para un diseño rápido y personalizable mediante clases de utilidad.
- **Componentes:** **ShadCN/UI** - Una colección de componentes de React reutilizables, accesibles y estéticamente cuidados (botones, tarjetas, diálogos, etc.).
- **Iconografía:** **Lucide React** - Una librería de iconos SVG ligera y personalizable.
- **Modo Claro/Oscuro:** Implementado con **`next-themes`**.

#### Funcionalidad de Inteligencia Artificial Generativa:

- **Orquestación de IA:** **Genkit** - Framework de Google para definir, ejecutar y gestionar los flujos de inteligencia artificial.
- **Modelo de Lenguaje (LLM):** **Google AI (Gemini 2.5 Flash)** - El cerebro detrás de la funcionalidad "Proyección Profesional", invocado a través de Genkit para generar texto creativo.

#### Interactividad y Gestión de Estado:

- **Formularios:** **React Hook Form** para gestionar el formulario de contacto.
- **Validación de Datos:** **Zod** para definir esquemas de validación tanto en el cliente (formularios) como en los flujos de IA.
- **Internacionalización (i18n):** Implementada con un **React Context** personalizado para el cambio de idioma.

#### Despliegue y Entorno:

- **Plataforma de Hosting:** Preparado para desplegarse en **Firebase App Hosting**.
- **SEO:** Se genera un mapa del sitio (`sitemap.ts`) dinámicamente y se utilizan las capacidades de metadatos de Next.js.

---

## 🚀 Empezando

Para ejecutar este proyecto en un entorno de desarrollo local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL-DEL-REPOSITORIO>
    cd <NOMBRE-DEL-DIRECTORIO>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tu API Key de Google AI Studio para que Genkit pueda funcionar.

    ```env
    GEMINI_API_KEY=tu_api_key_aqui
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

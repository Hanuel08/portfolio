# Portfolio — Hanuel Martínez

Portfolio personal modular y responsive. El contenido se edita desde archivos JSON estáticos; no hace falta tocar los componentes para actualizar proyectos, skills o datos de contacto.

**Stack:** React 19 · Vite · Tailwind CSS 4 · Tabler Icons · React Router

## Características

- Secciones: hero, sobre mí, educación, proyectos, tecnologías, certificaciones y contacto
- Detalle de proyecto en `/projects/:id`
- Modo claro / oscuro (persistido en `localStorage`)
- Diseño centrado y responsive
- Secciones vacías no se renderizan (ni aparecen en el nav)
- Formulario de contacto vía [FormSubmit](https://formsubmit.co)
- Botones sociales con colores personalizables desde JSON

## Empezar

```bash
npm install
npm run dev
```

| Script        | Descripción              |
| ------------- | ------------------------ |
| `npm run dev` | Servidor de desarrollo   |
| `npm run build` | Build de producción    |
| `npm run preview` | Preview del build     |
| `npm run lint` | ESLint                   |

## Estructura

```
src/
  data/                 # Contenido editable (JSON)
    profile.json
    about.json
    education.json
    experience.json
    projects.json
    skills.json
    certifications.json
    site.json
  components/
    layouts/            # Header, NavBar, Main, Footer
    sections/           # Hero, About, Projects, Contact, …
    ui/                 # Section, TechBadge, SocialButton
  pages/                # HomePage, ProjectDetailPage
  lib/icons.jsx         # Mapa id → icono Tabler
  context/              # Tema claro/oscuro
public/
  images/               # Avatar, covers y capturas
  cv.pdf                # Curriculum
```

## Editar contenido

Todo el texto y los links viven en `src/data/`. Las imágenes van en `public/` y se referencian con rutas absolutas (`/images/...`).

### Perfil (`profile.json`)

Nombre, rol, foto, bio corta, ubicación y botones del hero:

```json
{
  "id": "github",
  "label": "GitHub",
  "url": "https://github.com/Hanuel08",
  "icon": "github",
  "bg": "#24292f",
  "color": "#ffffff",
  "hoverBg": "#000000"
}
```

Colores opcionales: `bg`, `color`, `hoverBg`, `border`. Sin ellos, el botón usa el estilo del tema.

### Proyectos (`projects.json`)

```json
{
  "id": "kokoro",
  "name": "Kokoro",
  "shortDescription": "…",
  "cover": "/images/projects/kokoro-cover.svg",
  "demoUrl": "",
  "githubUrl": "https://github.com/…",
  "technologies": [
    { "id": "react", "name": "React", "bg": "#61dafb", "color": "#0b1220" }
  ],
  "longDescription": "Párrafos separados por\\n\\n",
  "images": ["/images/projects/kokoro-1.svg"],
  "year": "2026"
}
```

- `demoUrl` vacío → no se muestra el botón de demo
- `id` se usa en la ruta `/projects/:id`

### Skills e iconos

En `skills.json` (y en tecnologías de proyectos) el campo `id` se mapea en [`src/lib/icons.jsx`](src/lib/icons.jsx). Si añades una tecnología nueva, registra su icono Tabler ahí.

### Experiencia / educación / certificaciones

- `experience.json` vacío → la sección no aparece
- Rellena `education.json` y `certifications.json` con el mismo criterio modular

### Textos del sitio (`site.json`)

Labels del nav, títulos de secciones, textos del formulario y del footer.

## Contacto

El formulario envía a tu email con FormSubmit (`profile.email`). La **primera vez** que alguien envíe un mensaje, FormSubmit pedirá confirmar el correo (revisa spam). Después funcionará sin más configuración.

## Tema

Toggle en el navbar. Variables CSS en `src/index.css` (`--accent`, `--surface`, etc.) y clase `.dark` en `<html>`.

## Licencia

Uso personal. © Hanuel José Martínez Guzmán

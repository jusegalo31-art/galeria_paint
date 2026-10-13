# El laboratorio de Paint: pequeños artistas digitales 🎨🖌️

Plataforma web educativa interactiva diseñada especialmente para estudiantes de **cuarto de primaria (9 a 10 años)**, enfocada en el aprendizaje práctico, creativo y progresivo de las herramientas de **Microsoft Paint**.

---

## 1. Objetivo Pedagógico

El propósito pedagógico es transformar el uso de Microsoft Paint en una experiencia de laboratorio artístico digital:
- **Aprender haciendo:** Los estudiantes practican herramientas reales (formas geométricas, pinceles, aerógrafo, paleta de colores, líneas, curvas, herramienta texto y cuadrícula de precisión).
- **Evidencia auténtica:** Los niños crean sus obras en la aplicación de Paint en su computador, las exportan en formato PNG y las cargan en la plataforma.
- **Colección y museo final:** Al superar los diez retos, se desbloquea una galería de arte con todas sus obras enmarcadas, permitiendo exportar un póster final en PNG de alta resolución con el nombre del estudiante como evidencia de aprendizaje para el docente.

---

## 2. Requisitos Técnicos y Arquitectura

- **Tecnologías utilizadas:** HTML5 semántico, CSS3 moderno (con diseño UX/UI infantil adaptable, variables de color y microanimaciones) y JavaScript modular puro.
- **Sin dependencias externas ni nube:** No utiliza bases de datos, servidores remotos, APIs de terceros, CDN externas ni autenticación con contraseñas o correos.
- **100% seguro para niños:** No recopila datos sensibles. Solo solicita el nombre y apellido para firmar sus obras y personalizar el museo.
- **Almacenamiento y portabilidad local:**
  - El progreso se guarda y recupera mediante un archivo descargable con formato propio: **`.laboratoriopaint`** (un contenedor ZIP que internamente almacena `project.json` y las imágenes binarias PNG).
  - Incluye respaldo temporal en `localStorage` del navegador para proteger al estudiante de recargas accidentales, con advertencia antes de cerrar la página si hay dibujos no respaldados.

### Estructura de Archivos del Proyecto

```text
├── index.html            # Interfaz principal: Portada, Dashboard de retos y Museo
├── tests.html            # Suite de pruebas automatizadas (16/16 pruebas obligatorias)
├── serve.js              # Servidor local estático ultraligero opcional en Node.js
├── README.md             # Documentación pedagógica y técnica completa
├── css/
│   └── styles.css        # Sistema de diseño, tokens, componentes, modales y responsividad
├── js/
│   ├── app.js            # Controlador principal, navegación, estado y eventos
│   ├── challenges.js     # Definición curricular de los 10 retos pedagógicos
│   ├── icons.js          # Biblioteca local de iconos y gráficos SVG nativos
│   ├── audio.js          # Sintetizador de audio interactivo con Web Audio API
│   ├── uploads.js        # Drag-and-drop, validación y normalización a PNG
│   ├── project.js        # Exportación e importación de archivos .laboratoriopaint (ZIP)
│   ├── museum.js         # Galería de exposición y renderizado Canvas en alta resolución
│   └── vendor/
│       ├── jszip.min.js          # Biblioteca local autónoma para empaquetar ZIP
│       └── confetti.browser.js   # Efectos de celebración para niños
```

---

## 3. Los 4 Retos Educativos de Paint

| N.º | Título del Reto | Herramientas de Paint Practicadas | Objetivo de Aprendizaje |
|---|---|---|---|
| **1** | **Mi primera casa digital** | Rectángulo, Triángulo, Relleno de color, Selector de colores | Aprender a componer con formas geométricas cerradas y color. |
| **2** | **Un jardín lleno de vida** | Pinceles variados (óleo, acuarela, aerógrafo), Lápiz, Paleta, Relleno | Practicar el trazo libre, texturas orgánicas y variedad de colores. |
| **3** | **Un robot increíble** | Cuadrados, Rectángulos, Círculos, Líneas y Contornos | Diseñar una figura tecnológica combinando figuras geométricas y líneas. |
| **4** | **Mi obra maestra** | Combinación libre de todas las herramientas de Paint | Proyecto integrador final de síntesis creativa. |

---

## 4. Cómo Ejecutar la Plataforma

La plataforma está diseñada para ser extremadamente fácil de usar en las salas de informática de los colegios:

### Opción A: Doble clic directo (Sin servidor)
1. Abre la carpeta del proyecto en el explorador de archivos.
2. Haz doble clic sobre el archivo [index.html](file:///c:/Users/Usuario%20eat/Documents/Colegio_mexico/Primer%20periodo/3%20y%204/Clase%206%20paint/El%20laboratorio%20de%20paint/index.html).
3. Se abrirá en tu navegador predeterminado (Google Chrome, Microsoft Edge, etc.) con todas las funciones operativas.

### Opción B: Con servidor local incluido (Node.js)
Si deseas ejecutarlo mediante un servidor web local:
```bash
# En la terminal, dentro de la carpeta del proyecto:
node serve.js
```
Abre en tu navegador: `http://localhost:8080`

### Opción C: Publicación en la Web estática
Como no requiere bases de datos ni backend, puedes publicar la carpeta directamente en:
- **GitHub Pages:** Sube los archivos a una rama `main` y activa Pages desde la configuración del repositorio.
- **Vercel / Netlify:** Arrastra la carpeta completa para obtener un enlace público instantáneo.

---

## 5. Guía para el Docente: Evaluación de Evidencias

La plataforma ofrece dos mecanismos claros para la revisión del docente:

1. **El Museo Digital en PNG:**
   - Cuando el estudiante completa los 4 retos, presiona **«Descargar mi museo en PNG»**.
   - El sistema genera un póster en alta resolución (2400 x 1650 px) que incluye:
     - El encabezado institucional del museo.
     - El nombre y apellido del estudiante en una placa destacada.
     - Las 4 obras completas con sus marcos, paspartú y títulos en disposición 2x2.
     - Pie de página pedagógico con la indicación de evidencia escolar.
   - El estudiante puede entregar este único archivo PNG al docente por memoria USB, plataforma escolar o impreso en papel.

2. **Revisión del archivo `.laboratoriopaint`:**
   - El estudiante puede entregar su archivo `Laboratorio_Paint_NombreEstudiante.laboratoriopaint`.
   - El docente abre la plataforma en su propio computador, hace clic en **«Continuar un proyecto guardado»**, selecciona dicho archivo y se restaurarán instantáneamente todos los retos con las imágenes originales y fechas de entrega para su revisión.

---

## 6. Tutorial Integrado para los Estudiantes: Exportar en Paint

La plataforma cuenta con un botón permanente de **«Tutorial Paint»** con 7 pasos ilustrados:
1. **Termina tu dibujo** en Microsoft Paint.
2. **Abre el menú de guardado:** Clic en «Archivo» → «Guardar como».
3. **Selecciona PNG:** Elige «Imagen PNG» para mantener la mayor nitidez.
4. **Escribe el nombre:** Utiliza un nombre claro (ej. `Reto_01_Mi_primera_casa.png`).
5. **Guarda en tu computador:** En el Escritorio o la carpeta de la clase.
6. **Sube el dibujo al laboratorio:** Arrastra o selecciona el archivo en la zona de carga del reto.
7. **Comprueba la vista previa:** Revisa que se vea completo y presiona «Confirmar y completar reto».

---

## 7. Batería de Pruebas Realizadas y Verificadas (16/16)

Puedes verificar todas las pruebas abriendo el archivo [tests.html](file:///c:/Users/Usuario%20eat/Documents/Colegio_mexico/Primer%20periodo/3%20y%204/Clase%206%20paint/El%20laboratorio%20de%20paint/tests.html) en el navegador:

1. **Definición completa de los 10 retos pedagógicos:** Verificado con títulos, objetivos, herramientas y consejos en español.
2. **Iconos vectoriales y gráficos temáticos locales:** Verificado con SVGs nativos para herramientas y las 10 ilustraciones sin CDNs.
3. **Rechazo de archivos ejecutables y no compatibles:** Bloquea `.exe` y documentos ajenos a imágenes.
4. **Procesamiento y normalización local a PNG:** Lee dimensiones reales y genera PNG en memoria.
5. **Conversión automática de JPG a PNG:** Admite JPG pero normaliza a PNG para la composición final.
6. **Control de tamaño de archivo:** Rechaza archivos que excedan los 15 MB para evitar saturación de memoria.
7. **Exportación del proyecto en contenedor ZIP (`.laboratoriopaint`):** Empaqueta `project.json` e imágenes en carpeta `images/`.
8. **Restauración fiel del proyecto guardado:** Recupera el nombre, progreso e imágenes binarias sin pérdidas.
9. **Manejo de errores al cargar archivos dañados:** Muestra mensajes compresibles para niños sin congelar la interfaz.
10. **Protección del Museo:** Permanece bloqueado si faltan retos (<10) y muestra lista interactiva de faltantes.
11. **Exposición artística completa:** Se habilita al completar 10/10 retos con marcos individuales.
12. **Carga y renderizado en Canvas:** Procesa las 10 imágenes asíncronamente preservando proporciones (contain).
13. **Sintetizador de audio interactivo:** Genera notas alegres mediante Web Audio API con botón de silencio.
14. **Tutorial visual paso a paso:** 7 pasos con diagramas y adaptaciones para Windows 10 y Windows 11.
15. **Composición y descarga de póster PNG:** Genera archivo `Museo_Paint_NombreEstudiante.png` de 2400x1650 px.
16. **Autonomía 100% offline:** Funciona sin acceso a internet tras descargar o copiar los archivos.

---

## 8. Consideraciones y Limitaciones Conocidas

- **Verificación de herramientas de Paint:** Como se especifica pedagógicamente, la plataforma no califica de forma algorítmica si el niño usó el aerógrafo o el lápiz; el archivo PNG subido es una evidencia visual auténtica que el profesor evalúa.
- **Navegadores recomendados:** Google Chrome y Microsoft Edge (versiones modernas con soporte para Canvas y Web Audio API).
- **Almacenamiento temporal:** Los navegadores pueden limpiar el almacenamiento local si se borra el historial de navegación; por ello, la plataforma insiste didácticamente en utilizar el botón **«Guardar mi progreso»** para descargar el archivo físico de respaldo.

---
*Desarrollado con dedicación para los pequeños artistas digitales de cuarto de primaria.*

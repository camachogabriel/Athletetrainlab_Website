# 🎨 Guía de Rediseño — Athletetrainlab.com
> Aplica estos cambios directamente en el **Editor de Wix** (wix.com/editor)

---

## PALETA DE COLORES RECOMENDADA

Reemplaza el esquema oscuro actual por estos colores:

| Uso | Color | Hex |
|-----|-------|-----|
| Fondo principal | Blanco | `#FFFFFF` |
| Fondo secundario (secciones alternas) | Gris muy claro | `#F4F6F8` |
| Color primario ATL | Azul energía | `#0057B8` |
| Color acento | Naranja/Lima | `#F0A500` |
| Texto principal | Gris oscuro | `#1A1A2E` |
| Texto secundario | Gris medio | `#6B7280` |

**Cómo aplicar en Wix Editor:**
1. Ve a **Diseño del sitio** → **Colores del tema**
2. Reemplaza los colores oscuros con los de esta tabla
3. Usa el color primario azul para botones y encabezados
4. Usa el acento naranja/lima solo para CTAs ("Agendar", "Más Info")

---

## TIPOGRAFÍA

| Elemento | Fuente | Tamaño | Peso |
|----------|--------|--------|------|
| Títulos H1 | Montserrat | 48–60px | Bold (700) |
| Títulos H2 | Montserrat | 32–40px | SemiBold (600) |
| Títulos H3 | Montserrat | 22–26px | Medium (500) |
| Cuerpo de texto | Open Sans o Lato | 16–18px | Regular (400) |
| Botones | Montserrat | 15px | Bold (700) |

**Cómo aplicar en Wix Editor:**
1. **Diseño del sitio** → **Fuentes del tema**
2. Asigna Montserrat como fuente principal de títulos
3. Open Sans o Lato como fuente de cuerpo

---

## ESTRUCTURA DE PÁGINAS

### PÁGINA DE INICIO (/)

#### Sección 1: HERO (portada)
- **Fondo:** imagen de ciclista de alta calidad con overlay azul semitransparente (`#0057B8` al 60%)
- **Título:** "ELEVA TU RENDIMIENTO" — grande, blanco, centrado
- **Subtítulo:** "Entrenamiento inteligente para ciclistas y atletas en Costa Rica"
- **Botón CTA:** "AGENDA TU EVALUACIÓN" — color naranja `#F0A500`, texto blanco, bordes redondeados (8px)
- **Altura de sección:** mínimo 85vh (pantalla casi completa)

#### Sección 2: SERVICIOS (fondo blanco)
Crea **3 cards** horizontales (o 2+1 en mobile):

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  🚴 Pruebas de  │  │  📋 Planes de   │  │  🔧 Bike Fit    │
│  Rendimiento    │  │  Entrenamiento  │  │  3D             │
│                 │  │                 │  │                 │
│  VO2Max, Lactato│  │  Personalizado  │  │  Análisis       │
│  Test de campo  │  │  según tus metas│  │  biomecánico    │
│                 │  │                 │  │                 │
│ [Más Info →]    │  │ [Más Info →]    │  │ [Más Info →]    │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

Estilo de cada card:
- Fondo blanco con sombra suave (`box-shadow: 0 4px 20px rgba(0,0,0,0.08)`)
- Ícono o imagen en la parte superior
- Borde superior de color azul (4px)
- Esquinas redondeadas (12px)
- Padding interno generoso (32px)

#### Sección 3: QUIÉNES SOMOS (fondo gris claro #F4F6F8)
- Layout: **imagen izquierda (60%) | texto derecho (40%)**
- Imagen: foto profesional del equipo/coach en acción
- Texto: misión corta (2–3 líneas) + lista de 3–4 beneficios con checkmarks ✓
- Botón secundario: "Conoce al equipo" — outline azul (sin relleno, borde azul)

#### Sección 4: TESTIMONIOS (fondo blanco)
- 3 tarjetas de testimonios de clientes
- Estilo: comillas grandes en azul, texto gris, nombre + foto pequeña abajo
- Si no tienes testimonios aún: usa estadísticas ("50+ atletas entrenados", "5 años de experiencia", etc.)

#### Sección 5: CTA FINAL (fondo azul #0057B8)
- Texto grande en blanco: "¿Listo para mejorar tu rendimiento?"
- Subtexto: "Primera consulta gratuita"
- Botón blanco con texto azul: "CONTÁCTANOS"

#### Sección 6: FOOTER (fondo #1A1A2E oscuro)
- Logo blanco
- Links de navegación en columnas
- Redes sociales (Instagram, Facebook, YouTube)
- Copyright

---

### PÁGINAS DE SERVICIOS (misma estructura para cada una)

1. **Hero pequeño** — imagen de fondo + título del servicio (altura ~40vh)
2. **¿Qué incluye?** — lista con íconos o checklist
3. **¿Para quién es?** — texto + imagen
4. **Precio o cómo funciona** — proceso en 3–4 pasos con números grandes
5. **CTA** — "Agenda tu cita"

---

## ELEMENTOS DE DISEÑO A CAMBIAR

### ✅ Espaciado
- Aumenta el padding de cada sección a mínimo **80px arriba y abajo**
- Evita texto pegado a los bordes: mínimo 32px de margen lateral en mobile

### ✅ Botones
- Todos los botones primarios: fondo `#F0A500`, texto blanco, `border-radius: 8px`
- Todos los botones secundarios: fondo transparente, borde `#0057B8`, texto `#0057B8`
- Efecto hover: oscurecer 10% el color de fondo

### ✅ Imágenes
- Usa imágenes grandes (mínimo 1200px de ancho para heroes)
- Aplica un overlay de color sutíl para mejorar legibilidad del texto encima
- Evita imágenes muy pequeñas o estiradas

### ✅ Navegación (Header)
- Fondo blanco con ligera sombra al hacer scroll
- Logo a la izquierda
- Links en gris oscuro, activo en azul
- Botón "Agendar" en naranja en el extremo derecho

---

## SECCIONES A ELIMINAR O SIMPLIFICAR

- ❌ Elimina el slideshow/carrusel de imágenes en miniatura de la portada actual — reemplaza con una imagen hero estática grande
- ❌ Elimina texto repetido ("Nuestra misión es elevar tu rendimiento" aparece 3 veces)
- ❌ Reduce el menú "More" — mueve todos los links visibles o consolida páginas similares

---

## ORDEN DE IMPLEMENTACIÓN RECOMENDADO

1. **Primero:** Cambia colores del tema (Diseño del sitio → Colores del tema)
2. **Segundo:** Cambia tipografías
3. **Tercero:** Rediseña el Hero de la página principal
4. **Cuarto:** Rediseña la sección de servicios con cards
5. **Quinto:** Actualiza header y footer
6. **Sexto:** Aplica cambios a páginas internas una por una

---

## TIPS FINALES

- **Mobile first:** Siempre revisa cómo se ve en móvil después de cada cambio (botón del teléfono en el editor)
- **Consistencia:** Usa los mismos colores y fuentes en todas las páginas
- **Imágenes:** Comprímelas antes de subirlas (usa TinyPNG o Squoosh) para no afectar velocidad
- **SEO:** Mantén los textos descriptivos que ya tienes — solo mejoraremos el diseño visual

---

*Documento preparado por Claude para Athletetrainlab · Junio 2026*

# Plantilla de DESIGN.md — DevMarket

Contenido de partida. Los valores vienen de la sección 6 del contexto maestro (v0.1). Etiquetas: C = Confirmado, P = Propuesta, D = Derivada.

## Estructura obligatoria del DESIGN.md

1. Encabezado (versión, fecha, estado, fuente: DEVMARKET_PROJECT_CONTEXT.md)
2. Principios visuales
3. Colores
4. Tipografía
5. Espaciado y layout
6. Bordes y radios
7. Sombras
8. Iconografía
9. Responsive
10. Componentes base (Button, Input, Textarea, Select, Checkbox, Badge, Card, Alert, Modal, EmptyState, LoadingState, SectionHeading)
11. Navegación (Navbar, Footer y derivados)
12. Búsqueda y filtros
13. Componentes de dominio (servicios y desarrolladores)
14. Accesibilidad
15. Contenido ficticio y estados de funcionalidad
16. Convenciones para Stitch
17. Changelog

## 1. Principios (C)

Light Tech, minimalista y profesional; claridad y jerarquía sobre adorno; espacio en blanco para separar; señales de confianza visibles; sin estética oscura ni futurista recargada.

## 3. Colores

| Token | HEX | Estado | Uso |
|---|---|---|---|
| primary | #2563EB | P | Acción principal, enlaces, activo |
| primary-hover | #1D4ED8 | D | Hover/pressed del primario |
| primary-subtle | #EFF6FF | D | Fondos de selección, chips activos |
| secondary | #4F46E5 | P | Acentos complementarios (uso minoritario) |
| background | #FFFFFF | P | Fondo principal |
| surface | #F8FAFC | P | Superficies secundarias |
| text-primary | #0F172A | P | Títulos y texto |
| text-secondary | #64748B | P | Texto de apoyo |
| border | #E2E8F0 | P | Divisores y bordes de tarjeta |
| border-control | #7F8EA3 | D | Borde de inputs, checkbox, select |
| success | #16A34A | P | Íconos, bordes, rellenos |
| success-text | #15803D | D | Texto de éxito |
| success-subtle | #DCFCE7 | D | Fondo de badge/alerta |
| warning | #D97706 | P | Íconos, bordes, rellenos |
| warning-text | #B45309 | D | Texto de advertencia |
| warning-subtle | #FEF3C7 | D | Fondo de badge/alerta |
| error | #DC2626 | P | Errores, acciones destructivas |
| error-text | #B91C1C | D | Texto de error |
| error-subtle | #FEE2E2 | D | Fondo de alerta |

Regla: el azul es el acento dominante; el índigo, complementario.

### Contraste calculado (WCAG)

| Par | Razón | Resultado |
|---|---|---|
| text-primary / background | 17.85 | AAA |
| text-secondary / background | 4.76 | AA |
| text-secondary / surface | 4.55 | AA (justo) |
| primary / background | 5.17 | AA |
| blanco / primary | 5.17 | AA (botón) |
| blanco / primary-hover | 6.70 | AA |
| secondary / background | 6.29 | AA |
| error / background | 4.83 | AA |
| blanco / error | 4.83 | AA (botón destructivo) |
| success / background | 3.30 | Falla texto; solo no textual |
| warning / background | 3.19 | Falla texto; solo no textual |
| success-text / background | 5.02 | AA |
| warning-text / background | 5.02 | AA |
| success-text / success-subtle | 4.57 | AA |
| warning-text / warning-subtle | 4.51 | AA (justo) |
| error-text / error-subtle | 5.30 | AA |
| border / background | 1.23 | Solo decorativo |
| border-control / background | 3.33 | Cumple 3:1 en controles |

## 4. Tipografía

Manrope: títulos (C). Inter: interfaz, formularios, botones y contenido (C). Escala derivada (D):

| Rol | Tamaño / interlineado | Peso | Fuente |
|---|---|---|---|
| Display (hero) | 48 / 56 | 800 | Manrope |
| H1 | 36 / 44 | 700 | Manrope |
| H2 | 28 / 36 | 700 | Manrope |
| H3 | 22 / 30 | 600 | Manrope |
| H4 | 18 / 26 | 600 | Manrope |
| Body | 16 / 24 | 400 | Inter |
| Body small | 14 / 20 | 400 | Inter |
| Label / botón | 14 / 20 | 600 | Inter |
| Caption | 12 / 16 | 500 | Inter |

En móvil Display baja a 36/44 y H1 a 30/38 (D). Fallback: `system-ui, sans-serif`.

## 5. Espaciado y layout

Unidad base 8 px (P). Escala (D): 4, 8, 12, 16, 24, 32, 48, 64, 96. Ancho máximo de contenido 1200 px (P). Grid de 12 columnas escritorio, 8 tablet, 4 móvil; gutter 24/16/16 (D). Padding de sección vertical: 64 px escritorio, 48 px móvil (D).

## 6. Bordes y radios

Borde 1 px `border` (P). Radio tarjeta 12 px, botón 8 px (P). Derivados: input 8 px, badge/chip pill 999 px, modal 16 px (D).

## 7. Sombras (todas D, sutiles según contexto)

- sm: `0 1px 2px rgba(15,23,42,0.06)`
- md: `0 4px 12px rgba(15,23,42,0.08)` (hover de tarjeta)
- lg: `0 12px 32px rgba(15,23,42,0.12)` (modal, dropdown)

## 8. Iconografía (P)

Lineal/outline, trazo 1.5–2 px, tamaños 16/20/24. Un solo conjunto de íconos en todo el producto. Un ícono nunca es el único portador de significado.

## 9. Responsive (D)

| Nombre | Rango | Comportamiento |
|---|---|---|
| Móvil | < 640 px | Una columna; filtros en panel desplegable/modal; navbar con menú |
| Tablet | 640–1023 px | 2 columnas de tarjetas; filtros colapsables |
| Escritorio | ≥ 1024 px | Layout completo; sidebar de filtros fija; 3 columnas de tarjetas |

El contexto indica diseñar para escritorio y contemplar adaptación responsive: escritorio es el tamaño de referencia.

## 14. Accesibilidad

Contraste AA; foco visible con anillo de 2 px `primary` y offset 2 px (D); objetivos táctiles ≥ 44 px; navegación por teclado completa; estados no dependientes solo del color; respetar `prefers-reduced-motion`.

## 15. Contenido ficticio y funcionalidades

Todo dato de ejemplo lleva la marca «Contenido ficticio». Funcionalidad no aprobada (chat, pagos protegidos, disputas, matching) se rotula «Propuesta» o «Fase posterior».

## 16. Convenciones para Stitch

Una pantalla por iteración; reutilizar componentes de este documento; no agregar funcionalidades; al modificar una pantalla, preservar lo aprobado; usar la plantilla de prompt de la sección 12.2 del contexto.

## 17. Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| 0.1 | (fecha de creación) | Versión inicial derivada del contexto v0.1 |

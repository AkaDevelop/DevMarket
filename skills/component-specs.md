# Especificaciones de componentes

Cargar al redactar las secciones 10 a 13 del DESIGN.md. Cada componente se documenta con: propósito, anatomía, variantes, estados, reglas. Valores en tokens, no en HEX sueltos.

## Button (P/D)

Variantes: primary, secondary, outline, text. Altura 44 px principal (P); 36 px compacto (D). Radio 8 px (P). Padding horizontal 20 px (D). Texto Label 14/20 semibold.

| Variante | Normal | Hover | Disabled |
|---|---|---|---|
| primary | fondo primary, texto blanco | primary-hover | fondo border, texto text-secondary |
| secondary | fondo primary-subtle, texto primary | un tono más oscuro | igual que primary |
| outline | borde border-control, texto text-primary | fondo surface | borde border, texto text-secondary |
| text | texto primary, sin borde | subrayado | texto text-secondary |

Estados comunes: focus (anillo 2 px), loading (spinner + texto «Cargando…», ancho fijo, no clicable), destructivo (error / blanco 4.83:1).

## Input / Textarea / Select

Altura 44 px, radio 8, borde 1 px `border-control`, etiqueta visible sobre el campo (no solo placeholder). Focus: borde primary + anillo. Error: borde error, mensaje en `error-text` con ícono. Disabled: fondo surface. Ayuda en Caption `text-secondary`.

## Checkbox

Caja 20 px, radio 4, borde border-control; marcada: fondo primary con check blanco. Área táctil 44 px incluyendo etiqueta.

## Badge / Chip

Pill, Caption 12/16 semibold, padding 4×10. Semánticos usan par `*-subtle` + `*-text`. Todo badge lleva texto y, si aplica, ícono.

## Card

Fondo background, borde 1 px border, radio 12, padding 24, sombra sm. Hover interactivo: sombra md, borde sin cambio de layout.

## Navbar

Alto 72 px, fondo background, borde inferior border, contenido dentro de 1200 px. Izquierda: logo provisional (Pendiente) + PrimaryNavigation (Servicios, Desarrolladores, y los enlaces aprobados). Derecha: AccountActions (Iniciar sesión outline/text, Registrarse primary). Enlace activo: texto primary + indicador inferior de 2 px (no solo color). Móvil: menú desplegable.

## Footer

Fondo surface, borde superior border. Grupos de enlaces (FooterLinkGroup) en columnas, línea legal inferior. Los enlaces solo apuntan a secciones existentes en la arquitectura de información.

## Búsqueda y filtros

- SearchModeTabs: dos pestañas «Servicios» / «Desarrolladores», la activa con indicador visible y texto primary; deben diferenciarse claramente (regla UX 2).
- SearchBar: altura 52 px en hero, 44 px en páginas internas.
- FilterSidebar: ancho 280 px escritorio; FilterGroup colapsable; contador de filtros activos y acción «Limpiar».
- Pagination: números + anterior/siguiente, página actual con fondo primary-subtle y aria-current.
- TechnologyTag/Chip: pill con fondo surface, texto text-primary; seleccionada: primary-subtle + primary.

## Dominio: servicios

- ServiceCard: imagen/cabecera, título, desarrollador (enlace a perfil), ServiceRating, DeliveryBadge, ServicePrice («Desde» + monto). Precios ficticios hasta definir reglas (Pendiente 6 del contexto).
- ServiceCategoryCard: ícono outline, nombre, conteo opcional.
- FavoriteButton: ícono + estado accesible (aria-pressed).

## Dominio: desarrolladores

- DeveloperCard: avatar, nombre, VerifiedBadge (condicional), especialidad, ubicación, AvailabilityBadge, RatingSummary, ProjectCount, TechnologyChips, descripción corta, acciones. No contiene datos de una oferta concreta.
- VerifiedBadge: solo con verificación completa. Documentar que su ausencia es un estado válido y no se reemplaza por un placeholder.
- AvailabilityBadge: Disponible / Limitada / No disponible con texto + ícono, nunca solo color.
- RatingSummary: promedio + cantidad de reseñas; indicar si las reseñas son verificadas (vinculadas a contratación elegible).

## Estados globales

- EmptyState: ícono, título, explicación, acción sugerida.
- LoadingState: skeleton con la forma de la tarjeta, sin spinners a pantalla completa.
- Alert: variantes info/success/warning/error, borde izquierdo 4 px + ícono + texto.
- Modal: radio 16, sombra lg, cierre con Esc, foco atrapado, título y acción primaria visibles.

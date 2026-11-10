---
name: devmarket-design-system
description: Genera, actualiza y audita el DESIGN.md de DevMarket (sistema de diseño Light Tech para Google Stitch) a partir de DEVMARKET_PROJECT_CONTEXT.md. Úsala siempre que el usuario hable del sistema de diseño, DESIGN.md, tokens, paleta, tipografía, espaciado, botones, inputs, tarjetas, navbar, footer, reglas responsive, o pida revisar si una pantalla de DevMarket respeta el estilo, aunque no diga "design system" explícitamente. También cuando pida un bloque de prompt de estilo para pegar en Stitch.
---

# DevMarket Design System

Convierte el contexto maestro de DevMarket en un `DESIGN.md` completo, verificable y usable por Google Stitch. Es el Nivel 2 de la estrategia: el contexto maestro define *qué* es el producto; este documento define *cómo se ve y se comporta*.

## Principio rector

Stitch (y cualquier herramienta) materializa decisiones; no las toma. Por eso el `DESIGN.md` solo puede **formalizar y derivar** lo que ya está en `DEVMARKET_PROJECT_CONTEXT.md`. No inventa funcionalidades, roles ni reglas de contratación. Cuando falta una decisión visual, se propone con etiqueta explícita en lugar de presentarla como aprobada.

## Etiquetas de estado (obligatorias en cada valor)

Hereda las del contexto maestro y añade una:

- **Confirmado**: decisión expresada por el equipo (p. ej. estilo Light Tech, Manrope + Inter).
- **Propuesta**: valor del contexto marcado como base inicial (paleta, radios, 1200 px, 8 px).
- **Derivada**: valor que yo calculo a partir de uno de los anteriores (tonos hover, escala tipográfica, sombras). Debe poder justificarse.
- **Pendiente**: sin decisión; no se resuelve inventando (logotipo, nombre definitivo).

Etiquetar evita que un valor derivado se confunda con una decisión aprobada.

## Flujo de trabajo

1. **Leer el contexto.** Abrir `DEVMARKET_PROJECT_CONTEXT.md`. Si no está en la conversación, pedirlo. Extraer secciones 6 (decisiones de diseño), 7 (componentes), 9 (reglas UX) y 12 (instrucciones para Stitch). Si existe un `DESIGN.md` previo, leerlo y trabajar en modo actualización.
2. **Elegir el modo** según lo que pida el usuario:
   - *Crear*: producir el `DESIGN.md` desde cero.
   - *Actualizar*: cambiar tokens o componentes preservando lo aprobado y registrando el cambio en el changelog.
   - *Auditar*: revisar una pantalla o prompt contra el `DESIGN.md` y listar desviaciones.
   - *Exportar a Stitch*: generar el bloque corto de estilo (ver `references/stitch-prompt-block.md`).
3. **Construir el documento** con la estructura de `references/design-md-template.md`. Cargar ese archivo antes de escribir; contiene los valores iniciales ya calculados.
4. **Especificar cada componente** del catálogo de la sección 7 del contexto con sus estados (normal, hover, focus, disabled, loading, error, según aplique). Detalle en `references/component-specs.md`.
5. **Verificar accesibilidad** con contraste real, no a ojo. Calcular razón de contraste WCAG para cada par texto/fondo que el documento autorice. La tabla ya calculada está en el template; recalcular solo si cambia un color.
6. **Pasar el checklist de cierre** (abajo) y presentar el archivo.

## Hallazgos de accesibilidad que ya debes respetar

La paleta propuesta no es del todo segura tal cual. Calculado sobre blanco:

- `#16A34A` (Success) = 3.30:1 y `#D97706` (Warning) = 3.19:1: **fallan AA para texto**. Úsalos para íconos, bordes y rellenos; para texto usar las variantes derivadas `#15803D` (5.02:1) y `#B45309` (5.02:1).
- `#E2E8F0` (Border) = 1.23:1: válido como divisor decorativo, **no** como borde de un input, que necesita 3:1. Para inputs usar `#7F8EA3` (3.33:1), derivado.
- `#2563EB` sobre blanco = 5.17:1: correcto para texto de enlace y botón primario con texto blanco.

Presentar esto al usuario como observación a aprobar, sin alterar silenciosamente la paleta propuesta: los colores originales se conservan como tokens y las variantes se añaden como tokens adicionales.

## Qué debe contener el DESIGN.md

Colores, tipografías, espaciado, bordes y radios, sombras, iconografía, breakpoints y reglas responsive, botones, inputs, tarjetas, navbar, footer, componentes de dominio (ServiceCard, DeveloperCard, badges de verificación y disponibilidad), estados, accesibilidad, reglas de contenido ficticio y changelog. El orden exacto está en el template.

## Reglas de dominio que el sistema de diseño debe codificar

Estas vienen de la sección 9 del contexto y afectan a componentes visuales:

- `VerifiedBadge` solo existe como componente con condición: no se muestra si la verificación no está completa. Documentar su estado "oculto", no solo el visible.
- Reseñas: distinguir visualmente "verificada" (vinculada a contratación elegible) de reseña sin verificar; nunca depender solo del color.
- Ningún componente puede sugerir que una posición destacada se compró (nada de "Patrocinado" con estilo de mérito, ni badges premium que simulen ranking).
- `DeveloperCard` y `ServiceCard` son componentes distintos: el perfil no se mezcla con una oferta.
- Todo contenido de ejemplo lleva marca visible de "Contenido ficticio".
- Funcionalidades pendientes (chat, pagos, disputas) se diseñan con la etiqueta "Propuesta / Fase posterior", nunca como compromiso.

## Checklist de cierre

- [ ] Cada valor tiene etiqueta Confirmado / Propuesta / Derivada / Pendiente.
- [ ] No se modificó ningún valor Confirmado ni se contradijo el contexto.
- [ ] Los 38 componentes del catálogo (sección 7) están cubiertos o listados como "pendiente de especificar".
- [ ] Todos los pares de color de texto cumplen AA (4.5:1) y los bordes de controles 3:1.
- [ ] Los estados no dependen solo del color (ícono, texto o patrón).
- [ ] Hay reglas responsive para al menos móvil, tablet y escritorio.
- [ ] Se registró el cambio en el changelog con fecha y versión.
- [ ] No se introdujeron funcionalidades, roles ni reglas de contratación nuevas.

## Salida

Guardar `DESIGN.md` en `/mnt/user-data/outputs/` y presentarlo con `present_files`. En el mensaje final: resumen en pocas líneas, lista de valores *Derivada* que requieren aprobación y cualquier hallazgo de accesibilidad.

## Siguiente paso en la secuencia

Con el `DESIGN.md` aprobado, la secuencia del contexto (sección 13) continúa con la generación modular de pantallas: Home, Explorar servicios, Explorar desarrolladores, etc. Cada pantalla usará la plantilla de prompt de la sección 12.2 del contexto, referenciando este documento.

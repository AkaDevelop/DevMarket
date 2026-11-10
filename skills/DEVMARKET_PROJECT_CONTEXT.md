# DEVMARKET --- Project Context

**Documento:** Contexto maestro del producto\
**Versión:** 0.1\
**Fecha:** 9 de noviembre de 2026\
**Estado:** Borrador de trabajo para diseño en Google Stitch\
**Nombre comercial:** DevMarket (provisional; pendiente de decisión)

## 1. Propósito

Este documento reúne el contexto funcional, conceptual y visual
necesario para diseñar DevMarket de forma coherente en Google Stitch. Es
una referencia compartida para generar, modificar o ampliar pantallas.
No sustituye la Especificación de Requisitos de Software (ERS), que
continúa siendo la referencia de requisitos.

Convenciones: - **Confirmado:** decisión expresada por el equipo o
establecida en los materiales del proyecto. - **Propuesta:**
recomendación todavía sujeta a aprobación. - **Pendiente:** asunto que
no debe resolverse inventando una regla. - **Ficticio:** dato de ejemplo
utilizado únicamente para visualizar una interfaz.

## 2. Descripción del producto

DevMarket es el nombre provisional de una plataforma web de servicios
freelance enfocada exclusivamente en desarrolladores de software. Busca
conectar clientes que necesitan soluciones de software con
desarrolladores que ofrecen servicios profesionales. La experiencia debe
facilitar la búsqueda, comparación y contratación mediante información
profesional estructurada, servicios comprensibles, tecnologías, precios,
reputación y señales de confianza.

La plataforma no debe sentirse como un marketplace freelance genérico.
Su navegación, lenguaje visual y organización deben comunicar
especialización en desarrollo de software.

### 2.1 Problemas identificados

1.  Perfiles incoherentes o con información mal distribuida.
2.  Saturación de servicios que dificulta encontrar soluciones
    relevantes.
3.  Precios que no necesariamente reflejan referencias reales de
    mercado.
4.  Posicionamiento pay-to-win.
5.  Moderación insuficiente frente a phishing y comportamientos
    fraudulentos.

### 2.2 Propuesta de valor

-   **Especialización:** plataforma centrada en desarrolladores de
    software.
-   **Transparencia:** perfiles estructurados, servicios claros y
    precios comprensibles.
-   **Meritocracia:** posicionamiento orgánico basado en reputación y
    rendimiento, no en comprar una mejor posición.
-   **Confianza:** seguridad, moderación y mecanismos para proteger a
    clientes y desarrolladores.
-   **Experiencia:** búsqueda, comparación y contratación sencillas.

El matching inteligente entre proyectos y desarrolladores es una
posibilidad de diferenciación futura; no debe asumirse como
funcionalidad aprobada para el MVP.

## 3. Usuarios y roles

### 3.1 Cliente

Persona o empresa que busca contratar servicios de desarrollo de
software.

Necesidades: - Encontrar servicios o desarrolladores por especialidad y
tecnología. - Comparar experiencia, portafolio, reputación, precio y
disponibilidad. - Entender el alcance y las condiciones de un
servicio. - Contactar o contratar a un desarrollador. - Evaluar el
trabajo recibido mediante mecanismos asociados a contrataciones reales.

### 3.2 Desarrollador

Profesional que ofrece servicios de desarrollo de software.

Necesidades: - Crear un perfil profesional estructurado. - Presentar
especialidades, tecnologías y experiencia. - Publicar servicios con
descripción, alcance, precio y plazo. - Mostrar proyectos de
portafolio. - Recibir oportunidades y gestionar contrataciones. -
Construir reputación mediante reseñas verificables.

### 3.3 Administrador / moderador

Rol responsable de la operación y seguridad.

Necesidades: - Gestionar usuarios y perfiles. - Revisar servicios y
publicaciones. - Atender reportes. - Moderar contenido y comportamientos
sospechosos. - Registrar decisiones y resoluciones.

Los permisos exactos y la separación entre administrador y moderador
deben definirse en el diseño funcional detallado.

## 4. Modelo de descubrimiento

### 4.1 Buscar servicios

Para clientes que conocen la solución que necesitan. Ejemplos:
desarrollo web, API REST, desarrollo móvil, automatización con Python,
bases de datos, DevOps, inteligencia artificial y machine learning.

### 4.2 Buscar desarrolladores

Para clientes que desean encontrar un profesional según especialidad,
tecnologías, experiencia, reputación y disponibilidad.

**Regla de UX:** no mezclar el perfil de un desarrollador con una oferta
individual. Un profesional puede tener varios servicios, cada uno con
alcance, precio y plazo propios.

## 5. Arquitectura de información propuesta

``` text
DEVMARKET
|-- Inicio
|   |-- Buscador dual
|   |-- Categorías
|   |-- Servicios destacados
|   |-- Desarrolladores destacados
|   |-- Cómo funciona
|   |-- CTA para desarrolladores
|-- Servicios
|   |-- Listado y búsqueda
|   |-- Filtros
|   |-- Detalle del servicio
|-- Desarrolladores
|   |-- Listado y búsqueda
|   |-- Filtros
|   |-- Perfil público
|       |-- Presentación y especialidad
|       |-- Tecnologías
|       |-- Portafolio
|       |-- Servicios
|       |-- Experiencia
|       |-- Reseñas
|       |-- Disponibilidad
|-- Autenticación
|   |-- Registro
|   |-- Inicio de sesión
|   |-- Recuperación de contraseña
|-- Área del cliente (propuesta)
|   |-- Perfil
|   |-- Contrataciones
|   |-- Mensajes
|   |-- Reseñas
|-- Área del desarrollador (propuesta)
|   |-- Perfil profesional
|   |-- Servicios
|   |-- Proyectos / contrataciones
|   |-- Mensajes
|   |-- Estadísticas
|-- Administración
    |-- Usuarios
    |-- Servicios y publicaciones
    |-- Reportes
    |-- Moderación
```

Esta estructura es una base de navegación. Los módulos avanzados deben
contrastarse con el alcance aprobado del MVP.

## 6. Decisiones de diseño

### 6.1 Dirección visual confirmada

**Estilo elegido:** Light Tech, minimalista y profesional, con identidad
propia.

La interfaz debe sentirse tecnológica y actual sin recurrir a una
estética oscura, excesivamente futurista o recargada.

Principios: - Priorizar claridad, jerarquía visual y legibilidad. -
Utilizar espacios en blanco para separar contenidos. - Mantener
componentes sencillos y consistentes. - Evitar adornos que compitan con
la información. - Hacer visibles las señales de confianza y
reputación. - Diseñar para escritorio y contemplar adaptación
responsive.

### 6.2 Paleta inicial propuesta

La paleta se propuso durante la exploración visual y es una base
inicial, no una especificación cromática definitivamente aprobada.

  -----------------------------------------------------------------------
  Token             Color             HEX               Uso
  ----------------- ----------------- ----------------- -----------------
  Primary           Azul tecnológico  `#2563EB`         Acciones
                                                        principales,
                                                        enlaces y estados
                                                        activos

  Secondary         Índigo            `#4F46E5`         Acentos
                                                        complementarios

  Background        Blanco            `#FFFFFF`         Fondo principal

  Surface           Gris muy claro    `#F8FAFC`         Superficies
                                                        secundarias

  Text primary      Oscuro            `#0F172A`         Títulos y texto
                                                        principal

  Text secondary    Gris              `#64748B`         Texto de apoyo

  Border            Gris suave        `#E2E8F0`         Bordes y
                                                        divisores

  Success           Verde             `#16A34A`         Estados positivos

  Warning           Ámbar             `#D97706`         Advertencias

  Error             Rojo              `#DC2626`         Errores y
                                                        acciones
                                                        destructivas
  -----------------------------------------------------------------------

El azul debe ser el acento dominante; el índigo, complementario.

### 6.3 Tipografía propuesta

-   **Manrope:** títulos y encabezados.
-   **Inter:** textos de interfaz, formularios, botones y contenido
    general.

### 6.4 Parámetros visuales iniciales

  Propiedad                       Valor de referencia
  ------------------------------- ---------------------
  Ancho máximo de contenido       1200 px
  Unidad base de espaciado        8 px
  Radio de tarjetas               12 px
  Radio de botones                8 px
  Altura de botones principales   44 px
  Bordes                          1 px, gris suave
  Sombras                         Sutiles y discretas
  Iconografía                     Lineal / outline
  Layout                          Responsive

Son referencias iniciales que deben consolidarse en `DESIGN.md`.

## 7. Componentes UI reutilizables

### Navegación

`Navbar`, `NavLink`, `PrimaryNavigation`, `AccountActions`, `Footer`,
`FooterLinkGroup`.

### Búsqueda y filtros

`SearchBar`, `SearchModeTabs` (servicios / desarrolladores),
`TechnologyTag`, `FilterSidebar`, `FilterGroup`, `SortSelect`,
`Pagination`.

### Servicios

`ServiceCard`, `ServiceCategoryCard`, `ServicePrice`, `DeliveryBadge`,
`ServiceRating`, `FavoriteButton`.

### Desarrolladores

`DeveloperCard`, `DeveloperAvatar`, `VerifiedBadge`,
`AvailabilityBadge`, `RatingSummary`, `TechnologyChip`, `ProjectCount`.

### Elementos generales

`Button` (primary, secondary, outline, text), `Input`, `Textarea`,
`Select`, `Checkbox`, `Badge`, `Card`, `SectionHeading`, `EmptyState`,
`LoadingState`, `Alert`, `Modal`.

Cada componente debe contemplar los estados relevantes: normal, hover,
focus, disabled, loading y error, según corresponda. Los estados deben
ser accesibles y no depender exclusivamente del color.

## 8. Wireframes existentes

Se han generado dos referencias visuales iniciales:

### 8.1 Home / Landing Page

1.  Navbar con logo provisional, enlaces principales y acciones de
    cuenta.
2.  Hero con título, descripción y buscador de dos modos: servicios y
    desarrolladores.
3.  Tecnologías populares.
4.  Categorías.
5.  Servicios destacados.
6.  Desarrolladores destacados.
7.  Sección «Cómo funciona».
8.  CTA para desarrolladores.
9.  Footer.

### 8.2 Explorar desarrolladores

1.  Navbar con la sección Desarrolladores activa.
2.  Hero con título, descripción y campo de búsqueda.
3.  Panel de filtros: especialidad, tecnologías, experiencia,
    calificación mínima y disponibilidad.
4.  Resultados con cantidad de perfiles y selector de orden.
5.  Tarjetas con avatar, nombre, verificación, especialidad, ubicación,
    disponibilidad, calificación, reseñas, proyectos, tecnologías,
    descripción y acciones.
6.  Paginación.
7.  CTA para desarrolladores.
8.  Footer.

**Importante:** nombres, fotografías, cifras, ubicaciones,
calificaciones, precios, proyectos y estados de los wireframes son datos
ficticios de demostración. No representan contenido real ni reglas
aprobadas.

## 9. Reglas de experiencia de usuario

1.  Mantener navegación consistente en todas las páginas públicas.
2.  Diferenciar claramente la búsqueda de servicios de la búsqueda de
    desarrolladores.
3.  Mantener separado el perfil profesional de cada oferta de servicio.
4.  Priorizar información que permita comparar opciones: especialidad,
    tecnologías, experiencia, precio, plazo, reputación y
    disponibilidad.
5.  No mostrar una insignia de verificación si el proceso no se ha
    completado.
6.  No presentar reseñas como verificadas si no están vinculadas a una
    contratación elegible.
7.  No comunicar que una posición destacada se debe al mérito si el
    ordenamiento no aplica los criterios definidos.
8.  Evitar que una suscripción garantice mejor posición orgánica; es una
    premisa central de la propuesta.
9.  Diseñar estados vacíos, errores, carga y resultados sin
    coincidencias.
10. Mantener contraste, navegación por teclado, foco visible y controles
    comprensibles.
11. No inventar precios de referencia, niveles de experiencia,
    verificaciones ni métricas.
12. Identificar claramente el contenido ficticio utilizado durante el
    prototipado.

## 10. Alcance funcional y cautelas

La ERS identifica como candidatos esenciales del MVP: - Registro de
clientes y desarrolladores. - Perfiles estructurados. - Publicación de
servicios. - Categorías y filtros tecnológicos. - Búsqueda. -
Calificaciones y reseñas verificadas. - Reportes y moderación básica.

Chat, gestión de contratación y pagos protegidos tienen prioridad alta,
pero su alcance y momento de inclusión deben confirmarse. Las pruebas
técnicas, el ranking avanzado y la gestión avanzada de proyectos se
consideran posteriores en el análisis inicial.

**Regla:** no diseñar como compromiso definitivo una funcionalidad
pendiente. Si se muestra para explorar una experiencia futura,
etiquetarla como propuesta o fase posterior.

## 11. Decisiones pendientes

1.  Nombre comercial definitivo, dominio y logotipo.
2.  Mercado inicial: Colombia, Latinoamérica o internacional.
3.  Segmento inicial de clientes.
4.  Alcance exacto de profesionales incluidos.
5.  Si el MVP ofrece servicios predefinidos, proyectos personalizados o
    ambas modalidades.
6.  Reglas definitivas de precios y fuentes de rangos de referencia.
7.  Modelo de monetización.
8.  Criterios y pesos del ranking.
9.  Reglas de inactividad de perfiles.
10. Modelo de pagos y proveedor.
11. Proceso de disputas, reembolsos y aceptación de entregables.
12. Niveles de verificación de usuarios.
13. Stack tecnológico y arquitectura.
14. Reglas legales, privacidad y jurisdicción.
15. Alcance de chat, contratación y pagos en el MVP.

Cuando una pantalla dependa de estas decisiones, indicar el supuesto
utilizado y no presentarlo como regla definitiva.

## 12. Instrucciones de trabajo para Google Stitch

Utilizar este documento como contexto maestro al iniciar o ampliar el
diseño.

### 12.1 Instrucciones generales

-   Diseñar una pantalla o flujo acotado por iteración.
-   Mantener el estilo Light Tech y la paleta de referencia.
-   Reutilizar componentes ya definidos.
-   Respetar los conceptos funcionales del producto.
-   Mantener navegación y jerarquía visual consistentes.
-   No agregar funcionalidades no especificadas.
-   No cambiar decisiones del producto por iniciativa propia.
-   Usar contenido ficticio identificable como demostración.
-   Diseñar versiones responsive cuando se solicite.
-   Al modificar una pantalla existente, preservar los elementos
    aprobados y limitar los cambios al alcance indicado.

### 12.2 Plantilla de prompt por pantalla

Cada instrucción específica debe indicar: 1. Nombre de la pantalla y
módulo. 2. Objetivo del usuario. 3. Tipo de usuario. 4. Acciones
principales. 5. Información que debe mostrarse. 6. Componentes
reutilizables. 7. Estados necesarios. 8. Reglas funcionales que debe
respetar. 9. Adaptación responsive requerida. 10. Elementos fuera del
alcance.

### 12.3 Criterios de revisión

Una pantalla está lista para revisión cuando: - Cumple el objetivo de
usuario. - Presenta la información necesaria. - No introduce
funcionalidades o reglas no aprobadas. - Respeta el sistema de diseño. -
Mantiene coherencia con las demás pantallas. - Contempla estados
principales. - Tiene jerarquía visual clara. - Es comprensible en el
tamaño de pantalla objetivo.

## 13. Secuencia de diseño propuesta

1.  Consolidar el Design System (`DESIGN.md`).
2.  Home / Landing Page.
3.  Explorar servicios.
4.  Explorar desarrolladores.
5.  Perfil público del desarrollador.
6.  Detalle del servicio.
7.  Registro, inicio de sesión y recuperación de contraseña.
8.  Flujos de contacto y contratación, según alcance aprobado.
9.  Panel del cliente.
10. Panel del desarrollador.
11. Administración y moderación.
12. Estados responsive, vacíos, errores y confirmaciones.

Cada módulo debe revisarse antes de avanzar al siguiente.

## 14. Fuentes y trazabilidad

Este contexto se elaboró a partir de: - `Idea Principal.txt`: definición
inicial del marketplace, problemas observados y características de valor
agregado. - `Analisis de la idea.md`: evaluación de la propuesta,
perfiles, búsqueda, precios, reputación, seguridad, MVP, riesgos y
decisiones pendientes. -
`ERS_Marketplace_Freelance_Desarrolladores.docx`, versión 1.0, 5 de
noviembre de 2026: consolidación de alcance conceptual, actores,
requisitos, reglas de negocio, MVP, riesgos y asuntos pendientes. -
Decisiones de diseño tomadas durante la conversación: enfoque híbrido
del Home, estilo Light Tech minimalista y profesional, nombre
provisional DevMarket y wireframes de Home y Explorar desarrolladores.

Este documento no incorpora validación externa de mercado ni convierte
propuestas pendientes de la ERS en decisiones aprobadas.

------------------------------------------------------------------------

**Fin del documento --- DEVMARKET_PROJECT_CONTEXT.md --- Versión 0.1**

# PROMT PRINCIPAL

## Primer PROMPT

Usa el sistema de diseño DevMarket (DESIGN.md) ya cargado en este proyecto.
Respétalo estrictamente: colores, tipografías (Manrope para títulos, Inter para
interfaz), espaciado de 8 px, radios, sombras y componentes. No definas
decisiones de producto: solo materializa visualmente lo que se especifica aquí.
PANTALLA Y MÓDULO
Home / Landing Page. Módulo 01: Público. Versión escritorio (1440 px),
contenido máximo 1200 px.
OBJETIVO DEL USUARIO
Entender en segundos que DevMarket es una plataforma de servicios freelance
exclusiva para desarrolladores de software, y empezar a buscar servicios o
desarrolladores.
TIPO DE USUARIO
Visitante no autenticado, principalmente cliente potencial. Secundario:
desarrollador que quiere ofrecer sus servicios.
ACCIONES PRINCIPALES
Buscar servicios o desarrolladores desde el hero.
Explorar por tecnología y por categoría.
Abrir un servicio o un desarrollador destacado.
Iniciar sesión o registrarse.
Registrarse como desarrollador desde el CTA.
INFORMACIÓN Y ORDEN DE SECCIONES
a) Navbar: logo provisional "DevMarket", enlaces Servicios y Desarrolladores,
acciones de cuenta (Iniciar sesión, Registrarse).
b) Hero: título, descripción corta y buscador dual con pestañas
"Servicios" / "Desarrolladores" claramente diferenciadas. Campo de búsqueda
y botón primario de 44 px de alto o más.
c) Tecnologías populares: fila de TechnologyTag.
d) Categorías: ServiceCategoryCard para desarrollo web, API REST, desarrollo
móvil, automatización con Python, bases de datos, DevOps e IA/machine
learning.
e) Servicios destacados: 3 ServiceCard (título, desarrollador, calificación,
plazo con DeliveryBadge, precio "Desde").
f) Desarrolladores destacados: 3 DeveloperCard (avatar, nombre, especialidad,
ubicación, AvailabilityBadge, calificación, tecnologías).
g) Cómo funciona: 3 pasos simples (buscar, comparar, contratar).
h) CTA para desarrolladores: invitación a crear perfil y publicar servicios.
i) Footer con grupos de enlaces.
COMPONENTES REUTILIZABLES
Navbar, AccountActions, SearchBar, SearchModeTabs, TechnologyTag,
ServiceCategoryCard, ServiceCard, DeveloperCard, DeveloperAvatar,
AvailabilityBadge, ServiceRating, ServicePrice, DeliveryBadge, SectionHeading,
Button (primary, secondary, outline, text), Footer, FooterLinkGroup.
ESTADOS NECESARIOS
Hover y foco visible en tarjetas, botones, pestañas y enlaces. Pestaña activa
del buscador con indicador visible, no solo por color.
REGLAS FUNCIONALES A RESPETAR
No mezclar perfil de desarrollador con oferta de servicio: son tarjetas
distintas.
No mostrar VerifiedBadge en ninguna tarjeta (el proceso de verificación aún
no está definido).
Los destacados no deben sugerir que se compró la posición ni que hay ranking
por mérito. Titular la sección simplemente "Servicios destacados" y
"Desarrolladores destacados", sin badges "Top", "Patrocinado" ni "Premium".
No inventar precios de referencia, niveles de experiencia, verificaciones,
métricas ni estadísticas de la plataforma (nada de "+10.000 desarrolladores").
No mostrar chat, pagos protegidos, matching inteligente ni disputas.
Todo nombre, foto, cifra, precio, calificación y ubicación es ficticio:
incluir una marca discreta "Contenido ficticio" en las secciones con datos
de ejemplo.
RESPONSIVE
Esta iteración: solo escritorio. No generar tablet ni móvil todavía.
FUERA DE ALCANCE
Páginas internas, listados completos, filtros, autenticación, paneles de
cliente o desarrollador, administración, modo oscuro, animaciones complejas e
ilustraciones recargadas. No agregar secciones que no estén listadas arriba.



## SEGUNDO PROMPT
Modifica ÚNICAMENTE el hero del Home aprobado. Usa la imagen adjunta (bg.png)
como fondo del hero. Conserva exactamente todo lo demás: Navbar, secciones
posteriores, Footer, textos, componentes y espaciado.
USO DE LA IMAGEN
Usa la imagen adjunta tal cual, como fondo de la sección hero. No la
redibujes, no la reinterpretes ni generes una ilustración parecida.
Posición: alineada a la derecha, cubriendo todo el ancho del hero
(cover, centrada verticalmente). La laptop y las tarjetas flotantes deben
verse completas, sin recortes.
Sin overlay oscuro, sin filtros y sin cambiar sus colores.
COMPOSICIÓN DEL HERO
Todo el contenido (título, descripción, pestañas Servicios/Desarrolladores,
buscador y botón) va en la mitad izquierda, alineado a la izquierda y
centrado verticalmente.
El contenido no debe superponerse a la laptop, al globo ni a las tarjetas
flotantes.
Altura del hero: entre 560 y 640 px. Mantén el ancho máximo de contenido
de 1200 px.
El borde inferior del hero debe fundirse con el fondo blanco de la sección
"Tecnologías populares", sin línea divisoria dura.
LEGIBILIDAD
Título en #0F172A y descripción en #64748B, como en el sistema de diseño.
El buscador conserva fondo blanco, borde 1 px y sombra sutil para que
destaque sobre el degradado del fondo.
NO AGREGAR
No añadas tarjetas flotantes, íconos, badges, estadísticas ni textos
adicionales sobre la ilustración: la imagen ya trae sus propios elementos
decorativos.
No cambies el titular ni la descripción actuales.
RESPONSIVE
Esta iteración: solo escritorio.

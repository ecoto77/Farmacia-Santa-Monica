## Plan: Agregar 3 nuevas secciones al PDF

Voy a extender el script de generación del PDF (`reportlab`) manteniendo el mismo estilo visual: paleta navy/teal/peach, fuentes Liberation, encabezados numerados y `subsection()` con bullets cuando aplique.

### Sección 03 — Situación a Resolver
Párrafo introductorio + lista de puntos clave:
- Ausencia de presencia digital propia que comunique la identidad y servicios de la farmacia.
- Clientes deben desplazarse o llamar para consultar disponibilidad de medicamentos y productos.
- Las promociones estacionales (Navidad, Día de la Madre, etc.) no llegan a clientes fuera del local.
- Falta de un canal directo de contacto (WhatsApp / formulario) integrado y siempre disponible.
- Dificultad para que nuevos clientes en Pital de San Carlos y zonas cercanas conozcan la ubicación, horarios y catálogo.
- No existe una herramienta interna para que el personal administre productos y promociones de forma autónoma.

### Sección 04 — Objetivo General
Un único párrafo bien redactado, por ejemplo:

> Desarrollar un sitio web institucional y catálogo digital para Farmacia Santa Mónica, ubicada en Pital de San Carlos, Costa Rica, que proyecte profesionalismo y cercanía, facilite a los clientes consultar productos, promociones e información de contacto desde cualquier dispositivo, y permita al personal administrar el contenido de forma autónoma mediante un panel seguro, fortaleciendo así la presencia digital y la fidelización de la comunidad.

### Sección 05 — Alcance del Proyecto
Dos subsecciones con `subsection()`:

**5.1 Lo que SÍ incluye**
- Sitio one-page responsive con secciones Inicio, Productos, Nosotros y Contacto.
- Hero carousel con 3 diapositivas y CTA de WhatsApp.
- Catálogo con búsqueda por nombre / ingrediente activo y filtrado por categorías.
- Carrusel de promociones estacionales administrable.
- Sección "Nosotros" con historia y métricas, y sección de contacto con formulario validado.
- Panel administrativo con autenticación segura para gestionar productos y promociones.
- Backend en la nube (base de datos, autenticación, RLS) y despliegue HTTPS.
- Optimización SEO básica, accesibilidad y animaciones suaves.

**5.2 Lo que NO incluye (limitaciones)**
- No incluye e-commerce con pagos en línea ni pasarela de pago (Stripe/PayPal).
- No contempla gestión de inventario en tiempo real ni integración con sistema POS.
- No incluye envíos a domicilio gestionados desde la plataforma.
- No incluye app móvil nativa (iOS / Android).
- No contempla historial clínico ni recetas electrónicas.
- No incluye campañas de marketing pagadas ni gestión de redes sociales.

### Entregable
Versión actualizada de `Proyecto_Sitio_Web_Farmacia_Santa_Monica.pdf` en `/mnt/documents/`, con QA visual (pdftoppm) de las páginas nuevas antes de entregar.

### Próximo paso (luego de este bloque)
Te preguntaré qué sección agregamos como 06 (candidatos: Beneficios esperados, Cronograma, Equipo, Tecnologías, Conclusiones).

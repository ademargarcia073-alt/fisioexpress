# Fisio Express CLA

Sitio web de la Lic. Claudia I. Utrilla Sánchez (Fisioterapia y Kinesiología).
SvelteKit + Cloudflare Pages, formulario de contacto vía Web3Forms.

## Desarrollo

```sh
npm install
npm run dev -- --open
```

## Pendientes antes de publicar

1. **Web3Forms**: crear una cuenta en [web3forms.com](https://web3forms.com), obtener la
   access key y colocarla en `.env` como `PUBLIC_WEB3FORMS_ACCESS_KEY` (ver `.env.example`).
   Esa misma variable debe configurarse en Cloudflare Pages → Settings → Environment variables.
2. **Bio de Claudia**: completar el texto placeholder en
   [`src/routes/sobre-mi/+page.svelte`](src/routes/sobre-mi/+page.svelte).
3. **Precios**: confirmar el recargo por atención a domicilio y si el paquete de 10
   sesiones tiene descuento — ambos están en
   [`src/lib/data/servicios.ts`](src/lib/data/servicios.ts).
4. **Dominio**: comprar `fisioexpresscla.com` y conectarlo en Cloudflare Pages. La URL
   base para SEO/canonical está en `src/lib/components/Seo.svelte` y en el schema de
   negocio local en `src/routes/+layout.svelte` — actualizar si el dominio final cambia.
5. Confirmar con la Lic. Utrilla la autorización de publicar los testimonios (Giovana
   Ramirez y el caso en video).

Las fotos ya están integradas en [`static/photos/`](static/photos/) (ver ese directorio
para la lista y su asignación).

## Estructura

- `src/lib/data/` — contenido editable: servicios, precios, testimonios, fotos, datos de contacto.
- `src/lib/components/` — componentes compartidos (Header, Footer, hero con crossfade de fotos, formulario, etc.).
- `src/routes/` — páginas: `/`, `/servicios`, `/sobre-mi`, `/contacto`.

## Build y despliegue

```sh
npm run build
```

El adapter de Cloudflare genera la salida en `.svelte-kit/cloudflare/` (formato
Cloudflare Pages con Workers integration: `_worker.js`, `_routes.json`, `_headers`).

Para desplegar en Cloudflare Pages (dashboard):

- **Comando de build**: `npm run build`
- **Directorio de salida**: `.svelte-kit/cloudflare`
- Configurar la variable de entorno `PUBLIC_WEB3FORMS_ACCESS_KEY` en el proyecto de Pages.

También se puede desplegar con Wrangler CLI (`npx wrangler pages deploy .svelte-kit/cloudflare`)
una vez autenticado con `npx wrangler login`.

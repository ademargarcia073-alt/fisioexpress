<script lang="ts">
	let {
		titulo,
		descripcion,
		ruta = ''
	}: { titulo: string; descripcion: string; ruta?: string } = $props();

	const urlBase = 'https://fisioexpresscla.com';
	let urlCompleta = $derived(`${urlBase}${ruta}`);
</script>

<svelte:head>
	<title>{titulo}</title>
	<meta name="description" content={descripcion} />
	<link rel="canonical" href={urlCompleta} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={titulo} />
	<meta property="og:description" content={descripcion} />
	<meta property="og:url" content={urlCompleta} />
	<meta property="og:locale" content="es_BO" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={titulo} />
	<meta name="twitter:description" content={descripcion} />
</svelte:head>

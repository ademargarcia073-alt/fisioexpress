<script lang="ts">
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppFlotante from '$lib/components/WhatsAppFlotante.svelte';
	import { site } from '$lib/data/site';

	let { children } = $props();

	const schemaNegocio = {
		'@context': 'https://schema.org',
		'@type': 'PhysicalTherapy',
		name: site.nombre,
		description:
			'Fisioterapia y kinesiología con la Lic. Claudia I. Utrilla Sánchez, especialista en Taping Neuro Facial y Theraband, en Plaza Avaroa, La Paz.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: `${site.direccion.linea1}, ${site.direccion.linea2}`,
			addressLocality: 'La Paz',
			addressCountry: 'BO'
		},
		telephone: `+${site.whatsapp}`,
		openingHours: 'Mo-Fr 10:30-20:00',
		url: 'https://fisioexpresscla.com'
	};
</script>

<svelte:head>
	<meta name="theme-color" content="#0a1a1e" />
	{@html `<script type="application/ld+json">${JSON.stringify(schemaNegocio)}<\/script>`}
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />
<WhatsAppFlotante />

<script lang="ts">
	import type { Photo } from '$lib/data/photos';
	import Foto from './Foto.svelte';

	let {
		fotos,
		intervaloMs = 5000,
		transicionMs = 2500
	}: { fotos: Photo[]; intervaloMs?: number; transicionMs?: number } = $props();

	let indice = $state(0);
	let reducirMovimiento = $state(false);

	$effect(() => {
		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducirMovimiento = query.matches;
		if (fotos.length < 2) return;

		const id = setInterval(() => {
			indice = (indice + 1) % fotos.length;
		}, intervaloMs);

		return () => clearInterval(id);
	});
</script>

<div class="crossfade" style:--transicion="{reducirMovimiento ? 0 : transicionMs}ms">
	{#each fotos as foto, i (foto.archivo)}
		<div class="capa" class:activa={i === indice}>
			<Foto archivo={foto.archivo} alt={foto.alt} class="crossfade-img" eager={i === 0} />
		</div>
	{/each}
	<div class="degradado" aria-hidden="true"></div>
</div>

<style>
	.crossfade {
		position: absolute;
		inset: 0;
		overflow: hidden;
		z-index: 0;
	}

	.capa {
		position: absolute;
		inset: 0;
		opacity: 0;
		transition: opacity var(--transicion) ease;
	}

	.capa.activa {
		opacity: 1;
	}

	.capa :global(.crossfade-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: blur(2px) brightness(0.88) saturate(1.08);
		transform: scale(1.04);
	}

	.degradado {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(180deg, rgba(10, 26, 30, 0.25) 0%, rgba(10, 26, 30, 0.45) 60%, rgba(10, 26, 30, 0.65) 100%),
			linear-gradient(90deg, rgba(10, 26, 30, 0.6) 0%, rgba(10, 26, 30, 0.12) 45%, rgba(10, 26, 30, 0.12) 55%, rgba(10, 26, 30, 0.5) 100%);
	}

	@media (max-width: 720px) {
		.degradado {
			background:
				linear-gradient(180deg, rgba(10, 26, 30, 0.45) 0%, rgba(10, 26, 30, 0.6) 50%, rgba(10, 26, 30, 0.75) 100%);
		}
	}
</style>

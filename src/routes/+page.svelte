<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PhotoCrossfade from '$lib/components/PhotoCrossfade.svelte';
	import Foto from '$lib/components/Foto.svelte';
	import { site } from '$lib/data/site';
	import { fotosHero, fotosSobreMi } from '$lib/data/photos';
	import { servicios } from '$lib/data/servicios';
	import { testimonios } from '$lib/data/testimonios';

	const testimonioDestacado = testimonios[1];
</script>

<Seo
	titulo="Fisio Express CLA — Fisioterapia y Kinesiología en Plaza Avaroa, La Paz"
	descripcion="Fisioterapia y kinesiología con la Lic. Claudia I. Utrilla Sánchez, especialista en Taping Neuro Facial y Theraband, en el corazón de Sopocachi."
	ruta="/"
/>

<section class="hero">
	<PhotoCrossfade fotos={fotosHero} />

	<div class="contenedor hero-contenido">
		<p class="eyebrow">🩺 Fisioterapia y Kinesiología en Plaza Avaroa</p>
		<h1>Fisioterapia y kinesiología con resultados <span class="resaltado">que sientes</span></h1>
		<p class="hero-lead">
			Atención personalizada con la {site.profesional}, especialista en Taping Neuro Facial y
			Theraband, en el corazón de Sopocachi.
		</p>

		<div class="hero-cta">
			<a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" class="boton boton-primario">
				Agenda tu consulta
			</a>
			<a href="/servicios" class="boton boton-secundario">Ver servicios</a>
		</div>

		<div class="hero-confianza">
			<span class="badge">🎗️ Taping Neuro Facial</span>
			<span class="badge">💪 Rehabilitación integral</span>
			<span class="badge">📍 Plaza Avaroa, La Paz</span>
		</div>
	</div>
</section>

<section class="confianza">
	<div class="contenedor confianza-cuadricula">
		<figure class="testimonio-destacado tarjeta">
			<blockquote>"{testimonioDestacado.texto}"</blockquote>
			<figcaption>— {testimonioDestacado.contexto}</figcaption>
		</figure>

		<div class="foto-confianza">
			<Foto archivo={fotosSobreMi.principal.archivo} alt={fotosSobreMi.principal.alt} class="foto-confianza-img" />
		</div>
	</div>
</section>

<section class="resumen-servicios">
	<div class="contenedor">
		<p class="eyebrow">Especialidades</p>
		<h2>Todo lo que necesitas para tu recuperación</h2>
		<p class="resumen-lead">
			Un enfoque integral que combina terapia manual, tecnología y ejercicio guiado.
		</p>

		<div class="servicios-cuadricula">
			{#each servicios as servicio (servicio.slug)}
				<a href="/servicios#{servicio.slug}" class="servicio-tarjeta tarjeta" class:destacado={servicio.destacado}>
					<h3>{servicio.nombre}</h3>
					<p>{servicio.resumen}</p>
				</a>
			{/each}
		</div>

		<div class="resumen-cta">
			<a href="/servicios" class="boton boton-secundario">Ver todos los servicios y precios</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 88vh;
		display: flex;
		align-items: center;
		overflow: hidden;
		padding: 0;
	}

	.hero-contenido {
		position: relative;
		z-index: 1;
		padding-top: 6rem;
		padding-bottom: 6rem;
		max-width: 760px;
	}

	.resaltado {
		background: linear-gradient(135deg, var(--turquesa), var(--verde));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.hero-lead {
		font-size: 1.15rem;
		color: var(--texto-suave);
		max-width: 560px;
	}

	.hero-cta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 1.75rem 0 2.25rem;
	}

	.hero-confianza {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.confianza-cuadricula {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: 2rem;
		align-items: stretch;
	}

	.testimonio-destacado {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.testimonio-destacado blockquote {
		margin: 0 0 1rem;
		font-family: var(--fuente-titulos);
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--texto);
	}

	.testimonio-destacado figcaption {
		color: var(--turquesa);
		font-size: 0.9rem;
	}

	.foto-confianza {
		border-radius: var(--radio);
		overflow: hidden;
		min-height: 260px;
	}

	.foto-confianza :global(.foto-confianza-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.resumen-lead {
		max-width: 620px;
	}

	.servicios-cuadricula {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
		margin: 2rem 0;
	}

	.servicio-tarjeta {
		transition:
			transform 0.15s ease,
			border-color 0.2s ease;
	}

	.servicio-tarjeta:hover {
		transform: translateY(-4px);
		border-color: var(--turquesa);
	}

	.servicio-tarjeta h3 {
		color: var(--texto);
	}

	.servicio-tarjeta p {
		margin: 0;
		font-size: 0.92rem;
	}

	.servicio-tarjeta.destacado {
		border-color: var(--turquesa);
		background: linear-gradient(160deg, var(--superficie-alt), var(--superficie));
	}

	@media (max-width: 900px) {
		.confianza-cuadricula {
			grid-template-columns: 1fr;
		}

		.servicios-cuadricula {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.hero {
			min-height: auto;
		}

		.hero-contenido {
			padding-top: 4rem;
			padding-bottom: 4rem;
		}

		.servicios-cuadricula {
			grid-template-columns: 1fr;
		}
	}
</style>

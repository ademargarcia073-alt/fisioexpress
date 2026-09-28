<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { testimonios, casoVideo, testimonioEscrito } from '$lib/data/testimonios';
</script>

<Seo
	titulo="Testimonios — Fisio Express CLA"
	descripcion="Casos reales de recuperación: testimonios de pacientes y un caso clínico en video del tratamiento con la Lic. Claudia I. Utrilla Sánchez."
	ruta="/testimonios"
/>

<section class="encabezado-pagina">
	<div class="contenedor">
		<p class="eyebrow">Testimonios</p>
		<h1>Historias de recuperación</h1>
		<p class="lead">
			Casos reales de pacientes que avanzaron en su tratamiento con constancia y un seguimiento
			cercano.
		</p>
	</div>
</section>

<section class="testimonios">
	<div class="contenedor">
		<div class="testimonios-principal">
			<div class="video-tarjeta tarjeta">
				<div class="video-envoltorio">
					<!-- svelte-ignore a11y_media_has_caption -->
					<video
						src={casoVideo.video}
						poster={casoVideo.poster}
						controls
						playsinline
						preload="none"
						class="video-elemento"
					>
					</video>
				</div>
				<h3>{casoVideo.titulo}</h3>
				<p>{casoVideo.descripcion}</p>
			</div>

			<figure class="testimonio-escrito tarjeta">
				<span class="comillas" aria-hidden="true">“</span>
				{#each testimonioEscrito.parrafos as parrafo (parrafo)}
					<p>{parrafo}</p>
				{/each}
				<figcaption>
					<span class="autor">{testimonioEscrito.autor}</span>
					<span class="contexto">{testimonioEscrito.contexto}</span>
				</figcaption>
			</figure>
		</div>

		<div class="testimonios-cortos">
			{#each testimonios as testimonio (testimonio.texto)}
				<figure class="testimonio-corto tarjeta">
					<blockquote>"{testimonio.texto}"</blockquote>
					<figcaption>— {testimonio.contexto}</figcaption>
				</figure>
			{/each}
		</div>

		<p class="testimonios-nota">Los resultados varían según cada paciente y su diagnóstico.</p>
	</div>
</section>

<style>
	.encabezado-pagina {
		padding-bottom: 1rem;
	}

	.lead {
		max-width: 620px;
	}

	.testimonios-principal {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: stretch;
		margin-top: 2rem;
	}

	.video-tarjeta {
		display: flex;
		flex-direction: column;
	}

	.video-envoltorio {
		width: 100%;
		aspect-ratio: 16 / 9;
		background: #000;
		border-radius: var(--radio-chico);
		overflow: hidden;
		margin-bottom: 1.25rem;
	}

	.video-elemento {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
		background: #000;
	}

	.video-tarjeta h3 {
		margin-bottom: 0.5rem;
	}

	.video-tarjeta p {
		margin: 0;
		font-size: 0.95rem;
	}

	.testimonio-escrito {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}

	.comillas {
		font-family: var(--fuente-titulos);
		font-size: 3.5rem;
		line-height: 1;
		color: var(--turquesa);
		opacity: 0.5;
		margin-bottom: -0.5rem;
	}

	.testimonio-escrito p {
		font-size: 1.05rem;
		line-height: 1.75;
		color: var(--texto);
	}

	.testimonio-escrito figcaption {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.testimonio-escrito .autor {
		font-weight: 600;
		color: var(--texto);
	}

	.testimonio-escrito .contexto {
		color: var(--turquesa);
		font-size: 0.9rem;
	}

	.testimonios-cortos {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.testimonio-corto blockquote {
		margin: 0 0 1rem;
		font-family: var(--fuente-titulos);
		font-size: 1.05rem;
		font-weight: 500;
		color: var(--texto);
	}

	.testimonio-corto figcaption {
		color: var(--turquesa);
		font-size: 0.85rem;
	}

	.testimonios-nota {
		margin: 1.75rem 0 0;
		font-size: 0.85rem;
		color: var(--texto-tenue);
		text-align: center;
	}

	@media (max-width: 900px) {
		.testimonios-principal {
			grid-template-columns: 1fr;
		}

		.testimonios-cortos {
			grid-template-columns: 1fr;
		}
	}
</style>

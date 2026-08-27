<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import FormularioContacto from '$lib/components/FormularioContacto.svelte';
	import { site } from '$lib/data/site';
	import { testimonios } from '$lib/data/testimonios';
</script>

<Seo
	titulo="Contacto — Fisio Express CLA"
	descripcion="Agenda tu consulta de fisioterapia en Plaza Avaroa, La Paz. WhatsApp, formulario de contacto y ubicación."
	ruta="/contacto"
/>

<section class="encabezado-pagina">
	<div class="contenedor">
		<p class="eyebrow">Contacto</p>
		<h1>Agenda tu consulta</h1>
		<p class="lead">
			Escríbenos por WhatsApp o completa el formulario y te responderemos a la brevedad.
		</p>
	</div>
</section>

<section class="contacto">
	<div class="contenedor cuadricula">
		<div class="info">
			<div class="info-bloque tarjeta">
				<h2>Ubicación</h2>
				<p>{site.direccion.linea1}</p>
				<p>{site.direccion.linea2}</p>
				<p class="tenue">{site.direccion.plusCode}</p>

				<h2>Horario de atención</h2>
				<p>{site.horario}</p>
				<p class="tenue">Atención a domicilio disponible, con recargo adicional.</p>

				<h2>WhatsApp</h2>
				<a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" class="boton boton-primario">
					Escribir por WhatsApp
				</a>
			</div>

			<div class="mapa tarjeta">
				<iframe
					src={site.mapaEmbedSrc}
					title="Ubicación de Fisio Express CLA en el mapa"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>

		<div class="formulario-contenedor">
			<h2>Envíanos un mensaje</h2>
			<FormularioContacto />
		</div>
	</div>
</section>

<section class="testimonios">
	<div class="contenedor">
		<p class="eyebrow">Testimonios</p>
		<h2>Lo que dicen nuestros pacientes</h2>

		<div class="testimonios-cuadricula">
			{#each testimonios as testimonio (testimonio.texto)}
				<figure class="testimonio tarjeta">
					<blockquote>"{testimonio.texto}"</blockquote>
					<figcaption>— {testimonio.contexto}</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<style>
	.lead {
		max-width: 620px;
	}

	.cuadricula {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: start;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.info-bloque h2 {
		font-size: 1.05rem;
		margin-top: 1.25rem;
	}

	.info-bloque h2:first-child {
		margin-top: 0;
	}

	.tenue {
		color: var(--texto-tenue);
		font-size: 0.9rem;
	}

	.mapa {
		padding: 0;
		overflow: hidden;
	}

	.mapa iframe {
		width: 100%;
		height: 280px;
		border: 0;
		display: block;
	}

	.formulario-contenedor h2 {
		margin-bottom: 1.25rem;
	}

	.testimonios-cuadricula {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.testimonio blockquote {
		margin: 0 0 1rem;
		font-family: var(--fuente-titulos);
		font-size: 1.05rem;
		font-weight: 500;
	}

	.testimonio figcaption {
		color: var(--turquesa);
		font-size: 0.85rem;
	}

	@media (max-width: 900px) {
		.cuadricula {
			grid-template-columns: 1fr;
		}

		.testimonios-cuadricula {
			grid-template-columns: 1fr;
		}
	}
</style>

<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Foto from '$lib/components/Foto.svelte';
	import { site } from '$lib/data/site';
	import { fotosSobreMi } from '$lib/data/photos';
</script>

<Seo
	titulo="Sobre mí — Lic. Claudia I. Utrilla Sánchez | Fisio Express CLA"
	descripcion="Conoce a la Lic. Claudia I. Utrilla Sánchez, fisioterapeuta-kinesióloga especialista en Taping Neuro Facial y Theraband en La Paz."
	ruta="/sobre-mi"
/>

<section class="sobre-mi">
	<div class="contenedor cuadricula">
		<div class="foto-principal">
			<Foto archivo={fotosSobreMi.principal.archivo} alt={fotosSobreMi.principal.alt} class="foto-principal-img" eager />
		</div>

		<div class="texto">
			<p class="eyebrow">Sobre mí</p>
			<h1>{site.profesional}</h1>
			<p class="rol">{site.titulo}</p>

			<p>
				Con más de una década dedicada a la fisioterapia y kinesiología, la Lic. Utrilla se ha
				especializado en la recuperación de lesiones traumatológicas y deportivas, combinando
				terapia manual, tecnología y ejercicio guiado. Su formación en Taping Neuro Facial y
				Theraband le permite ofrecer un enfoque distintivo dentro del tratamiento kinésico
				convencional.
			</p>
			<p class="placeholder-nota">
				[Texto de formación y trayectoria de referencia — pendiente de confirmar con la Lic.
				Utrilla antes de publicar.]
			</p>

			<h2 class="filosofia-titulo">Mi filosofía de trabajo</h2>
			<p>
				Combino mi especialidad técnica en Taping Neuro Facial y Theraband con un trato
				personalizado y un seguimiento cercano de cada paciente, para que la recuperación sea
				un proceso acompañado, no solo un tratamiento.
			</p>

			<a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" class="boton boton-primario">
				Agenda tu consulta
			</a>
		</div>
	</div>
</section>

<section class="galeria">
	<div class="contenedor">
		<h2>Un vistazo al consultorio</h2>
		<div class="galeria-cuadricula">
			{#each fotosSobreMi.apoyo as foto (foto.archivo)}
				<div class="galeria-item">
					<Foto archivo={foto.archivo} alt={foto.alt} class="galeria-img" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.cuadricula {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 3rem;
		align-items: center;
	}

	.foto-principal {
		border-radius: var(--radio);
		overflow: hidden;
		aspect-ratio: 4 / 5;
	}

	.foto-principal :global(.foto-principal-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.rol {
		color: var(--turquesa);
		font-weight: 600;
		margin-bottom: 1.25rem;
	}

	.placeholder-nota {
		font-style: italic;
		color: var(--texto-tenue);
		border-left: 2px solid var(--borde);
		padding-left: 1rem;
	}

	.filosofia-titulo {
		margin-top: 1.5rem;
	}

	.galeria-cuadricula {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
		margin-top: 2rem;
	}

	.galeria-item {
		border-radius: var(--radio);
		overflow: hidden;
		aspect-ratio: 4 / 3;
	}

	.galeria-item :global(.galeria-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 860px) {
		.cuadricula {
			grid-template-columns: 1fr;
		}

		.foto-principal {
			max-width: 360px;
			margin: 0 auto;
		}
	}

	@media (max-width: 560px) {
		.galeria-cuadricula {
			grid-template-columns: 1fr;
		}
	}
</style>

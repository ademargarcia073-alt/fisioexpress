<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Foto from '$lib/components/Foto.svelte';
	import { servicios, precios } from '$lib/data/servicios';
	import { fotosServicios } from '$lib/data/photos';
	import { site } from '$lib/data/site';

	function fotoPara(slug: string) {
		switch (slug) {
			case 'terapia-manual':
				return fotosServicios.terapiaManual;
			case 'electroterapia':
				return fotosServicios.electroterapia;
			case 'ondas-de-choque':
				return fotosServicios.ondasDeChoque;
			case 'taping-neuro-facial':
				return fotosServicios.tapingNeuroFacial;
			case 'reeducacion-funcional':
				return fotosServicios.reeducacionFuncional[0];
			default:
				return null;
		}
	}
</script>

<Seo
	titulo="Servicios y precios — Fisio Express CLA"
	descripcion="Terapia manual, electroterapia, ondas de choque, Taping Neuro Facial y reeducación funcional con la Lic. Claudia I. Utrilla Sánchez."
	ruta="/servicios"
/>

<section class="encabezado-pagina">
	<div class="contenedor">
		<p class="eyebrow">Servicios</p>
		<h1>Un plan de recuperación hecho a tu medida</h1>
		<p class="lead">
			Cada tratamiento se define tras una evaluación personalizada. Estas son las áreas en las
			que trabajamos.
		</p>
	</div>
</section>

<section class="lista-servicios">
	<div class="contenedor">
		{#each servicios as servicio, i (servicio.slug)}
			{@const foto = fotoPara(servicio.slug)}
			<article
				id={servicio.slug}
				class="servicio-fila tarjeta"
				class:destacado={servicio.destacado}
				class:invertido={i % 2 === 1}
			>
				<div class="servicio-texto">
					{#if servicio.destacado}
						<span class="badge badge-especialidad">Especialidad distintiva</span>
					{/if}
					<h2>{servicio.nombre}</h2>
					<p>{servicio.descripcion}</p>
					{#if servicio.items}
						<ul class="servicio-items">
							{#each servicio.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
				</div>
				{#if foto}
					<div class="servicio-foto">
						<Foto archivo={foto.archivo} alt={foto.alt} class="servicio-foto-img" />
					</div>
				{/if}
			</article>
		{/each}
	</div>
</section>

<section class="precios">
	<div class="contenedor">
		<p class="eyebrow">Inversión</p>
		<h2>Precios de referencia</h2>
		<p class="lead">
			Todos los precios se muestran como "desde" y quedan sujetos a evaluación previa — no son
			montos cerrados.
		</p>

		<div class="tabla-precios tarjeta">
			{#each precios as precio (precio.concepto)}
				<div class="fila-precio">
					<span>{precio.concepto}</span>
					<span class="monto">{precio.monto}</span>
				</div>
			{/each}
		</div>

		<div class="precios-cta">
			<a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" class="boton boton-primario">
				Consultar disponibilidad
			</a>
		</div>
	</div>
</section>

<style>
	.encabezado-pagina {
		padding-bottom: 1rem;
	}

	.lead {
		max-width: 620px;
	}

	.lista-servicios .contenedor {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.servicio-fila {
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: 2rem;
		align-items: center;
		scroll-margin-top: 6rem;
	}

	.servicio-fila.invertido {
		grid-template-columns: 1fr 1.3fr;
	}

	.servicio-fila.invertido .servicio-texto {
		order: 2;
	}

	.servicio-fila.invertido .servicio-foto {
		order: 1;
	}

	.servicio-fila.destacado {
		border-color: var(--turquesa);
		background: linear-gradient(160deg, var(--superficie-alt), var(--superficie));
	}

	.badge-especialidad {
		border-color: var(--turquesa);
		color: var(--turquesa);
		margin-bottom: 0.75rem;
	}

	.servicio-items {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.4rem 1.5rem;
		padding: 0;
		margin: 1rem 0 0;
		list-style: none;
	}

	.servicio-items li {
		font-size: 0.92rem;
		color: var(--texto-suave);
		padding-left: 1.1em;
		position: relative;
	}

	.servicio-items li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.6em;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--turquesa);
	}

	.servicio-foto {
		border-radius: var(--radio);
		overflow: hidden;
		min-height: 220px;
	}

	.servicio-foto :global(.servicio-foto-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.tabla-precios {
		margin-top: 1.5rem;
		padding: 0.5rem 1.75rem;
	}

	.fila-precio {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 0;
		border-bottom: 1px solid var(--borde);
	}

	.fila-precio:last-child {
		border-bottom: none;
	}

	.monto {
		color: var(--turquesa);
		font-weight: 600;
		white-space: nowrap;
	}

	.precios-cta {
		margin-top: 2rem;
	}

	@media (max-width: 860px) {
		.servicio-fila,
		.servicio-fila.invertido {
			grid-template-columns: 1fr;
		}

		.servicio-fila.invertido .servicio-texto,
		.servicio-fila.invertido .servicio-foto {
			order: initial;
		}

		.servicio-items {
			grid-template-columns: 1fr;
		}

		.fila-precio {
			flex-direction: column;
			gap: 0.25rem;
		}
	}
</style>

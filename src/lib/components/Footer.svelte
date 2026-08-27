<script lang="ts">
	import { site } from '$lib/data/site';

	const anio = new Date().getFullYear();
</script>

<footer class="pie">
	<div class="contenedor cuadricula">
		<div>
			<p class="pie-marca">{site.nombre}</p>
			<p class="pie-texto">{site.profesional} · {site.titulo}</p>
		</div>

		<div>
			<h3 class="pie-titulo">Contacto</h3>
			<p class="pie-texto">{site.direccion.linea1}</p>
			<p class="pie-texto">{site.direccion.linea2}</p>
			<p class="pie-texto">{site.horario}</p>
			<a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
		</div>

		<div>
			<h3 class="pie-titulo">Navegación</h3>
			<nav class="pie-nav">
				<a href="/">Inicio</a>
				<a href="/servicios">Servicios</a>
				<a href="/sobre-mi">Sobre mí</a>
				<a href="/contacto">Contacto</a>
			</nav>
		</div>
	</div>

	<div class="contenedor pie-copy">
		<p>© {anio} {site.nombre}. Todos los derechos reservados.</p>
	</div>
</footer>

<style>
	.pie {
		background: var(--fondo-noche-alt);
		border-top: 1px solid var(--borde);
		padding-top: 3rem;
	}

	.cuadricula {
		display: grid;
		grid-template-columns: 1.3fr 1fr 1fr;
		gap: 2rem;
		padding-bottom: 2rem;
	}

	.pie-marca {
		font-family: var(--fuente-titulos);
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--texto);
		margin-bottom: 0.4rem;
	}

	.pie-titulo {
		font-size: 1rem;
		margin-bottom: 0.8rem;
	}

	.pie-texto {
		font-size: 0.92rem;
		margin-bottom: 0.4rem;
	}

	.pie-nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.pie-copy {
		border-top: 1px solid var(--borde);
		padding: 1.25rem 1.5rem;
	}

	.pie-copy p {
		margin: 0;
		font-size: 0.82rem;
		color: var(--texto-tenue);
	}

	@media (max-width: 720px) {
		.cuadricula {
			grid-template-columns: 1fr;
			gap: 1.75rem;
		}
	}
</style>

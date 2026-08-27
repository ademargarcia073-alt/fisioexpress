<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';

	let menuAbierto = $state(false);

	const enlaces = [
		{ href: '/', texto: 'Inicio' },
		{ href: '/servicios', texto: 'Servicios' },
		{ href: '/sobre-mi', texto: 'Sobre mí' },
		{ href: '/contacto', texto: 'Contacto' }
	];

	function esActivo(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<header class="encabezado">
	<div class="contenedor barra">
		<a href="/" class="marca" onclick={() => (menuAbierto = false)}>
			<span class="marca-nombre">{site.nombre}</span>
		</a>

		<button
			class="hamburguesa"
			aria-label="Abrir menú"
			aria-expanded={menuAbierto}
			onclick={() => (menuAbierto = !menuAbierto)}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<nav class="nav" class:abierto={menuAbierto}>
			{#each enlaces as enlace (enlace.href)}
				<a
					href={enlace.href}
					class:activo={esActivo(enlace.href)}
					onclick={() => (menuAbierto = false)}
				>
					{enlace.texto}
				</a>
			{/each}
			<a
				href={site.whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="boton boton-primario nav-cta"
			>
				Agenda tu consulta
			</a>
		</nav>
	</div>
</header>

<style>
	.encabezado {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(10, 26, 30, 0.85);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--borde);
	}

	.barra {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.marca {
		font-family: var(--fuente-titulos);
		font-weight: 700;
		font-size: 1.2rem;
		color: var(--texto);
	}

	.marca:hover {
		color: var(--turquesa);
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 1.75rem;
	}

	.nav a {
		color: var(--texto-suave);
		font-weight: 500;
	}

	.nav a.nav-cta {
		color: #04211e;
	}

	.nav a.nav-cta:hover {
		color: #04211e;
	}

	.nav a.activo {
		color: var(--turquesa);
	}

	.nav-cta {
		padding: 0.6em 1.3em;
		font-size: 0.95rem;
	}

	.hamburguesa {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.hamburguesa span {
		width: 24px;
		height: 2px;
		background: var(--texto);
		border-radius: 2px;
	}

	@media (max-width: 780px) {
		.hamburguesa {
			display: flex;
		}

		.nav {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			align-items: stretch;
			background: var(--fondo-noche-alt);
			border-bottom: 1px solid var(--borde);
			padding: 1rem 1.5rem 1.5rem;
			gap: 1rem;
			display: none;
		}

		.nav.abierto {
			display: flex;
		}

		.nav-cta {
			text-align: center;
			margin-top: 0.5rem;
		}
	}
</style>

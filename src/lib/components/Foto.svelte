<script lang="ts">
	let {
		archivo,
		alt,
		class: className = '',
		eager = false
	}: { archivo: string; alt: string; class?: string; eager?: boolean } = $props();

	let error = $state(false);
</script>

{#if error}
	<div class="placeholder {className}" role="img" aria-label={alt}>
		<span class="placeholder-icono" aria-hidden="true">🩺</span>
		<span class="placeholder-texto">Foto pendiente</span>
	</div>
{:else}
	<img
		src="/photos/{archivo}"
		{alt}
		class={className}
		loading={eager ? 'eager' : 'lazy'}
		onerror={() => (error = true)}
	/>
{/if}

<style>
	.placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		height: 100%;
		min-height: 160px;
		background: linear-gradient(135deg, var(--superficie), var(--superficie-alt));
		border: 1px dashed var(--borde);
		color: var(--texto-tenue);
		text-align: center;
		padding: 1rem;
	}

	.placeholder-icono {
		font-size: 1.8rem;
	}

	.placeholder-texto {
		font-size: 0.8rem;
		font-family: var(--fuente-texto);
	}
</style>

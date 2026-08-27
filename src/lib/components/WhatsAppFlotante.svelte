<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<a
	href={site.whatsappUrl}
	target="_blank"
	rel="noopener noreferrer"
	class="flotante"
	aria-label="Escribir por WhatsApp"
>
	<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
		<path
			d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"
		/>
		<path
			d="M12.02 2C6.5 2 2.03 6.44 2.03 11.92c0 1.86.51 3.6 1.4 5.1L2 22l5.12-1.34a10.02 10.02 0 0 0 4.9 1.26h.01c5.51 0 9.99-4.44 9.99-9.92C21.99 6.44 17.52 2 12.02 2zm0 18.13h-.01c-1.57 0-3.11-.42-4.46-1.22l-.32-.19-3.04.8.81-2.94-.21-.3a8.13 8.13 0 0 1-1.27-4.36c0-4.5 3.68-8.16 8.51-8.16 2.27 0 4.4.88 6 2.47a8.06 8.06 0 0 1 2.48 5.7c0 4.5-3.69 8.2-8.49 8.2z"
		/>
	</svg>
</a>

<style>
	.flotante {
		position: fixed;
		right: 1.25rem;
		bottom: 1.25rem;
		z-index: 60;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--turquesa), var(--verde));
		color: #04211e;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: var(--sombra);
		transition: transform 0.15s ease;
	}

	.flotante:hover {
		transform: scale(1.08);
		color: #04211e;
	}
</style>

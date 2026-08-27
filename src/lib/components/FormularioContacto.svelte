<script lang="ts">
	import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';

	type Estado = 'inactivo' | 'enviando' | 'exito' | 'error';
	let estado = $state<Estado>('inactivo');

	async function enviar(evento: SubmitEvent) {
		evento.preventDefault();
		const form = evento.target as HTMLFormElement;
		estado = 'enviando';

		try {
			const datos = new FormData(form);
			const respuesta = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: datos
			});
			const resultado = await respuesta.json();

			if (resultado.success) {
				estado = 'exito';
				form.reset();
			} else {
				estado = 'error';
			}
		} catch {
			estado = 'error';
		}
	}
</script>

<form class="formulario tarjeta" onsubmit={enviar}>
	<input type="hidden" name="access_key" value={PUBLIC_WEB3FORMS_ACCESS_KEY} />
	<input type="hidden" name="subject" value="Nuevo mensaje desde fisioexpresscla.com" />
	<input type="checkbox" name="botcheck" class="visually-hidden" tabindex="-1" autocomplete="off" />

	<div class="campo">
		<label for="nombre">Nombre</label>
		<input id="nombre" name="name" type="text" required autocomplete="name" />
	</div>

	<div class="campo">
		<label for="telefono">Teléfono / WhatsApp</label>
		<input id="telefono" name="phone" type="tel" required autocomplete="tel" />
	</div>

	<div class="campo">
		<label for="email">Correo (opcional)</label>
		<input id="email" name="email" type="email" autocomplete="email" />
	</div>

	<div class="campo">
		<label for="mensaje">Mensaje</label>
		<textarea id="mensaje" name="message" rows="4" required></textarea>
	</div>

	<button type="submit" class="boton boton-primario" disabled={estado === 'enviando'}>
		{estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
	</button>

	{#if estado === 'exito'}
		<p class="mensaje-estado exito">¡Gracias! Tu mensaje fue enviado, te contactaremos pronto.</p>
	{:else if estado === 'error'}
		<p class="mensaje-estado error">
			Hubo un problema al enviar el mensaje. Por favor escríbenos directamente por WhatsApp.
		</p>
	{/if}
</form>

<style>
	.formulario {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
	}

	.campo {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	label {
		font-size: 0.9rem;
		color: var(--texto-suave);
		font-weight: 500;
	}

	input,
	textarea {
		font-family: var(--fuente-texto);
		font-size: 1rem;
		background: var(--fondo-noche);
		border: 1px solid var(--borde);
		border-radius: var(--radio-chico);
		padding: 0.7em 0.9em;
		color: var(--texto);
		resize: vertical;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--turquesa);
	}

	button {
		align-self: flex-start;
	}

	button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	.mensaje-estado {
		margin: 0;
		font-size: 0.92rem;
	}

	.mensaje-estado.exito {
		color: var(--verde);
	}

	.mensaje-estado.error {
		color: #f87171;
	}
</style>

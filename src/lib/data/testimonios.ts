export type Testimonio = {
	texto: string;
	contexto: string;
};

export const testimonios: Testimonio[] = [
	{
		texto: 'Todo marcha bien, y en un mes me evaluará de nuevo.',
		contexto: 'Seguimiento de fortalecimiento de cuádriceps'
	},
	{
		texto:
			'El tiempo y la paciencia en esta etapa de mi recuperación se nota en la dedicación con la que me ayudó.',
		contexto: 'Paciente en proceso de rehabilitación'
	},
	{
		texto: 'Cuando sea la segunda operación, la estaré llamando para las sesiones de recuperación.',
		contexto: 'Paciente post-operatorio'
	}
];

export type CasoVideo = {
	titulo: string;
	descripcion: string;
	video: string;
	poster: string;
};

export const casoVideo: CasoVideo = {
	titulo: 'Caso clínico: recuperación tras un accidente de tránsito',
	descripcion:
		'Fisuras en costillas y fractura de tibia (pie izquierdo). Evolución de la paciente antes de iniciar fisioterapia, a las 4 sesiones, a las 10 sesiones y al concluir el tratamiento.',
	video: '/videos/caso-accidente-transito.mp4',
	poster: '/videos/caso-accidente-transito-poster.jpg'
};

export type TestimonioEscrito = {
	autor: string;
	contexto: string;
	parrafos: string[];
};

export const testimonioEscrito: TestimonioEscrito = {
	autor: 'Giovana R.',
	contexto: 'Madre de paciente · Genu valgo (rodillas juntas)',
	parrafos: [
		'Mi nombre es Giovana R., hace aproximadamente tres años a mi hijo de 8 años le diagnosticaron Genu Valgo (rodillas juntas), sus tobillos estaban 15 cm separados uno del otro, por lo que el traumatólogo dijo que si no se corregían con fisioterapia mi hijo iba a ser operado de las rodillas.',
		'A partir de lo cual, acudimos al consultorio de la Lic. Claudia Utrilla en Fisio Express, quien amablemente nos explicó el trabajo que haría con mi hijo para progresar en su diagnóstico. Han transcurrido tres años en los que debido a los ejercicios, a la electroterapia y a los masajes indicados por la Lic. Utrilla mi hijo redujo su ángulo de tobillos separados de 15 cm a 4 cm. Por lo cual, mi hijo no será operado de genu valgo.',
		'Mi familia y yo agradecemos profundamente el trabajo realizado por la Lic. Utrilla quien además de ser una excelente profesional en su área es un gran ser humano.'
	]
};

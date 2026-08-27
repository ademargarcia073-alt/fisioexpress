export const site = {
	nombre: 'Fisio Express CLA',
	profesional: 'Lic. Claudia I. Utrilla Sánchez',
	titulo: 'Fisioterapeuta-Kinesióloga',
	whatsapp: '59176591126',
	whatsappUrl: 'https://wa.me/59176591126',
	direccion: {
		linea1: 'Plaza Avaroa, Av. Sánchez Lima, pasando Pedro Salazar, lado Edif. Melissa',
		linea2: 'Edificio Anibal N° 2520 — Planta Baja, Of. 7',
		ciudad: 'La Paz, Bolivia',
		plusCode: 'FVQF+7G La Paz'
	},
	horario: 'Lunes a viernes, 10:30 – 20:00',
	mapaEmbedSrc:
		'https://www.google.com/maps?q=FVQF%2B7G+La+Paz&output=embed'
};

export function mensajeWhatsapp(texto: string) {
	return `${site.whatsappUrl}?text=${encodeURIComponent(texto)}`;
}

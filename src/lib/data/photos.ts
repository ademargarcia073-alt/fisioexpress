export type Photo = {
	/** Nombre de archivo esperado en /static/photos/ */
	archivo: string;
	alt: string;
};

// Las fotos viven en /static/photos/. Si un archivo no existe todavía,
// <Foto> muestra un marcador visual en su lugar — no hace falta tocar el código.

export const fotoPerfil: Photo = {
	archivo: 'sobre-mi-perfil.jpg',
	alt: 'Lic. Claudia I. Utrilla Sánchez con equipo de electroterapia'
};

export const fotosHero: Photo[] = [
	{ archivo: 'hero-terapia-manual.jpg', alt: 'Sesión de terapia manual' },
	{ archivo: 'hero-ambiente-colchonetas.jpg', alt: 'Vista aérea del ambiente del consultorio' },
	{ archivo: 'hero-equipo-bicicletas.jpg', alt: 'Varios pacientes en máquinas de reeducación' },
	{ archivo: 'hero-terapia-manual-detalle.jpg', alt: 'Detalle de terapia manual en manos y pierna' },
	{ archivo: 'sobre-mi-consulta.jpg', alt: 'Momento de consulta con paciente' },
	{ archivo: 'hero-rehab-funcional-muletas.jpg', alt: 'Rehabilitación funcional al aire libre' }
];

export const fotosServicios = {
	terapiaManual: {
		archivo: 'hero-terapia-manual-detalle.jpg',
		alt: 'Terapia manual, detalle de manos y pierna'
	},
	electroterapia: {
		archivo: 'sobre-mi-perfil.jpg',
		alt: 'Equipo de electroterapia y agentes físicos'
	},
	// Sin foto real todavía — pendiente de conseguir con la Lic. Utrilla.
	// Mientras el archivo no exista en static/photos/, <Foto> muestra el marcador "Foto pendiente".
	ondasDeChoque: {
		archivo: 'servicios-ondas-de-choque.jpg',
		alt: 'Equipo de Ondas de Choque (foto pendiente)'
	},
	tapingNeuroFacial: {
		archivo: 'servicios-taping-neuro-facial.jpg',
		alt: 'Sesión de Taping Neuro Facial (foto pendiente)'
	},
	reeducacionFuncional: [
		{ archivo: 'hero-ambiente-colchonetas.jpg', alt: 'Vista aérea del área de reeducación funcional' },
		{ archivo: 'hero-equipo-bicicletas.jpg', alt: 'Varios pacientes en máquinas de reeducación' },
		{ archivo: 'servicios-equipo-isocinetico-1.jpg', alt: 'Equipo isocinético' },
		{ archivo: 'servicios-equipo-isocinetico-2.jpg', alt: 'Equipo isocinético, sesión en curso' },
		{ archivo: 'servicios-equipo-isocinetico-3.jpg', alt: 'Equipo isocinético, detalle' },
		{ archivo: 'hero-rehab-funcional-muletas.jpg', alt: 'Rehabilitación funcional y educación de la marcha' }
	] as Photo[]
};

export const fotosSobreMi = {
	principal: fotoPerfil,
	apoyo: [
		{ archivo: 'sobre-mi-consulta.jpg', alt: 'Momento de consulta con paciente' },
		{ archivo: 'hero-terapia-manual.jpg', alt: 'Sesión de terapia manual' },
		{ archivo: 'hero-ambiente-colchonetas.jpg', alt: 'Vista del área de reeducación funcional del consultorio' },
		{ archivo: 'hero-rehab-funcional-muletas.jpg', alt: 'Rehabilitación funcional y educación de la marcha' }
	] as Photo[]
};

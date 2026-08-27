export type Servicio = {
	slug: string;
	nombre: string;
	resumen: string;
	descripcion: string;
	items?: string[];
	destacado?: boolean;
};

export const servicios: Servicio[] = [
	{
		slug: 'terapia-manual',
		nombre: 'Terapia Manual',
		resumen: 'Movilización y manipulación articular para aliviar el dolor.',
		descripcion:
			'Movilización y manipulación articular para aliviar el dolor y recuperar el rango de movimiento.'
	},
	{
		slug: 'electroterapia',
		nombre: 'Electroterapia y agentes físicos',
		resumen: 'Corrientes y tecnología para reducir el dolor y acelerar la recuperación.',
		descripcion:
			'Electroanalgesia, Magnetoterapia, Ultrasonido, Termoterapia, Crioterapia y Radiofrecuencia — corrientes y tecnología para reducir el dolor y acelerar la recuperación de tejidos.',
		items: ['Electroanalgesia', 'Magnetoterapia', 'Ultrasonido', 'Termoterapia', 'Crioterapia', 'Radiofrecuencia']
	},
	{
		slug: 'ondas-de-choque',
		nombre: 'Ondas de Choque',
		resumen: 'Alta efectividad para tendinitis y lesiones crónicas.',
		descripcion:
			'Terapia de alta efectividad para tendinitis y lesiones crónicas de difícil resolución.'
	},
	{
		slug: 'taping-neuro-facial',
		nombre: 'Taping Neuro Facial & Theraband',
		resumen: 'La especialidad distintiva de la Lic. Claudia Utrilla.',
		descripcion:
			'Técnica especializada de la Lic. Claudia Utrilla para soporte muscular y articular.',
		destacado: true
	},
	{
		slug: 'reeducacion-funcional',
		nombre: 'Reeducación funcional',
		resumen: 'Ejercicio terapéutico guiado para recuperar la funcionalidad.',
		descripcion:
			'Educación de la marcha, Propiocepción, Fortalecimiento, Elongación y Mecanoterapia — ejercicio terapéutico guiado.',
		items: ['Educación de la marcha', 'Propiocepción', 'Fortalecimiento', 'Elongación', 'Mecanoterapia']
	}
];

export type Precio = {
	concepto: string;
	monto: string;
};

export const precios: Precio[] = [
	{ concepto: 'Consulta inicial', monto: 'desde Bs. 80' },
	{ concepto: 'Sesión individual', monto: 'desde Bs. 80' },
	{ concepto: 'Paquete 10 sesiones', monto: 'desde Bs. 700' },
	{ concepto: 'Taping Neuro Facial', monto: 'desde Bs. 100' },
	{ concepto: 'Atención a domicilio', monto: 'recargo adicional (a confirmar)' }
];

// Nota: montos de referencia/ilustrativos — pendientes de confirmar con la Lic. Utrilla antes de publicar.

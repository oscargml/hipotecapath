import type { Bank, IsaiState } from './types';

export const BANKS: Bank[] = [
  { id: 'banorte', name: 'Banorte', product: 'Hipoteca Tradicional', nominalRate: 9.15, cat: 11.20, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Acepta Cofinavit. Descuento clientes nómina.', highlight: true },
  { id: 'banregio', name: 'Banregio', product: 'InburCasa', nominalRate: 9.25, cat: 11.40, maxTermYears: 20, minDownPaymentPct: 15, type: 'private', notes: 'Tasas competitivas para perfil sólido.', highlight: true },
  { id: 'inbursa', name: 'Inbursa', product: 'CrediResidencial', nominalRate: 9.50, cat: 11.80, maxTermYears: 20, minDownPaymentPct: 20, type: 'private', notes: 'Una de las tasas más bajas del mercado.', highlight: true },
  { id: 'afirme', name: 'Afirme', product: 'Hipoteca Afirme', nominalRate: 9.60, cat: 11.90, maxTermYears: 20, minDownPaymentPct: 15, type: 'private', notes: 'Atención personalizada en el norte del país.' },
  { id: 'mifel', name: 'Mifel', product: 'Hipoteca Mifel', nominalRate: 9.70, cat: 12.10, maxTermYears: 20, minDownPaymentPct: 15, type: 'private', notes: 'Banca privada y patrimonial.' },
  { id: 'santander', name: 'Santander', product: 'Pago Fijo / Hipoteca Free', nominalRate: 10.25, cat: 12.60, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Variante sin comisión por apertura.' },
  { id: 'scotiabank', name: 'Scotiabank', product: 'Hipoteca Fija', nominalRate: 10.50, cat: 12.80, maxTermYears: 25, minDownPaymentPct: 5, type: 'private', notes: 'Hasta 95% de financiamiento.' },
  { id: 'hsbc', name: 'HSBC', product: 'Hipoteca Fuerte', nominalRate: 10.60, cat: 12.90, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Flexible con ingresos variables.' },
  { id: 'bbva', name: 'BBVA México', product: 'Hipoteca Fija', nominalRate: 11.20, cat: 13.20, maxTermYears: 20, minDownPaymentPct: 10, type: 'private', notes: 'Mayor cartera del país. Plataforma digital robusta.' },
  { id: 'infonavit', name: 'Infonavit', product: 'Crédito Tradicional / T100', nominalRate: 10.45, cat: 11.50, maxTermYears: 30, minDownPaymentPct: 0, type: 'government', notes: 'Monto máx. $2.83M. Para trabajadores IMSS.' },
  { id: 'fovissste', name: 'Fovissste', product: 'Crédito Tradicional', nominalRate: 5.00, cat: 6.20, maxTermYears: 30, minDownPaymentPct: 0, type: 'government', notes: 'Tasas 4%-6%. Solo trabajadores del Estado.' },
];

export const ISAI_STATES: IsaiState[] = [
  { code: 'AGU', name: 'Aguascalientes', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'BCN', name: 'Baja California', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'BCS', name: 'Baja California Sur', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'CAM', name: 'Campeche', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'CHP', name: 'Chiapas', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'CHH', name: 'Chihuahua', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'CMX', name: 'Ciudad de México (CDMX)', isaiRate: 3.0, notaryFeeMin: 3.5, notaryFeeMax: 6.0, registrationFeePct: 0.75, notes: 'Tasa progresiva; vivienda de interés social exenta.' },
  { code: 'COA', name: 'Coahuila', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'COL', name: 'Colima', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'DUR', name: 'Durango', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'GUA', name: 'Guanajuato', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: 'Reducción por vivienda nueva.' },
  { code: 'GRO', name: 'Guerrero', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'HID', name: 'Hidalgo', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'JAL', name: 'Jalisco', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: 'Reducción para primera vivienda.' },
  { code: 'MEX', name: 'Estado de México', isaiRate: 3.0, notaryFeeMin: 3.0, notaryFeeMax: 5.5, registrationFeePct: 0.75, notes: '' },
  { code: 'MIC', name: 'Michoacán', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'MOR', name: 'Morelos', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'NAY', name: 'Nayarit', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'NLE', name: 'Nuevo León', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: 'Zona metropolitana con alta actividad inmobiliaria.' },
  { code: 'OAX', name: 'Oaxaca', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'PUE', name: 'Puebla', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'QUE', name: 'Querétaro', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: 'Crecimiento inmobiliario acelerado.' },
  { code: 'ROO', name: 'Quintana Roo', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: 'Zona turística; alta demanda de vivienda.' },
  { code: 'SLP', name: 'San Luis Potosí', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'SIN', name: 'Sinaloa', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'SON', name: 'Sonora', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'TAB', name: 'Tabasco', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'TAM', name: 'Tamaulipas', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.5, registrationFeePct: 0.5, notes: '' },
  { code: 'TLA', name: 'Tlaxcala', isaiRate: 2.5, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
  { code: 'VER', name: 'Veracruz', isaiRate: 2.5, notaryFeeMin: 2.5, notaryFeeMax: 5.0, registrationFeePct: 0.75, notes: '' },
  { code: 'YUC', name: 'Yucatán', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: 'Mérida lidera crecimiento inmobiliario del sureste.' },
  { code: 'ZAC', name: 'Zacatecas', isaiRate: 2.0, notaryFeeMin: 2.0, notaryFeeMax: 4.0, registrationFeePct: 0.5, notes: '' },
];

export const FAQ_ITEMS = [
  {
    q: '¿Cuánto debo ganar para que un banco me apruebe una hipoteca?',
    a: 'La regla general es que la mensualidad no debe exceder el 30-35% de tu ingreso mensual comprobable. Para una mensualidad de $20,000 (crédito de ~$2 millones a 10.5% a 20 años), necesitarías ingresos de al menos $58,000 mensuales. Los autoempleados presentan declaraciones fiscales de los últimos dos ejercicios.',
  },
  {
    q: '¿Cuánto tarda en aprobarse y formalizarse un crédito hipotecario?',
    a: 'El proceso completo toma entre 4 y 8 semanas: precalificación (1-2 días), solicitud formal (1 semana), avalúo del inmueble (5-10 días hábiles), autorización final (1-2 semanas), firma y registro (1-2 semanas). Tener todos los documentos completos desde el inicio acelera significativamente el proceso.',
  },
  {
    q: '¿Qué documentos necesito para solicitar una hipoteca?',
    a: 'Identificación oficial vigente (INE/pasaporte), CURP, RFC con constancia de situación fiscal, comprobante de domicilio, últimos 3-6 recibos de nómina o declaraciones fiscales, estados de cuenta bancarios de los últimos 3 meses, y acta de matrimonio si aplica. Para el inmueble: avalúo, escrituras, predial al corriente y constancia de no adeudo de agua.',
  },
  {
    q: '¿Puedo hacer pagos anticipados sin penalización?',
    a: 'Sí. La Ley para la Transparencia y Ordenamiento de los Servicios Financieros prohíbe a los bancos cobrar penalizaciones por pago anticipado en créditos hipotecarios contratados desde 2008. Los prepagos se aplican directamente al capital, reduciendo el plazo o la mensualidad según prefieras.',
  },
  {
    q: '¿Qué es la portabilidad hipotecaria y cuándo conviene?',
    a: 'La portabilidad te permite mover tu crédito a otro banco sin penalización, generalmente para aprovechar mejor tasa. Conviene cuando tu tasa actual está 2 o más puntos arriba del mercado, ya que los costos de la portabilidad (avalúo, gastos notariales reducidos) se recuperan en 2-3 años.',
  },
  {
    q: '¿Los intereses de la hipoteca son deducibles de impuestos?',
    a: 'Sí. Los intereses reales (ajustados por inflación) pagados sobre créditos hipotecarios para casa habitación son deducibles en tu declaración anual de personas físicas. El banco te entrega una constancia anual con el monto deducible.',
  },
  {
    q: '¿Conviene tasa fija o variable en una hipoteca mexicana?',
    a: 'En México la mayoría de los expertos recomiendan tasa fija porque ofrece certeza durante todo el plazo. La tasa variable se ajusta con la TIIE y puede subir cuando Banxico incrementa la tasa de referencia. Solo considera variable si planeas liquidar el crédito en menos de 5 años.',
  },
  {
    q: '¿Cuál es la diferencia entre el CAT y la tasa de interés?',
    a: 'La tasa nominal solo refleja el costo del dinero prestado. El CAT (Costo Anual Total) incluye además comisiones, seguros de vida y daños, y gastos administrativos. Un crédito con tasa 9.5% puede tener CAT de 13% por comisiones altas. Siempre compara el CAT, no la tasa nominal.',
  },
];

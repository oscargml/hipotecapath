export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY no configurado en las variables de entorno de Vercel.' });
  }

  const { monthlyIncome, monthlyDebts, propertyValue, downPaymentPct, state, employmentType, creditScore, hasInfonavit } = req.body;

  if (!monthlyIncome || !propertyValue) {
    return res.status(400).json({ error: 'Datos incompletos.' });
  }

  const downPayment = Number(propertyValue) * (Number(downPaymentPct) / 100);
  const loanAmount = Number(propertyValue) - downPayment;
  const debtRatio = Number(monthlyDebts) / Number(monthlyIncome) * 100;

  const prompt = `Eres un asesor hipotecario experto en el mercado mexicano de crédito de vivienda 2026. Analiza el siguiente perfil financiero y proporciona un diagnóstico personalizado en español, claro y práctico. Responde directamente sin introducciones genéricas.

PERFIL DEL SOLICITANTE:
- Ingreso mensual neto: $${Number(monthlyIncome).toLocaleString('es-MX')} MXN
- Deudas mensuales actuales: $${Number(monthlyDebts || 0).toLocaleString('es-MX')} MXN
- Relación deuda/ingreso actual: ${debtRatio.toFixed(1)}%
- Valor del inmueble deseado: $${Number(propertyValue).toLocaleString('es-MX')} MXN
- Enganche disponible: ${downPaymentPct}% ($${Math.round(downPayment).toLocaleString('es-MX')} MXN)
- Monto a financiar: $${Math.round(loanAmount).toLocaleString('es-MX')} MXN
- Estado: ${state}
- Tipo de empleo: ${employmentType}
- Historial en Buró de Crédito: ${creditScore}
- Tiene subcuenta Infonavit activa: ${hasInfonavit ? 'Sí' : 'No'}

Por favor proporciona:

1. **DIAGNÓSTICO DE VIABILIDAD** (2-3 párrafos): ¿Este perfil es viable para un crédito hipotecario? ¿Qué tan sólido es según los estándares bancarios mexicanos? Menciona fortalezas y áreas de mejora.

2. **INSTITUCIONES RECOMENDADAS**: Señala 2-3 bancos o instituciones que mejor se adapten a este perfil específico, con razones concretas. Si aplica Infonavit o Cofinavit, menciónalo.

3. **MENSUALIDAD ESTIMADA**: Calcula una mensualidad aproximada para el monto a financiar con una tasa representativa del mercado para este perfil. Menciona el rango de tasa esperado.

4. **GASTOS DE CIERRE ESTIMADOS**: Estima los gastos de escrituración para el estado indicado (ISAI + notaría + registro + avalúo aproximados).

5. **PASOS CONCRETOS RECOMENDADOS**: Lista 3-5 acciones específicas que esta persona debería hacer ANTES de solicitar el crédito para mejorar sus posibilidades y condiciones.

Sé específico con números y porcentajes reales del mercado mexicano 2026. Usa un tono profesional pero accesible.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1500,
          },
        }),
      }
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message ?? `Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error('Respuesta vacía de Gemini API.');
    }

    return res.status(200).json({ result: text });
  } catch (err) {
    console.error('Advisor API error:', err);
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Error al conectar con el servicio de IA.' });
  }
}

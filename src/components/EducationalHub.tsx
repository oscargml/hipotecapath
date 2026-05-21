import React, { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp, Search } from "lucide-react";
import { FAQ_ITEMS } from "../data";

const ARTICLES = [
  {
    id: "como-funciona",
    title: "¿Cómo funciona un crédito hipotecario en México?",
    tag: "Fundamentos",
    readTime: "6 min",
    content: (
      <>
        <p>Un crédito hipotecario es un préstamo a largo plazo —típicamente entre 10 y 30 años— que un banco o institución financiera te otorga para adquirir, construir o remodelar una vivienda. A cambio del dinero, el inmueble queda como garantía real del crédito mediante una <strong>hipoteca</strong> inscrita en el Registro Público de la Propiedad (RPP). Si dejas de pagar durante un periodo prolongado, el banco puede iniciar un procedimiento judicial para adjudicarse el inmueble y recuperar el capital prestado.</p>
        <p>En México, la mayoría de los créditos hipotecarios bancarios se contratan en <strong>pesos a tasa fija</strong>, lo que significa que la tasa de interés permanece igual durante toda la vida del crédito. Esta característica es fundamental porque te protege contra subidas inesperadas en las tasas de referencia del Banco de México (TIIE) y te permite saber con certeza cuánto pagarás cada mes durante 20 o 30 años. Algunos bancos también ofrecen tasa variable atada a TIIE+puntos, pero esta opción es menos común y generalmente se recomienda solo para perfiles que entienden el riesgo de variabilidad de tasa.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Los componentes principales de tu mensualidad</h3>
        <p>Cada mensualidad que pagas se compone de cuatro elementos: <strong>capital</strong> (la parte que reduce tu deuda original), <strong>intereses</strong> (el costo del dinero prestado), <strong>seguros obligatorios</strong> (de vida y de daños al inmueble, requeridos por casi todos los bancos) y, en algunos casos, una <strong>comisión por administración</strong>. Al inicio del crédito, la proporción de intereses puede representar el 80% o más de la mensualidad, pero año tras año esa proporción disminuye y el capital amortizado aumenta. Por eso los primeros años no notas mucho avance en el saldo: estás pagando principalmente el costo del dinero, no la deuda principal.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">La fórmula de amortización francesa</h3>
        <p>Los bancos mexicanos usan la <strong>fórmula de amortización francesa</strong>, donde cada mensualidad es fija durante todo el plazo pero la composición interna cambia. La fórmula es: <em>Pago = P × [r(1+r)ⁿ] / [(1+r)ⁿ – 1]</em>, donde P es el monto financiado, r es la tasa mensual (tasa anual ÷ 12) y n es el número total de pagos (años × 12).</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Plazo, mensualidad y costo total: la triple relación</h3>
        <p>Existe una relación inversa entre el plazo y la mensualidad: un crédito a 30 años tiene mensualidad más baja que uno a 15 años, pero pagas mucho más en intereses totales. Por ejemplo, un crédito de $2 millones a 10.5% a 30 años genera mensualidades de ~$18,300 pero un costo total en intereses de más de $4.6 millones. El mismo crédito a 15 años tendría mensualidades de ~$22,100 pero los intereses totales bajarían a ~$1.98 millones. <strong>Regla práctica</strong>: contrata el plazo más corto que puedas pagar cómodamente y considera hacer prepagos anuales si tu situación lo permite.</p>
      </>
    ),
  },
  {
    id: "comparativa-bancos-2026",
    title: "Comparativa 2026: los principales bancos hipotecarios en México",
    tag: "Bancos",
    readTime: "8 min",
    content: (
      <>
        <p>El mercado hipotecario mexicano está dominado por seis grandes bancos comerciales —BBVA, Banorte, Santander, HSBC, Scotiabank y Citibanamex— más una serie de bancos medianos y especializados que han ganado terreno ofreciendo tasas más competitivas: Inbursa, Banregio, Afirme y Mifel. A estas opciones se suman Infonavit y Fovissste, las dos grandes hipotecarias gubernamentales, que conjuntamente son la fuente de financiamiento más importante del país por número de créditos otorgados.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">BBVA México: el líder del mercado</h3>
        <p>Con la mayor cartera hipotecaria del país, BBVA ofrece su Hipoteca Fija con tasas que en 2026 inician alrededor de 11.20% para perfiles con buen historial, con un CAT promedio de 13.2%. Aunque su tasa no es la más baja, BBVA destaca por su plataforma digital robusta, descuentos para clientes nómina y proceso de precalificación relativamente ágil. Su comisión por contratación se calcula sobre el monto financiado y suele situarse cerca del 1%.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Banorte: tasas competitivas y enfoque en cliente</h3>
        <p>Banorte ha mantenido una posición agresiva en tasas durante los últimos años, ofreciendo créditos desde 9.15% para perfiles con excelente historial. Su producto principal permite financiar hasta 90-95% del valor del inmueble en algunos casos, y acepta cofinanciamientos con Infonavit (Cofinavit). Es particularmente atractivo para clientes con ingresos variables o autoempleados.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Santander: sin comisión por apertura</h3>
        <p>Santander ofrece Pago Fijo desde 10.25% con una variante Hipoteca Free que elimina la comisión por apertura, representando un ahorro de $20,000 a $30,000 en un crédito promedio. Su CAT ronda el 12.6%. Es muy considerada por compradores primerizos.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Inbursa, Banregio, Afirme y Mifel: las tasas más bajas</h3>
        <p>Estos bancos ofrecen las tasas más competitivas del mercado (9.25%-9.70%) pero generalmente exigen mayor enganche (15-20%) y un perfil crediticio sólido. Para quienes califican, el ahorro a 20 años puede ser de cientos de miles de pesos comparado con los grandes bancos.</p>
        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-r-lg my-4 text-sm italic text-gray-600 dark:text-gray-400">
          La diferencia entre una tasa de 9.50% y 11.20% para un crédito de $2 millones a 20 años es de aproximadamente $2,070 mensuales, equivalente a $497,000 durante el plazo total. <strong>Comparar bancos no es opcional, es obligatorio.</strong>
        </blockquote>
      </>
    ),
  },
  {
    id: "cat-vs-tasa",
    title: "CAT vs Tasa de interés: por qué el CAT es lo que importa",
    tag: "Finanzas",
    readTime: "5 min",
    content: (
      <>
        <p>Cuando un banco anuncia su crédito hipotecario, lo primero que ves es la tasa de interés. Pero esa tasa <strong>no representa el costo real</strong> de tu crédito. Para conocerlo necesitas mirar el <strong>CAT (Costo Anual Total)</strong>, una métrica estandarizada por el Banco de México que las instituciones financieras están obligadas a publicar.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">¿Qué incluye el CAT?</h3>
        <p>La tasa de interés solo refleja el costo del dinero prestado: cuánto te cobra el banco por la cantidad financiada. El CAT suma además la comisión por apertura, los seguros de vida y daños obligatorios, los gastos administrativos periódicos y cualquier otro cargo periódico, expresándolo todo como una tasa anual equivalente. Por eso el CAT siempre es más alto que la tasa nominal: 2 a 3 puntos porcentuales arriba es lo normal.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Un ejemplo real que cambia la decisión</h3>
        <p>Supón que comparas dos bancos: el Banco A te ofrece tasa nominal de 9.50% pero CAT de 14.2%, mientras el Banco B ofrece tasa de 10.20% pero CAT de 12.1%. ¿Cuál conviene? <strong>El Banco B</strong>, aunque parezca contraintuitivo. La diferencia se explica por comisiones más altas, seguros más caros y cargos administrativos en el Banco A. Si solo hubieras comparado la tasa nominal, habrías tomado la peor decisión financiera.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Cómo comparar el CAT correctamente</h3>
        <p>Para que la comparación sea válida, el CAT debe calcularse bajo los mismos supuestos: mismo monto, mismo plazo, mismo tipo de inmueble. Banxico estandarizó el cálculo con valores comerciales específicos. Cuando uses simuladores, introduce los mismos valores en cada banco. El CAT también te permite comparar productos diferentes, como una hipoteca tradicional vs un Cofinavit.</p>
      </>
    ),
  },
  {
    id: "infonavit-fovissste",
    title: "Infonavit, Fovissste y Cofinavit: créditos gubernamentales explicados",
    tag: "Gobierno",
    readTime: "7 min",
    content: (
      <>
        <p>No todos los créditos hipotecarios en México vienen de bancos privados. Las dos grandes hipotecarias gubernamentales —<strong>Infonavit</strong> y <strong>Fovissste</strong>— otorgan más de la mitad de los créditos del país, con condiciones que pueden ser significativamente más accesibles para ciertos perfiles.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Infonavit: para trabajadores del sector privado</h3>
        <p>El Instituto del Fondo Nacional de la Vivienda para los Trabajadores (Infonavit) atiende a empleados formales del sector privado que cotizan al IMSS. En 2026 el monto máximo del crédito tradicional es de $2,830,672 con tasa fija de 10.45% y plazo de hasta 30 años. Para el nuevo modelo T100 implementado en 2026, el acceso se facilita para trabajadores con ingresos bajos y medios. La gran ventaja es que <strong>el pago se descuenta automáticamente de tu nómina</strong> y las aportaciones patronales del 5% también se destinan al pago.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Fovissste: para trabajadores del Estado</h3>
        <p>El Fondo de la Vivienda del ISSSTE (Fovissste) atiende a servidores públicos federales y estatales. Su crédito tradicional ofrece tasas fijas entre 4% y 6% —las más bajas del mercado mexicano— con montos máximos de hasta $1.08 millones MXN o 1.42 millones en UMA. Requiere al menos 18 meses de cotización continua.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Cofinavit: cuando el Infonavit no alcanza</h3>
        <p>El Cofinavit combina tu crédito Infonavit con un crédito bancario adicional. Tu subcuenta de vivienda funciona como enganche y las aportaciones patronales del 5% pagan la parte Infonavit automáticamente. Bancos como Banorte, BBVA, HSBC, Santander y Afirme aceptan este esquema. Es especialmente útil cuando quieres comprar una vivienda más cara que la que el Infonavit puede financiar por sí solo.</p>
      </>
    ),
  },
  {
    id: "costos-ocultos",
    title: "Gastos ocultos al comprar casa: ISAI, notario, RPP y más",
    tag: "Costos",
    readTime: "6 min",
    content: (
      <>
        <p>Uno de los errores más comunes al planear la compra de una casa en México es ahorrar solo para el enganche. La realidad es que entre <strong>el 8% y el 12% del valor del inmueble</strong> debe destinarse a gastos de cierre que se pagan por una sola vez al firmar la escritura. Para una casa de $2.5 millones, eso son entre $200,000 y $300,000 adicionales.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">ISAI: el impuesto que casi nadie menciona</h3>
        <p>El Impuesto Sobre Adquisición de Inmuebles (ISAI), también llamado Impuesto de Traslación de Dominio, es un impuesto local que varía por estado y municipio. En la Ciudad de México y Estado de México ronda el 3-5% del valor. En estados como Querétaro, Jalisco, Nuevo León o Yucatán suele ser entre 2% y 3%. <strong>Es el impuesto más caro de la operación</strong> y debe pagarse al momento de la firma.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Gastos notariales y RPP</h3>
        <p>El notario público es indispensable: prepara y autoriza la escritura, verifica que el inmueble esté libre de gravámenes y calcula los impuestos. Sus honorarios más los derechos de registro, certificaciones y testimonios suman entre 3% y 7% del valor del inmueble. La inscripción en el Registro Público de la Propiedad (RPP) cuesta entre 0.5% y 1% adicional del valor.</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2">Avalúo y comisiones bancarias</h3>
        <p>El banco requiere un avalúo realizado por un perito autorizado ($3,000-$8,000 según el valor del inmueble). La comisión por apertura puede ser 0%-1.5% del monto financiado. Adicionalmente, deberás pagar el primer año de los seguros obligatorios de vida y daños, que representan entre 0.5% y 1% del crédito.</p>
        <blockquote className="border-l-4 border-amber-400 pl-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg my-4 text-sm italic text-gray-600 dark:text-gray-400">
          Para una casa de $2,500,000 con 20% de enganche, necesitas tener listos aproximadamente $200,000-$300,000 adicionales para gastos de cierre. <strong>No firmes nada si no tienes este dinero disponible.</strong>
        </blockquote>
      </>
    ),
  },
  {
    id: "estrategias-tasa",
    title: "Cómo conseguir la mejor tasa hipotecaria: 7 estrategias prácticas",
    tag: "Estrategias",
    readTime: "6 min",
    content: (
      <>
        <p>La tasa que un banco te ofrece no es un precio fijo: es el resultado de evaluar tu perfil de riesgo. Estas siete estrategias pueden ayudarte a bajar tu tasa entre 0.5 y 2 puntos porcentuales, lo cual a 20 años significa decenas o cientos de miles de pesos en intereses ahorrados.</p>
        <ol className="space-y-3 mt-3">
          {[
            ["Limpia tu buró de crédito antes de aplicar.", "Cualquier atraso reciente en tarjetas o préstamos puede subir tu tasa significativamente. Solicita tu reporte gratuito en burodecredito.com.mx y resuelve cualquier inconsistencia."],
            ["Aumenta tu enganche al 20% o más.", "Cuando aportas más enganche, el banco asume menos riesgo y te ofrece mejor tasa. La diferencia entre 10% y 20% de enganche puede ser de 0.5 a 1 punto porcentual."],
            ["Cotiza con al menos 4 bancos en paralelo.", "No te conformes con la primera oferta. Bancos como Inbursa, Banregio o Mifel suelen ofrecer tasas significativamente más bajas que los grandes bancos para perfiles sólidos."],
            ["Aprovecha descuentos para clientes nómina.", "Si recibes nómina en BBVA, Banorte, Santander, HSBC o Scotiabank, casi todos ofrecen reducciones de 0.25 a 0.75 puntos. Considera mover tu nómina al banco que te dará el crédito."],
            ["Negocia la eliminación de la comisión por apertura.", "Varios bancos la eliminan en campañas especiales. Si no lo ofrecen de inicio, pídelo: en muchos casos lo conceden para no perder al cliente."],
            ["Considera Cofinavit si calificas.", "Combinar tu crédito Infonavit con un bancario suele dar tasas mixtas mejores. Tu subcuenta funciona como enganche extra."],
            ["Comprueba ingresos sólidos y antigüedad laboral.", "Los bancos prefieren empleados con más de dos años en la misma empresa o autoempleados con declaraciones fiscales sólidas de los últimos dos ejercicios."],
          ].map(([title, desc], i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-full text-xs font-black flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <strong className="text-gray-900 dark:text-white text-sm">{title}</strong>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </>
    ),
  },
];

const TAG_COLORS: Record<string, string> = {
  Fundamentos: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Bancos: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Finanzas: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Gobierno: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Costos: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Estrategias: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
};

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = FAQ_ITEMS.filter(
    item => !query || item.q.toLowerCase().includes(query.toLowerCase()) || item.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar en preguntas frecuentes..."
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(null); }}
          className="w-full pl-9 pr-4 py-2.5 border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl text-sm focus:outline-none focus:border-indigo-400 transition"
        />
      </div>
      <div className="space-y-2">
        {filtered.map((item, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 dark:text-white text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition"
            >
              <span>{item.q}</span>
              {open === i ? <ChevronUp className="w-4 h-4 text-indigo-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-slate-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-8">No se encontraron resultados para "{query}".</p>
        )}
      </div>
    </div>
  );
}

export default function EducationalHub() {
  const [activeTab, setActiveTab] = useState<"articles" | "faq">("articles");
  const [activeArticle, setActiveArticle] = useState(0);

  return (
    <section id="recursos-educativos" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
              <BookOpen className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 dark:text-white font-display">
                Guías y Preguntas Frecuentes
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">Educación financiera hipotecaria para el mercado mexicano</p>
            </div>
          </div>
          <div className="flex gap-2">
            {(["articles", "faq"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition ${activeTab === tab ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200"}`}
              >
                {tab === "articles" ? "Guías" : "Preguntas Frecuentes"}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === "articles" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Article list */}
              <div className="space-y-2">
                {ARTICLES.map((article, i) => (
                  <button
                    key={article.id}
                    onClick={() => setActiveArticle(i)}
                    className={`w-full text-left p-3.5 rounded-xl transition border ${activeArticle === i ? "border-indigo-200 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-700" : "border-transparent hover:bg-gray-50 dark:hover:bg-slate-800"}`}
                  >
                    <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg mb-2 ${TAG_COLORS[article.tag]}`}>{article.tag}</span>
                    <p className={`text-sm font-semibold leading-snug ${activeArticle === i ? "text-indigo-700 dark:text-indigo-300" : "text-gray-700 dark:text-gray-300"}`}>{article.title}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{article.readTime} de lectura</p>
                  </button>
                ))}
              </div>

              {/* Article content */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg ${TAG_COLORS[ARTICLES[activeArticle].tag]}`}>
                    {ARTICLES[activeArticle].tag}
                  </span>
                  <span className="text-xs text-gray-400">{ARTICLES[activeArticle].readTime} de lectura</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white font-display leading-tight mb-4">
                  {ARTICLES[activeArticle].title}
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
                  {ARTICLES[activeArticle].content}
                </div>
              </div>
            </div>
          ) : (
            <FAQAccordion />
          )}
        </div>
      </div>
    </section>
  );
}

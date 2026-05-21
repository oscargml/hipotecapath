import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Percent, Shield, Target, Lightbulb, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 mb-8">
          <ArrowLeft className="w-4 h-4" /> Regresar a HipotecaPath
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-8 shadow-sm space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white rounded-2xl shadow-md shadow-indigo-600/20">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white font-display">Sobre HipotecaPath México</h1>
              <p className="text-sm text-gray-400 mt-0.5">Portal de educación y simulación hipotecaria independiente</p>
            </div>
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-4">
            <p>
              <strong className="text-gray-900 dark:text-white">HipotecaPath México</strong> nació de la frustración de ver cómo millones de mexicanos toman una de las decisiones financieras más importantes de su vida —comprar una casa— sin acceso a información clara, comparativa y sin conflicto de interés. Los simuladores de los bancos están diseñados para mostrar su producto en la mejor luz posible, no para ayudarte a comparar ni entender el verdadero costo de un crédito hipotecario.
            </p>
            <p>
              HipotecaPath es un proyecto editorial independiente: no somos un banco, no somos un bróker hipotecario, no recibimos comisiones por derivar clientes a ninguna institución financiera. Nuestro único modelo de monetización son los anuncios publicitarios de Google AdSense, lo que nos permite mantener todas nuestras herramientas completamente gratuitas para los usuarios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Target className="w-5 h-5 text-indigo-600" />,
                bg: "bg-indigo-50 dark:bg-indigo-900/20",
                title: "Nuestra misión",
                desc: "Democratizar el acceso a información hipotecaria clara, imparcial y útil para los compradores de vivienda en México.",
              },
              {
                icon: <Shield className="w-5 h-5 text-emerald-600" />,
                bg: "bg-emerald-50 dark:bg-emerald-900/20",
                title: "100% independiente",
                desc: "No recibimos comisiones ni patrocinios de bancos ni instituciones financieras. Nuestra única relación comercial es Google AdSense.",
              },
              {
                icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
                bg: "bg-amber-50 dark:bg-amber-900/20",
                title: "Educación financiera",
                desc: "Creemos que una decisión informada es siempre mejor. Por eso complementamos nuestras calculadoras con guías educativas detalladas.",
              },
            ].map((c, i) => (
              <div key={i} className={`${c.bg} rounded-xl p-4`}>
                <div className="mb-2">{c.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{c.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-base font-black text-gray-900 dark:text-white mb-4">¿Qué ofrece HipotecaPath?</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {[
                "Calculadora hipotecaria con tabla de amortización completa, gráficas interactivas y exportación CSV.",
                "Comparativa de tasas y CAT de los principales bancos mexicanos, actualizada para 2026.",
                "Estimador de gastos de escrituración (ISAI, notarías, RPP) por estado de la República.",
                "Asesor hipotecario con Inteligencia Artificial que analiza tu perfil financiero personal.",
                "Guías educativas detalladas sobre crédito hipotecario en México, en español.",
                "Preguntas frecuentes con respuestas claras y sin tecnicismos innecesarios.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5">
            <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">Aviso legal importante</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Las calculadoras, tasas, comparativas y cualquier información publicada en HipotecaPath tienen <strong>propósitos exclusivamente informativos y educativos</strong>. No constituyen asesoría financiera, legal ni fiscal. Las tasas, CAT y condiciones mostradas son valores de referencia que pueden variar según el perfil de cada solicitante y las políticas vigentes de cada institución. Antes de contratar cualquier producto financiero, consulta directamente con la institución financiera y revisa el contrato de crédito completo. HipotecaPath no está registrado como asesor financiero ante la CNBV ni ante ninguna otra autoridad regulatoria mexicana.
            </p>
          </div>

          <div>
            <h2 className="text-base font-black text-gray-900 dark:text-white mb-4">Fuentes y referencias</h2>
            <ul className="space-y-2 text-sm">
              {[
                ["Portal Infonavit", "https://portalmx.infonavit.org.mx/"],
                ["Fovissste", "https://www.gob.mx/fovissste"],
                ["Banco de México (Banxico)", "https://www.banxico.org.mx/"],
                ["CONDUSEF — Comparativo de Crédito Hipotecario", "https://www.condusef.gob.mx/"],
                ["Comisión Nacional Bancaria y de Valores (CNBV)", "https://www.cnbv.gob.mx/"],
                ["Buró de Crédito", "https://www.burodecredito.com.mx/"],
              ].map(([name, url], i) => (
                <li key={i}>
                  <a href={url} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 font-medium">
                    {name} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

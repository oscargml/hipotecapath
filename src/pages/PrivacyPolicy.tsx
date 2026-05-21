import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 mb-8">
          <ArrowLeft className="w-4 h-4" /> Regresar a HipotecaPath
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
              <Shield className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white font-display">Política de Privacidad</h1>
              <p className="text-xs text-gray-400 mt-0.5">Última actualización: mayo de 2026</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-400 space-y-6">
            <p>En <strong className="text-gray-900 dark:text-white">HipotecaPath México</strong> (en adelante, "HipotecaPath", "nosotros" o "el sitio"), nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe qué información recopilamos, cómo la usamos y los derechos que tienes sobre ella. Al utilizar hipotecapath.com, aceptas los términos de esta política.</p>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">1. Información que recopilamos</h2>
              <p>HipotecaPath es una herramienta de simulación hipotecaria de uso libre que <strong className="text-gray-900 dark:text-white">no requiere registro ni cuenta de usuario</strong>. No recopilamos nombres, direcciones de correo electrónico, números de teléfono ni ningún otro dato personal identificable de forma directa.</p>
              <p>Sin embargo, cuando utilizas el sitio, ciertos datos pueden recopilarse automáticamente:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-gray-700 dark:text-gray-300">Datos de uso y navegación</strong>: páginas visitadas, tiempo en el sitio, acciones realizadas (como cálculos o interacciones), recopilados a través de Google Analytics (ver sección 3).</li>
                <li><strong className="text-gray-700 dark:text-gray-300">Datos técnicos</strong>: dirección IP (anonimizada), tipo de navegador, sistema operativo, resolución de pantalla y proveedor de servicios de internet.</li>
                <li><strong className="text-gray-700 dark:text-gray-300">Cookies y tecnologías similares</strong>: utilizadas por Google Analytics y Google AdSense (ver secciones 3 y 4).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">2. Uso de los datos recopilados</h2>
              <p>Los datos recopilados automáticamente se utilizan exclusivamente para:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Analizar el comportamiento general de los usuarios para mejorar la experiencia en el sitio.</li>
                <li>Detectar y corregir errores técnicos.</li>
                <li>Mostrar publicidad relevante a través de Google AdSense.</li>
                <li>Garantizar la seguridad del sitio y prevenir actividades fraudulentas.</li>
              </ul>
              <p>No vendemos, arrendamos ni compartimos datos personales identificables con terceros con fines comerciales.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">3. Google Analytics</h2>
              <p>Este sitio utiliza <strong className="text-gray-700 dark:text-gray-300">Google Analytics</strong>, un servicio de análisis web proporcionado por Google LLC (Google). Google Analytics utiliza cookies para recopilar información sobre el uso del sitio de forma anónima y agregada.</p>
              <p>La información generada por las cookies sobre tu uso del sitio (incluida tu dirección IP, que es anonimizada antes de su almacenamiento) se transmite y almacena en servidores de Google en Estados Unidos.</p>
              <p>Puedes optar por no participar en Google Analytics instalando el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">complemento de inhabilitación de Google Analytics</a>. Para más información, consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Política de Privacidad de Google</a>.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">4. Google AdSense y publicidad</h2>
              <p>Este sitio participa en el programa <strong className="text-gray-700 dark:text-gray-300">Google AdSense</strong>, administrado por Google LLC, para mostrar anuncios relevantes a los visitantes. Google AdSense puede utilizar cookies y tecnologías similares para mostrar anuncios personalizados basados en las visitas de los usuarios a este sitio y a otros sitios de internet.</p>
              <p>El ID de editor de AdSense de HipotecaPath es <code className="bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">ca-pub-8643026289824701</code>.</p>
              <p>Puedes desactivar los anuncios personalizados visitando la página de <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Configuración de Anuncios de Google</a> o la página <a href="http://optout.aboutads.info/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">aboutads.info</a>.</p>
              <p>Para más información sobre cómo Google utiliza los datos de los socios publicitarios, visita: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">policies.google.com/technologies/partner-sites</a>.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">5. Asesor hipotecario con IA</h2>
              <p>El servicio de Asesor Hipotecario con Inteligencia Artificial de HipotecaPath funciona mediante la API de Google Gemini. Al utilizar esta función, los datos financieros que introduces en el formulario (ingresos, deudas, valor del inmueble, estado de residencia) se envían a través de nuestro servidor a la API de Google Gemini para generar un análisis personalizado.</p>
              <p><strong className="text-gray-700 dark:text-gray-300">Importante</strong>: no almacenamos ni conservamos los datos que introduces en el formulario del Asesor IA después de generar la respuesta. Los datos se procesan en tiempo real y no se guardan en ninguna base de datos. Te recomendamos no introducir información personal adicional como nombre, número de identificación o datos bancarios específicos.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">6. Cookies</h2>
              <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. HipotecaPath utiliza las siguientes cookies:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-gray-700 dark:text-gray-300">Cookies de Google Analytics</strong>: _ga, _gid, _gat (para análisis de tráfico anónimo).</li>
                <li><strong className="text-gray-700 dark:text-gray-300">Cookies de Google AdSense</strong>: Para mostrar publicidad relevante.</li>
              </ul>
              <p>Puedes controlar y eliminar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">7. Transferencia internacional de datos</h2>
              <p>Los datos de uso del sitio pueden ser procesados en servidores ubicados fuera de México, incluyendo servidores en Estados Unidos (Google LLC). Al utilizar este sitio, consientes esta transferencia de datos.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">8. Tus derechos (ARCO)</h2>
              <p>De conformidad con la <strong className="text-gray-700 dark:text-gray-300">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> de México, tienes los derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) respecto a tus datos personales. Para ejercer estos derechos o para cualquier consulta relacionada con esta política, puedes contactarnos a través de los canales indicados en la sección de contacto.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">9. Menores de edad</h2>
              <p>HipotecaPath no está dirigido a personas menores de 18 años. No recopilamos intencionalmente información de menores de edad. Si tienes conocimiento de que un menor ha utilizado este servicio, contáctanos.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">10. Cambios a esta política</h2>
              <p>HipotecaPath se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio. Te recomendamos revisar esta página periódicamente. El uso continuado del sitio después de cualquier modificación constituye tu aceptación de la nueva política.</p>
            </section>

            <section>
              <h2 className="text-base font-black text-gray-900 dark:text-white mb-2">11. Contacto</h2>
              <p>Si tienes preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad, puedes contactarnos en:</p>
              <p className="font-medium text-gray-700 dark:text-gray-300">HipotecaPath México<br />Sitio web: hipotecapath.com<br />Correo electrónico de privacidad: privacidad@hipotecapath.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

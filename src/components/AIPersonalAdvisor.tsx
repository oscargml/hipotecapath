import React, { useState } from "react";
import { Sparkles, Loader2, AlertCircle, ChevronDown } from "lucide-react";
import { ISAI_STATES } from "../data";

interface FormState {
  monthlyIncome: string;
  monthlyDebts: string;
  propertyValue: string;
  downPaymentPct: string;
  state: string;
  employmentType: string;
  creditScore: string;
  hasInfonavit: boolean;
}

const INITIAL: FormState = {
  monthlyIncome: "",
  monthlyDebts: "",
  propertyValue: "",
  downPaymentPct: "20",
  state: "CMX",
  employmentType: "empleado",
  creditScore: "bueno",
  hasInfonavit: false,
};

export default function AIPersonalAdvisor() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof FormState, val: string | boolean) =>
    setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Error al consultar el asesor.");
      }

      const data = await res.json();
      setResult(data.result ?? "No se obtuvo respuesta.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="asesor-ia" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 shadow-sm shadow-indigo-600/5 overflow-hidden h-full">
        <div className="px-6 py-5 border-b border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
              <Sparkles className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 dark:text-white font-display">
                Asesor Hipotecario con IA
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Análisis personalizado basado en tu perfil financiero real</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Ingreso mensual neto (MXN)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    required
                    type="number"
                    value={form.monthlyIncome}
                    onChange={e => set("monthlyIncome", e.target.value)}
                    placeholder="65,000"
                    className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl pl-7 pr-3 py-2 text-sm focus:outline-none focus:border-indigo-400 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Deudas mensuales actuales (MXN)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    type="number"
                    value={form.monthlyDebts}
                    onChange={e => set("monthlyDebts", e.target.value)}
                    placeholder="5,000"
                    className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl pl-7 pr-3 py-2 text-sm focus:outline-none focus:border-indigo-400 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Valor del inmueble (MXN)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    required
                    type="number"
                    value={form.propertyValue}
                    onChange={e => set("propertyValue", e.target.value)}
                    placeholder="2,500,000"
                    className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl pl-7 pr-3 py-2 text-sm focus:outline-none focus:border-indigo-400 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Enganche disponible (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={form.downPaymentPct}
                    onChange={e => set("downPaymentPct", e.target.value)}
                    min={5} max={80}
                    className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl px-3 pr-10 py-2 text-sm focus:outline-none focus:border-indigo-400 transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Estado</label>
                <div className="relative">
                  <select
                    value={form.state}
                    onChange={e => set("state", e.target.value)}
                    className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 transition appearance-none"
                  >
                    {ISAI_STATES.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Tipo de empleo</label>
                <select
                  value={form.employmentType}
                  onChange={e => set("employmentType", e.target.value)}
                  className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 transition"
                >
                  <option value="empleado">Empleado formal</option>
                  <option value="autoempleado">Autoempleado</option>
                  <option value="mixto">Mixto</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Buró de crédito</label>
                <select
                  value={form.creditScore}
                  onChange={e => set("creditScore", e.target.value)}
                  className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 transition"
                >
                  <option value="excelente">Excelente</option>
                  <option value="bueno">Bueno</option>
                  <option value="regular">Regular</option>
                  <option value="bajo">Bajo / Sin historial</option>
                </select>
              </div>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.hasInfonavit}
                onChange={e => set("hasInfonavit", e.target.checked)}
                className="w-4 h-4 accent-indigo-600 rounded"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Tengo subcuenta Infonavit activa</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-bold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Analizando tu perfil...</>
              ) : (
                <><Sparkles className="w-4 h-4" /> Obtener diagnóstico hipotecario</>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-red-700 dark:text-red-400">Error</p>
                <p className="text-xs text-red-600 dark:text-red-300 mt-0.5">{error}</p>
                <p className="text-xs text-red-500 mt-1">Asegúrate de que la variable GEMINI_API_KEY esté configurada en Vercel.</p>
              </div>
            </div>
          )}

          {result && (
            <div className="mt-5 p-5 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">Diagnóstico hipotecario personalizado</span>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                {result}
              </div>
              <p className="text-[10px] text-gray-400 mt-4 italic">
                Este análisis es orientativo y no constituye asesoría financiera formal. Consulta directamente con la institución bancaria antes de tomar decisiones.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

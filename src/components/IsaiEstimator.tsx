import React, { useState, useMemo } from "react";
import { Scale, MapPin, Info } from "lucide-react";
import { ISAI_STATES } from "../data";

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("es-MX");
const fmtPct = (n: number) => n.toFixed(1) + "%";

export default function IsaiEstimator() {
  const [stateCode, setStateCode] = useState("CMX");
  const [propertyValue, setPropertyValue] = useState(2500000);

  const state = ISAI_STATES.find(s => s.code === stateCode)!;

  const breakdown = useMemo(() => {
    const isai = propertyValue * (state.isaiRate / 100);
    const notaryAvg = propertyValue * ((state.notaryFeeMin + state.notaryFeeMax) / 2 / 100);
    const registration = propertyValue * (state.registrationFeePct / 100);
    const appraisal = Math.min(8000, Math.max(3000, propertyValue * 0.0025));
    const total = isai + notaryAvg + registration + appraisal;
    return { isai, notaryAvg, registration, appraisal, total };
  }, [state, propertyValue]);

  return (
    <section id="simulador-escrituras" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden h-full">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
              <Scale className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 dark:text-white font-display">
                Estimador de Costos de Escrituración
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">ISAI, gastos notariales y registro por estado</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-purple-500" />
              Estado donde se ubica el inmueble
            </label>
            <select
              value={stateCode}
              onChange={e => setStateCode(e.target.value)}
              className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-indigo-400 transition"
            >
              {ISAI_STATES.map(s => (
                <option key={s.code} value={s.code}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Valor del inmueble (MXN)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={propertyValue}
                onChange={e => setPropertyValue(Math.max(0, +e.target.value))}
                className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl pl-8 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-indigo-400 transition"
                step={50000}
              />
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-600 dark:text-gray-400">
                ISAI / Impuesto Traslación <span className="text-purple-600">({fmtPct(state.isaiRate)})</span>
              </span>
              <span className="font-bold text-gray-900 dark:text-white tabular-nums">{fmt(breakdown.isai)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-600 dark:text-gray-400">
                Gastos notariales <span className="text-purple-600">({fmtPct(state.notaryFeeMin)}–{fmtPct(state.notaryFeeMax)})</span>
              </span>
              <span className="font-bold text-gray-900 dark:text-white tabular-nums">~{fmt(breakdown.notaryAvg)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-600 dark:text-gray-400">
                Inscripción RPP <span className="text-purple-600">({fmtPct(state.registrationFeePct)})</span>
              </span>
              <span className="font-bold text-gray-900 dark:text-white tabular-nums">{fmt(breakdown.registration)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-600 dark:text-gray-400">Avalúo bancario</span>
              <span className="font-bold text-gray-900 dark:text-white tabular-nums">~{fmt(breakdown.appraisal)}</span>
            </div>
            <div className="border-t border-purple-200 dark:border-purple-700/50 pt-3 flex items-center justify-between">
              <span className="font-black text-gray-900 dark:text-white text-sm">Total estimado gastos de cierre</span>
              <span className="font-black text-purple-700 dark:text-purple-400 text-lg tabular-nums">{fmt(breakdown.total)}</span>
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
              {((breakdown.total / propertyValue) * 100).toFixed(1)}% del valor del inmueble
            </p>
          </div>

          {state.notes && (
            <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-800/50 rounded-lg p-3">
              <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>{state.notes}</span>
            </div>
          )}

          <p className="text-[10px] text-gray-400 italic leading-relaxed">
            Estimación de referencia. Los montos exactos se determinan en la notaría al momento de la firma. Consulta con tu notario asignado para importes definitivos.
          </p>
        </div>
      </div>
    </section>
  );
}

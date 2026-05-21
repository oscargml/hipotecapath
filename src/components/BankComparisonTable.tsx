import React, { useState } from "react";
import { TrendingDown, Star, Building2, ChevronUp, ChevronDown } from "lucide-react";
import { BANKS } from "../data";
import type { Bank } from "../types";

type SortKey = "nominalRate" | "cat" | "maxTermYears" | "minDownPaymentPct";

export default function BankComparisonTable() {
  const [filter, setFilter] = useState<"all" | "private" | "government">("all");
  const [sortKey, setSortKey] = useState<SortKey>("nominalRate");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const sorted = [...BANKS]
    .filter(b => filter === "all" || b.type === filter)
    .sort((a, b) => sortAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]);

  const SortIcon = ({ col }: { col: SortKey }) =>
    sortKey === col
      ? sortAsc ? <ChevronUp className="w-3 h-3 inline ml-0.5" /> : <ChevronDown className="w-3 h-3 inline ml-0.5" />
      : null;

  return (
    <section id="comparativa-bancos" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
              <TrendingDown className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 dark:text-white font-display">
                Comparativa de Bancos Hipotecarios México 2026
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">Tasas de referencia actualizadas a mayo 2026. Haz clic en los encabezados para ordenar.</p>
            </div>
          </div>
          <div className="flex gap-2 text-xs font-bold">
            {(["all", "private", "government"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg transition ${filter === f ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200"}`}
              >
                {f === "all" ? "Todos" : f === "private" ? "Bancos" : "Gobierno"}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="text-left px-4 py-3 font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Institución</th>
                <th className="px-4 py-3 text-right font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider cursor-pointer hover:text-indigo-600" onClick={() => handleSort("nominalRate")}>
                  Tasa desde <SortIcon col="nominalRate" />
                </th>
                <th className="px-4 py-3 text-right font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider cursor-pointer hover:text-indigo-600" onClick={() => handleSort("cat")}>
                  CAT prom. <SortIcon col="cat" />
                </th>
                <th className="px-4 py-3 text-right font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider cursor-pointer hover:text-indigo-600" onClick={() => handleSort("maxTermYears")}>
                  Plazo máx. <SortIcon col="maxTermYears" />
                </th>
                <th className="px-4 py-3 text-right font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider cursor-pointer hover:text-indigo-600" onClick={() => handleSort("minDownPaymentPct")}>
                  Enganche mín. <SortIcon col="minDownPaymentPct" />
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Notas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-slate-800">
              {sorted.map((bank: Bank) => (
                <tr key={bank.id} className={`hover:bg-indigo-50/40 dark:hover:bg-indigo-900/10 transition ${bank.highlight ? "bg-emerald-50/30 dark:bg-emerald-900/10" : ""}`}>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      {bank.type === "government"
                        ? <Building2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        : bank.highlight
                          ? <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          : <div className="w-4 h-4" />
                      }
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">{bank.name}</div>
                        <div className="text-xs text-gray-400">{bank.product}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <span className={`inline-block font-bold text-sm px-2 py-0.5 rounded-lg tabular-nums ${bank.nominalRate <= 9.5 ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300"}`}>
                      {bank.nominalRate.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <span className="inline-block font-semibold text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-lg tabular-nums">
                      {bank.cat.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right font-medium text-gray-600 dark:text-gray-400 tabular-nums">{bank.maxTermYears} años</td>
                  <td className="px-4 py-3.5 text-right font-medium text-gray-600 dark:text-gray-400 tabular-nums">
                    {bank.minDownPaymentPct === 0 ? "Subcuenta" : `${bank.minDownPaymentPct}%`}
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-500 dark:text-gray-400 max-w-[200px]">{bank.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 bg-gray-50 dark:bg-slate-800/30 border-t border-gray-100 dark:border-slate-800">
          <p className="text-[10px] text-gray-400 italic">
            * Tasas y CAT de referencia actualizados a mayo 2026 con base en información pública. Las condiciones reales dependen del perfil del solicitante, enganche e historial crediticio. Confirma directamente con la institución antes de contratar.
          </p>
        </div>
      </div>
    </section>
  );
}

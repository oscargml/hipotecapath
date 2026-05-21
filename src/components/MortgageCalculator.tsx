import React, { useState, useMemo, useCallback } from "react";
import { Calculator, Download, BarChart2 } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";
import { BANKS } from "../data";
import type { AmortRow } from "../types";

const fmt = (n: number) =>
  "$" + Math.round(n).toLocaleString("es-MX");

const fmtFull = (n: number) =>
  "$" + n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function calcMortgage(principal: number, annualRate: number, termYears: number) {
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return null;
  const pmt = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const schedule: AmortRow[] = [];
  let balance = principal;
  for (let i = 1; i <= n; i++) {
    const interest = balance * r;
    const principalPmt = pmt - interest;
    balance = Math.max(0, balance - principalPmt);
    schedule.push({ period: i, payment: pmt, principal: principalPmt, interest, balance });
  }
  return { pmt, totalPayment: pmt * n, totalInterest: pmt * n - principal, schedule };
}

export default function MortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState(2500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [termYears, setTermYears] = useState(20);
  const [bankId, setBankId] = useState("banorte");
  const [customRate, setCustomRate] = useState(9.15);
  const [viewMode, setViewMode] = useState<"annual" | "monthly">("annual");

  const bank = BANKS.find(b => b.id === bankId);
  const annualRate = bankId === "custom" ? customRate : (bank?.nominalRate ?? customRate);
  const catEst = bankId === "custom" ? annualRate + 2.3 : (bank?.cat ?? annualRate + 2.3);
  const downPayment = propertyValue * (downPaymentPct / 100);
  const principal = propertyValue - downPayment;

  const result = useMemo(() => calcMortgage(principal, annualRate, termYears), [principal, annualRate, termYears]);

  const annualRows = useMemo(() => {
    if (!result) return [];
    const rows: { year: number; payment: number; principal: number; interest: number; balance: number }[] = [];
    for (let y = 1; y <= termYears; y++) {
      const slice = result.schedule.slice((y - 1) * 12, y * 12);
      rows.push({
        year: y,
        payment: slice.reduce((s, r) => s + r.payment, 0),
        principal: slice.reduce((s, r) => s + r.principal, 0),
        interest: slice.reduce((s, r) => s + r.interest, 0),
        balance: slice[slice.length - 1]?.balance ?? 0,
      });
    }
    return rows;
  }, [result, termYears]);

  const exportCSV = useCallback(() => {
    if (!result) return;
    const csv = "Mes,Pago,Capital,Intereses,Saldo\n" +
      result.schedule.map(r =>
        `${r.period},${r.payment.toFixed(2)},${r.principal.toFixed(2)},${r.interest.toFixed(2)},${r.balance.toFixed(2)}`
      ).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "amortizacion-hipotecapath.csv";
    a.click();
  }, [result]);

  const chartData = annualRows.map(r => ({
    name: `Año ${r.year}`,
    Capital: Math.round(r.principal),
    Intereses: Math.round(r.interest),
    Saldo: Math.round(r.balance),
  }));

  const pieData = result
    ? [
        { name: "Capital", value: Math.round(principal), color: "#4f46e5" },
        { name: "Intereses totales", value: Math.round(result.totalInterest), color: "#f59e0b" },
      ]
    : [];

  return (
    <section id="calculadora-principal" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-slate-800 flex items-center gap-3">
          <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
            <Calculator className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white font-display">
              Calculadora Hipotecaria México 2026
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">Simula tu mensualidad, tabla de amortización y costos totales</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Inputs */}
          <div className="p-6 space-y-5 lg:border-r border-gray-100 dark:border-slate-800">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Valor del inmueble (MXN)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">$</span>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={e => setPropertyValue(Math.max(100000, +e.target.value))}
                  className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl pl-8 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-indigo-400 transition"
                  step={50000}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Enganche</label>
                <span className="text-sm font-black text-indigo-600">{downPaymentPct}% — {fmt(downPayment)}</span>
              </div>
              <input
                type="range"
                min={5} max={50} step={1}
                value={downPaymentPct}
                onChange={e => setDownPaymentPct(+e.target.value)}
                className="w-full accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5%</span><span>50%</span></div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Plazo del crédito</label>
                <span className="text-sm font-black text-indigo-600">{termYears} años</span>
              </div>
              <input
                type="range"
                min={5} max={30} step={1}
                value={termYears}
                onChange={e => setTermYears(+e.target.value)}
                className="w-full accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5</span><span>30 años</span></div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Banco / Institución</label>
              <select
                value={bankId}
                onChange={e => { setBankId(e.target.value); if (e.target.value !== "custom") { const b = BANKS.find(b => b.id === e.target.value); if (b) setCustomRate(b.nominalRate); }}}
                className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-indigo-400 transition"
              >
                <option value="custom">Tasa personalizada</option>
                {BANKS.map(b => (
                  <option key={b.id} value={b.id}>{b.name} — {b.nominalRate.toFixed(2)}%</option>
                ))}
              </select>
            </div>

            {bankId === "custom" && (
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Tasa de interés anual</label>
                <div className="relative">
                  <input
                    type="number"
                    value={customRate}
                    onChange={e => setCustomRate(+e.target.value)}
                    min={1} max={30} step={0.05}
                    className="w-full border-2 border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl px-4 pr-14 py-2.5 text-sm font-medium focus:outline-none focus:border-indigo-400 transition"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">% anual</span>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="p-6 bg-slate-50/50 dark:bg-slate-800/30 space-y-4">
            {result ? (
              <>
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-2xl p-5 text-white text-center shadow-lg shadow-indigo-600/20">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">Mensualidad estimada</p>
                  <p className="text-4xl font-black tracking-tight font-mono-data">{fmt(result.pmt)}</p>
                  <p className="text-xs opacity-75 mt-1">{termYears * 12} pagos fijos durante {termYears} años</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Monto a financiar", value: fmt(principal), color: "text-gray-900 dark:text-white" },
                    { label: "CAT estimado", value: catEst.toFixed(2) + "%", color: "text-amber-600" },
                    { label: "Total intereses", value: fmt(result.totalInterest), color: "text-red-500" },
                    { label: "Total a pagar", value: fmt(result.totalPayment), color: "text-gray-900 dark:text-white" },
                  ].map(c => (
                    <div key={c.label} className="bg-white dark:bg-slate-800 rounded-xl p-3.5 border border-gray-100 dark:border-slate-700">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{c.label}</p>
                      <p className={`text-lg font-black ${c.color} font-mono-data`}>{c.value}</p>
                    </div>
                  ))}
                </div>

                {/* Pie chart */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-4">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BarChart2 className="w-3.5 h-3.5" /> Distribución del costo total
                  </p>
                  <ResponsiveContainer width="100%" height={160}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" outerRadius={60} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false} fontSize={11}>
                        {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                      </Pie>
                      <Tooltip formatter={(v: number) => fmt(v)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-400">Introduce los datos para calcular.</div>
            )}
          </div>
        </div>

        {/* Amortization chart */}
        {result && (
          <div className="border-t border-gray-100 dark:border-slate-800 p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <h3 className="font-black text-gray-900 dark:text-white text-sm flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-indigo-500" />
                Saldo del crédito por año
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode(v => v === "annual" ? "monthly" : "annual")}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 hover:text-indigo-700 transition"
                >
                  Ver {viewMode === "annual" ? "mensual" : "anual"}
                </button>
                <button
                  onClick={exportCSV}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 hover:text-indigo-700 transition flex items-center gap-1"
                >
                  <Download className="w-3 h-3" /> CSV
                </button>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={Math.floor(termYears / 6)} />
                <YAxis tick={{ fontSize: 10 }} tickFormatter={v => "$" + (v / 1000000).toFixed(1) + "M"} />
                <Tooltip formatter={(v: number) => fmt(v)} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Area type="monotone" dataKey="Capital" stackId="1" stroke="#4f46e5" fill="#e0e7ff" name="Capital amortizado" />
                <Area type="monotone" dataKey="Intereses" stackId="1" stroke="#f59e0b" fill="#fef3c7" name="Intereses pagados" />
              </AreaChart>
            </ResponsiveContainer>

            {/* Amortization table */}
            <div className="mt-6 overflow-x-auto rounded-xl border border-gray-100 dark:border-slate-700" style={{ maxHeight: 320 }}>
              <table className="w-full text-xs min-w-[500px]">
                <thead className="bg-slate-50 dark:bg-slate-800 sticky top-0">
                  <tr>
                    {["Año/Mes", "Pago total", "Capital", "Intereses", "Saldo"].map(h => (
                      <th key={h} className="px-3 py-2.5 text-right first:text-center font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-[10px]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-slate-800">
                  {(viewMode === "annual" ? annualRows : result.schedule).map((r: AmortRow | typeof annualRows[0]) => (
                    <tr key={"period" in r ? r.period : r.year} className="hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10">
                      <td className="px-3 py-2 text-center font-bold text-indigo-600 tabular-nums">{"year" in r ? r.year : r.period}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{fmtFull(r.payment)}</td>
                      <td className="px-3 py-2 text-right text-emerald-600 font-medium tabular-nums">{fmtFull(r.principal)}</td>
                      <td className="px-3 py-2 text-right text-red-500 font-medium tabular-nums">{fmtFull(r.interest)}</td>
                      <td className="px-3 py-2 text-right font-bold tabular-nums">{fmtFull(r.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

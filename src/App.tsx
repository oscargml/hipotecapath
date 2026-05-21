/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Percent,
  Sparkles,
  FileText,
  Scale,
  TrendingDown,
  Calculator,
  ShieldCheck,
  ExternalLink,
  BookOpen,
} from "lucide-react";

import MortgageCalculator from "./components/MortgageCalculator";
import BankComparisonTable from "./components/BankComparisonTable";
import IsaiEstimator from "./components/IsaiEstimator";
import AIPersonalAdvisor from "./components/AIPersonalAdvisor";
import EducationalHub from "./components/EducationalHub";
import AdSense from "./components/AdSensePlaceholder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";

function MainApp() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white rounded-xl shadow-md shadow-indigo-600/10">
            <Percent className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-gray-900 dark:text-white font-display">
              HipotecaPath <span className="text-indigo-600 text-xs font-bold bg-indigo-50 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded ml-1">MÉXICO 2026</span>
            </h1>
            <span className="text-[9px] text-gray-400 block font-bold tracking-wider uppercase leading-none">
              Calculadora &amp; Portal Hipotecario
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-xs font-bold text-gray-500 dark:text-gray-400">
          <button onClick={() => scrollTo("calculadora-principal")} className="hover:text-indigo-600 transition flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5" /> Calculadora
          </button>
          <button onClick={() => scrollTo("comparativa-bancos")} className="hover:text-indigo-600 transition flex items-center gap-1">
            <TrendingDown className="w-3.5 h-3.5" /> Bancos
          </button>
          <button onClick={() => scrollTo("simulador-escrituras")} className="hover:text-indigo-600 transition flex items-center gap-1">
            <Scale className="w-3.5 h-3.5" /> ISAI / Notarías
          </button>
          <button onClick={() => scrollTo("recursos-educativos")} className="hover:text-indigo-600 transition flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" /> Guías
          </button>
          <button
            onClick={() => scrollTo("asesor-ia")}
            className="hover:text-indigo-600 transition flex items-center gap-1.5 font-black bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-xl text-indigo-600"
          >
            <Sparkles className="w-3.5 h-3.5" /> Asesor IA
          </button>
        </nav>

        <button
          onClick={() => scrollTo("asesor-ia")}
          className="text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition shadow shadow-indigo-600/15"
        >
          Diagnóstico Gratis
        </button>
      </header>

      {/* Hero */}
      <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
        <div className="text-center md:text-left md:max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-bold text-[10px] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Gratuito · Sin Comisiones · Sin Registro
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-none font-display">
            Planifica tu camino a casa con <span className="text-indigo-600">HipotecaPath</span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl italic font-serif">
            "Compara las tasas reales de los principales bancos de México, calcula el ISAI por estado y obtén asesoría financiera personalizada respaldada por Inteligencia Artificial."
          </p>
        </div>
        <AdSense slot="3814219889" format="leaderboard" className="mt-6" />
      </section>

      {/* Main content */}
      <main className="px-4 md:px-8 pb-20 max-w-7xl mx-auto space-y-10">
        <MortgageCalculator />
        <AdSense slot="8453691574" />
        <BankComparisonTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <IsaiEstimator />
          <AIPersonalAdvisor />
        </div>

        <AdSense slot="5129348260" />
        <EducationalHub />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 pt-12 pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 col-span-1 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-indigo-600 text-white rounded-lg">
                  <Percent className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-sm tracking-tight text-gray-900 dark:text-white font-display">
                  HipotecaPath México
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Plataforma de simulación hipotecaria independiente. Calculamos indicadores financieros incorporando regulaciones del Infonavit, SHF y CNBV para brindarte certeza financiera.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-extrabold text-xs uppercase tracking-widest text-indigo-500 block">Herramientas</span>
              <ul className="text-xs text-gray-500 space-y-2">
                <li><button onClick={() => scrollTo("calculadora-principal")} className="hover:text-indigo-600 font-medium">Calculadora de Pagos</button></li>
                <li><button onClick={() => scrollTo("comparativa-bancos")} className="hover:text-indigo-600 font-medium">Comparador de Bancos</button></li>
                <li><button onClick={() => scrollTo("simulador-escrituras")} className="hover:text-indigo-600 font-medium">Estimador ISAI por Estado</button></li>
                <li><button onClick={() => scrollTo("asesor-ia")} className="hover:text-indigo-600 font-medium text-indigo-600">Asesor de Crédito con IA</button></li>
                <li><button onClick={() => scrollTo("recursos-educativos")} className="hover:text-indigo-600 font-medium">Guías y Artículos</button></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-extrabold text-xs uppercase tracking-widest text-indigo-500 block">Información</span>
              <ul className="text-xs text-gray-500 space-y-2">
                <li><Link to="/sobre-nosotros" className="hover:text-indigo-600 font-medium">Sobre HipotecaPath</Link></li>
                <li><Link to="/privacidad" className="hover:text-indigo-600 font-medium">Política de Privacidad</Link></li>
                <li>
                  <a href="https://portalmx.infonavit.org.mx/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 flex items-center gap-1 font-medium">
                    Portal Infonavit <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.banxico.org.mx/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 flex items-center gap-1 font-medium">
                    Banco de México <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.condusef.gob.mx/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 flex items-center gap-1 font-medium">
                    CONDUSEF <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-slate-800 pt-6 text-[10px] text-gray-400 leading-relaxed font-semibold space-y-3">
            <p>
              <strong>Descargo de Responsabilidad:</strong> Los cálculos mostrados en HipotecaPath México tienen propósitos exclusivamente académicos e informativos. La tasa de interés final, CAT real, seguros y costos notariales definitivos están condicionados a la dictaminación de crédito realizada por la entidad bancaria elegida. No somos asesores financieros registrados ante la CNBV.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
              <span>© {new Date().getFullYear()} HipotecaPath México. Todos los derechos reservados.</span>
              <div className="flex gap-4">
                <Link to="/privacidad" className="hover:text-indigo-600 transition">POLÍTICA DE PRIVACIDAD</Link>
                <Link to="/sobre-nosotros" className="hover:text-indigo-600 transition">SOBRE NOSOTROS</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/sobre-nosotros" element={<About />} />
    </Routes>
  );
}

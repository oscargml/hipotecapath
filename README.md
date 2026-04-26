# HipotecaPath.mx 🏠

Calculadora hipotecaria mexicana con comparativa de tasas reales de bancos, simulador de gastos de cierre, tabla de amortización y guías financieras. Sitio estático de un solo archivo (`index.html`) optimizado para SEO y monetización con Google AdSense.

## Bancos incluidos (tasas abril 2026)

| Banco | Tasa desde | CAT |
|-------|-----------|-----|
| Banorte | 9.15% | 11.20% |
| Banregio | 9.25% | 11.40% |
| Inbursa | 9.50% | 11.80% |
| Afirme | 9.60% | 11.90% |
| Mifel | 9.70% | 12.10% |
| Santander | 10.25% | 12.60% |
| Scotiabank | 10.50% | 12.80% |
| HSBC | 10.60% | 12.90% |
| BBVA México | 11.20% | 13.20% |
| Infonavit | 10.45% | 11.50% |
| Fovissste | 5.00% | 6.20% |

## Antes de hacer deploy

Reemplaza los placeholders de AdSense en `index.html`:

- `YOUR_PUB_ID` → tu publisher ID (formato: `1234567890123456`)
- `YOUR_SLOT_ID_1` a `YOUR_SLOT_ID_5` → tus 5 slot IDs

Hay 7 ocurrencias de `YOUR_PUB_ID` y 5 ocurrencias de slot IDs.

## Deploy en Vercel (recomendado para HTML estático)

Vercel detecta automáticamente que es un sitio estático. **No necesitas tocar nada de configuración.**

1. Importa este repo desde [vercel.com/new](https://vercel.com/new)
2. Deja todas las opciones por defecto
3. Clic en **Deploy**

Cualquier `git push` a la rama principal redespliega automáticamente. El archivo `vercel.json` agrega cabeceras de seguridad opcionales.

## Deploy en Railway

Railway necesita un servidor Node, ya incluido en este proyecto (`server.js` + `package.json`).

1. Crea un proyecto nuevo en [railway.app](https://railway.app/new)
2. Selecciona **Deploy from GitHub repo**
3. Elige este repositorio
4. Railway detecta automáticamente Node.js y ejecuta `npm start`
5. En la pestaña **Settings → Networking**, genera un dominio público

## Deploy local (para pruebas)

```bash
npm install
npm start
```

Abre `http://localhost:3000`.

## Estructura del proyecto

```
.
├── index.html       # App completa: HTML + CSS + JS inline
├── server.js        # Servidor Express para Railway/Node
├── package.json     # Dependencias (solo Express)
├── vercel.json      # Configuración Vercel (cabeceras)
├── .gitignore
└── README.md
```

## Stack técnico

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Chart.js 4 desde CDN para gráficas
- JSON-LD estructurado para SEO (WebApplication, FAQPage, Article)
- Google AdSense con 5 slots responsivos
- Fórmula de amortización francesa estándar mexicana

## Aviso legal

Las tasas y CAT mostrados son referencias publicadas por los bancos a abril 2026 y pueden cambiar. Esta herramienta es informativa y no constituye una oferta de crédito ni asesoría financiera.

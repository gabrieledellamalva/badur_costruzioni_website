
import React, { useState, useEffect, useRef } from 'react';
import { 
  HardHat, 
  Hammer, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2,
  Shield,
  Award,
  Clock,
  Star,
  MessageSquare,
  Send,
  Building,
  Castle,
  Home,
  Paintbrush,
  Wrench,
  Scale
} from 'lucide-react';

/* ============================================================
   BADUR COSTRUZIONI E RISTRUTTURAZIONI
   Single Page Application - React + Tailwind CSS
   Design: Terra & Stone - Premium Construction Theme
   Target: Clienti di pregio in provincia di Imperia
   ============================================================ */

// --- UTILITIES: Scroll Animation Hook ---
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

// --- COMPONENT: Navigation ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Dove Operiamo', href: '#dove-operiamo' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-amber-500 transition-colors">
              <HardHat className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg leading-tight tracking-wide">
                BADUR
              </h1>
              <p className="text-stone-400 text-xs tracking-widest uppercase">
                Costruzioni
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-amber-500 text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contatti"
              className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 transform hover:-translate-y-0.5"
            >
              Richiedi Sopralluogo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-stone-900/98 backdrop-blur-xl border-t border-stone-800 transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-stone-300 hover:text-amber-500 text-lg font-medium py-2 border-b border-stone-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={() => setIsOpen(false)}
            className="block bg-amber-600 text-white text-center py-3 rounded-lg font-semibold mt-4"
          >
            Richiedi Sopralluogo Gratuito
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- COMPONENT: Hero Section with Parallax ---
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/70 to-stone-900" />

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBMMTQwIDBoMjB2MjBMMCA0MHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span className="text-amber-400 text-sm font-medium tracking-wide">
            Borgomaro (IM) — Provincia di Imperia
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up delay-100">
          Costruzioni e Ristrutturazioni{' '}
          <span className="hero-gold text-amber-500">Badur</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-stone-300 mb-4 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
          L'Arte della Pietra in Liguria
        </p>

        <p className="text-stone-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          Specialisti in muri a secco, ristrutturazioni e costruzioni generali a 
          Borgomaro e in tutta la provincia di Imperia. Tradizione, precisione 
          e materiali di pregio per ogni tuo progetto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="#contatti"
            className="hero-cta group bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Sopralluogo Gratuito
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#servizi"
            className="group border-2 border-stone-600 hover:border-amber-500 text-stone-300 hover:text-amber-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
          >
            <Hammer className="w-5 h-5" />
            Scopri i Servizi
          </a>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-stone-700/50 pt-10">
          {[
            { icon: Clock, value: '15+', label: 'Anni di Esperienza' },
            { icon: CheckCircle2, value: '200+', label: 'Progetti Completati' },
            { icon: Shield, value: '100%', label: 'Soddisfazione Clienti' },
            { icon: Award, value: 'Cert.', label: 'Ditta Qualificata' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-stone-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-stone-500" />
      </div>
    </section>
  );
};

// --- COMPONENT: Services Grid ---
const Services = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('tutti');

  const services = [
    {
      id: 'costruzioni',
      title: 'Costruzioni Generali',
      desc: "Dalle fondamenta al tetto, realizziamo edifici residenziali e commerciali con materiali di prima qualità e tecniche moderne.",
      icon: Building,
      category: 'costruzioni',
      features: ['Case unifamiliari', 'Ampliamenti', 'Garage e box'],
    },
    {
      id: 'ristrutturazioni',
      title: 'Ristrutturazioni Chiavi in Mano',
      desc: "Trasformiamo i tuoi spazi con ristrutturazioni complete: dall'impiantistica alle finiture, gestiamo ogni fase del cantiere.",
      icon: Home,
      category: 'ristrutturazioni',
      features: ['Appartamenti', 'Ville', 'Locali commerciali'],
      highlight: true,
    },
    {
      id: 'pietra',
      title: 'Lavori in Pietra & Muri a Secco',
      desc: "Maestria artigianale nella lavorazione della pietra ligure. Muri a secco tradizionali, rivestimenti e restauri conservativi.",
      icon: Castle,
      category: 'pietra',
      features: ['Muri a secco', 'Rivestimenti', 'Restauri'],
      special: true, // Special border highlight
    },
    {
      id: 'finiture',
      title: 'Finiture di Pregio',
      desc: "Pavimentazioni, intonaci, tinteggiature e lavori di cartongesso per interni eleganti e personalizzati.",
      icon: Paintbrush,
      category: 'finiture',
      features: ['Pavimenti', 'Cartongesso', 'Tinteggiature'],
    },
    {
      id: 'manutenzione',
      title: 'Manutenzione & Riparazioni',
      desc: "Interventi rapidi e professionali per manutenzione ordinaria e straordinaria di edifici e strutture.",
      icon: Wrench,
      category: 'manutenzione',
      features: ['Tetti e coperture', 'Facciate', 'Impermeabilizzazioni'],
    },
    {
      id: 'progettazione',
      title: 'Consulenza & Progettazione',
      desc: "Supporto tecnico dalla fase ideativa alla realizzazione, con consulenza su materiali, costi e tempistiche.",
      icon: Scale,
      category: 'progettazione',
      features: ['Sopralluoghi', 'Preventivi', 'Pratiche edilizie'],
    },
  ];

  const filters = [
    { id: 'tutti', label: 'Tutti i Servizi' },
    { id: 'costruzioni', label: 'Costruzioni' },
    { id: 'ristrutturazioni', label: 'Ristrutturazioni' },
    { id: 'pietra', label: 'Pietra & Muri' },
  ];

  const filteredServices = activeFilter === 'tutti' 
    ? services 
    : services.filter(s => s.category === activeFilter || (activeFilter === 'pietra' && s.id === 'pietra'));

  return (
    <section id="servizi" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-800/30 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 text-amber-500 mb-4">
            <Hammer className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">I Nostri Servizi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Soluzioni Edili su <span className="text-amber-500">Misura</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Dalla pietra tradizionale alle tecnologie moderne, offriamo un servizio 
            completo per ogni esigenza costruttiva in Liguria.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/25'
                  : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className={`group relative bg-stone-900/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
                service.special
                  ? 'border-amber-500/50 shadow-amber-900/20 shadow-lg'
                  : 'border-stone-800 hover:border-stone-700'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100 + 300}ms` }}
            >
              {/* Special Badge for Stone Work */}
              {service.special && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  SPECIALITÀ DELLA CASA
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                service.special 
                  ? 'bg-amber-600/20 text-amber-500 group-hover:bg-amber-600 group-hover:text-white' 
                  : 'bg-stone-800 text-stone-400 group-hover:bg-amber-600/20 group-hover:text-amber-500'
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center gap-2 text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Scopri di più</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: "Dove Operiamo" (Local SEO Section) ---
const DoveOperiamo = () => {
  const [ref, isVisible] = useScrollReveal();

  const locations = [
    { name: 'Borgomaro', type: 'Sede', desc: 'Cuore della Valle Impero, qui ha origine la nostra storia artigiana.' },
    { name: 'Imperia', type: 'Provincia', desc: 'Operiamo in tutta la provincia con rapidità e professionalità.' },
    { name: 'Sanremo', type: 'Limitrofe', desc: 'Servizi di ristrutturazione per ville e appartamenti di pregio.' },
    { name: 'Oneglia', type: 'Limitrofe', desc: 'Interventi edili nel centro storico e nelle zone residenziali.' },
    { name: 'Dolceacqua', type: 'Limitrofe', desc: 'Specializzati in restauri conservativi e lavori in pietra.' },
    { name: 'Valle Impero', type: 'Limitrofe', desc: 'Conosciamo ogni pietra e ogni tradizione di questa valle.' },
  ];

  return (
    <section id="dove-operiamo" className="py-24 bg-stone-900 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 text-amber-500 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">Zona di Intervento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Dove <span className="text-amber-500">Operiamo</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Dalla nostra base a Borgomaro, raggiungiamo ogni angolo della provincia 
            di Imperia e le zone limitrofe con la stessa dedizione al dettaglio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`bg-stone-800/50 backdrop-blur-sm rounded-xl p-6 border border-stone-700/50 hover:border-amber-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-amber-900/10 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100 + 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-700/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/20 transition-colors">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{loc.name}</h3>
                    {loc.type === 'Sede' && (
                      <span className="bg-amber-600/20 text-amber-400 text-xs px-2 py-0.5 rounded-full font-medium">
                        SEDE
                      </span>
                    )}
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed">{loc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder / CTA */}
        <div className={`mt-16 bg-stone-800/30 rounded-2xl p-8 md:p-12 border border-stone-700/50 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-amber-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Non sei in zona?</h3>
          <p className="text-stone-400 mb-6 max-w-lg mx-auto">
            Contattaci comunque! Valutiamo progetti anche oltre i confini della provincia 
            per lavori di particolare interesse storico-artistico.
          </p>
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Chiedi un Preventivo
          </a>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: "Prenota con AI" / Contact Form ---
const ContactForm = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    servizio: '',
    messaggio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ nome: '', telefono: '', email: '', servizio: '', messaggio: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const serviziOptions = [
    'Costruzioni Generali',
    'Ristrutturazione Chiavi in Mano',
    'Lavori in Pietra / Muri a Secco',
    'Finiture di Pregio',
    'Manutenzione',
    'Consulenza Tecnica',
    'Altro',
  ];

  return (
    <section id="contatti" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 text-amber-500 mb-4">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-widest uppercase">Contattaci</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Richiedi un <span className="text-amber-500">Sopralluogo Gratuito</span>
            </h2>
            <p className="text-stone-400 text-lg mb-10 leading-relaxed">
              Compila il form e ti ricontatteremo entro 24 ore per fissare un 
              sopralluogo senza impegno. Valuteremo insieme il tuo progetto e 
              ti forniremo un preventivo dettagliato.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 bg-stone-900/50 p-4 rounded-xl border border-stone-800">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-stone-500 text-sm">Telefono</p>
                  <p className="text-white font-semibold">+39 333 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-stone-900/50 p-4 rounded-xl border border-stone-800">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-stone-500 text-sm">Email</p>
                  <p className="text-white font-semibold">info@badurcostruzioni.it</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-stone-900/50 p-4 rounded-xl border border-stone-800">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-stone-500 text-sm">Sede</p>
                  <p className="text-white font-semibold">Borgomaro (IM), Liguria</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {['Preventivi Gratuiti', 'Sopralluogo Senza Impegno', 'Garanzia sui Lavori'].map((badge, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 bg-stone-800 text-stone-300 px-3 py-1.5 rounded-full text-sm border border-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-stone-900/80 backdrop-blur-md rounded-2xl p-8 border border-stone-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Richiesta Inviata!</h3>
                  <p className="text-stone-400 mb-6">
                    Ti contatteremo presto per fissare il sopralluogo.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-amber-500 hover:text-amber-400 font-medium transition-colors"
                  >
                    Invia un'altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-stone-400 text-sm mb-2 font-medium">Nome e Cognome *</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-400 text-sm mb-2 font-medium">Telefono *</label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                        placeholder="+39 3xx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-sm mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      placeholder="marco@esempio.it"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-400 text-sm mb-2 font-medium">Tipo di Servizio *</label>
                    <select
                      name="servizio"
                      required
                      value={formData.servizio}
                      onChange={handleChange}
                      className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Seleziona un servizio...</option>
                      {serviziOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-sm mb-2 font-medium">Descrivi il tuo progetto</label>
                    <textarea
                      name="messaggio"
                      rows={4}
                      value={formData.messaggio}
                      onChange={handleChange}
                      className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                      placeholder="Ho bisogno di ristrutturare un bagno di 15mq..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-stone-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Invio in corso...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Richiedi Sopralluogo Gratuito
                      </>
                    )}
                  </button>

                  <p className="text-stone-500 text-xs text-center">
                    Cliccando invia, accetti la nostra informativa sulla privacy. 
                    I tuoi dati saranno trattati solo per rispondere alla tua richiesta.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Footer with Map ---
const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      {/* Map Section */}
      <div className="w-full h-64 bg-stone-800 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.0!2d7.95!3d43.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2a0c0%3A0x0!2sBorgomaro%2C+IM!5e0!3m2!1sit!2sit!4v1600000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Borgomaro"
          className="absolute inset-0"
        />
        {/* Map Overlay with CTA */}
        <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
          <a
            href="https://maps.google.com/?q=Borgomaro,IM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            Vieni a Trovarci a Borgomaro
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">BADUR</h3>
                <p className="text-stone-500 text-xs tracking-widest uppercase">Costruzioni</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Ditta edile specializzata in costruzioni, ristrutturazioni e 
              lavori in pietra a Borgomaro (IM) e provincia.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/badurcostruzioni`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-stone-800 hover:bg-amber-600 rounded-lg flex items-center justify-center text-stone-400 hover:text-white transition-all duration-300"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {['Home', 'Servizi', 'Dove Operiamo', 'Contatti', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Home' ? '#hero' : link === 'Servizi' ? '#servizi' : link === 'Dove Operiamo' ? '#dove-operiamo' : link === 'Contatti' ? '#contatti' : '#'}
                    className="text-stone-400 hover:text-amber-500 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              {['Costruzioni', 'Ristrutturazioni', 'Muri a Secco', 'Finiture', 'Manutenzione'].map((svc) => (
                <li key={svc}>
                  <span className="text-stone-400 text-sm">{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400 text-sm">Borgomaro (IM),<br/>Provincia di Imperia, Liguria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400 text-sm">+39 333 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400 text-sm">info@badurcostruzioni.it</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © 2024 Badur Costruzioni e Ristrutturazioni. P.IVA [Numero]. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-2 text-stone-500 text-sm">
            <Star className="w-4 h-4 text-amber-500" />
            <span>Progettato per convertire</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        html {
          scroll-behavior: smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0c0a09;
        }
        ::-webkit-scrollbar-thumb {
          background: #44403c;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a16207;
        }
      `}</style>

      <Navbar />
      <Hero />
      <Services />
      <DoveOperiamo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

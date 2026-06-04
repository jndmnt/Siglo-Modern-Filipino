/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Clock, 
  Star,
  Quote
} from 'lucide-react';

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Menu', href: '#menu' },
    { name: 'Private Dining', href: '#events' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-siglo-bg/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl tracking-widest text-siglo-white font-semibold">
          SIGLO
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm tracking-wide text-siglo-text-muted hover:text-siglo-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservations" 
            className="px-6 py-2.5 bg-siglo-gold text-siglo-bg font-medium text-sm tracking-wide hover:bg-siglo-gold-muted transition-colors rounded-sm"
          >
            Reserve a Table
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-siglo-white"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-siglo-bg z-50 flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-2xl tracking-widest text-siglo-white font-semibold">SIGLO</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-siglo-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-siglo-white hover:text-siglo-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservations" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 w-full bg-siglo-gold text-siglo-bg font-medium text-lg tracking-wide hover:bg-siglo-gold-muted transition-colors rounded-sm"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-siglo-bg/70 via-siglo-bg/50 to-siglo-bg z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Filipino Cuisine" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.span 
            variants={FADE_UP_VARIANTS}
            className="block text-siglo-gold font-sans tracking-[0.2em] text-sm uppercase mb-6"
          >
            A Century of Flavor
          </motion.span>
          <motion.h1 
            variants={FADE_UP_VARIANTS}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-siglo-white drop-shadow-lg leading-tight mb-8"
          >
            Modern Heritage<br/><span className="italic text-siglo-gold">Redefined</span>
          </motion.h1>
          <motion.p 
            variants={FADE_UP_VARIANTS}
            className="text-lg md:text-xl text-siglo-text-muted font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Celebrating the rich culinary tapestry of the Philippines through contemporary techniques and locally sourced, premium ingredients.
          </motion.p>
          <motion.div variants={FADE_UP_VARIANTS} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#reservations" className="w-full sm:w-auto px-8 py-4 bg-siglo-gold text-siglo-bg font-medium tracking-wide hover:bg-siglo-gold-muted transition-colors rounded-sm">
              Reserve a Table
            </a>
            <a href="#menu" className="w-full sm:w-auto px-8 py-4 border border-siglo-white/20 text-siglo-white font-medium tracking-wide hover:bg-siglo-white/10 transition-colors rounded-sm flex items-center justify-center gap-2">
              Explore Menu <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 bg-siglo-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.span variants={FADE_UP_VARIANTS} className="text-siglo-gold tracking-[0.15em] text-sm uppercase mb-4 block">
              Our Philosophy
            </motion.span>
            <motion.h2 variants={FADE_UP_VARIANTS} className="font-serif text-4xl md:text-5xl text-siglo-white mb-6 leading-tight">
              Rooted in Tradition,<br/>Crafted for Today.
            </motion.h2>
            <motion.p variants={FADE_UP_VARIANTS} className="text-siglo-text-muted text-base md:text-lg font-light leading-relaxed mb-6">
              At Siglo, we honor the heirloom recipes passed down through generations of Filipino families. We journey across the archipelago to source the finest hyper-local ingredients, from the pristine seafood of the Visayas to the rich, volcanic soil produce of the Cordilleras.
            </motion.p>
            <motion.p variants={FADE_UP_VARIANTS} className="text-siglo-text-muted text-base md:text-lg font-light leading-relaxed mb-8">
              Our kitchen applies modern culinary execution to these time-honored flavors, resulting in a dining experience that is both deeply familiar and surprisingly refined.
            </motion.p>
            <motion.div variants={FADE_UP_VARIANTS}>
              <img src="/signature-placeholder.png" alt="Chef Signature" className="h-12 opacity-50 hidden" />
              <p className="font-serif italic text-xl text-siglo-gold">Executive Chef</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1000" 
              alt="Plating Modern Filipino Cuisine" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-siglo-gold/30 m-4 rounded-sm pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MenuHighlights() {
  const [activeTab, setActiveTab] = useState('signatures');

  const menuData = {
    signatures: [
      { name: 'Kare-Kare Risotto', description: 'Ox tail ragu, peanut-annatto reduction, seasonal charred vegetables, bagoong xo sauce.', price: '₱1,150', recommended: true },
      { name: 'Inasal Scallops', description: 'Hokkaido scallops, chicken oil emulsion, calamansi salt, crispy garlic.', price: '₱980' },
      { name: 'Adobo Glazed Short Rib', description: '72-hour sous vide Angus beef, soy-vinegar glaze, garlic confit potato purée.', price: '₱1,850', recommended: true },
      { name: 'Sinigang na Salmon', description: 'Tamarind-miso broth, torched salmon belly, taro crisps, native bok choy.', price: '₱1,200' },
    ],
    heirloom: [
      { name: 'Lechon Belly Roulade', description: 'Crispy skin pork belly, lemongrass stuffing, liver jus, pickled papaya.', price: '₱1,400', recommended: true },
      { name: 'Duck Laing', description: 'Taro leaves infused in coconut cream, confit duck leg, chili oil.', price: '₱950' },
      { name: 'Pancit Negra', description: 'Squid ink noodles, baby squid, chicharon, salted egg shavings.', price: '₱850' },
    ],
    desserts: [
      { name: 'Ube Textures', description: 'Purple yam halaya, ube mousse, toasted coconut crumble, macapuno ice cream.', price: '₱450', recommended: true },
      { name: 'Calamansi Tart', description: 'Philippine lime curd, graham crust, torched meringue, honey-ginger syrup.', price: '₱420' },
    ]
  };

  const tabs = [
    { id: 'signatures', label: 'Signatures' },
    { id: 'heirloom', label: 'Heirloom Mains' },
    { id: 'desserts', label: 'Desserts' },
  ];

  type TabKey = keyof typeof menuData;

  return (
    <section id="menu" className="py-24 px-6 bg-siglo-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-siglo-gold tracking-[0.15em] text-sm uppercase mb-4 block">Curated Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-siglo-white">Menu Highlights</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mb-12 border-b border-siglo-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm tracking-widest uppercase transition-colors relative pb-4 ${
                activeTab === tab.id ? 'text-siglo-gold' : 'text-siglo-text-muted hover:text-siglo-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-siglo-gold" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-10"
          >
            {menuData[activeTab as TabKey].map((item, index) => (
              <div key={index} className="flex flex-col border-b border-siglo-white/5 pb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl pl-0 text-siglo-white flex items-center gap-3">
                    {item.name}
                    {item.recommended && (
                      <span className="text-[10px] tracking-wider uppercase bg-siglo-gold/10 text-siglo-gold px-2 py-1 rounded-sm">Chef's Rec</span>
                    )}
                  </h3>
                  <span className="text-siglo-gold font-medium">{item.price}</span>
                </div>
                <p className="text-sm text-siglo-text-muted font-light leading-relaxed pr-8">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-siglo-gold hover:text-siglo-white transition-colors">
            Download Full Menu <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function EventsCatering() {
  return (
    <section id="events" className="py-24 px-6 bg-siglo-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
              alt="Dining Room" 
              className="w-full h-64 object-cover rounded-sm"
            />
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" 
              alt="Exquisite Dish" 
              className="w-full h-64 object-cover rounded-sm mt-8"
            />
          </motion.div>

          <div className="order-1 lg:order-2 lg:pl-12">
            <span className="text-siglo-gold tracking-[0.15em] text-sm uppercase mb-4 block">Bespoke Experiences</span>
            <h2 className="font-serif text-4xl md:text-5xl text-siglo-white mb-6 leading-tight">
              Private Dining & Catering
            </h2>
            <p className="text-siglo-text-muted text-base md:text-lg font-light leading-relaxed mb-8">
              Elevate your intimate gatherings, corporate events, and milestone celebrations. Siglo offers an exclusive private dining room that accommodates up to 24 guests, featuring a curated tasting menu tailored by our executive chef.
            </p>
            <p className="text-siglo-text-muted text-base md:text-lg font-light leading-relaxed mb-10">
              For off-site events, our premium catering service brings the sophisticated flavors of modern Filipino cuisine directly to your chosen venue, complete with impeccable service.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 border border-siglo-gold text-siglo-gold hover:bg-siglo-gold hover:text-siglo-bg transition-colors tracking-wide font-medium rounded-sm">
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const testimonials = [
    { text: "A masterful reimagining of flavors I grew up with. The Adobo Short Rib is an absolute revelation.", author: "Maria C.", source: "Google Reviews" },
    { text: "Easily one of the most stunning dining experiences. The ambiance, the presentation, the taste—flawless.", author: "Jonathan R.", source: "TripAdvisor" },
    { text: "Siglo proves that Filipino cuisine can stand proudly on the global fine-dining stage.", author: "Lifestyle Asia", source: "Editorial" },
  ];

  return (
    <section className="py-24 px-6 bg-siglo-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-siglo-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-siglo-white mb-16">Guest Experiences</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-siglo-bg p-8 rounded-sm relative"
            >
              <Quote className="absolute top-6 left-6 text-siglo-gold/20" size={48} />
              <div className="relative z-10">
                <div className="flex text-siglo-gold mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-siglo-text-muted font-light italic mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <p className="text-siglo-white font-medium">{t.author}</p>
                  <p className="text-xs text-siglo-gold uppercase tracking-wider mt-1">{t.source}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservations() {
  return (
    <section id="reservations" className="py-24 px-6 bg-siglo-bg">
      <div className="max-w-4xl mx-auto bg-siglo-surface p-8 md:p-16 rounded-sm shadow-2xl shadow-black/50 border border-siglo-white/5 relative overflow-hidden">
        {/* Subtle pattern or gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-siglo-gold/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 text-center mb-10">
          <h2 className="font-serif text-3xl md:text-5xl text-siglo-white mb-4">Reserve Your Table</h2>
          <p className="text-siglo-text-muted font-light">Join us for an unforgettable culinary journey.</p>
        </div>

        {/* Standard reservation UI mock */}
        <form className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-siglo-text-muted uppercase tracking-wider">Date</label>
              <input type="date" className="w-full bg-siglo-bg border border-siglo-white/10 text-siglo-white px-4 py-3 rounded-sm focus:outline-none focus:border-siglo-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-siglo-text-muted uppercase tracking-wider">Time</label>
              <select className="w-full bg-siglo-bg border border-siglo-white/10 text-siglo-white px-4 py-3 rounded-sm focus:outline-none focus:border-siglo-gold transition-colors appearance-none">
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-siglo-text-muted uppercase tracking-wider">Guests</label>
            <select className="w-full bg-siglo-bg border border-siglo-white/10 text-siglo-white px-4 py-3 rounded-sm focus:outline-none focus:border-siglo-gold transition-colors appearance-none">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5 People</option>
              <option>6+ People</option>
            </select>
          </div>
          <button type="button" className="w-full bg-siglo-gold text-siglo-bg font-medium tracking-wide py-4 mt-4 hover:bg-siglo-gold-muted transition-colors rounded-sm uppercase">
            Find a Table
          </button>
        </form>
        <p className="text-center text-xs text-siglo-text-muted mt-6 relative z-10">
          For parties larger than 6, please contact us directly.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-20 pb-10 px-6 border-t border-siglo-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <span className="font-serif text-2xl tracking-widest text-siglo-white font-semibold mb-6 block">SIGLO</span>
          <p className="text-siglo-text-muted font-light text-sm leading-relaxed mb-6">
            Modern Filipino Heritage.<br/>
            An exploration of culture through taste.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-siglo-text-muted hover:text-siglo-gold transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-siglo-white uppercase tracking-widest text-xs font-medium mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-siglo-text-muted font-light">
            <li className="flex gap-3">
              <MapPin size={18} className="text-siglo-gold flex-shrink-0" />
              <span>123 Heritage Ave,<br/>Bonifacio Global City, Taguig</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-siglo-gold flex-shrink-0" />
              <span>+63 2 8123 4567</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-siglo-gold flex-shrink-0" />
              <span>reservations@siglomanila.ph</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-siglo-white uppercase tracking-widest text-xs font-medium mb-6">Hours</h4>
          <ul className="space-y-4 text-sm text-siglo-text-muted font-light">
            <li className="flex gap-3">
              <Clock size={18} className="text-siglo-gold flex-shrink-0" />
              <div>
                <p className="text-siglo-white mb-1">Dinner</p>
                <p>Tuesday – Sunday</p>
                <p>6:00 PM – 11:00 PM</p>
              </div>
            </li>
            <li className="pl-7 mt-2">
              <p className="text-siglo-white mb-1">Brunch</p>
              <p>Saturday & Sunday</p>
              <p>11:00 AM – 2:30 PM</p>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-siglo-white uppercase tracking-widest text-xs font-medium mb-6">Newsletter</h4>
          <p className="text-sm text-siglo-text-muted font-light mb-4">
            Subscribe to receive updates on seasonal menus and exclusive events.
          </p>
          <form className="flex border-b border-siglo-white/20 focus-within:border-siglo-gold transition-colors pb-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent w-full text-sm text-siglo-white focus:outline-none placeholder:text-siglo-text-muted/50"
            />
            <button type="button" className="text-siglo-gold uppercase text-xs tracking-widest font-medium hover:text-siglo-white transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-siglo-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-siglo-text-muted font-light">
        <p>&copy; {new Date().getFullYear()} Siglo Modern Filipino. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-siglo-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-siglo-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-siglo-bg font-sans text-siglo-text selection:bg-siglo-gold selection:text-siglo-bg">
      <Navbar />
      <Hero />
      <Philosophy />
      <MenuHighlights />
      <EventsCatering />
      <SocialProof />
      <Reservations />
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-siglo-surface/95 backdrop-blur z-40 border-t border-siglo-white/10">
        <a href="#reservations" className="block w-full text-center py-4 bg-siglo-gold text-siglo-bg font-medium uppercase tracking-widest text-sm rounded-sm">
          Reserve a Table
        </a>
      </div>
    </div>
  );
}


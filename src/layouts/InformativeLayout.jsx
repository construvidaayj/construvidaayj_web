import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Info, Briefcase, Phone, HelpCircle, Newspaper, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', path: '/', icon: <Shield className="h-5 w-5" /> },
  { name: 'Servicios', path: '/servicios', icon: <Briefcase className="h-5 w-5" /> },
  // { name: 'Noticias', path: '/noticias', icon: <Newspaper className="h-5 w-5" /> },
  { name: 'Preguntas Frecuentes', path: '/preguntas-frecuentes', icon: <HelpCircle className="h-5 w-5" /> },
  { name: 'Quiénes Somos', path: '/quienes-somos', icon: <Info className="h-5 w-5" /> },
  { name: 'Contacto', path: '/contacto', icon: <Phone className="h-5 w-5" /> },
];

const WHATSAPP_NUMBER = "3046283952";
const WHATSAPP_MESSAGE = "Hola, estoy interesado en sus servicios de asesoría en seguridad social.";

const InformativeLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-emerald-600 to-green-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-1 md:px-8 py-1 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img  alt="Construvidad AYJ Logo" className="h-16 w-auto" src="/LogoFinal.png" />
          </Link>
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant={location.pathname === link.path ? "secondary" : "ghost"}
                asChild
                className={`text-white hover:bg-white/20 ${location.pathname === link.path ? 'bg-white/20' : ''} px-2 lg:px-3 py-2 text-sm lg:text-base`}
              >
                <Link to={link.path} className="flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white hover:bg-white/20">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-green-700 text-white overflow-hidden"
          >
            <nav className="flex flex-col space-y-1 p-4">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant={location.pathname === link.path ? "secondary" : "ghost"}
                  asChild
                  className={`w-full justify-start text-white hover:bg-white/20 ${location.pathname === link.path ? 'bg-white/20' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to={link.path} className="flex items-center gap-3 px-3 py-3">
                    {link.icon}
                    {link.name}
                  </Link>
                </Button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 bg-gray-100">
        <Outlet />
      </main>

      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Construvidad AYJ</h3>
              <p className="text-sm">
                Asesorías expertas en seguridad social. Construimos tu bienestar y tranquilidad.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Navegación</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.slice(0,4).map(link => (
                   <li key={`footer-${link.name}`}>
                     <Link to={link.path} className="hover:text-white transition-colors">
                       {link.name}
                     </Link>
                   </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Contacto Directo</h3>
              <ul className="space-y-2 text-sm">
                <li><p>Email: construvidaayj24@gmail.com</p></li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> WhatsApp: +57 304 6283952
                  </a>
                </li>
                <li><p>Dirección: Carrera 9 #14-35, Chia, Cundinamarca</p></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Construvidad AYJ. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      
      <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
      // --- PROPIEDADES DE ANIMACIÓN DE FRAMER MOTION ---
      // Elige una de las opciones a continuación:
      // Opción 1: Animación de "Latido" (Pulse)
      // animate={{ scale: [1, 1.05, 1] }} // Secuencia de escalas: normal, un poco más grande, normal
      // transition={{
      //   duration: 2,           // La animación dura 2 segundos por ciclo
      //   ease: "easeInOut",     // Suaviza el inicio y el final de la animación
      //   repeat: Infinity,      // Se repite indefinidamente
      //   repeatDelay: 0         // Sin retraso entre repeticiones
      // }}

      // Opción 2: Animación de "Vibración" (Wobble/Shake)
      
      animate={{ x: [0, -15, 15, -15, 15, -15, 0] }} // Mueve horizontalmente: centro, izq, der, izq, der, izq, centro
      transition={{
        duration: .5,         // La animación dura 1.5 segundos por ciclo
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2         // Retraso de 2 segundos antes de cada repetición (si quieres que no sea constante)
      }}
      

      // Opción 3: Animación de "Latido con Retraso" (si quieres pausas)
      /*
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 0.8,         // Una animación de latido más rápida
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2.5       // Una pausa de 2.5 segundos entre cada latido
      }}
      */
      // --------------------------------------------------
    >
      <img src="/whatsapp.png" className="h-16 md:h-20 w-auto " alt="logo Whatsapp" title="Whatsapp Construvida AYJ" />
    </motion.a>
    </div>
  );
};

export default InformativeLayout;
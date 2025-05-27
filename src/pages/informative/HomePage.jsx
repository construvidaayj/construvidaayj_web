import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, FileText, HelpCircle, ArrowRight, Newspaper, Phone, CheckCircle, Award } from 'lucide-react';

const featureCards = [
  {
    icon: <CheckCircle className="h-10 w-10 text-emerald-600" />,
    title: 'Asesoría Personalizada',
    description: 'Recibe orientación experta adaptada a tus necesidades en salud, pensión y ARL.',
    link: '/servicios#asesoria',
    linkText: 'Descubre Cómo'
  },
  {
    icon: <Users className="h-10 w-10 text-emerald-600" />,
    title: 'Gestión de Trámites',
    description: 'Te ayudamos a navegar el sistema, facilitando tus trámites y novedades.',
    link: '/servicios#tramites',
    linkText: 'Nuestros Servicios'
  },
  {
    icon: <FileText className="h-10 w-10 text-emerald-600" />,
    title: 'Liquidación de Aportes',
    description: 'Asegura la correcta liquidación y pago de tus aportes a seguridad social.',
    link: '/servicios#aportes',
    linkText: 'Más Información'
  },
  {
    icon: <Award className="h-10 w-10 text-emerald-600" />,
    title: 'Expertos a tu Lado',
    description: 'Contamos con un equipo de profesionales listos para construir tu tranquilidad.',
    link: '/quienes-somos',
    linkText: 'Conoce al Equipo'
  }
];

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(30)"><path d="M0 50L50 0ZM25 25L0 0L50 50" stroke="currentColor" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)"/></svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <p className="mb-4">Construvida AYJ</p>
            <span className="block md:inline">Tu Aliado en Seguridad Social.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          >
            Ofrecemos asesoría experta y gestión integral en seguridad social para tu tranquilidad y la de tu empresa. Construimos tu bienestar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-x-4"
          >
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/servicios">Nuestros Servicios</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contacto">Contáctanos Hoy</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            ¿Cómo podemos ayudarte?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
               <Card className="h-full flex flex-col bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-t-4 border-emerald-600 hover:border-emerald-800">
                  <CardHeader className="items-center text-center pt-8">
                    <div className="p-3 bg-emerald-600/10 rounded-full mb-4">
                      {card.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-800">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <p className="text-slate-600">{card.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0 text-center">
                    <Button variant="link" className="text-emerald-700 font-semibold group" asChild>
                      <Link to={card.link}>
                        {card.linkText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img  alt="Equipo de Construvidad AYJ en una reunión" className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" src="https://images.unsplash.com/photo-1551190930-4abddd2bd012" />
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Comprometidos con tu Bienestar</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                En Construvidad AYJ, entendemos la complejidad del sistema de seguridad social. Nuestro propósito es simplificarlo para ti, ofreciéndote asesoría clara, gestión eficiente y soluciones a la medida.
              </p>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Ya seas un trabajador independiente, un empleador o una empresa, estamos aquí para asegurar que cumplas con tus obligaciones y accedas a todos tus derechos y beneficios. Tu tranquilidad es nuestra prioridad.
              </p>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md" asChild>
                <Link to="/quienes-somos">Más Sobre Nosotros</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para optimizar tu Seguridad Social?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 max-w-xl mx-auto"
          >
            Contáctanos hoy mismo y descubre cómo Construvidad AYJ puede ayudarte a navegar el sistema con confianza y eficiencia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-x-4"
          >
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contacto" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Solicitar Asesoría
              </Link>
            </Button>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
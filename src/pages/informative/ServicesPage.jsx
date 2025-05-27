import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckSquare, Users, FileText, Briefcase, BookOpen, LifeBuoy, ArrowRight, Shield, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "3046283952";
const WHATSAPP_MESSAGE_SERVICE = "Hola, estoy interesado en el servicio de ";

const services = [
  {
    id: 'asesoria',
    icon: <Users className="h-10 w-10 text-emerald-600" />,
    title: 'Asesoría Integral en Seguridad Social',
    description: 'Te ofrecemos orientación experta y personalizada en afiliaciones, aportes, recobros, y gestión de novedades para salud, pensión y ARL. Resolvemos tus dudas y te ayudamos a tomar las mejores decisiones.',
    linkText: 'Solicitar Asesoría',
    linkTo: `/contacto?service=asesoria_integral`
  },
  {
    id: 'tramites',
    icon: <FileText className="h-10 w-10 text-emerald-600" />,
    title: 'Gestión de Trámites y Novedades',
    description: 'Facilitamos tus trámites ante las entidades de seguridad social. Nos encargamos de la gestión de incapacidades, licencias, reporte de novedades y más, ahorrándote tiempo y esfuerzo.',
    linkText: 'Conocer Más',
    linkTo: `/contacto?service=gestion_tramites`
  },
  {
    id: 'aportes',
    icon: <CheckSquare className="h-10 w-10 text-emerald-600" />,
    title: 'Liquidación y Pago de Aportes (PILA)',
    description: 'Te asistimos en la correcta liquidación y pago de la Planilla Integrada de Liquidación de Aportes (PILA), asegurando el cumplimiento normativo para independientes y empresas.',
    linkText: 'Consultar Servicio',
    linkTo: `/contacto?service=liquidacion_pila`
  },
  {
    id: 'empresas',
    icon: <Briefcase className="h-10 w-10 text-emerald-600" />,
    title: 'Consultoría para Empresas',
    description: 'Ofrecemos soluciones especializadas para empresas en la gestión de la seguridad social de sus empleados, optimización de costos y cumplimiento de la normatividad vigente.',
    linkText: 'Servicios Empresariales',
    linkTo: `/contacto?service=consultoria_empresas`
  },
  {
    id: 'normatividad',
    icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
    title: 'Actualización Normativa',
    description: 'Te mantenemos al día con los cambios en la legislación de seguridad social, interpretando las normas y aplicándolas a tu caso particular para garantizar el cumplimiento.',
    linkText: 'Mantente Informado',
    linkTo: `/noticias`
  },
  {
    id: 'atencion',
    icon: <LifeBuoy className="h-10 w-10 text-emerald-600" />,
    title: 'Soporte y Acompañamiento',
    description: 'Brindamos un acompañamiento continuo, resolviendo tus inquietudes y apoyándote en cada etapa de tu relación con el sistema de seguridad social.',
    linkText: 'Contactar Soporte',
    linkTo: `/contacto`
  }
];

const ServicesPage = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="h-16 w-16 text-emerald-700 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Nuestros Servicios</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              En Construvidad AYJ, te ofrecemos soluciones integrales y personalizadas para todas tus necesidades en seguridad social.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="scroll-mt-24" 
              >
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-emerald-600">
                  <CardHeader className="items-center text-center pt-8">
                    <div className="p-3 bg-emerald-600/10 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0 text-center">
                    <Button variant="link" className="text-emerald-700 font-semibold group" asChild>
                      <Link to={service.linkTo}>
                        {service.linkText}
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

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-600 to-green-700 text-white shadow-xl">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <Shield className="h-20 w-20 md:h-28 md:w-28 text-white flex-shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas Asesoría Urgente?</h2>
                <p className="text-green-100 mb-6">
                  Nuestro equipo de expertos está listo para ayudarte. Contáctanos directamente por WhatsApp para una respuesta más rápida.
                </p>
                <div className="space-x-0 md:space-x-4 space-y-3 md:space-y-0 flex flex-col sm:flex-row">
                  <Button 
                    size="lg" 
                    className="bg-white text-emerald-700 hover:bg-gray-100" 
                    asChild
                  >
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_SERVICE + "general")}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" /> Chatea con Nosotros
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                    <Link to="/contacto">Ver Otras Opciones de Contacto</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
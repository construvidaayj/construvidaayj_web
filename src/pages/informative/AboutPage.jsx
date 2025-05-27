import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Award, ShieldCheck } from 'lucide-react';

const teamMembers = [
  { name: 'Angelica Ravelo', role: 'Asesora Seguridad Social', image: 'woman-executive' },
 
];

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img  alt="Construvidad AYJ Logo" className="h-64 w-auto mx-auto mb-8" src="/LogoDifuminado.png" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Sobre Construvida AYJ</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprometidos con la transparencia y el acceso a la información para todos los ciudadanos en materia de seguridad social.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  alt="Oficina moderna con personas trabajando colaborativamente" className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" src="https://images.unsplash.com/photo-1676369010695-70c5fce8ae31" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Construvida AYJ nació de la necesidad de centralizar y simplificar la información relacionada con el sistema de seguridad social en el país. Desde nuestra fundación en 2022, hemos trabajado incansablemente para convertirnos en el referente principal para ciudadanos, empleadores y entidades.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Creemos firmemente que un ciudadano informado es un ciudadano empoderado. Por ello, nos esforzamos en ofrecer contenido actualizado, herramientas intuitivas y un canal de comunicación abierto para resolver todas tus inquietudes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Pilares</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiamos nuestro trabajo basándonos en los siguientes principios fundamentales.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Misión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Facilitar el acceso a información clara, precisa y actualizada sobre seguridad social, promoviendo la comprensión y el ejercicio de los derechos y deberes de los ciudadanos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Ser la plataforma líder y de mayor confianza en información sobre seguridad social, reconocida por su innovación, accesibilidad y contribución al bienestar social.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 text-left">
                    <li>Transparencia</li>
                    <li>Servicio</li>
                    <li>Integridad</li>
                    <li>Innovación</li>
                    <li>Inclusión</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conoce a Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales dedicados a brindarte la mejor información y servicio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <img  alt={`Foto de ${member.name}`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-gray-200" src="/LogoFinal.png" />
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
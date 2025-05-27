import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const faqData = [
  {
    id: 'general',
    category: 'General',
    questions: [
      {
        q: '¿Qué es la seguridad social?',
        a: 'La seguridad social es un sistema de protección que el estado proporciona a los ciudadanos para asegurarles un ingreso en caso de vejez, invalidez, enfermedad, desempleo, maternidad, accidentes laborales, entre otros. Su objetivo es garantizar el bienestar y la calidad de vida de la población.'
      },
      {
        q: '¿Quiénes deben afiliarse al sistema de seguridad social?',
        a: 'Deben afiliarse todos los trabajadores dependientes, independientes, contratistas, pensionados (para salud) y, en general, todas las personas residentes en el país que no estén cubiertas por un régimen especial o exceptuado.'
      },
    ]
  },
  {
    id: 'afiliaciones',
    category: 'Afiliaciones y Novedades',
    questions: [
      {
        q: '¿Cómo me afilio al sistema de salud?',
        a: 'Para afiliarte al sistema de salud, debes elegir una Entidad Promotora de Salud (EPS). Si eres empleado, tu empleador realiza la afiliación. Si eres independiente, debes hacerlo directamente a través del portal de la EPS o utilizando el Sistema de Afiliación Transaccional (SAT).'
      },
      {
        q: '¿Qué es el Ingreso Base de Cotización (IBC)?',
        a: 'El Ingreso Base de Cotización (IBC) es el monto sobre el cual se calculan los aportes a la seguridad social. Para los trabajadores dependientes, corresponde al salario mensual. Para los independientes, es sobre el 40% de sus ingresos mensuales, sin que sea inferior al salario mínimo ni superior a 25 salarios mínimos.'
      },
      {
        q: '¿Cómo reporto una novedad (ej. cambio de EPS, traslado)?',
        a: 'Las novedades se reportan generalmente a través del portal de tu EPS o del empleador. Para traslados entre EPS o regímenes, existen plazos y condiciones específicas que debes consultar.'
      }
    ]
  },
  {
    id: 'pagos',
    category: 'Aportes y Pagos',
    questions: [
      {
        q: '¿Cómo y cuándo debo pagar mis aportes como independiente?',
        a: 'Como trabajador independiente, debes pagar tus aportes mensualmente a través de la Planilla Integrada de Liquidación de Aportes (PILA), utilizando operadores de información autorizados. Las fechas de pago dependen de los últimos dígitos de tu documento de identidad.'
      },
      {
        q: '¿Qué sucede si no pago mis aportes a tiempo?',
        a: 'El no pago o el pago tardío de los aportes genera intereses de mora y puede afectar la continuidad de tus servicios de salud y la acumulación de semanas para tu pensión. Es importante estar al día.'
      }
    ]
  },
  {
    id: 'subsidios',
    category: 'Subsidios y Beneficios',
    questions: [
      {
        q: '¿Qué es el subsidio familiar?',
        a: 'El subsidio familiar es una prestación social pagada en dinero, especie y servicios a los trabajadores de medianos y menores ingresos, en proporción al número de personas a cargo. Es administrado por las Cajas de Compensación Familiar.'
      },
      {
        q: '¿Cómo accedo al subsidio de desempleo?',
        a: 'Para acceder al subsidio de desempleo, debes haber estado afiliado a una Caja de Compensación Familiar, haber realizado aportes durante un tiempo determinado y cumplir con otros requisitos. Debes acercarte a tu última Caja de Compensación para iniciar el trámite.'
      }
    ]
  }
];

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredFaqData = React.useMemo(() => {
    if (!searchTerm) return faqData;
    return faqData.map(category => ({
      ...category,
      questions: category.questions.filter(
        q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
             q.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);
  }, [searchTerm]);

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra respuestas rápidas a tus dudas más comunes sobre el sistema de seguridad social.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-xl mx-auto">
            <div className="relative">
              <Input 
                type="text"
                placeholder="Busca una pregunta..."
                className="w-full p-3 pl-10 border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {filteredFaqData.map(category => (
            <motion.div 
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-primary pb-2">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem value={`item-${category.id}-${index}`} key={index} className="bg-white shadow-md rounded-lg border border-gray-200">
                    <AccordionTrigger className="p-6 text-left hover:bg-gray-50 rounded-t-lg">
                      <span className="font-medium text-gray-700">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              {category.questions.length === 0 && searchTerm && (
                <p className="text-gray-500 text-center">No se encontraron preguntas en esta categoría para "{searchTerm}".</p>
              )}
            </motion.div>
          ))}
          {filteredFaqData.length === 0 && searchTerm && (
             <p className="text-gray-600 text-center text-lg">No se encontraron resultados para tu búsqueda "{searchTerm}". Intenta con otras palabras.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
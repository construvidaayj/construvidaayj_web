import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WHATSAPP_NUMBER = "3046283952";
const WHATSAPP_BASE_MESSAGE = "Hola Construvidad AYJ, estoy interesado en sus servicios";

const ContactPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceParam = queryParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        subject: `Interés en servicio: ${serviceParam.replace(/_/g, ' ')}`,
        message: `Hola, estoy interesado/a en el servicio de ${serviceParam.replace(/_/g, ' ')}. Me gustaría obtener más información.`
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      className: "bg-green-600 text-white",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_BASE_MESSAGE)}`;

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Phone className="h-16 w-16 text-emerald-700 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Contáctanos</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Estamos listos para ofrecerte asesoría experta y personalizada
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">

            <Card className="shadow-lg border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-emerald-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-700">Correo Electrónico</h3>
                    <a href="mailto:contacto@construvidadayj.com" className="text-slate-600 hover:text-emerald-700">construvida24@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-emerald-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-700">Teléfono / WhatsApp</h3>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-700 flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" /> +57 304 6283952
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-emerald-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-700">Dirección Principal</h3>
                    <p className="text-slate-600">Carrera 9 # 14-35, Chia, Cundinamarca</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Horarios de Atención</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-emerald-700" />
                  <p className="text-slate-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-emerald-700" />
                  <p className="text-slate-600">Sábados: 9:00 AM - 1:00 PM</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <p className="text-slate-600">Domingos y Festivos: Atención Virtual</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Encuéntranos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img alt="Mapa de ubicación de las oficinas de Construvidad AYJ" className="w-full h-64 object-cover" src="/maps.png" />
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
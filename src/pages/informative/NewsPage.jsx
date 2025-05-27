import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Newspaper, CalendarDays, Search, ArrowRight, Filter } from 'lucide-react';

const allNewsItems = [
  { 
    id: 1,
    title: 'Nuevas fechas para declaración de aportes en el segundo semestre', 
    date: '2025-05-20', 
    category: 'Aportes',
    excerpt: 'El Ministerio de Trabajo ha anunciado el calendario actualizado para la declaración y pago de aportes a seguridad social correspondientes al segundo semestre de 2025. Consulte las fechas límite para evitar sanciones.',
    image: 'calendar-planning'
  },
  { 
    id: 2,
    title: 'Actualización importante en los subsidios de vivienda para jóvenes', 
    date: '2025-05-15', 
    category: 'Subsidios',
    excerpt: 'Se han modificado los requisitos y montos para acceder a los subsidios de vivienda del programa "Mi Casa Ya". Estos cambios buscan beneficiar a un mayor número de jóvenes familias.',
    image: 'modern-house-keys'
  },
  { 
    id: 3,
    title: 'Publicada la guía completa sobre el sistema pensional 2025', 
    date: '2025-05-10', 
    category: 'Pensiones',
    excerpt: 'Ya está disponible la nueva guía detallada sobre el sistema pensional colombiano, incluyendo las novedades para el año 2025 y cómo planificar su futuro financiero.',
    image: 'retirement-planning-documents'
  },
  { 
    id: 4,
    title: 'Ampliación de cobertura en servicios de salud para zonas rurales', 
    date: '2025-04-28', 
    category: 'Salud',
    excerpt: 'El Gobierno Nacional ha lanzado un nuevo plan para expandir la cobertura y mejorar la calidad de los servicios de salud en las áreas rurales más apartadas del país.',
    image: 'doctor-rural-community'
  },
  { 
    id: 5,
    title: 'Nuevos beneficios para trabajadores independientes en riesgos laborales', 
    date: '2025-04-15', 
    category: 'Riesgos Laborales',
    excerpt: 'A partir de este mes, los trabajadores independientes contarán con mayores coberturas y facilidades en la afiliación al sistema de riesgos laborales. Conozca los detalles.',
    image: 'construction-worker-safety-gear'
  },
  { 
    id: 6,
    title: 'Plataforma digital para trámites de seguridad social recibe actualización', 
    date: '2025-04-05', 
    category: 'Tecnología',
    excerpt: 'La plataforma "Mi Seguridad Social Digital" ha sido actualizada con nuevas funcionalidades para agilizar trámites y mejorar la experiencia del usuario.',
    image: 'person-using-laptop-government-website'
  },
];

const categories = ['Todos', ...new Set(allNewsItems.map(item => item.category))];

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredNews = useMemo(() => {
    return allNewsItems
      .filter(item => 
        selectedCategory === 'Todos' || item.category === selectedCategory
      )
      .filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchTerm, selectedCategory]);

  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Noticias y Actualizaciones</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente informado sobre los últimos cambios, anuncios y novedades del sistema de seguridad social.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-grow">
              <Input 
                type="text"
                placeholder="Buscar noticias..."
                className="w-full p-3 pl-10 border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] shadow-sm">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <SelectValue placeholder="Filtrar por categoría" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img  alt={`Imagen de noticia: ${item.title}`} className="w-full h-48 object-cover rounded-t-lg bg-gray-200" src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">{item.category}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{item.excerpt}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button variant="link" className="text-primary font-semibold group" asChild>
                        <Link to={`/noticias/${item.id}`}>
                          Leer Más
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Newspaper className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron noticias</h2>
              <p className="text-gray-500">Intenta ajustar tus filtros de búsqueda o revisa más tarde.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileQuestion, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileQuestion className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              404
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Página no encontrada
            </h3>
            <p className="text-gray-600 mb-6">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            
            <Link to="/">
              <Button className="w-full flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                <span>Volver al Inicio</span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

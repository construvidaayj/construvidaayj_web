import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';

import InformativeLayout from '@/layouts/InformativeLayout';
import HomePage from '@/pages/informative/HomePage';
import AboutPage from '@/pages/informative/AboutPage';
import ServicesPage from '@/pages/informative/ServicesPage';
import ContactPage from '@/pages/informative/ContactPage';
import FaqPage from '@/pages/informative/FaqPage';
// import NewsPage from '@/pages/informative/NewsPage';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col"
      >
        <Routes>
          <Route element={<InformativeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/quienes-somos" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/preguntas-frecuentes" element={<FaqPage />} />
            {/* <Route path="/noticias" element={<NewsPage />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </motion.div>
    </Router>
  );
}

export default App;
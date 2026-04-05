import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleWhatsAppClick, scrollToSection } from '@/lib/utils';
import heroImage from '@/assets/hero-sewing.jpg';
import logo from '@/assets/logo-modista-ep.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3029]/90 via-[#1a3029]/70 to-[#1a3029]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3029]/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <motion.img
            src={logo}
            alt="Modista EP Logo"
            className="w-20 h-20 object-contain mb-8 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          />

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-medium text-primary-foreground tracking-wide">+15 años de experiencia</span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-playfair font-bold mb-4 text-primary-foreground leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Evelyn Pérez
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-primary-foreground/80 font-playfair italic mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Modista Profesional y Artesanal
          </motion.p>

          <motion.p
            className="text-lg text-primary-foreground/70 mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Transformo cada prenda en una pieza única. Especialista en confección y arreglos con dedicación artesanal en Martínez, Buenos Aires.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-olive-dark text-primary-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>

            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
              size="lg"
              onClick={() => scrollToSection('servicios')}
            >
              Ver Servicios
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('servicios')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;

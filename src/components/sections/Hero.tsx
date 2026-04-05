import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleWhatsAppClick, scrollToSection } from '@/lib/utils';
import heroImage from '@/assets/hero-sewing.jpg';
import logoFull from '@/assets/logo-full.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with light overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 lg:py-32 relative z-10">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <motion.img
            src={logoFull}
            alt="Modista EP - Evelyn Pérez"
            className="w-44 sm:w-52 lg:w-64 object-contain mb-8 mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          />

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-medium text-foreground tracking-wide">+15 años de experiencia</span>
          </motion.div>

          <motion.p
            className="text-xl lg:text-2xl text-foreground/70 font-poppins mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Modista Profesional y Artesanal
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-foreground/60 mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Transformo cada prenda en una pieza única. Especialista en confección y arreglos con dedicación artesanal en Martínez, Buenos Aires.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-olive-dark text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>

            <Button
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/5 px-8 py-6 text-base font-semibold rounded-full transition-all duration-300"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-foreground transition-colors"
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

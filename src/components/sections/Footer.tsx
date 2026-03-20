import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo-modista-ep.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <motion.div
            className="flex items-center gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="Modista EP" className="h-10 w-10 object-contain brightness-200" />
            <div>
              <h3 className="text-lg font-playfair font-bold">Modista EP</h3>
              <p className="text-xs text-primary-foreground/60">Profesional y Artesanal</p>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-3">
              <a
                href="https://instagram.com/modistaep"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2.5 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-2.5 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-foreground/60 text-sm">© {new Date().getFullYear()} Modista EP</p>
            <p className="text-primary-foreground/40 text-xs">Todos los derechos reservados</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

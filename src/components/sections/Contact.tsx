import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleWhatsAppClick } from '@/lib/utils';

const contactInfo = [
  { icon: <Phone className="w-6 h-6" />, title: "Teléfono", value: "11 2247 2553", href: "https://wa.me/5491122472553?text=Hola%20Evelyn%2C%20me%20gustar%C3%ADa%20consultar%20por%20un%20arreglo." },
  { icon: <MapPin className="w-6 h-6" />, title: "Ubicación", value: "H. Yrigoyen 144, Martínez", href: "https://maps.google.com/?q=H.+Yrigoyen+144,+Mart%C3%ADnez,+Buenos+Aires" },
  { icon: <Instagram className="w-6 h-6" />, title: "Instagram", value: "@modistaep", href: "https://instagram.com/modistaep" },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/70 mb-4 block">Contacto</span>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-primary-foreground">
            ¿Lista para transformar tu prenda?
          </h2>
          <div className="w-16 h-0.5 bg-primary-foreground/30 mx-auto mb-6" />
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Contactame por WhatsApp para una consulta personalizada y presupuesto sin compromiso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14 max-w-3xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-foreground/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary-foreground backdrop-blur-sm group-hover:bg-primary-foreground/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold mb-1 text-primary-foreground">{item.title}</h3>
              <p className="text-primary-foreground/80 text-sm group-hover:text-primary-foreground transition-colors">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleWhatsAppClick}
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contactar Ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { Scissors, ArrowDownUp, Ruler, Palette, DraftingCompass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

const services = [
  { icon: <Scissors className="w-7 h-7" />, title: "Cierres", description: "Reparación y colocación de cierres de todo tipo con acabado perfecto." },
  { icon: <ArrowDownUp className="w-7 h-7" />, title: "Ruedos", description: "Ajuste preciso de largos en pantalones, vestidos y faldas." },
  { icon: <Palette className="w-7 h-7" />, title: "Parches y Zurcidos", description: "Reparación invisible de roturas, desgastes y daños en telas." },
  { icon: <Ruler className="w-7 h-7" />, title: "Reducción de Tallas", description: "Ajuste profesional para que cada prenda te quede perfecta." },
  { icon: <DraftingCompass className="w-7 h-7" />, title: "Confección a Medida", description: "Creación de prendas únicas, diseñadas y confeccionadas para vos." },
];

const Services = () => {
  return (
    <section id="servicios" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">Lo que hago</span>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
            Servicios de Confección
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atención personalizada y resultados profesionales para cada una de tus prendas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card rounded-2xl p-8 border border-border hover:border-primary/20 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/8 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2.5 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => scrollToSection('precios')}
            className="bg-primary hover:bg-olive-dark text-primary-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            Ver Lista de Precios
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

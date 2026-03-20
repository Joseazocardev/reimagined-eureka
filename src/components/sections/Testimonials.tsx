import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María Laura G.",
    text: "Evelyn es una genia. Me arregló un vestido de fiesta que parecía imposible y quedó perfecto. Súper recomendable.",
    rating: 5,
  },
  {
    name: "Carolina S.",
    text: "Llevo más de 5 años llevándole toda mi ropa. Es detallista, puntual y el trabajo siempre queda impecable.",
    rating: 5,
  },
  {
    name: "Alejandra M.",
    text: "Me confeccionó un vestido a medida para mi casamiento civil. Superó todas mis expectativas. ¡Gracias Evelyn!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">Opiniones</span>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
            Lo que dicen mis clientas
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-8 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              <p className="mt-5 font-semibold text-foreground text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

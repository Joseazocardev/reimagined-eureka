import { motion } from 'framer-motion';
import quoteImage from '@/assets/quote-fabric.jpg';

const Quote = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={quoteImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary-foreground leading-tight mb-4">
            "Qué lindo es transformar un pedazo de tela en algo único"
          </h2>
          <p className="text-xl text-primary-foreground/70 font-playfair italic">— Evelyn Pérez</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;

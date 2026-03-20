import { motion } from 'framer-motion';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const images = [
  { src: gallery1, alt: "Prendas terminadas en perchero", span: "md:col-span-1 md:row-span-2" },
  { src: gallery2, alt: "Confección de vestido de novia", span: "md:col-span-1" },
  { src: gallery3, alt: "Hilos y materiales de costura", span: "md:col-span-1" },
  { src: gallery4, alt: "Medición y ajuste profesional", span: "md:col-span-1 md:row-span-2" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">Mi trabajo</span>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
            Galería
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

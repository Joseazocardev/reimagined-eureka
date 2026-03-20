import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { handleWhatsAppClick } from '@/lib/utils';

const prices1 = [
  { service: "Achicar cintura", price: "7.000" },
  { service: "Achicar cintura (incluye descoser)", price: "12.000" },
  { service: "Achicar vestido, camisa y remera", price: "18.000" },
  { service: "Alargar tiro de pantalón", price: "12.000" },
  { service: "Cambio de bolsillo", price: "10.000" },
  { service: "Cambio de puño de buzo y campera", price: "8.000" },
  { service: "Cambio de cuello de camisa", price: "12.000" },
  { service: "Cambio de forro de campera", price: "20.000" },
  { service: "Cambio de forro en saco", price: "28.000" },
  { service: "Cambio de cierre campera deportiva", price: "14.000" },
  { service: "Cambio de cierre de pantalón/pollera", price: "10.000" },
  { service: "Cambio de cierre de mochila", price: "18.000" },
  { service: "Cambio de elástico en sábanas", price: "14.000" },
  { service: "Cambio de cierre campera de invierno", price: "18.000" },
];

const prices2 = [
  { service: "Colocación de elástico en cintura", price: "12.000" },
  { service: "Confección de insignia", price: "3.000" },
  { service: "Colocación de parche pequeño", price: "6.000" },
  { service: "Colocación de parche grande", price: "12.000" },
  { service: "Remover mangas", price: "7.000" },
  { service: "Ojales a máquina", price: "1.500" },
  { service: "Repasar Costura", price: "7.000" },
  { service: "Ruedo de pantalón (jean y casual)", price: "10.000" },
  { service: "Ruedo de pantalón a mano", price: "12.000" },
  { service: "Ruedo de polleras circulares", price: "12.000" },
  { service: "Ruedo de remeras - vestidos", price: "9.000" },
  { service: "Ruedo de vestidos de doble campana", price: "30.000" },
  { service: "Zurcido desde", price: "4.000" },
  { service: "Metro Lineal (Cortinas, Sábanas, etc.)", price: "5.000" },
];

const PriceList = () => {
  return (
    <section id="precios" className="py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">Tarifas</span>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4 text-foreground">
            Lista de Precios
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-sm text-muted-foreground">Julio 2025 · Precios sujetos a cambio según complejidad</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-0.5">
              {prices1.map((item, index) => (
                <li key={index} className="price-item">
                  <span>{item.service}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-0.5">
              {prices2.map((item, index) => (
                <li key={index} className="price-item">
                  <span>{item.service}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-olive-dark text-primary-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consultar por un Arreglo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceList;

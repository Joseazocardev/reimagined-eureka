import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Scissors, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: <MessageSquare className="w-6 h-6" />, title: "Consulta Inicial", description: "Evaluamos tu prenda y discutimos tus necesidades específicas." },
  { icon: <Ruler className="w-6 h-6" />, title: "Medición y Planificación", description: "Tomo medidas precisas y planificamos el trabajo a realizar." },
  { icon: <Scissors className="w-6 h-6" />, title: "Trabajo Artesanal", description: "Realizo el trabajo con técnicas profesionales y atención al detalle." },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "Entrega y Prueba", description: "Entrega final con prueba para asegurar el ajuste perfecto." },
];

const Process = () => {
  return (
    <section id="proceso" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">Cómo trabajo</span>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
            Mi Proceso
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="bg-primary/8 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-base font-playfair font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

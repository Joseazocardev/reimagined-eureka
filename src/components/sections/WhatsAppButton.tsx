import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { handleWhatsAppClick } from '@/lib/utils';

const WhatsAppButton = () => {
  return (
    <motion.button
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.button>
  );
};

export default WhatsAppButton;

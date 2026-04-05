import { useState } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Quote from '@/components/sections/Quote';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/sections/WhatsAppButton';
import MobileSidebar from '@/components/sections/MobileSidebar';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Quote />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import { ThemeProvider } from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

// Sections
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="relative">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Loading Screen */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <Loader onComplete={handleLoadingComplete} />
          )}
        </AnimatePresence>

        {/* Main Content */}
        {!isLoading && (
          <>
            {/* Navigation */}
            <Navbar />

            {/* Page Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Testimonials />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Scroll to Top Button */}
            <ScrollToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';


const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth?form=signup');
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    } else {
       toast({
        title: "🚧 Features section not found. Let's scroll to top! 🚀"
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const TextBadge = ({ text, icon, delay, position }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: position === 'top' ? 20 : -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, type: "spring" }}
      className={`absolute ${position === 'top' ? '-top-6 -right-6' : '-bottom-6 -left-6'} bg-[var(--lovebite-charcoal)]/80 backdrop-blur-md rounded-xl shadow-xl p-3 glass-effect-dark`}
    >
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 ${icon === 'green' ? 'bg-green-500 shadow-green-500/50' : 'bg-[var(--lovebite-red)] shadow-[var(--lovebite-red)]/50'} rounded-full shadow-md`}></div>
        <span className="text-xs font-medium text-[var(--lovebite-cream)] whitespace-nowrap bg-black/20 px-2 py-1 rounded-md">{text}</span>
      </div>
    </motion.div>
  );


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden lovebite-hero-bg paw-pattern-dark scroll-mt-20" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--lovebite-charcoal)]/50 via-transparent to-[var(--lovebite-charcoal)]/80"></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-5 w-24 h-24 bg-[var(--lovebite-red)] rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-10 w-20 h-20 bg-[var(--lovebite-taupe)] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block bg-[var(--lovebite-red)]/20 text-[var(--lovebite-red)] px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              🐾 Modern Pet Care Manager
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--lovebite-cream)] leading-tight mb-6"
            >
              Because we love every little{' '}
              <span className="text-[var(--lovebite-red)] relative">
                bite
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "circOut" }}
                  className="absolute bottom-1 left-0 right-0 h-1.5 bg-[var(--lovebite-red)]/50 rounded"
                />
              </span>{' '}
              of life with our pets
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-[var(--lovebite-light-gray)] mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Welcome to LoveBite — the complete pet care platform with AI-powered insights, smart reminders, and everything you need to keep your furry family healthy and happy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="lovebite-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-[var(--lovebite-red)]/50"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={handleLearnMore}
                variant="outline"
                size="lg"
                className="border-[var(--lovebite-red)] text-[var(--lovebite-red)] hover:bg-[var(--lovebite-red)] hover:text-white px-8 py-4 text-lg font-semibold group bg-transparent hover:border-[var(--lovebite-red)]/80"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-[var(--lovebite-light-gray)]"
            >
              {[ "Free to start", "AI-powered", "Unlimited pets (Premium)"].map((text, i) => (
                <div key={i} className="flex items-center">
                  <motion.span 
                    initial={{scale:0}} animate={{scale:1}} transition={{delay: 1.3 + i*0.1}}
                    className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-md shadow-green-500/50"
                  />
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img  
                className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                alt="Adorable white cat gently nuzzling a happy golden retriever dog"
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8d661d7e-3103-4027-9188-e62d762adfbe/834821a834d4903d16a0bd825b7919ed.jpg" 
              />
            </motion.div>

            <TextBadge text="AI Health Check ✓" icon="green" delay={1.4} position="top" />
            <TextBadge text="Vaccination Due!" icon="red" delay={1.6} position="bottom" />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-[var(--lovebite-charcoal)]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
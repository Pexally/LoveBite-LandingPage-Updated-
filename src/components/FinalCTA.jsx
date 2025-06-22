
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, ShieldCheck, BrainCircuit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate('/auth?form=signup');
  };

  const benefits = [
    { icon: Heart, text: "Better health for pets" },
    { icon: ShieldCheck, text: "Peace of mind for you" },
    { icon: BrainCircuit, text: "AI-powered insights" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--lovebite-red)] via-red-700 to-red-800 relative overflow-hidden section-glow">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1 + i*0.05, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 20 + i*5,
              repeat: Infinity,
              ease: "linear",
              delay: i*2
            }}
            className="absolute border-2 border-white/10 rounded-full"
            style={{
              top: `${Math.random()*80 + 10}%`,
              left: `${Math.random()*80 + 10}%`,
              width: `${Math.random()*100 + 100}px`,
              height: `${Math.random()*100 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Start giving your pet the{' '}
              <span className="relative">
                best care
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                  viewport={{ once: true }}
                  className="absolute bottom-1 left-0 right-0 h-1.5 bg-yellow-400/50 rounded"
                />
              </span>{' '}
              today!
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              Join thousands of pet parents who trust LoveBite to keep their furry family healthy, happy, and thriving.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-12"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.text}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center space-x-2.5 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5"
              >
                <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                onClick={handleCreateAccount}
                size="lg"
                className="bg-white text-[var(--lovebite-red)] hover:bg-gray-100 px-10 py-5 text-lg font-bold rounded-full shadow-2xl group"
              >
                Create Free Account
                <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white/80 text-sm"
          >
            <p className="mb-1">✨ No credit card required • Start with 1 pet free forever</p>
            <p>🚀 Upgrade to Premium anytime for unlimited pets and AI features</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-block"
            >
              <img  
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl mx-auto"
                alt="Joyful young girl running with her fluffy dog on a sunny deck"
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8d661d7e-3103-4027-9188-e62d762adfbe/376442a0b02b7c1e0188fe404f8a3a9a.jpg" 
              />
              
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 text-3xl"
              >
                💖
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-5 text-2xl"
              >
                🐾
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

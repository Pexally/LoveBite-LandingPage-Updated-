
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, PlusCircle, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Free Account",
      description: "Sign up in seconds. No credit card required to start with LoveBite's essential features.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: PlusCircle,
      title: "Add Your Pet Profile(s)",
      description: "Easily create detailed profiles for all your beloved pets with their unique information.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HeartPulse,
      title: "Start Tracking & Caring",
      description: "Access AI health insights, set reminders, and provide the best care with LoveBite.",
      color: "from-red-500 to-red-600"
    }
  ];

  const handleGetStarted = () => {
    navigate('/auth?form=signup');
  };

  return (
    <section className="py-24 bg-[var(--lovebite-gray)]/30 relative overflow-hidden section-glow">
      <div className="absolute inset-0 paw-pattern-dark opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[var(--lovebite-red)]/20 text-[var(--lovebite-red)] px-5 py-2.5 rounded-full text-sm font-semibold mb-5"
          >
            🚀 Simple Setup Process
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--lovebite-cream)] mb-6">
            Get Started in <span className="text-[var(--lovebite-red)]">3 Easy Steps</span>
          </h2>
          
          <p className="text-lg text-[var(--lovebite-light-gray)] max-w-2xl mx-auto">
            Setting up LoveBite for your pets is quick and intuitive. You'll be managing their health and accessing AI insights in no time!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[var(--lovebite-charcoal)]/60 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-[var(--lovebite-gray)]/70 text-center flex flex-col items-center feature-card-dark"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <step.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <div className="flex items-center justify-center mb-4">
                <span className="bg-[var(--lovebite-red)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-[var(--lovebite-cream)]">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-[var(--lovebite-light-gray)] text-base leading-relaxed mb-6 flex-grow">
                {step.description}
              </p>

              {index === steps.length - 1 && (
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="lovebite-gradient text-white hover:opacity-90 px-8 py-3 text-md font-semibold mt-auto"
                >
                  Start Your Journey
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

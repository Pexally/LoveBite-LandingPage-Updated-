
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, ShieldCheck, PawPrint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with one pet.",
      features: [
        "1 Pet Profile",
        "Basic Health Records",
        "Vaccination Reminders",
        "Vet Appointment Scheduling",
        "Community Support Access"
      ],
      buttonText: "Get Started Free",
      popular: false,
      icon: PawPrint,
      bgColor: "bg-[var(--lovebite-gray)]/30",
      borderColor: "border-[var(--lovebite-gray)]/50",
      textColor: "text-[var(--lovebite-cream)]",
      accentColor: "text-[var(--lovebite-taupe)]"
    },
    {
      name: "Premium",
      price: "$5",
      period: "per month",
      description: "Unlock all features for unlimited pets.",
      features: [
        "Unlimited Pet Profiles",
        "AI Symptom Checker",
        "AI Vet Assistant Chat",
        "Advanced Health Analytics",
        "Breeding & Pregnancy Tracker",
        "Smart Medication Reminders",
        "Emergency Vet Contacts",
        "Growth & Weight Tracking",
        "Priority Support",
        "Export Health Reports"
      ],
      buttonText: "Go Premium",
      popular: true,
      icon: ShieldCheck,
      bgColor: "bg-[var(--lovebite-red)]/20",
      borderColor: "border-[var(--lovebite-red)]",
      textColor: "text-[var(--lovebite-cream)]",
      accentColor: "text-[var(--lovebite-red)]"
    }
  ];

  const handlePlanSelect = (planName) => {
    if (planName === "Free") {
      navigate('/auth?form=signup&plan=free');
    } else if (planName === "Premium") {
      navigate('/auth?form=signup&plan=premium');
    }
  };

  return (
    <section className="py-24 bg-[var(--lovebite-gray)]/30 relative overflow-hidden section-glow scroll-mt-20" id="pricing">
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
            💰 Simple, Transparent Pricing
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--lovebite-cream)] mb-6">
            Choose the Perfect Plan for <span className="text-[var(--lovebite-red)]">Your Pets</span>
          </h2>
          
          <p className="text-lg text-[var(--lovebite-light-gray)] max-w-2xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees, cancel anytime. All love, no bites to your wallet.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`pricing-card-dark ${plan.popular ? 'premium' : ''} rounded-2xl p-8 relative shadow-xl flex flex-col ${plan.borderColor} border-2`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--lovebite-red)] text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center shadow-md"
                >
                  <Star className="w-3 h-3 mr-1.5 fill-white" />
                  Most Popular
                </motion.div>
              )}

              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${plan.bgColor} mr-4`}>
                  <plan.icon className={`w-7 h-7 ${plan.accentColor}`} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${plan.textColor}`}>{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? 'text-[var(--lovebite-cream)]/80' : 'text-[var(--lovebite-light-gray)]'}`}>{plan.description}</p>
                </div>
              </div>
              
              <div className="mb-6 text-center">
                <span className={`text-5xl font-extrabold ${plan.textColor}`}>{plan.price}</span>
                <span className={`text-lg ${plan.popular ? 'text-[var(--lovebite-cream)]/70' : 'text-[var(--lovebite-light-gray)]'}`}>/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${plan.popular ? 'bg-[var(--lovebite-red)]/30' : 'bg-green-500/30'}`}>
                      <Check className={`w-3.5 h-3.5 ${plan.popular ? 'text-[var(--lovebite-red)]' : 'text-green-400'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-[var(--lovebite-cream)]/90' : 'text-[var(--lovebite-light-gray)]'}`}>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-auto"
              >
                <Button
                  onClick={() => handlePlanSelect(plan.name)}
                  className={`w-full py-3.5 text-md font-semibold shadow-lg ${
                    plan.popular 
                      ? 'lovebite-gradient text-white hover:opacity-95' 
                      : 'bg-[var(--lovebite-gray)]/60 text-[var(--lovebite-cream)] hover:bg-[var(--lovebite-gray)]/80'
                  }`}
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  {plan.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[var(--lovebite-light-gray)] mb-4 text-sm">
            All plans include 24/7 customer support and regular feature updates.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-[var(--lovebite-light-gray)]">
            {[ "No setup fees", "Cancel anytime", "30-day money back guarantee (Premium)"].map(item => (
              <div key={item} className="flex items-center">
                <Check className="w-3.5 h-3.5 text-green-500 mr-1.5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

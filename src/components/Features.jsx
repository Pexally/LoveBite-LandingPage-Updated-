import React from 'react';
import { motion } from 'framer-motion';
import { 
  PawPrint, FileText, BellRing, CalendarDays, BrainCircuit, MessageSquare, HeartHandshake, Users, ShoppingCart, Baby, BarChart3, ShieldAlert, PackageSearch, Settings2
} from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    { icon: PawPrint, title: "Pet Profile", description: "Name, species, breed, birthday, adoption date, photo, microchip ID, insurance tracker." },
    { icon: FileText, title: "Vet Records Manager", description: "Upload documents, store visit history, export records (PDF)." },
    { icon: BellRing, title: "Vaccination & Medication Tracker", description: "Smart calendar, automated reminders, sync with Google/iCal." },
    { icon: BarChart3, title: "Growth & Weight Tracker", description: "Log weight, view growth charts, notes on diet & activity." },
    { icon: CalendarDays, title: "Appointments Tracker", description: "Vet, grooming, daycare, boarding. Calendar view & reminders." },
    { icon: ShieldAlert, title: "Emergency Info", description: "Closest 24/7 emergency vets, quick personal vet contact." },
    { icon: BrainCircuit, title: "AI Symptom Checker", description: "GPT-powered. Suggests possible issues & urgency (educational)." },
    { icon: MessageSquare, title: "AI Vet Assistant Chat", description: "GPT-powered. Ask pet care questions: nutrition, behavior, etc." },
    { icon: PackageSearch, title: "Pet Supplies Reminders", description: "Custom reminders for food, litter, meds. Links to stores." },
    { icon: Baby, title: "Breeding / Pregnancy Tracker", description: "Breeding log, pregnancy calendar, litter health & weight tracking." },
    { icon: Users, title: "Multi-Pet Support", description: "Manage multiple pets, dashboard of all reminders per pet." },
    { icon: Settings2, title: "Mobile-Optimized Design", description: "Phone-first web design, easy migration to mobile apps later." }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0px 15px 30px -10px rgba(198, 40, 40, 0.3)",
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-[var(--lovebite-charcoal)] relative overflow-hidden section-glow scroll-mt-20" id="features">
      <div className="absolute inset-0 paw-pattern-dark opacity-30"></div>
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
            <HeartHandshake className="w-5 h-5 mr-2.5" />
            Comprehensive Pet Care
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--lovebite-cream)] mb-6">
            Everything Your Pet Needs, <br className="hidden sm:block" />
            <span className="text-[var(--lovebite-red)]">All in One Place</span>
          </h2>
          
          <p className="text-lg text-[var(--lovebite-light-gray)] max-w-3xl mx-auto">
            LoveBite offers a full suite of tools designed for modern pet parents. From AI-driven health insights to essential reminders, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-dark rounded-xl p-6 flex flex-col items-start cursor-default"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[var(--lovebite-red)] to-red-700 rounded-lg flex items-center justify-center mb-5 shadow-md shadow-[var(--lovebite-red)]/30"
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="text-lg font-semibold text-[var(--lovebite-cream)] mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-[var(--lovebite-light-gray)] leading-relaxed flex-grow">
                {feature.description}
              </p>
              <motion.div 
                className="w-full h-1 mt-4 rounded-full bg-[var(--lovebite-red)]/30 overflow-hidden"
              >
                <motion.div 
                  className="h-full bg-[var(--lovebite-red)]"
                  initial={{x: "-100%"}}
                  whileInView={{x:0}}
                  transition={{duration:0.5, delay: index * 0.05 + 0.3}}
                  viewport={{once:true}}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
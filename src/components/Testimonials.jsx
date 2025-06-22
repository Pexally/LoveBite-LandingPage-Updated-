
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import useCountUp from '@/hooks/useCountUp';

const Testimonials = () => {
  const testimonialsData = [
    { name: "Jessica", location: "Austin, TX", text: "LoveBite keeps me on top of my dog’s vaccines — no more missed appointments!" },
    { name: "Daniel", location: "London, UK", text: "Finally, one app to manage both of my cats’ health records. Love it!" },
    { name: "Sophie", location: "Toronto, Canada", text: "The AI symptom checker is really helpful for late-night worries." },
    { name: "Brian", location: "New York, NY", text: "I use LoveBite for my dog’s weight and diet tracking — super easy to follow." },
    { name: "Emily", location: "Manchester, UK", text: "As a breeder, the pregnancy tracker is a game-changer." },
    { name: "Jason", location: "Chicago, IL", text: "LoveBite reminds me when to order food and heartworm meds — so useful." },
    { name: "Anna", location: "Sydney, Australia", text: "Great design and very user-friendly. I trust it with all my pet info." },
    { name: "Carlos", location: "Miami, FL", text: "It’s my go-to app for vet visits and keeping my dogs healthy." },
    { name: "Megan", location: "Boston, MA", text: "Very impressed with the AI chat — answered my questions instantly!" },
    { name: "Laura", location: "Los Angeles, CA", text: "I recommend LoveBite to every pet parent — truly an all-in-one app." }
  ];

  const { count: happyParents, ref: happyParentsRef } = useCountUp(10000, 2.5);
  const { count: petsTracked, ref: petsTrackedRef } = useCountUp(25000, 2.5);
  const { count: avgRating, ref: avgRatingRef } = useCountUp(4.9, 2.5);

  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData]; // Duplicate for seamless loop

  return (
    <section className="py-24 bg-[var(--lovebite-charcoal)] relative overflow-hidden section-glow scroll-mt-20" id="testimonials">
       <div className="absolute inset-0 paw-pattern-dark opacity-20"></div>
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
            ⭐ Happy Pet Parents
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--lovebite-cream)] mb-6">
            Loved by Pet Parents <span className="text-[var(--lovebite-red)]">Everywhere</span>
          </h2>
          
          <p className="text-lg text-[var(--lovebite-light-gray)] max-w-2xl mx-auto">
            Hear what our community says about LoveBite and how it transformed their pet care routine.
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden group">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 40, // Adjust duration for speed
              repeat: Infinity,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="testimonial-card-dark rounded-xl p-6 shadow-lg hover:shadow-[var(--lovebite-red)]/20 transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[var(--lovebite-red)]/50 transform -scale-x-100" />
                  </div>

                  <p className="text-[var(--lovebite-light-gray)] text-sm leading-relaxed mb-4 italic flex-grow">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-auto pt-3 border-t border-[var(--lovebite-gray)]/50">
                    <span className="font-semibold text-[var(--lovebite-cream)] text-sm">{testimonial.name}</span>
                    <span className="text-xs text-[var(--lovebite-taupe)] block">{testimonial.location}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
           <div className="absolute inset-0 bg-gradient-to-r from-[var(--lovebite-charcoal)] via-transparent to-[var(--lovebite-charcoal)] pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[var(--lovebite-red)]/80 to-red-700/80 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              ref={happyParentsRef}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{happyParents.toLocaleString()}+</div>
              <div className="text-white/90 text-sm">Happy Pet Parents</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              ref={petsTrackedRef}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{petsTracked.toLocaleString()}+</div>
              <div className="text-white/90 text-sm">Pets Tracked</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              ref={avgRatingRef}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{avgRating}/5</div>
              <div className="text-white/90 text-sm">Average Rating</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

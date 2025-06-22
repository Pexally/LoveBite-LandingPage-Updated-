import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Please enter your email address.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "🎉 Thank you for subscribing!", description: "You're now on the list for the latest LoveBite news." });
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-[var(--lovebite-gray)]/30 relative overflow-hidden section-glow">
      <div className="absolute inset-0 paw-pattern-dark opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-[var(--lovebite-charcoal)]/50 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-[var(--lovebite-gray)]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
            viewport={{ once: true }}
            className="inline-block bg-[var(--lovebite-red)]/20 text-[var(--lovebite-red)] p-3 rounded-full mb-6"
          >
            <Mail className="w-7 h-7" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lovebite-cream)] mb-4">
            Join Our Pet-Loving Community
          </h2>
          <p className="text-md text-[var(--lovebite-light-gray)] mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest pet care tips, feature updates, and exclusive offers from LoveBite.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--lovebite-taupe)]" />
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="pl-10 w-full bg-[var(--lovebite-charcoal)] border-[var(--lovebite-gray)] focus:border-[var(--lovebite-red)] text-[var(--lovebite-cream)] placeholder:text-[var(--lovebite-light-gray)]/70"
              />
            </div>
            <Button type="submit" disabled={loading} className="lovebite-gradient text-white hover:opacity-90 group">
              {loading ? 'Subscribing...' : 'Subscribe'}
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
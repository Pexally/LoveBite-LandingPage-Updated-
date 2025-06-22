import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from '@/contexts/AuthContext';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session } = useAuth();
  const [activeTab, setActiveTab] = useState('signup');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) {
      navigate('/dashboard');
    }
  }, [session, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const formType = params.get('form');
    if (formType === 'login' || formType === 'signup') {
      setActiveTab(formType);
    }
    const plan = params.get('plan');
    if(plan){
      toast({ title: `Plan Selected: ${plan.charAt(0).toUpperCase() + plan.slice(1)}`, description: "You can complete your signup now."});
    }

  }, [location.search]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/auth?form=${tab}`, { replace: true });
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (activeTab === 'signup') {
      if (password !== confirmPassword) {
        toast({ title: "Passwords do not match!", variant: "destructive" });
        setLoading(false);
        return;
      }
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          }
        }
      });

      if (error) {
        toast({ title: "Signup Error", description: error.message, variant: "destructive" });
      } else if (data.user && data.user.identities && data.user.identities.length === 0) {
        toast({ title: "Confirmation Email Sent!", description: "User already exists. Please check your email to confirm if you haven't.", variant: "default" });
      } else if (data.user) {
        toast({ title: "🚀 Signup Successful!", description: "Please check your email to confirm your account." });
        navigate('/dashboard'); 
      } else {
         toast({ title: "Signup Issue", description: "Something went wrong during signup. Please try again.", variant: "destructive" });
      }

    } else { // Login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({ title: "Login Error", description: error.message, variant: "destructive" });
      } else if (data.user) {
        toast({ title: "🔒 Login Successful!", description: `Welcome back!` });
        navigate('/dashboard'); 
      } else {
         toast({ title: "Login Issue", description: "Something went wrong during login. Please try again.", variant: "destructive" });
      }
    }
    setLoading(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } },
    exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.3, ease: "circIn" } }
  };

  const inputFieldVariants = {
    hover: { scale: 1.02, borderColor: 'var(--lovebite-red)' },
    focus: { scale: 1.03, borderColor: 'var(--lovebite-red)', boxShadow: '0 0 0 2px rgba(198, 40, 40, 0.3)' }
  };

  return (
    <div className="min-h-screen bg-[var(--lovebite-charcoal)] flex flex-col items-center justify-center p-4 relative overflow-hidden paw-pattern-dark">
      <motion.button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center text-[var(--lovebite-light-gray)] hover:text-[var(--lovebite-cream)] transition-colors z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={loading}
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
      </motion.button>

      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Logo size="w-28 h-28" className="mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--lovebite-cream)] mt-4">
          Welcome to LoveBite
        </h1>
        <p className="text-md text-[var(--lovebite-light-gray)] mb-8">
          Manage your pet’s care all in one place.
        </p>
      </motion.div>

      <motion.div
        key={activeTab}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-md bg-[var(--lovebite-gray)]/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-[var(--lovebite-gray)] z-10"
      >
        <div className="flex mb-6 border-b-2 border-[var(--lovebite-gray)]">
          {['signup', 'login'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              disabled={loading}
              className={`flex-1 py-3 text-sm font-semibold capitalize transition-colors relative ${
                activeTab === tab ? 'text-[var(--lovebite-red)]' : 'text-[var(--lovebite-light-gray)] hover:text-[var(--lovebite-cream)]'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeAuthTab"
                  className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-[var(--lovebite-red)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === 'signup' && (
              <motion.div
                key="signup-name"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Label htmlFor="name" className="text-[var(--lovebite-light-gray)]">Name</Label>
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-3 w-5 h-5 text-[var(--lovebite-taupe)]" />
                <motion.div variants={inputFieldVariants} whileHover="hover" whileFocus="focus">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    className="pl-10 bg-[var(--lovebite-charcoal)] border-[var(--lovebite-gray)] focus:border-[var(--lovebite-red)] text-[var(--lovebite-cream)] placeholder:text-[var(--lovebite-light-gray)]/70 disabled:opacity-70"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div 
            key={`${activeTab}-email`}
            initial={{ opacity: 0, x: activeTab === 'signup' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: activeTab === 'signup' ? 0.1 : 0 }}
            className="relative"
          >
            <Label htmlFor="email" className="text-[var(--lovebite-light-gray)]">Email</Label>
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-3 w-5 h-5 text-[var(--lovebite-taupe)]" />
            <motion.div variants={inputFieldVariants} whileHover="hover" whileFocus="focus">
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="pl-10 bg-[var(--lovebite-charcoal)] border-[var(--lovebite-gray)] focus:border-[var(--lovebite-red)] text-[var(--lovebite-cream)] placeholder:text-[var(--lovebite-light-gray)]/70 disabled:opacity-70"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            key={`${activeTab}-password`}
            initial={{ opacity: 0, x: activeTab === 'signup' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: activeTab === 'signup' ? 0.2 : 0.1 }}
            className="relative"
          >
            <Label htmlFor="password" className="text-[var(--lovebite-light-gray)]">Password</Label>
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-3 w-5 h-5 text-[var(--lovebite-taupe)]" />
            <motion.div variants={inputFieldVariants} whileHover="hover" whileFocus="focus" className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="pl-10 pr-10 bg-[var(--lovebite-charcoal)] border-[var(--lovebite-gray)] focus:border-[var(--lovebite-red)] text-[var(--lovebite-cream)] placeholder:text-[var(--lovebite-light-gray)]/70 disabled:opacity-70"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} disabled={loading} className="absolute right-3 top-1/2 transform -translate-y-1/2 mt-3 text-[var(--lovebite-taupe)] hover:text-[var(--lovebite-cream)] disabled:opacity-50">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === 'signup' && (
              <motion.div
                key="signup-confirm-password"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative"
              >
                <Label htmlFor="confirmPassword" className="text-[var(--lovebite-light-gray)]">Confirm Password</Label>
                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-3 w-5 h-5 text-[var(--lovebite-taupe)]" />
                <motion.div variants={inputFieldVariants} whileHover="hover" whileFocus="focus" className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="pl-10 pr-10 bg-[var(--lovebite-charcoal)] border-[var(--lovebite-gray)] focus:border-[var(--lovebite-red)] text-[var(--lovebite-cream)] placeholder:text-[var(--lovebite-light-gray)]/70 disabled:opacity-70"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} disabled={loading} className="absolute right-3 top-1/2 transform -translate-y-1/2 mt-3 text-[var(--lovebite-taupe)] hover:text-[var(--lovebite-cream)] disabled:opacity-50">
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Button type="submit" disabled={loading} className="w-full lovebite-gradient text-white hover:opacity-90 py-3 text-md font-semibold disabled:opacity-75">
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
              {loading ? 'Processing...' : (activeTab === 'signup' ? 'Create Free Account' : 'Log In')}
            </Button>
          </motion.div>
        </form>

        <motion.div 
          className="mt-6 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <button
            onClick={() => handleTabChange(activeTab === 'login' ? 'signup' : 'login')}
            disabled={loading}
            className="text-[var(--lovebite-taupe)] hover:text-[var(--lovebite-red)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {activeTab === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
          <p className="text-[var(--lovebite-light-gray)]/70 mt-4 text-xs">
            By signing up, you agree to our{' '}
            <a href="#" onClick={(e) => {e.preventDefault(); toast({title: "🚧 Terms & Privacy Policy page isn't implemented yet!"})}} className="underline hover:text-[var(--lovebite-cream)]">
              Terms & Privacy Policy.
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
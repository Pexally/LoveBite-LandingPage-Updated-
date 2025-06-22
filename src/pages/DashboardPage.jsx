
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  PawPrint, FileText, Activity, Droplets, Calendar, ShieldAlert, BrainCircuit, MessageSquare, ShoppingCart, HeartHandshake, Users, LogOut, Plus, ChevronDown, Menu, Send, BarChart, LineChart as LineChartIcon, TrendingUp, Bell, CheckCircle, Clock
} from 'lucide-react';
import { Bar, BarChart as RechartsBarChart, Line, LineChart as RechartsLineChart, Pie, PieChart, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis, Legend, Cell } from 'recharts';

const navItems = [
  { icon: PawPrint, label: "Pet Profiles" },
  { icon: FileText, label: "Vet Records Manager" },
  { icon: Activity, label: "Vaccination & Medication Tracker" },
  { icon: TrendingUp, label: "Growth & Weight Tracker" },
  { icon: Calendar, label: "Appointments Tracker" },
  { icon: ShieldAlert, label: "Emergency Info" },
  { icon: BrainCircuit, label: "AI Symptom Checker" },
  { icon: MessageSquare, label: "AI Vet Assistant Chat" },
  { icon: ShoppingCart, label: "Pet Supplies Ordering" },
  { icon: HeartHandshake, label: "Breeding / Pregnancy Tracker" },
  { icon: Users, label: "Multi-Pet Support" },
];

const weightData = [
  { month: 'Jan', weight: 27 }, { month: 'Feb', weight: 27.5 }, { month: 'Mar', weight: 28 },
  { month: 'Apr', weight: 28.2 }, { month: 'May', weight: 28.1 }, { month: 'Jun', weight: 28.5 },
];

const healthMetricsData = [
    { subject: 'Energy', A: 85, fullMark: 100 }, { subject: 'Mobility', A: 78, fullMark: 100 },
    { subject: 'Mood', A: 88, fullMark: 100 }, { subject: 'Appetite', A: 92, fullMark: 100 },
    { subject: 'Sleep', A: 80, fullMark: 100 },
];

const visitFrequencyData = [
    { name: 'Jan', visits: 1 }, { name: 'Feb', visits: 2 }, { name: 'Mar', visits: 1 },
    { name: 'Apr', visits: 3 }, { name: 'May', visits: 1 }, { name: 'Jun', visits: 2 },
];

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Pet Parent');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setUserName(user.user_metadata?.full_name || 'Pet Parent');
    }
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "👋 You've been logged out." });
    navigate('/');
  };

  const handleNotImplemented = () => toast({ title: "🚧 Feature coming soon!", description: "This is a demo, but you can request this feature! 🚀" });

  const DashboardCard = ({ children, className = "" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={ `bg-card p-4 sm:p-6 rounded-2xl border border-secondary ${className}` }
    >
      {children}
    </motion.div>
  );
  
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card text-gray-300">
        <div className="flex items-center justify-start pl-6 h-20 border-b border-secondary">
          <Logo size="w-8 h-8"/>
        </div>
        <nav className="flex-grow px-4 space-y-1 mt-4">
            {navItems.map((item, index) => (
            <button key={item.label} onClick={handleNotImplemented} className={`w-full flex items-center py-2.5 px-4 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-secondary ${index === 0 ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:text-white'}`}>
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
            </button>
            ))}
        </nav>
        <div className="p-4 mt-auto">
            <button onClick={handleLogout} className="w-full flex items-center py-2.5 px-4 rounded-lg transition-all duration-200 text-sm font-medium text-gray-400 hover:bg-secondary hover:text-white">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
            </button>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex text-white">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72 bg-card border-r-secondary">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between h-20 px-4 sm:px-8 border-b border-secondary">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 rounded-full hover:bg-secondary">
              <Menu />
            </button>
            <div className="flex items-center gap-2">
                <Button variant="outline" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90">Buddy</Button>
                <Button variant="outline" onClick={handleNotImplemented}>Whiskers</Button>
                <Button variant="outline" onClick={handleNotImplemented}><Plus size={16} className="mr-2"/>Add Pet</Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${userName}`} alt="User" className="w-10 h-10 rounded-full border-2 border-primary" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Left Column */}
                <div className="xl:col-span-2 space-y-6">
                    <DashboardCard className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4">
                            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8d661d7e-3103-4027-9188-e62d762adfbe/b1cd2d7efc8a7fd3ba6827e80baecd68.png" alt="Buddy" className="w-24 h-24 rounded-full border-4 border-secondary object-cover" />
                            <div>
                                <h2 className="text-2xl font-bold">Buddy</h2>
                                <p className="text-gray-400">Dog, Golden Retriever</p>
                                <p className="text-gray-400">3 years, 28 kg</p>
                            </div>
                        </div>
                        <div className="md:col-span-2 bg-background/50 p-4 rounded-lg grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                            <div><p className="text-sm text-gray-400">Health Status</p><p className="font-bold text-green-400">Excellent</p></div>
                            <div><p className="text-sm text-gray-400">Next Checkup</p><p className="font-bold">Feb 20</p></div>
                            <div><p className="text-sm text-gray-400">Vaccinations</p><p className="font-bold text-orange-400">1 Due</p></div>
                            <div><p className="text-sm text-gray-400">Weight Trend</p><p className="font-bold text-green-400">+2.5kg</p></div>
                        </div>
                    </DashboardCard>

                    <DashboardCard>
                        <h3 className="font-bold mb-4 text-lg">Upcoming Appointments</h3>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center bg-background/50 p-3 rounded-lg">
                                <div>
                                    <p className="font-semibold">Regular Checkup</p>
                                    <p className="text-sm text-gray-400">Dr. Sarah Johnson</p>
                                </div>
                                <p className="text-sm">2024-02-20 @ 10:30 AM</p>
                                <span className="text-xs font-semibold px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">Buddy</span>
                            </div>
                             <div className="flex justify-between items-center bg-background/50 p-3 rounded-lg">
                                <div>
                                    <p className="font-semibold">Vaccination</p>
                                    <p className="text-sm text-gray-400">Dr. Mike Chen</p>
                                </div>
                                <p className="text-sm">2024-02-25 @ 2:00 PM</p>
                                <span className="text-xs font-semibold px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">Whiskers</span>
                            </div>
                         </div>
                         <Button variant="outline" className="w-full mt-4" onClick={handleNotImplemented}>View All Appointments</Button>
                    </DashboardCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DashboardCard>
                            <h3 className="font-bold mb-4 text-lg">Health Metrics</h3>
                             <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={healthMetricsData}>
                                        <PolarGrid stroke="var(--lovebite-gray-light)" />
                                        <PolarAngleAxis dataKey="subject" stroke="var(--lovebite-white)" tick={{ fill: 'white', fontSize: 12 }} />
                                        <Radar name="Buddy" dataKey="A" stroke="var(--lovebite-red)" fill="var(--lovebite-red)" fillOpacity={0.6} />
                                    </RadarChart>
                                </ResponsiveContainer>
                             </div>
                        </DashboardCard>
                        <DashboardCard>
                            <h3 className="font-bold mb-4 text-lg">Weight Progress (kg)</h3>
                             <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                <RechartsLineChart data={weightData}>
                                    <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                                    <YAxis stroke="#888888" domain={['dataMin - 1', 'dataMax + 1']} fontSize={12} tickLine={false} axisLine={false}/>
                                    <RechartsTooltip contentStyle={{ backgroundColor: 'var(--lovebite-gray-medium)', border: 'none', borderRadius: '0.5rem' }}/>
                                    <Line type="monotone" dataKey="weight" stroke="var(--lovebite-red)" strokeWidth={2} dot={{ fill: 'var(--lovebite-red)', r: 4 }} activeDot={{ r: 6 }}/>
                                </RechartsLineChart>
                                </ResponsiveContainer>
                             </div>
                        </DashboardCard>
                    </div>

                    <DashboardCard>
                        <h3 className="font-bold mb-4 text-lg">AI Symptom Checker</h3>
                        <div className="bg-background/50 p-3 rounded-lg mb-3">
                            <p className="text-sm"><span className="font-bold text-primary">AI Assistant:</span> Hi! I can help analyze Buddy's symptoms. What concerns do you have?</p>
                        </div>
                        <div className="flex gap-2">
                           <input type="text" placeholder="Describe symptoms..." className="flex-1 bg-secondary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                           <Button className="bg-primary hover:bg-primary/90"><Send size={16}/></Button>
                        </div>
                    </DashboardCard>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <DashboardCard>
                        <h3 className="font-bold mb-4 text-lg">Reminders</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <p>Heartworm Prevention</p>
                                <span className="text-xs font-semibold px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">Upcoming</span>
                            </div>
                             <div className="flex justify-between items-center text-sm">
                                <p>Rabies Booster</p>
                                <span className="text-xs font-semibold px-2 py-1 bg-red-500/20 text-red-300 rounded-full">Overdue</span>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full mt-4" onClick={handleNotImplemented}>Manage Reminders</Button>
                    </DashboardCard>

                    <DashboardCard>
                        <h3 className="font-bold mb-4 text-lg">Vaccination Timeline</h3>
                        <div className="space-y-4 text-sm">
                            <div >
                                <div className="flex justify-between mb-1"><p>Rabies</p><p>2024-01-15</p></div>
                                <div className="w-full bg-secondary rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width: "100%"}}></div></div>
                            </div>
                            <div >
                                <div className="flex justify-between mb-1"><p>DHPP</p><p>2024-02-20</p></div>
                                <div className="w-full bg-secondary rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width: "100%"}}></div></div>
                            </div>
                             <div >
                                <div className="flex justify-between mb-1"><p>Bordetella</p><p>2024-03-10</p></div>
                                <div className="w-full bg-secondary rounded-full h-2"><div className="bg-yellow-500 h-2 rounded-full" style={{width: "80%"}}></div></div>
                            </div>
                        </div>
                         <Button variant="outline" className="w-full mt-4" onClick={handleNotImplemented}>Manage Schedule</Button>
                    </DashboardCard>

                     <DashboardCard>
                        <h3 className="font-bold mb-4 text-lg">Supply Reminders</h3>
                        <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-center">
                            <p className="font-bold text-yellow-300">Low Stock Alert</p>
                            <p className="text-sm text-gray-400">Dog food running low for Buddy</p>
                        </div>
                         <Button className="w-full mt-4 bg-primary hover:bg-primary/90" onClick={handleNotImplemented}>Order Supplies</Button>
                    </DashboardCard>

                    <DashboardCard>
                        <h3 className="font-bold mb-4 text-lg">Emergency Contacts</h3>
                        <div className="space-y-3">
                            <div className="bg-background/50 p-3 rounded-lg">
                                <p className="font-semibold">24/7 Emergency Vet</p>
                                <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
                            </div>
                            <div className="bg-background/50 p-3 rounded-lg">
                                <p className="font-semibold">Poison Control</p>
                                <p className="text-sm text-gray-400">+1 (555) 987-6543</p>
                            </div>
                        </div>
                    </DashboardCard>
                </div>

            </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;

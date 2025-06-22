import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import LandingPage from '@/pages/LandingPage';
import AuthPage from '@/pages/AuthPage';
import DashboardPage from '@/pages/DashboardPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { session, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen bg-[var(--lovebite-charcoal)] flex items-center justify-center text-white">Loading...</div>;
  }

  return session ? children : <Navigate to="/auth?form=login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[var(--lovebite-charcoal)] text-[var(--lovebite-cream)]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<Navigate to="/auth?form=login" replace />} />
            <Route path="/signup" element={<Navigate to="/auth?form=signup" replace />} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Hero from "@/components/Hero";
import UserTypeSelection from "@/components/UserTypeSelection";
import RefugeeDashboard from "@/components/RefugeeDashboard";
import NGODashboard from "@/components/NGODashboard";
import VerifierDashboard from "@/components/VerifierDashboard";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { user, profile, loading } = useAuth();
  const [currentView, setCurrentView] = useState<'hero' | 'selection' | 'refugee' | 'ngo' | 'verifier'>('hero');

  // Redirect to auth if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      // Don't redirect on hero page, let users see the landing
    }
  }, [user, loading]);

  // Auto-navigate to appropriate dashboard if user is logged in and has a role
  useEffect(() => {
    if (user && profile?.role && currentView === 'hero') {
      setCurrentView(profile.role);
    }
  }, [user, profile, currentView]);

  const handleGetStarted = () => {
    setCurrentView('selection');
  };

  const handleSelectUserType = (type: 'refugee' | 'ngo' | 'verifier') => {
    setCurrentView(type);
  };

  const handleBackToSelection = () => {
    setCurrentView('selection');
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      );
    }

    switch (currentView) {
      case 'hero':
        return <Hero onGetStarted={handleGetStarted} />;
      case 'selection':
        return <UserTypeSelection onSelectType={handleSelectUserType} />;
      case 'refugee':
        return user ? <RefugeeDashboard onBack={handleBackToSelection} /> : <Navigate to="/auth" />;
      case 'ngo':
        return user ? <NGODashboard onBack={handleBackToSelection} /> : <Navigate to="/auth" />;
      case 'verifier':
        return user ? <VerifierDashboard onBack={handleBackToSelection} /> : <Navigate to="/auth" />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
};

export default Index;

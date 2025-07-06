import { useState } from "react";
import Hero from "@/components/Hero";
import UserTypeSelection from "@/components/UserTypeSelection";
import RefugeeDashboard from "@/components/RefugeeDashboard";
import NGODashboard from "@/components/NGODashboard";
import VerifierDashboard from "@/components/VerifierDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<'hero' | 'selection' | 'refugee' | 'ngo' | 'verifier'>('hero');

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
    switch (currentView) {
      case 'hero':
        return <Hero onGetStarted={handleGetStarted} />;
      case 'selection':
        return <UserTypeSelection onSelectType={handleSelectUserType} />;
      case 'refugee':
        return <RefugeeDashboard onBack={handleBackToSelection} />;
      case 'ngo':
        return <NGODashboard onBack={handleBackToSelection} />;
      case 'verifier':
        return <VerifierDashboard onBack={handleBackToSelection} />;
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

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, CheckCircle, Globe2, ArrowRight, Zap } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full animate-glow-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-primary-glow rounded-full animate-glow-pulse"></div>
      </div>

      <div className="container px-6 py-16 relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary-foreground" />
            <span className="text-2xl font-bold text-primary-foreground">EduProof</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              How it Works
            </Button>
            <Button variant="secondary" size="sm">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Blockchain Credentials for the
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent block">
                Stateless & Displaced
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Secure, verifiable academic credentials that can't be lost to conflict or displacement. 
              Powered by soulbound NFTs and zero-knowledge proofs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 shadow-glow"
                onClick={onGetStarted}
              >
                <Users className="mr-2 h-5 w-5" />
                I'm a Refugee/Student
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-primary-foreground hover:bg-white/10"
                onClick={onGetStarted}
              >
                <Shield className="mr-2 h-5 w-5" />
                I'm an NGO/School
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-primary-foreground hover:bg-white/10"
                onClick={onGetStarted}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                I'm a Verifier
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="text-3xl font-bold text-primary-foreground mb-2">100M+</div>
              <div className="text-primary-foreground/80">Displaced People Worldwide</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="text-3xl font-bold text-primary-foreground mb-2">Zero</div>
              <div className="text-primary-foreground/80">Transaction Fees</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="text-3xl font-bold text-primary-foreground mb-2">Instant</div>
              <div className="text-primary-foreground/80">Global Verification</div>
            </Card>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="bg-gradient-card border-0 shadow-card p-8 group hover:shadow-elegant transition-all duration-300">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Soulbound NFTs</h3>
              <p className="text-muted-foreground">Non-transferable credentials permanently tied to your identity</p>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card p-8 group hover:shadow-elegant transition-all duration-300">
              <div className="mb-4 inline-block p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero-Knowledge Proofs</h3>
              <p className="text-muted-foreground">Verify credentials without revealing personal information</p>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card p-8 group hover:shadow-elegant transition-all duration-300">
              <div className="mb-4 inline-block p-3 bg-success/10 rounded-full group-hover:bg-success/20 transition-colors">
                <Globe2 className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No-Code Dashboard</h3>
              <p className="text-muted-foreground">NGOs can issue credentials in seconds without blockchain expertise</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
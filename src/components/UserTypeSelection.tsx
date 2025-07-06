import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, CheckCircle, ArrowRight, Globe2, Award, FileCheck } from "lucide-react";

interface UserTypeSelectionProps {
  onSelectType: (type: 'refugee' | 'ngo' | 'verifier') => void;
}

const UserTypeSelection = ({ onSelectType }: UserTypeSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground rounded-full animate-glow-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-accent rounded-full animate-float"></div>
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="h-12 w-12 text-primary-foreground" />
              <span className="text-4xl font-bold text-primary-foreground">EduProof</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Choose Your Role
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Select your user type to access the appropriate dashboard and features
            </p>
          </div>

          {/* User Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
            {/* Refugee/Student */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer hover:shadow-glow hover:scale-105">
              <div 
                className="text-center h-full flex flex-col justify-between"
                onClick={() => onSelectType('refugee')}
              >
                <div>
                  <div className="mb-6 inline-block p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">Refugee / Student</h3>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    View, manage, and share your verified academic credentials. Request new certifications and track verification status.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-left">
                    <div className="flex items-center text-primary-foreground/90">
                      <CheckCircle className="h-5 w-5 mr-3 text-success" />
                      <span>View your soulbound NFT credentials</span>
                    </div>
                    <div className="flex items-center text-primary-foreground/90">
                      <CheckCircle className="h-5 w-5 mr-3 text-success" />
                      <span>Share credentials with employers</span>
                    </div>
                    <div className="flex items-center text-primary-foreground/90">
                      <CheckCircle className="h-5 w-5 mr-3 text-success" />
                      <span>Track verification requests</span>
                    </div>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full group-hover:shadow-glow">
                  Access Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            {/* NGO/School */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer hover:shadow-glow hover:scale-105">
              <div 
                className="text-center h-full flex flex-col justify-between"
                onClick={() => onSelectType('ngo')}
              >
                <div>
                  <div className="mb-6 inline-block p-4 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                    <Shield className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">NGO / School</h3>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    Issue blockchain credentials to students and displaced learners. Manage your organization's certification program.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-left">
                    <div className="flex items-center text-primary-foreground/90">
                      <Award className="h-5 w-5 mr-3 text-accent" />
                      <span>Issue soulbound NFT credentials</span>
                    </div>
                    <div className="flex items-center text-primary-foreground/90">
                      <Award className="h-5 w-5 mr-3 text-accent" />
                      <span>No-code credential creation</span>
                    </div>
                    <div className="flex items-center text-primary-foreground/90">
                      <Award className="h-5 w-5 mr-3 text-accent" />
                      <span>Manage student database</span>
                    </div>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full group-hover:shadow-glow">
                  Access Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            {/* Verifier */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer hover:shadow-glow hover:scale-105">
              <div 
                className="text-center h-full flex flex-col justify-between"
                onClick={() => onSelectType('verifier')}
              >
                <div>
                  <div className="mb-6 inline-block p-4 bg-success/20 rounded-full group-hover:bg-success/30 transition-colors">
                    <CheckCircle className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">Employer / University</h3>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    Verify credentials instantly with zero-knowledge proofs. Access global talent with verified qualifications.
                  </p>
                  
                  <div className="space-y-3 mb-6 text-left">
                    <div className="flex items-center text-primary-foreground/90">
                      <FileCheck className="h-5 w-5 mr-3 text-success" />
                      <span>Instant credential verification</span>
                    </div>
                    <div className="flex items-center text-primary-foreground/90">
                      <FileCheck className="h-5 w-5 mr-3 text-success" />
                      <span>Zero-knowledge privacy protection</span>
                    </div>
                    <div className="flex items-center text-primary-foreground/90">
                      <FileCheck className="h-5 w-5 mr-3 text-success" />
                      <span>Global talent access</span>
                    </div>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full group-hover:shadow-glow">
                  Access Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-primary-foreground/70 mb-4">
              New to EduProof? Learn how blockchain credentials are revolutionizing education for displaced communities.
            </p>
            <Button variant="outline" size="lg" className="border-white/30 text-primary-foreground hover:bg-white/10">
              <Globe2 className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
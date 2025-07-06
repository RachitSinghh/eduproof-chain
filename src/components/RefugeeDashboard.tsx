import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Shield, 
  Download, 
  Share2, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  FileText,
  Star
} from "lucide-react";

// Sample data for demonstration
const credentials = [
  {
    id: "1",
    title: "Bachelor of Computer Science",
    institution: "University of Damascus (Verified by UNHCR)",
    issueDate: "2023-03-15",
    status: "verified",
    credentialType: "Degree",
    skills: ["Programming", "Database Design", "Software Engineering"],
    verificationCount: 12,
    nftAddress: "0x742d35Cc6634C0532925a3b8D2479194AFc6c05e"
  },
  {
    id: "2", 
    title: "English Language Proficiency Certificate",
    institution: "Doctors Without Borders Learning Center",
    issueDate: "2023-08-20",
    status: "pending",
    credentialType: "Certificate",
    skills: ["English Communication", "Academic Writing"],
    verificationCount: 3,
    nftAddress: "0x8f4b2Be15E7A3E5c9c3f8A2B4c5f6E3d2A1B9C8D"
  },
  {
    id: "3",
    title: "Medical Assistant Training",
    institution: "International Rescue Committee",
    issueDate: "2023-11-10", 
    status: "verified",
    credentialType: "Professional Certification",
    skills: ["Patient Care", "Medical Documentation", "Emergency Response"],
    verificationCount: 8,
    nftAddress: "0x5e2f4C3b8D9A7E6f1a2B3c4D5e6F7a8B9c0D1e2F"
  }
];

interface RefugeeDashboardProps {
  userName?: string;
  onBack?: () => void;
}

const RefugeeDashboard = ({ userName = "Amara Hassan", onBack }: RefugeeDashboardProps) => {
  const verifiedCount = credentials.filter(c => c.status === 'verified').length;
  const pendingCount = credentials.filter(c => c.status === 'pending').length;
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {userName}</h1>
              <p className="text-muted-foreground">Manage your verified credentials and share them with employers worldwide</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
              <Button variant="premium" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Credentials</p>
                  <p className="text-2xl font-bold text-foreground">{credentials.length}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </Card>
            
            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="text-2xl font-bold text-success">{verifiedCount}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </Card>

            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-warning">{pendingCount}</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </Card>

            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                  <p className="text-2xl font-bold text-primary">156</p>
                </div>
                <Star className="h-8 w-8 text-primary" />
              </div>
            </Card>
          </div>
        </div>

        {/* Credentials List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Your Credentials</h2>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Request New Credential
            </Button>
          </div>

          {credentials.map((credential, index) => (
            <Card key={credential.id} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{credential.title}</h3>
                      <p className="text-muted-foreground mb-2">{credential.institution}</p>
                      <p className="text-sm text-muted-foreground">Issued: {new Date(credential.issueDate).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={credential.status === 'verified' ? 'default' : 'secondary'}
                        className={credential.status === 'verified' ? 'bg-success text-success-foreground' : ''}
                      >
                        {credential.status === 'verified' ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {credential.status === 'verified' ? 'Verified' : 'Pending'}
                      </Badge>
                      <Badge variant="outline">{credential.credentialType}</Badge>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Skills Verified:</p>
                    <div className="flex flex-wrap gap-2">
                      {credential.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      <span>NFT: {credential.nftAddress.slice(0, 6)}...{credential.nftAddress.slice(-4)}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>{credential.verificationCount} verifications</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:ml-6">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="premium" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>

              {credential.status === 'verified' && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Verification Progress</span>
                    <span className="text-success font-medium">100% Complete</span>
                  </div>
                  <Progress value={100} className="mt-2" />
                </div>
              )}

              {credential.status === 'pending' && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Verification Progress</span>
                    <span className="text-warning font-medium">Under Review</span>
                  </div>
                  <Progress value={65} className="mt-2" />
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>Estimated completion: 2-3 business days</span>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefugeeDashboard;
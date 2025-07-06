import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Shield, 
  CheckCircle, 
  XCircle, 
  Eye,
  Download,
  Filter,
  AlertTriangle,
  Users,
  Award,
  TrendingUp,
  Clock,
  FileCheck,
  Globe2,
  Zap
} from "lucide-react";
import { useState } from "react";

// Sample verification data
const verificationRequests = [
  {
    id: "ver_001",
    applicantName: "Amara Hassan",
    credentialTitle: "Bachelor of Computer Science",
    issuer: "University of Damascus (Verified by UNHCR)",
    requestDate: "2023-12-01",
    purpose: "Job Application - Senior Developer",
    company: "Tech Global Solutions",
    status: "verified",
    confidenceScore: 98,
    nftAddress: "0x742d35Cc6634C0532925a3b8D2479194AFc6c05e",
    zkProofVerified: true
  },
  {
    id: "ver_002",
    applicantName: "Omar Ali",
    credentialTitle: "English Language Proficiency Certificate",
    issuer: "Doctors Without Borders Learning Center",
    requestDate: "2023-11-30",
    purpose: "University Admission",
    company: "University of Toronto",
    status: "pending",
    confidenceScore: null,
    nftAddress: "0x8f4b2Be15E7A3E5c9c3f8A2B4c5f6E3d2A1B9C8D",
    zkProofVerified: false
  },
  {
    id: "ver_003",
    applicantName: "Fatima Noor",
    credentialTitle: "Medical Assistant Training",
    issuer: "International Rescue Committee",
    requestDate: "2023-11-28",
    purpose: "Employment Verification",
    company: "City General Hospital",
    status: "verified",
    confidenceScore: 95,
    nftAddress: "0x5e2f4C3b8D9A7E6f1a2B3c4D5e6F7a8B9c0D1e2F",
    zkProofVerified: true
  }
];

interface VerifierDashboardProps {
  organizationName?: string;
  onBack?: () => void;
}

const VerifierDashboard = ({ organizationName = "Global Verification Services", onBack }: VerifierDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [verifyingId, setVerifyingId] = useState<string | null>(null);
  
  const verifiedCount = verificationRequests.filter(r => r.status === 'verified').length;
  const pendingCount = verificationRequests.filter(r => r.status === 'pending').length;
  
  const handleVerify = (id: string) => {
    setVerifyingId(id);
    // Simulate verification process
    setTimeout(() => {
      setVerifyingId(null);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{organizationName}</h1>
              <p className="text-muted-foreground">Verify blockchain credentials with zero-knowledge privacy protection</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="premium" size="sm">
                <FileCheck className="h-4 w-4 mr-2" />
                Bulk Verify
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Verifications</p>
                  <p className="text-2xl font-bold text-foreground">2,847</p>
                </div>
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </Card>
            
            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Successfully Verified</p>
                  <p className="text-2xl font-bold text-success">{verifiedCount}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </Card>

            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                  <p className="text-2xl font-bold text-warning">{pendingCount}</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </Card>

            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Confidence</p>
                  <p className="text-2xl font-bold text-primary">96.5%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Verification Tool */}
        <Card className="p-6 bg-gradient-card border-0 shadow-card mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Quick Credential Verification</h2>
            <p className="text-sm text-muted-foreground">Enter wallet address or NFT ID for instant zero-knowledge verification</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="verify-input">Wallet Address or NFT ID</Label>
              <Input 
                id="verify-input" 
                placeholder="0x742d35Cc6634C0532925a3b8D2479194AFc6c05e" 
                className="font-mono text-sm"
              />
            </div>
            <div className="flex items-end">
              <Button variant="premium" className="w-full sm:w-auto">
                <Zap className="h-4 w-4 mr-2" />
                Verify Now
              </Button>
            </div>
          </div>
          
          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <Shield className="h-4 w-4 mr-2" />
            <span>Zero-knowledge verification protects applicant privacy</span>
          </div>
        </Card>

        {/* Verification Requests */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Verification Requests</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                <Input 
                  placeholder="Search requests..." 
                  className="pl-9 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {verificationRequests.map((request, index) => (
            <Card key={request.id} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{request.applicantName}</h3>
                      <p className="text-muted-foreground mb-1">{request.credentialTitle}</p>
                      <p className="text-sm text-muted-foreground">{request.issuer}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={request.status === 'verified' ? 'default' : 'secondary'}
                        className={request.status === 'verified' ? 'bg-success text-success-foreground' : ''}
                      >
                        {request.status === 'verified' ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {request.status === 'verified' ? 'Verified' : 'Pending'}
                      </Badge>
                      {request.zkProofVerified && (
                        <Badge variant="outline" className="border-accent text-accent">
                          <Shield className="h-3 w-3 mr-1" />
                          ZK Verified
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Purpose:</p>
                      <p className="font-medium">{request.purpose}</p>
                      <p className="text-sm text-muted-foreground">{request.company}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Request Date:</p>
                      <p className="font-medium">{new Date(request.requestDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Globe2 className="h-4 w-4 mr-1" />
                      <span>NFT: {request.nftAddress.slice(0, 6)}...{request.nftAddress.slice(-4)}</span>
                    </div>
                    {request.confidenceScore && (
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>Confidence: {request.confidenceScore}%</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:ml-6">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  
                  {request.status === 'pending' ? (
                    <Button 
                      variant="premium" 
                      size="sm"
                      onClick={() => handleVerify(request.id)}
                      disabled={verifyingId === request.id}
                    >
                      {verifyingId === request.id ? (
                        <>
                          <div className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Verify
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  )}
                </div>
              </div>

              {request.status === 'verified' && request.confidenceScore && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Verification Confidence</span>
                    <span className="text-sm font-medium text-success">{request.confidenceScore}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-success h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${request.confidenceScore}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center mt-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    <span>Blockchain verified • Zero-knowledge proof validated • Issuer authenticated</span>
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

export default VerifierDashboard;
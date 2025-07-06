import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  Users, 
  Award, 
  TrendingUp, 
  Send,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertCircle,
  GraduationCap,
  FileText,
  Globe2
} from "lucide-react";
import { useState } from "react";

// Sample data for demonstration
const recentCredentials = [
  {
    id: "1",
    studentName: "Amara Hassan",
    credentialType: "Bachelor of Computer Science",
    status: "issued",
    issueDate: "2023-12-01",
    verifications: 5
  },
  {
    id: "2",
    studentName: "Omar Ali",
    credentialType: "English Proficiency Certificate",
    status: "pending",
    issueDate: "2023-11-28",
    verifications: 0
  },
  {
    id: "3",
    studentName: "Fatima Noor",
    credentialType: "Medical Assistant Certification",
    status: "issued",
    issueDate: "2023-11-25",
    verifications: 12
  }
];

interface NGODashboardProps {
  organizationName?: string;
  onBack?: () => void;
}

const NGODashboard = ({ organizationName = "UNHCR Learning Initiative", onBack }: NGODashboardProps) => {
  const [isIssuing, setIsIssuing] = useState(false);
  
  const issuedCount = recentCredentials.filter(c => c.status === 'issued').length;
  const pendingCount = recentCredentials.filter(c => c.status === 'pending').length;
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{organizationName}</h1>
              <p className="text-muted-foreground">Issue and manage blockchain credentials for displaced learners</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="premium" size="sm" onClick={() => setIsIssuing(!isIssuing)}>
                <Plus className="h-4 w-4 mr-2" />
                Issue Credential
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </Card>
            
            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Credentials Issued</p>
                  <p className="text-2xl font-bold text-success">3,456</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </Card>

            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-accent">89</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
            </Card>

            <Card className="p-4 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verifications</p>
                  <p className="text-2xl font-bold text-primary">12,834</p>
                </div>
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credential Issuance Form */}
          <div className="lg:col-span-1">
            <Card className={`p-6 bg-gradient-card border-0 shadow-card transition-all duration-300 ${isIssuing ? 'shadow-elegant scale-105' : ''}`}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Issue New Credential</h2>
                <p className="text-sm text-muted-foreground">Create a soulbound NFT credential in seconds</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="student-name">Student Name</Label>
                  <Input id="student-name" placeholder="Enter student's full name" />
                </div>

                <div>
                  <Label htmlFor="student-wallet">Student Wallet Address</Label>
                  <Input id="student-wallet" placeholder="0x..." />
                </div>

                <div>
                  <Label htmlFor="credential-type">Credential Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select credential type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="degree">Academic Degree</SelectItem>
                      <SelectItem value="certificate">Professional Certificate</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="language">Language Proficiency</SelectItem>
                      <SelectItem value="skill">Skill Certification</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="institution">Issuing Institution</Label>
                  <Input id="institution" defaultValue={organizationName} />
                </div>

                <div>
                  <Label htmlFor="description">Credential Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the skills and knowledge verified by this credential..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="skills">Skills Covered</Label>
                  <Input id="skills" placeholder="Programming, Database Design, Software Engineering" />
                </div>

                <Button 
                  className="w-full" 
                  variant="premium"
                  onClick={() => setIsIssuing(true)}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Issue Credential NFT
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  <CheckCircle className="h-3 w-3 inline mr-1" />
                  Zero gas fees • Instant issuance • Permanently verifiable
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Credentials */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Credentials</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input placeholder="Search students..." className="pl-9 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4 bg-gradient-card border-0 shadow-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Issued This Week</p>
                      <p className="text-2xl font-bold text-success">{issuedCount}</p>
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
              </div>
            </div>

            <div className="space-y-4">
              {recentCredentials.map((credential, index) => (
                <Card key={credential.id} className="p-4 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{credential.studentName}</h3>
                        <p className="text-sm text-muted-foreground">{credential.credentialType}</p>
                        <p className="text-xs text-muted-foreground">
                          Issued: {new Date(credential.issueDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge 
                          variant={credential.status === 'issued' ? 'default' : 'secondary'}
                          className={credential.status === 'issued' ? 'bg-success text-success-foreground' : ''}
                        >
                          {credential.status === 'issued' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {credential.status === 'issued' ? 'Issued' : 'Pending'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {credential.verifications} verifications
                        </p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {credential.status === 'pending' && (
                          <Button variant="premium" size="sm">
                            Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;
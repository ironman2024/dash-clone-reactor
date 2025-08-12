import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, Printer } from 'lucide-react';

export const CreditAssessment = () => {
  return (
    <div className="p-6 bg-dashboard-content min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-dashboard-text-primary">Credit Assessment</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Printer className="w-4 h-4" />
          Print
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Content - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Section 1: Applicant Basic Information */}
          <Card className="bg-dashboard-section border-dashboard-border">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-dashboard-blue">
                  1. Applicant Basic Information (Official use only)
                </h2>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Loan Application Number</div>
                  <div className="font-medium text-dashboard-text-primary">BLT00000022</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Applicant Class</div>
                  <div className="font-medium text-dashboard-text-primary">A</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Application Status</div>
                  <div className="font-medium text-dashboard-red">Rejected</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Final Decision</div>
                  <div className="font-medium text-dashboard-text-primary">Not Eligible</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Application Date</div>
                  <div className="font-medium text-dashboard-text-primary">2025-01-14 12:45:10</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Last Updated</div>
                  <div className="font-medium text-dashboard-text-primary">2025-01-14 11:50:00</div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-dashboard-text-secondary mb-1">Case Manager</div>
                <div className="font-medium text-dashboard-text-primary">Rana Prakash</div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Applicant Details */}
          <Card className="bg-dashboard-section border-dashboard-border">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-dashboard-blue">
                  2. Applicant Details
                </h2>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                <div>
                  <div className="text-dashboard-text-secondary mb-1">User Id</div>
                  <div className="font-medium text-dashboard-blue">@Suresh050</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Full Name</div>
                  <div className="font-medium text-dashboard-text-primary">Suresh Kadam</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Date of Birth</div>
                  <div className="font-medium text-dashboard-text-primary">01/01/1985</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Age</div>
                  <div className="font-medium text-dashboard-text-primary">40</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Gender</div>
                  <div className="font-medium text-dashboard-text-primary">Male</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Aadhar Number</div>
                  <div className="font-medium text-dashboard-text-primary">544545454454</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm mt-4">
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Mobile Number</div>
                  <div className="font-medium text-dashboard-text-primary">7707878775</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Email Id</div>
                  <div className="font-medium text-dashboard-text-primary">suresh.mlx@example.in</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Marital Status</div>
                  <div className="font-medium text-dashboard-text-primary">Married</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Spouse Name</div>
                  <div className="font-medium text-dashboard-text-primary">Vaishali Kadam</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Education</div>
                  <div className="font-medium text-dashboard-text-primary">Diploma</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">PAN Card Number</div>
                  <div className="font-medium text-dashboard-text-primary">MBLCT9999Y</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Occupation</div>
                  <div className="font-medium text-dashboard-text-primary">Freelance</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Purpose of Loan</div>
                  <div className="font-medium text-dashboard-text-primary">Medical Emergency</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Applicant Current Address */}
          <Card className="bg-dashboard-section border-dashboard-border">
            <CardContent className="p-6">
              <div className="mb-4">
                <h2 className="text-lg font-medium text-dashboard-text-primary">
                  Applicant Current Address
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Current Address</div>
                  <div className="font-medium text-dashboard-text-primary">No.8, Grand Towers, Bengaluru,560032</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Locality/Village</div>
                  <div className="font-medium text-dashboard-text-primary">Mohali pind</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Near LandMark</div>
                  <div className="font-medium text-dashboard-text-primary">Near petrol pump</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">City/District</div>
                  <div className="font-medium text-dashboard-text-primary">Mohali</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">State</div>
                  <div className="font-medium text-dashboard-text-primary">Punjab</div>
                </div>
                <div>
                  <div className="text-dashboard-text-secondary mb-1">Pin Code</div>
                  <div className="font-medium text-dashboard-text-primary">564124</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar - 1 column */}
        <div className="lg:col-span-1">
          <Card className="bg-dashboard-section border-dashboard-border">
            <CardContent className="p-6">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/bbefdc70-da00-42ac-9bc6-5fc9cdd79535.png" 
                  alt="Profile" 
                  className="w-24 h-24 rounded-lg mx-auto mb-4 object-cover"
                />
                <h3 className="font-medium text-dashboard-text-primary">Suresh Kumar</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
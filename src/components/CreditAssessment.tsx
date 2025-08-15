import React, { useState } from 'react';
import { Printer, Edit } from 'lucide-react';

const CreditAssessment = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [editData, setEditData] = useState({});
  
  const [formData, setFormData] = useState({
    remark: '',
    reason: 'Enter Reason',
    finalDecision: 'Approved',
    signature: 'Digital Signature for Decision',
    otp: ''
  });
  
  const [showPassword, setShowPassword] = useState({
    financial1: false,
    financial2: false
  });

  const sectionData = {
    basic: {
      title: 'Edit Basic Information',
      fields: {
        loanNumber: 'BLT00000022',
        applicantClass: 'A',
        status: 'Rejected',
        finalDecision: 'Not Eligible',
        applicationDate: '2025-01-14 12:45:10',
        lastUpdated: '2025-01-14 11:50:00',
        caseManager: 'Rana Prakash'
      }
    },
    details: {
      title: 'Edit Applicant Details',
      fields: {
        userId: '@Suresh090',
        fullName: 'Suresh Kadam',
        dateOfBirth: '01/01/1985',
        age: '40',
        gender: 'Male',
        aadharNumber: '544545454454',
        panNumber: 'MBLCT9999Y',
        mobileNumber: '7707878775',
        email: 'suresh.mix@example.in',
        maritalStatus: 'Married',
        spouseName: 'Vaishali Kadam',
        education: 'Diploma',
        occupation: 'Freelance',
        loanPurpose: 'Medical Emergency'
      }
    },
    salaried: {
      title: 'Edit Risk Factors - Salaried',
      fields: {
        personalBehavior: 'Good',
        personalRisk: 'No High Risk',
        jobStability: 'Good',
        creditScore: 'Best',
        incomeStability: 'Good',
        presentObligations: 'No',
        repaymentAbility: 'Good',
        residentialRisk: 'No High Risk',
        finalDecision: 'Go for Next'
      }
    },
    business: {
      title: 'Edit Risk Factors - Business',
      fields: {
        personalBehavior: 'Good',
        personalRisk: 'No High Risk',
        workStability: 'Good',
        creditScore: 'Best',
        incomeStability: 'Good',
        presentObligations: 'No',
        repaymentAbility: 'Good',
        residentialRisk: 'No High Risk',
        businessRisk: 'Good',
        finalDecision: 'Sorry Application not Eligible'
      }
    },
    lender: {
      title: 'Edit Lender Details',
      fields: {
        bankName: 'Kotak Mahindra Bank',
        branchName: 'Bengaluru',
        submissionDate: '2025-01-14 00:00:00',
        status: 'Pending For Approval',
        remark: ''
      }
    }
  };

  const handleEdit = (section) => {
    setCurrentSection(section);
    setEditData({ ...sectionData[section].fields });
    setShowModal(true);
  };

  const handleModalSave = () => {
    alert(`Saved changes for ${sectionData[currentSection].title}`);
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentSection('');
    setEditData({});
  };

  const handleEditDataChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handleView = (item) => {
    alert(`Viewing ${item}`);
  };

  const handleDownload = (item) => {
    alert(`Downloading ${item}`);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordToggle = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleUpdateDecision = () => {
    if (!formData.otp) {
      alert('Please enter OTP');
      return;
    }
    alert('Decision updated successfully!');
  };

  const handleImageExpand = (imageName) => {
    alert(`Expanding ${imageName}`);
  };
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Credit Assessment</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Applicant Basic Information */}
<div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
  {/* Top Row: Title + Edit */}
  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
    <h2 className="text-sm font-semibold text-blue-600">
      1. Applicant Basic Information (Official use only)
    </h2>
    <button
      onClick={() => handleEdit('basic')}
      className="flex items-center gap-2 px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm hover:bg-blue-50"
    >
      Edit
      <Edit className="w-3 h-3" />
    </button>
  </div>

  {/* Content Row */}
  <div className="flex justify-between items-start p-4">
    {/* Left: Details Grid */}
    <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-7 gap-4 text-sm">
      <div>
        <span className="text-gray-600">Loan Application Number:</span>
        <div className="font-semibold text-gray-800">BLT00000022</div>
      </div>
      <div>
        <span className="text-gray-600">Applicant Class:</span>
        <div className="font-semibold text-gray-800">A</div>
      </div>
      <div>
        <span className="text-gray-600">Application Status:</span>
        <div className="font-semibold text-red-600">Rejected</div>
      </div>
      <div>
        <span className="text-gray-600">Final Decision:</span>
        <div className="font-semibold text-gray-800">Not Eligible</div>
      </div>
      <div>
        <span className="text-gray-600">Application Date:</span>
        <div className="font-semibold text-gray-800">2025-01-14 12:45:10</div>
      </div>
      <div>
        <span className="text-gray-600">Last Updated:</span>
        <div className="font-semibold text-gray-800">2025-01-14 11:50:00</div>
      </div>
      <div>
        <span className="text-gray-600">Case Manager:</span>
        <div className="font-semibold text-gray-800">Rana Prakash</div>
      </div>
    </div>

    {/* Right: Profile */}
    <div className="flex flex-col items-center ml-6">
      <div className="w-28 h-36 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md shadow flex items-center justify-center">
        <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center text-blue-700 font-bold text-2xl">
          SK
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-800 mt-2">
        Suresh Kumar
      </span>
    </div>
  </div>
</div>



        {/* Applicant Details */}
        <div className="bg-white border border-gray-200 rounded mb-6">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-blue-600">2. Applicant Details</h2>
            <button 
              onClick={() => handleEdit('details')}
              className="flex items-center gap-2 px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm hover:bg-blue-50"
            >
              Edit
              <Edit className="w-3 h-3" />
            </button>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">User Id</label>
                <div className="input-field">
                  <input type="text" value="@Suresh090" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh Kadam" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Date of Birth</label>
                <div className="input-field">
                  <input type="text" value="01/01/1985" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Age</label>
                <div className="input-field">
                  <input type="text" value="40" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Gender</label>
                <div className="input-field">
                  <input type="text" value="Male" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Aadhar Number</label>
                <div className="input-field">
                  <input type="text" value="544545454454" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">PAN Card Number</label>
                <div className="input-field">
                  <input type="text" value="MBLCT9999Y" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Mobile Number</label>
                <div className="input-field">
                  <input type="text" value="7707878775" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Email Id</label>
                <div className="input-field">
                  <input type="text" value="suresh.mix@example.in" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Marital Status</label>
                <div className="input-field">
                  <input type="text" value="Married" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Spouse Name</label>
                <div className="input-field">
                  <input type="text" value="Vaishali Kadam" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Education</label>
                <div className="input-field">
                  <input type="text" value="Diploma" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Occupation</label>
                <div className="input-field">
                  <input type="text" value="Freelance" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Purpose of Loan</label>
                <div className="input-field">
                  <input type="text" value="Medical Emergency" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-600">Applicant Current Address</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Current Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand Towers, Bengaluru,560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Locality/Village</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Near Landmark</label>
                <div className="input-field">
                  <input type="text" value="Near petrol pump" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">City/District</label>
                <div className="input-field">
                  <input type="text" value="Mohali" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">State</label>
                <div className="input-field">
                  <input type="text" value="Punjab" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Pin Code</label>
                <div className="input-field">
                  <input type="text" value="564124" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Latitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Longitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Live Location</label>
                <div className="input-field h-20">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-500 text-sm">
                    Map Placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-600">Applicant Permanent Address</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Current Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand Towers, Bengaluru,560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Locality/Village</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Near Landmark</label>
                <div className="input-field">
                  <input type="text" value="Near petrol pump" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">City/District</label>
                <div className="input-field">
                  <input type="text" value="Mohali" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">State</label>
                <div className="input-field">
                  <input type="text" value="Punjab" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Pin Code</label>
                <div className="input-field">
                  <input type="text" value="564124" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Latitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Longitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Live Location</label>
                <div className="input-field h-20">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-500 text-sm">
                    Map Placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* Section 3: Applicant Financial Sections */}
          <div className="bg-white border border-gray-200 rounded mb-6">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-indigo-600">3. Applicant Financial Sections</h2>
            <button 
              onClick={() => handleEdit('basic')}
              className="flex items-center gap-2 px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm hover:bg-blue-50"
            >
              Edit
              <Edit className="w-3 h-3" />
            </button>
          </div>
          
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-blue-600">Income Type: Salaried Details</h3>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Employer Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Official Email</label>
                <div className="input-field">
                  <input type="text" value="Suresh@gmail.com" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Working Since</label>
                <div className="input-field">
                  <input type="text" value="25/02/2014" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Net Monthly Received Salary</label>
                <div className="input-field">
                  <input type="text" value="70000" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Salary Received Type</label>
                <div className="input-field">
                  <input type="text" value="In Bank" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Job Function</label>
                <div className="input-field">
                  <input type="text" value="Management" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Designation</label>
                <div className="input-field">
                  <input type="text" value="Consultant" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Employee ID</label>
                <div className="input-field">
                  <input type="text" value="#6545454" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">UAN Number</label>
                <div className="input-field">
                  <input type="text" value="#6545454" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">EPFO Data</label>
                <div className="input-field">
                  <input type="text" value="#565984" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Office Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand Towers, Bengaluru,560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Locality/Village</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Near Landmark</label>
                <div className="input-field">
                  <input type="text" value="Near petrol pump" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">City/District</label>
                <div className="input-field">
                  <input type="text" value="Mohali" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">State</label>
                <div className="input-field">
                  <input type="text" value="Punjab" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Pin Code</label>
                <div className="input-field">
                  <input type="text" value="564124" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Latitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Longitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Live Location</label>
                <div className="input-field h-20">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-500 text-sm relative">
                    Map Placeholder
                    <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Applicant Close Relationship Reference Details */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600">Applicant Close Relationship Reference Details #1</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand , Bengaluru,560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Contact Number</label>
                <div className="input-field">
                  <input type="text" value="987546489756" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Relationship</label>
                <div className="input-field">
                  <input type="text" value="Father" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Occupation</label>
                <div className="input-field">
                  <input type="text" value="Freelance+Rental Income" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Office Name</label>
                <div className="input-field">
                  <input type="text" value="Xyz" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Applicant Professional Reference Details */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600">Applicant Professional Reference Details #1</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand , Bengaluru,560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Contact Number</label>
                <div className="input-field">
                  <input type="text" value="987546489756" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Relationship</label>
                <div className="input-field">
                  <input type="text" value="Friend" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Occupation</label>
                <div className="input-field">
                  <input type="text" value="Freelance+Rental Income" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Office Name</label>
                <div className="input-field">
                  <input type="text" value="Xyz" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Applicant Financial Proof */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600">Applicant Financial Proof</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="input-group">
                  <label className="input-label">Proof Name</label>
                  <div className="input-field">
                    <input type="text" value="Last 3 Months Salary Slips" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm">
                    View
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Download
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="input-group">
                  <label className="input-label">Proof Name</label>
                  <div className="input-field">
                    <input type="text" value="Last 3 Months Salary Credited In Bank Account Statement" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm">
                    View
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Download
                  </button>
                </div>
                <div className="input-group">
                  <label className="input-label">Bank Account Statement Password</label>
                  <div className="input-field relative">
                    <input type="password" value="************" readOnly className="bg-gray-50 pr-10" />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Applicant Bank Statement Detailed Analysis */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Applicant Bank Statement Detailed Analysis For Salaried</h2>
          </div>
          
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600">Bank Statement Analysis 3 Months</h3>
          </div>
          
          <div className="p-4 space-y-6">
            {/* Record 1 */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4">
                <div className="input-group">
                  <label className="input-label">Date of Account Opened</label>
                  <div className="input-field">
                    <input type="text" value="24/02/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Salary Credited Date</label>
                  <div className="input-field">
                    <input type="text" value="25/01/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Average Monthly Balance</label>
                  <div className="input-field">
                    <input type="text" value="23000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Ontime EMI Payments</label>
                  <div className="input-field">
                    <input type="text" value="15000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Overdue EMI Payments</label>
                  <div className="input-field">
                    <input type="text" value="2000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Cheque Bounce Number</label>
                  <div className="input-field">
                    <input type="text" value="5" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Salary Match</label>
                  <div className="input-field">
                    <input type="text" value="Yes" readOnly className="bg-gray-50" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4">
                <div className="input-group flex-1">
                  <label className="input-label">Spending/Savings Patterns</label>
                  <div className="input-field">
                    <input type="text" value="Muttual Funds" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
    <label className="input-label text-sm invisible">View</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50">
        View
      </button>
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm invisible">Download</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
        Download
      </button>
    </div>
  </div>
              </div>
            </div>
            
            {/* Record 2 */}
            <div className="space-y-4 border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4">
                <div className="input-group">
                  <label className="input-label">Date of Account Opened</label>
                  <div className="input-field">
                    <input type="text" value="24/02/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Salary Credited Date</label>
                  <div className="input-field">
                    <input type="text" value="25/01/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Average Monthly Balance</label>
                  <div className="input-field">
                    <input type="text" value="23000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Ontime EMI Payments</label>
                  <div className="input-field">
                    <input type="text" value="15000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Overdue EMI Payments</label>
                  <div className="input-field">
                    <input type="text" value="2000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Cheque Bounce Number</label>
                  <div className="input-field">
                    <input type="text" value="5" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Salary Match</label>
                  <div className="input-field">
                    <input type="text" value="Yes" readOnly className="bg-gray-50" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4">
                <div className="input-group flex-1">
                  <label className="input-label">Spending/Savings Patterns</label>
                  <div className="input-field">
                    <input type="text" value="Muttual Funds" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
    <label className="input-label text-sm invisible">View</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50">
        View
      </button>
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm invisible">Download</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
        Download
      </button>
    </div>
  </div>
              </div>
            </div>
            
            {/* Record 3 */}
            <div className="space-y-4 border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4">
                <div className="input-group">
                  <label className="input-label">Date of Account Opened</label>
                  <div className="input-field">
                    <input type="text" value="24/02/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Salary Credited Date</label>
                  <div className="input-field">
                    <input type="text" value="25/01/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Average Monthly Balance</label>
                  <div className="input-field">
                    <input type="text" value="23000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Ontime EMI Payments</label>
                  <div className="input-field">
                    <input type="text" value="15000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Overdue EMI Payments</label>
                  <div className="input-field">
                    <input type="text" value="2000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Cheque Bounce Number</label>
                  <div className="input-field">
                    <input type="text" value="5" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Salary Match</label>
                  <div className="input-field">
                    <input type="text" value="Yes" readOnly className="bg-gray-50" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4">
                <div className="input-group flex-1">
                  <label className="input-label">Spending/Savings Patterns</label>
                  <div className="input-field">
                    <input type="text" value="Muttual Funds" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
    <label className="input-label text-sm invisible">View</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50">
        View
      </button>
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm invisible">Download</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
        Download
      </button>
    </div>
  </div>
              </div>
            </div>
          </div>
          
          {/* Applicant Non-Financial Parameters */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600">Applicant Non-Financial Parameters</h3>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Job Stability</label>
                <div className="input-field">
                  <input type="text" value="12" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Residential Vintage</label>
                <div className="input-field">
                  <input type="text" value="2 year" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Residential Status</label>
                <div className="input-field">
                  <input type="text" value="Owned" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600">Application Close Relationship Reference Details #1</h3>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand , Bengaluru, 560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Contact Number</label>
                <div className="input-field">
                  <input type="text" value="987546489756" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Relationship</label>
                <div className="input-field">
                  <input type="text" value="Father" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Occupation</label>
                <div className="input-field">
                  <input type="text" value="Freelance+Rental Income" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Office Name</label>
                <div className="input-field">
                  <input type="text" value="Xyz" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600">Application Professional Reference Details #1</h3>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="input-group">
                <label className="input-label">Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand , Bengaluru, 560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Contact Number</label>
                <div className="input-field">
                  <input type="text" value="987546489756" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Relationship</label>
                <div className="input-field">
                  <input type="text" value="Friend" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Occupation</label>
                <div className="input-field">
                  <input type="text" value="Freelance+Rental Income" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Office Name</label>
                <div className="input-field">
                  <input type="text" value="Xyz" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>


          {/* Income Type: Business */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-blue-600">Income Type: Business</h3>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Business Type</label>
                <div className="input-field">
                  <input type="text" value="Proprietorship" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Name of Organisation</label>
                <div className="input-field">
                  <input type="text" value="XYZ" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Nature of Activity</label>
                <div className="input-field">
                  <input type="text" value="Trading" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Number of Years in Business</label>
                <div className="input-field">
                  <input type="text" value="12" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Monthly Sales / Turnover</label>
                <div className="input-field">
                  <input type="text" value="5489560/-" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Business Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand Towers, Bengaluru,560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Locality/Village</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Near Landmark</label>
                <div className="input-field">
                  <input type="text" value="Near petrol pump" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">City/District</label>
                <div className="input-field">
                  <input type="text" value="Mohali" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">State</label>
                <div className="input-field">
                  <input type="text" value="Punjab" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Pin Code</label>
                <div className="input-field">
                  <input type="text" value="564124" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Latitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Longitude</label>
                <div className="input-field">
                  <input type="text" value="Mohali pind" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Live Location</label>
                <div className="input-field h-20">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-500 text-sm relative">
                    Map Placeholder
                    <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Applicant Residence Premises Images */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Applicant Residence Premises Images</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-600">
                  House Image
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-600">
                  House Image
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-600">
                  House Image
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-600">
                  Residence Premises Video
                </div>
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100">
                    <svg className="w-6 h-6 text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Applicant Business Premises Images */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Applicant Business Premises Images</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-gray-600">
                  Business Image
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-gray-600">
                  Business Image
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-gray-600">
                  Business Premises Video
                </div>
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100">
                    <svg className="w-6 h-6 text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-gray-600">
                  Business Premises Video
                </div>
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100">
                    <svg className="w-6 h-6 text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Trade License Documents */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Trade License Documents</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Trade License #1 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Trade License #1 <span className="text-red-500">*</span>
                </h3>
                <div className="space-y-4">
                  <div className="input-group">
                    <label className="input-label">Trade License Type</label>
                    <div className="input-field">
                      <input type="text" value="Municipal Certificate" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Document Number</label>
                    <div className="input-field">
                      <input type="text" value="5546454" />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
                      View
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Trade License #2 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Trade License #2 <span className="text-red-500">*</span>
                </h3>
                <div className="space-y-4">
                  <div className="input-group">
                    <label className="input-label">Trade License Type</label>
                    <div className="input-field">
                      <input type="text" value="Municipal Certificate" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Document Number</label>
                    <div className="input-field">
                      <input type="text" value="5546454" />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
                      View
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Financial Proof Section */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Financial Proof</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Financial Proof #1 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Financial Proof #1 <span className="text-red-500">*</span>
                </h3>
                <div className="space-y-4">
                  <div className="input-group">
                    <label className="input-label">Last 6 Months Bank Account Statement Still Date</label>
                    <div className="input-field">
                      <select className="w-full">
                        <option>Select Date</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Bank Account Statement Password</label>
                    <div className="input-field relative">
                      <input type="password" className="pr-10" />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
                      View
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Financial Proof #2 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Financial Proof #2 <span className="text-red-500">*</span>
                </h3>
                <div className="space-y-4">
                  <div className="input-group">
                    <label className="input-label">Last 6 Months Bank Account Statement Still Date</label>
                    <div className="input-field">
                      <select className="w-full">
                        <option>Select Date</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Bank Account Statement Password</label>
                    <div className="input-field relative">
                      <input type="password" className="pr-10" />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
                      View
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Bank Statement Detailed Analysis */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Business Bank Statement Detailed Analysis (Last 6 Months)</h2>
          </div>
          
          <div className="p-4">
            <div className="space-y-6">
              {[
                { date: '01/08/2024' },
                { date: '01/09/2024' },
                { date: '01/10/2024' },
                { date: '01/11/2024' }
              ].map((month, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-gray-700 mb-4">Month: {month.date}</h3>
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 mb-4">
                    <div className="input-group">
                      <label className="input-label text-sm">Date of Account Pull</label>
                      <div className="input-field">
                        <input type="text" value={month.date} className="text-sm" />
                      </div>
                    </div>
                    <div className="input-group">
                      <label className="input-label text-sm">Credit Entry</label>
                      <div className="input-field">
                        <input type="text" value="Credit Entry" className="text-sm" />
                      </div>
                    </div>
                    <div className="input-group">
                      <label className="input-label text-sm">Debit Entry</label>
                      <div className="input-field">
                        <input type="text" value="Debit Entry" className="text-sm" />
                      </div>
                    </div>
                    <div className="input-group">
                      <label className="input-label text-sm">Average Monthly Balance</label>
                      <div className="input-field">
                        <input type="text" value="948989/-" className="text-sm" />
                      </div>
                    </div>
                    <div className="input-group">
                      <label className="input-label text-sm">GST/Tax Credit</label>
                      <div className="input-field">
                        <input type="text" value="Credit Entry" className="text-sm" />
                      </div>
                    </div>
                    <div className="input-group">
                      <label className="input-label text-sm">GST/Tax Debit</label>
                      <div className="input-field">
                        <input type="text" value="Debit Entry" className="text-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-4">
  <div className="input-group">
    <label className="input-label text-sm">Cheque Bounce Number</label>
    <div className="input-field">
      <input type="text" value="5" className="text-sm" />
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm">EMI Payments Ontime</label>
    <div className="input-field">
      <input type="text" value="15000" className="text-sm" />
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm">EMI Payments Overdues</label>
    <div className="input-field">
      <input type="text" value="2000" className="text-sm" />
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm">Large Transactions</label>
    <div className="input-field">
      <input type="text" value="56498" className="text-sm" />
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm">Spending Pattern</label>
    <div className="input-field">
      <input type="text" value="Mutual Fund" className="text-sm" />
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm invisible">View</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50">
        View
      </button>
    </div>
  </div>

  <div className="input-group">
    <label className="input-label text-sm invisible">Download</label>
    <div className="input-field">
      <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
        Download
      </button>
    </div>
  </div>
</div>

                
                </div>
              ))}
            </div>
          </div>
          
          {/* Applicant Trade Reference #1 */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Applicant Trade Reference #1</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand , Bengaluru, 560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Contact Number</label>
                <div className="input-field">
                  <input type="text" value="987546489756" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Relationship</label>
                <div className="input-field">
                  <input type="text" value="Father" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Occupation</label>
                <div className="input-field">
                  <input type="text" value="Freelance+Rental Income" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Business Name</label>
                <div className="input-field">
                  <input type="text" value="Xyz" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Applicant Trade Reference #2 */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Applicant Trade Reference #2</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="input-group">
                <label className="input-label">Name</label>
                <div className="input-field">
                  <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Address</label>
                <div className="input-field">
                  <input type="text" value="No.8, Grand , Bengaluru, 560032" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Contact Number</label>
                <div className="input-field">
                  <input type="text" value="987546489756" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Relationship</label>
                <div className="input-field">
                  <input type="text" value="Father" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Occupation</label>
                <div className="input-field">
                  <input type="text" value="Freelance+Rental Income" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Business Name</label>
                <div className="input-field">
                  <input type="text" value="Xyz" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Non-Financial Parameters */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-700">Non-Financial Parameters</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="input-group">
                <label className="input-label">Business Owner Residential Status</label>
                <div className="input-field">
                  <input type="text" value="Rented" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Business Owner Residential Vintage</label>
                <div className="input-field">
                  <input type="text" value="2 year" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Business Premises Status</label>
                <div className="input-field">
                  <input type="text" value="Owned" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Business Vintage</label>
                <div className="input-field">
                  <input type="text" value="2 year" readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Business Stability</label>
                <div className="input-field">
                  <input type="text" value="12" readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
          
          {/* KYC Documents Section */}
          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-blue-600">4. Applicant KYC Documents</h2>
            <button 
              onClick={() => handleEdit('kyc')}
              className="px-3 py-1 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          </div>
          
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Applicant KYC Proof Type</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Document Type</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Document Number</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Front Side</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Back Side</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Applicant PAN Card</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ID Proof</td>
                    <td className="px-4 py-3 text-sm text-gray-700">54545454545454545458</td>
                    <td className="px-4 py-3">
                      <div className="relative w-16 h-12 bg-gray-200 rounded border overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-xs text-gray-600">IMG</div>
                        <button className="absolute top-1 right-1 w-4 h-4 bg-white bg-opacity-80 rounded-sm flex items-center justify-center">
                          <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative w-16 h-12 bg-gray-200 rounded border overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-xs text-gray-600">IMG</div>
                        <button className="absolute top-1 right-1 w-4 h-4 bg-white bg-opacity-80 rounded-sm flex items-center justify-center">
                          <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Applicant Aadhar Card</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Address Card</td>
                    <td className="px-4 py-3 text-sm text-gray-700">5644877854</td>
                    <td className="px-4 py-3">
                      <div className="w-16 h-12 bg-gray-100 rounded border flex items-center justify-center text-xs text-gray-500">
                        No Image
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-16 h-12 bg-gray-100 rounded border flex items-center justify-center text-xs text-gray-500">
                        No Image
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Applicant Address Proof Document */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-600">Applicant Address Proof Document</h2>
          </div>
          
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Applicant Address Proof</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Document Type</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Document Number</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Front Side</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Back Side</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Applicant Address Proof</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Electricity Bill</td>
                    <td className="px-4 py-3 text-sm text-gray-700">#5645854546</td>
                    <td className="px-4 py-3">
                      <div className="relative w-16 h-12 bg-gray-200 rounded border overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-xs text-gray-600">IMG</div>
                        <button className="absolute top-1 right-1 w-4 h-4 bg-white bg-opacity-80 rounded-sm flex items-center justify-center">
                          <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-16 h-12 bg-gray-100 rounded border flex items-center justify-center text-xs text-gray-500">
                        No Image
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Credit Bureau Report */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-blue-600">5. Applicant Credit Bureau Report – CIC Report</h2>
          </div>
          
          <div className="p-4">
  <div className="space-y-6">
    
    {/* CIBIL */}
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 mb-4">
        <div className="input-group">
          <label className="input-label">Credit Bureau</label>
          <div className="input-field">
            <input type="text" value="CIBIL" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Credit Score</label>
          <div className="input-field">
            <input type="text" value="765" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">All Accounts</label>
          <div className="input-field">
            <input type="text" value="455" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Timely Pay Accounts</label>
          <div className="input-field">
            <input type="text" value="430" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Overdue Accounts</label>
          <div className="input-field">
            <input type="text" value="25" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Total Loan Amount</label>
          <div className="input-field">
            <input type="text" value="₹25,24,500" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Overdue Amount</label>
          <div className="input-field">
            <input type="text" value="₹1,25,910" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Age of Accounts</label>
          <div className="input-field">
            <input type="text" value="5 Years" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group md:col-span-2">
          <label className="input-label">Enquiries</label>
          <div className="input-field">
            <input type="text" value="2" readOnly className="bg-gray-50" />
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
          View
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Download
        </button>
      </div>
    </div>

    {/* EQUIFAX */}
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 mb-4">
        <div className="input-group">
          <label className="input-label">Credit Bureau</label>
          <div className="input-field">
            <input type="text" value="EQUIFAX" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Credit Score</label>
          <div className="input-field">
            <input type="text" value="745" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">All Accounts</label>
          <div className="input-field">
            <input type="text" value="495" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Timely Pay Accounts</label>
          <div className="input-field">
            <input type="text" value="465" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Overdue Accounts</label>
          <div className="input-field">
            <input type="text" value="30" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Total Loan Amount</label>
          <div className="input-field">
            <input type="text" value="₹27,24,500" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Overdue Amount</label>
          <div className="input-field">
            <input type="text" value="₹2,25,910" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group">
          <label className="input-label">Age of Accounts</label>
          <div className="input-field">
            <input type="text" value="6 Years" readOnly className="bg-gray-50" />
          </div>
        </div>
        <div className="input-group md:col-span-2">
          <label className="input-label">Enquiries</label>
          <div className="input-field">
            <input type="text" value="10" readOnly className="bg-gray-50" />
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
          View
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Download
        </button>
      </div>
    </div>

  </div>
</div>

          
          {/* Present Loan Obligations */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-blue-600">6. Applicant Present Loan Obligations</h2>
          </div>
          
          <div className="p-4">
  <div className="border border-gray-200 rounded-lg p-4">
    <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mb-4">
      <div className="input-group">
        <label className="input-label">Lender Name</label>
        <div className="input-field">
          <input type="text" value="Kotak Mahindra Bank" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Loan Amount</label>
        <div className="input-field">
          <input type="text" value="₹2,00,000.00" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Tenure</label>
        <div className="input-field">
          <input type="text" value="3 Years" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Remaining Tenure</label>
        <div className="input-field">
          <input type="text" value="1.5 Years" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Outstanding</label>
        <div className="input-field">
          <input type="text" value="₹1,20,000.00" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">FOIR %</label>
        <div className="input-field">
          <input type="text" value="60%" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">&nbsp;</label>
        <div className="input-field">
          <button className="w-full h-[38px] border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
            View
          </button>
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">&nbsp;</label>
        <div className="input-field">
          <button className="w-full h-[38px] bg-blue-600 text-white rounded hover:bg-blue-700">
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

          
          {/* Banking Details */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-blue-600">7. Applicant Banking Details</h2>
          </div>
          
          <div className="p-4">
  <div className="border border-gray-200 rounded-lg p-4">
    <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7 gap-4 mb-4">
      <div className="input-group">
        <label className="input-label">Bank Name</label>
        <div className="input-field">
          <input type="text" value="Kotak Mahindra Bank" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Account Holder Name</label>
        <div className="input-field">
          <input type="text" value="Suresh K" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Bank Account Number</label>
        <div className="input-field">
          <input type="text" value="15454442154542" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">IFSC Code</label>
        <div className="input-field">
          <input type="text" value="KKBK0000222" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Branch Name</label>
        <div className="input-field">
          <input type="text" value="City mall" readOnly className="bg-gray-50" />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">&nbsp;</label>
        <div className="input-field">
          <button className="w-full h-[38px] border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">
            View
          </button>
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">&nbsp;</label>
        <div className="input-field">
          <button className="w-full h-[38px] bg-blue-600 text-white rounded hover:bg-blue-700">
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

          
          {/* Additional Documents */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-blue-600">8. Applicant Additional Document</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Document #1 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="space-y-4 mb-4">
                  <div className="input-group">
                    <label className="input-label">Document Name</label>
                    <div className="input-field">
                      <input type="text" value="Property Valuation" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Document Number</label>
                    <div className="input-field">
                      <input type="text" value="VAL-7890" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">View</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download</button>
                </div>
              </div>
              
              {/* Document #2 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="space-y-4 mb-4">
                  <div className="input-group">
                    <label className="input-label">Document Name</label>
                    <div className="input-field">
                      <input type="text" value="Property Valuation" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Document Number</label>
                    <div className="input-field">
                      <input type="text" value="VAL-7890" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50">View</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Applied Loan Details */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-blue-600">9. Applicant Applied Loan Details</h2>
          </div>
          
          <div className="p-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
                <div className="input-group">
                  <label className="input-label">Loan Status</label>
                  <div className="input-field">
                    <input type="text" value="Approval" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Loan Plan</label>
                  <div className="input-field">
                    <input type="text" value="Bullet Loan" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Loan Applied Date</label>
                  <div className="input-field">
                    <input type="text" value="03/01/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Sanctioned Amount</label>
                  <div className="input-field">
                    <input type="text" value="₹10,000" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Loan Tenure</label>
                  <div className="input-field">
                    <input type="text" value="30 Days" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Loan Interest</label>
                  <div className="input-field">
                    <input type="text" value="12% Per Month" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Amount Will Credited</label>
                  <div className="input-field">
                    <input type="text" value="₹9,500/-" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Convenience Charges</label>
                  <div className="input-field">
                    <input type="text" value="5%" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Processing Fee</label>
                  <div className="input-field">
                    <input type="text" value="NIL" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Loan Due Date</label>
                  <div className="input-field">
                    <input type="text" value="03/02/2025" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">EMI Bouncing Charges</label>
                  <div className="input-field">
                    <input type="text" value="₹500/-" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">EMI Bouncing GST 18%</label>
                  <div className="input-field">
                    <input type="text" value="₹90/-" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Late Payment Charges</label>
                  <div className="input-field">
                    <input type="text" value="₹200/-" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Late Payment on GST</label>
                  <div className="input-field">
                    <input type="text" value="₹36/-" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Total Repayment</label>
                  <div className="input-field">
                    <input type="text" value="₹12,000/-" readOnly className="bg-gray-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Loan Provider Lenders Details */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-blue-600">10. Loan Provider Lenders Details</h2>
            <button 
              onClick={() => handleEdit('basic')}
              className="flex items-center gap-2 px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm hover:bg-blue-50"
            >
              Edit
              <Edit className="w-3 h-3" />
            </button>
          </div>
          
          <div className="p-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
                <div className="input-group">
                  <label className="input-label">Bank Name</label>
                  <div className="input-field">
                    <input type="text" value="Kotak Mahindra Bank" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Branch Name</label>
                  <div className="input-field">
                    <input type="text" value="Bengaluru" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Date of Submission</label>
                  <div className="input-field">
                    <input type="text" value="2025-01-14 00:00:00" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Status</label>
                  <div className="input-field">
                    <input type="text" value="Pending For Approval" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group md:col-span-2">
                  <label className="input-label">Remark</label>
                  <div className="input-field">
                    <input 
                      type="text" 
                      placeholder="Enter remark"
                      value={formData.remark}
                      onChange={(e) => handleInputChange('remark', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
              
                <button 
                  onClick={() => handleView('Lender Details')}
                  className="px-3 py-1 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50 text-sm"
                >
                  View
                </button>
                <button 
                  onClick={() => handleDownload('Lender Details')}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
          
          {/* Risk Factors Score - Salaried */}
          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-blue-600">11.1 Applicant All Risk Factors Score – Salaried</h2>
            <button 
              onClick={() => handleEdit('salaried')}
              className="px-3 py-1 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50 flex items-center gap-1 text-sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          </div>
          
          <div className="p-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="input-group">
                  <label className="input-label">Personal Behavioral Status</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Personal Risk Status (Legal)</label>
                  <div className="input-field">
                    <input type="text" value="No High Risk" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Job Stability</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Credit Score Stability</label>
                  <div className="input-field">
                    <input type="text" value="Best" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Income Stability</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Present Obligations</label>
                  <div className="input-field">
                    <input type="text" value="No" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Payment Repayment Ability</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Residential Area Risk</label>
                  <div className="input-field">
                    <input type="text" value="No High Risk" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group md:col-span-2">
                  <label className="input-label">Final Decision for Credit</label>
                  <div className="input-field">
                    <input type="text" value="Go for Next" readOnly className="bg-gray-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Risk Factors Score - Business */}
          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-blue-600">11.2 Applicant All Risk Factors Score – Business</h2>
            <button 
              onClick={() => handleEdit('business')}
              className="px-3 py-1 border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-50 flex items-center gap-1 text-sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          </div>
          
          <div className="p-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="input-group">
                  <label className="input-label">Personal Behavioral Status</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Personal Risk Status (Legal)</label>
                  <div className="input-field">
                    <input type="text" value="No High Risk" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Work Stability</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Credit Score Stability</label>
                  <div className="input-field">
                    <input type="text" value="Best" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Income Stability</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Present Obligations</label>
                  <div className="input-field">
                    <input type="text" value="No" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Payment Repayment Ability</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Residential Area Risk</label>
                  <div className="input-field">
                    <input type="text" value="No High Risk" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Business Area Risk</label>
                  <div className="input-field">
                    <input type="text" value="Good" readOnly className="bg-gray-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Final Decision for Credit</label>
                  <div className="input-field">
                    <input type="text" value="Sorry Application not Eligible" readOnly className="bg-gray-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final Credit Decision */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-blue-600">12. Final Credit Decision (Official Use Only)</h2>
          </div>
          
          <div className="p-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="input-group">
                  <label className="input-label">Reason <span className="text-red-500">*</span></label>
                  <div className="input-field">
                    <select 
                      className="w-full"
                      value={formData.reason}
                      onChange={(e) => handleInputChange('reason', e.target.value)}
                    >
                      <option>Enter Reason</option>
                      <option>Credit Score Too Low</option>
                      <option>Insufficient Income</option>
                      <option>High Risk Profile</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Final Decision</label>
                  <div className="input-field">
                    <select 
                      className="w-full"
                      value={formData.finalDecision}
                      onChange={(e) => handleInputChange('finalDecision', e.target.value)}
                    >
                      <option>Approved</option>
                      <option>Rejected</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Authorized Person Signature</label>
                  <div className="input-field">
                    <select 
                      className="w-full"
                      value={formData.signature}
                      onChange={(e) => handleInputChange('signature', e.target.value)}
                    >
                      <option>Digital Signature for Decision</option>
                      <option>Manual Signature Required</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Digital OTP</label>
                  <div className="input-field">
                    <input 
                      type="text" 
                      placeholder="Enter Valid OTP"
                      value={formData.otp}
                      onChange={(e) => handleInputChange('otp', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={handleUpdateDecision}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Update Decision
                </button>
              </div>
            </div>
          </div>
          

          {/* 13th section */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-blue-600">13. Authorized Person Dectails (Internal Use Only)</h2>
          </div>
          
          <div className="p-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mb-6">
                <div className="input-group">
                  <label className="input-label">LG Code</label>
                  <div className="input-field">
                    <input type="text" value="MKL2133" readOnly className="bg-black-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">LC Code</label>
                  <div className="input-field">
                    <input type="text" value="NBH3457" readOnly className="bg-black-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Name of Authorized Approval Person</label>
                  <div className="input-field">
                    <input type="text" value="Prashant Kumar Yadav" readOnly className="bg-black-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Designation</label>
                  <div className="input-field">
                    <input type="text" value="Prashant Kumar Yadav" readOnly className="bg-black-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Employee ID</label>
                  <div className="input-field">
                    <input type="text" value="FNO1233" readOnly className="bg-black-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Loan Application Number</label>
                  <div className="input-field">
                    <input type="text" value="BLT00000024" readOnly className="bg-black-50" />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Approval Date</label>
                  <div className="input-field">
                    <input type="text" value="2025-14-01 00:00:00" readOnly className="bg-black-50" />
                  </div>
                </div>
                <div className="input-group">
  <label className="input-label">&nbsp;</label> {/* empty label for alignment */}
  <div className="input-field">
    <button
      onClick={() => handleEdit('lender')}
      className="w-full h-[38px] border border-blue-600 text-blue-600 bg-white rounded hover:bg-blue-100 flex items-center justify-center gap-1 text-sm"
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5
                 m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828
                 l8.586-8.586z" />
      </svg>
      View
    </button>
  </div>
</div>

              </div>
              <div className="flex justify-center">
                <button 
                  onClick={handleUpdateDecision}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Update & Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                {sectionData[currentSection]?.title}
              </h3>
              <button 
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
              {Object.entries(editData).map(([key, value]) => (
                <div key={key} className="input-group">
                  <label className="input-label capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <div className="input-field">
                    <input
                      type="text"
                      value={String(value || '')}
                      onChange={(e) => handleEditDataChange(key, e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end gap-3">
              <button 
                onClick={handleModalClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleModalSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditAssessment;
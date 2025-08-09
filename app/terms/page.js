"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Bot, Zap, Shield, FileText, ChevronRight, Cpu, AlertTriangle, Scale, Clock, Mail } from 'lucide-react';

const VectriumTerms = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  // Add animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .slide-in {
        animation: slide-in 0.6s ease-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: FileText },
    { id: 'services', title: 'AI Services & Tools', icon: Bot },
    { id: 'user-responsibilities', title: 'User Responsibilities', icon: Shield },
    { id: 'ai-limitations', title: 'AI Limitations & Disclaimers', icon: AlertTriangle },
    { id: 'data-privacy', title: 'Data & Privacy', icon: Cpu },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: Scale },
    { id: 'payment-terms', title: 'Payment & Billing', icon: Clock },
    { id: 'termination', title: 'Termination', icon: Zap },
    { id: 'contact', title: 'Contact Information', icon: Mail }
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#000000] to-[#0A0A0A] relative overflow-hidden text-white"
    >
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-gray-900/50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 slide-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full backdrop-blur-sm border border-gray-600/30">
            <Scale className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium">Legal Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent" 
              style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
            Terms and Conditions
          </h1>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8" 
             style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
            Welcome to Vectrium Ventures. These terms govern your use of our AI tools, automation workflows, and agentic solutions. Please read carefully.
          </p>
          
          <div className="text-sm text-gray-500">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className="group flex items-center gap-3 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 text-left backdrop-blur-sm hover:bg-gradient-to-br hover:from-gray-700/50 hover:to-gray-800/50"
                >
                  <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
                    <Icon className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-medium text-sm">{section.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-16">
          
          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <FileText className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                1. Acceptance of Terms
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing or using any services provided by Vectrium Ventures ("Company," "we," "us," or "our"), including but not limited to our AI tools, automation workflows, agentic solutions, and related services ("Services"), you ("User," "you," or "your") agree to be bound by these Terms and Conditions ("Terms").
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms constitute a legally binding agreement between you and Vectrium Ventures. If you do not agree to these Terms, you must not access or use our Services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </section>

          {/* Section 2: AI Services & Tools */}
          <section id="services" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Bot className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                2. AI Services & Tools
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Service Offerings</h3>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-gray-500" />
                  <span><strong>AI Tools:</strong> Machine learning models, natural language processing, computer vision, and predictive analytics solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-gray-500" />
                  <span><strong>Automation Workflows:</strong> Business process automation, data pipeline management, and workflow orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-gray-500" />
                  <span><strong>Agentic AI Solutions:</strong> Autonomous AI agents for decision-making, task execution, and intelligent automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-gray-500" />
                  <span><strong>Integration Services:</strong> API access, custom integrations, and third-party service connections</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Our Services are provided on an "as-is" basis. We continuously update and improve our AI models and tools, which may result in changes to functionality, performance, or availability without prior notice.
              </p>
            </div>
          </section>

          {/* Section 3: User Responsibilities */}
          <section id="user-responsibilities" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Shield className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                3. User Responsibilities
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Acceptable Use</h3>
              <p className="text-gray-300 leading-relaxed mb-4">You agree to use our Services responsibly and in compliance with all applicable laws. You shall NOT:</p>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-red-400" />
                  <span>Use the Services for any illegal, harmful, or malicious purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-red-400" />
                  <span>Attempt to reverse engineer, decompile, or extract our AI models or algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-red-400" />
                  <span>Input or process data that violates privacy laws, contains personal information without consent, or infringes third-party rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-red-400" />
                  <span>Overload or attempt to disrupt our systems or networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-red-400" />
                  <span>Share access credentials or violate usage limits</span>
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-white mb-4">Data Responsibility</h3>
              <p className="text-gray-300 leading-relaxed">
                You are solely responsible for the accuracy, legality, and appropriateness of all data you input into our Services. You warrant that you have all necessary rights and permissions for any data processed through our platform.
              </p>
            </div>
          </section>

          {/* Section 4: AI Limitations & Disclaimers */}
          <section id="ai-limitations" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                4. AI Limitations & Disclaimers
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important AI Disclaimers
                </h3>
                <ul className="text-yellow-200 space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 mt-1 text-yellow-400" />
                    <span><strong>No Guarantee of Accuracy:</strong> AI outputs may contain errors, biases, or inaccuracies. Always verify critical information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 mt-1 text-yellow-400" />
                    <span><strong>Not Professional Advice:</strong> Our AI tools do not provide medical, legal, financial, or professional advice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 mt-1 text-yellow-400" />
                    <span><strong>Human Oversight Required:</strong> AI decisions should be reviewed by qualified humans for critical applications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 mt-1 text-yellow-400" />
                    <span><strong>Continuous Learning:</strong> AI models evolve and may produce different outputs over time.</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                You acknowledge that AI technology has inherent limitations and that you use our Services at your own risk and discretion. We recommend implementing appropriate validation, testing, and human review processes for any business-critical applications.
              </p>
            </div>
          </section>

          {/* Section 5: Data & Privacy */}
          <section id="data-privacy" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Cpu className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                5. Data & Privacy
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Data Processing</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We process your data to provide and improve our Services. This includes training and optimizing our AI models, though we implement measures to protect your privacy and confidentiality.
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">Data Security</h3>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>Industry-standard encryption in transit and at rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>Access controls and authentication mechanisms</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>Regular security audits and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>GDPR, CCPA, and other privacy regulation compliance</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                For detailed information about our data practices, please refer to our separate Privacy Policy. You retain ownership of your input data, and we will not use it for purposes beyond providing and improving our Services unless explicitly authorized.
              </p>
            </div>
          </section>

          {/* Section 6: Intellectual Property */}
          <section id="intellectual-property" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Scale className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                6. Intellectual Property
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Our Intellectual Property</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All Services, including AI models, algorithms, software, documentation, and related intellectual property, remain the exclusive property of Vectrium Ventures. You receive a limited, non-exclusive, non-transferable license to use our Services according to these Terms.
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">Your Content & Outputs</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You retain ownership of your input data. Outputs generated by our AI Services are provided to you under a royalty-free license. However, similar outputs may be generated for other users, as AI models can produce comparable results from different inputs.
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">Feedback & Improvements</h3>
              <p className="text-gray-300 leading-relaxed">
                Any feedback, suggestions, or ideas you provide about our Services become our property and may be used to improve our offerings without compensation or attribution.
              </p>
            </div>
          </section>

          {/* Section 7: Payment & Billing */}
          <section id="payment-terms" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Clock className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                7. Payment & Billing
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Payment Terms</h3>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-blue-400" />
                  <span>Payments are due according to your selected billing cycle (monthly, quarterly, or annually)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-blue-400" />
                  <span>All fees are non-refundable unless explicitly stated otherwise</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-blue-400" />
                  <span>Prices may change with 30 days' written notice</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-blue-400" />
                  <span>Usage-based billing applies to API calls and compute resources</span>
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-white mb-4">Late Payment & Suspension</h3>
              <p className="text-gray-300 leading-relaxed">
                Overdue accounts may be subject to service suspension after 7 days and termination after 30 days. A late fee of 1.5% per month may be applied to overdue balances.
              </p>
            </div>
          </section>

          {/* Section 8: Termination */}
          <section id="termination" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Zap className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                8. Termination
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Termination Rights</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate this agreement at any time. You may cancel your account through your dashboard or by contacting us. We may suspend or terminate your access for violations of these Terms, non-payment, or at our discretion with reasonable notice.
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">Effect of Termination</h3>
              <p className="text-gray-300 leading-relaxed">
                Upon termination, your access to the Services will cease immediately. We will provide a reasonable opportunity to export your data, after which it may be deleted from our systems. Sections relating to intellectual property, limitations of liability, and dispute resolution survive termination.
              </p>
            </div>
          </section>

          {/* Section 9: Contact Information */}
          <section id="contact" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Mail className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                9. Contact Information
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                For questions about these Terms, our Services, or to report violations, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">General Inquiries</h3>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:contact@vectriumventures.com" className="hover:text-white transition-colors duration-300">
                      contact@vectriumventures.com
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Legal & Compliance</h3>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Scale className="w-4 h-4 text-green-400" />
                    <a href="mailto:legal@vectriumventures.com" className="hover:text-white transition-colors duration-300">
                      legal@vectriumventures.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-700/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-400" />
                  Vectrium Ventures
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We typically respond to inquiries within 24-48 hours during business days. 
                  For urgent matters related to service outages or security concerns, please mark your email as "URGENT" in the subject line.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-12 border border-gray-600/30 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:contact@vectriumventures.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:from-gray-100 hover:to-white hover:shadow-2xl transform hover:scale-105"
                  style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <div className="text-gray-500 text-sm">
                  Questions? We're here to help.
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700/30">
                <p className="text-gray-500 text-sm">
                  Document Version 1.0 | Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VectriumTerms;

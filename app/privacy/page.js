"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Bot, Zap, Shield, FileText, ChevronRight, Cpu, AlertTriangle, Scale, Clock, Mail } from 'lucide-react';

const VectriumPrivacy = () => {
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
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'information-we-collect', title: 'Information We Collect', icon: Bot },
    { id: 'how-we-use-your-information', title: 'How We Use Your Information', icon: Shield },
    { id: 'data-sharing-and-disclosure', title: 'Data Sharing and Disclosure', icon: AlertTriangle },
    { id: 'data-retention', title: 'Data Retention', icon: Cpu },
    { id: 'your-data-protection-rights', title: 'Your Data Protection Rights', icon: Scale },
    { id: 'cookies-and-tracking-technologies', title: 'Cookies and Tracking Technologies', icon: Clock },
    { id: 'changes-to-this-policy', title: 'Changes to This Policy', icon: Zap },
    { id: 'contact-us', title: 'Contact Us', icon: Mail }
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
            <Shield className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium">Legal Documentation</span>
          </div>
          
          <h1 className="text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent" 
              style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
            Privacy Policy
          </h1>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8" 
             style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
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

        {/* Privacy Content */}
        <div className="space-y-16">
          
          {/* Section 1: Introduction */}
          <section id="introduction" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <FileText className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                1. Introduction
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Vectrium Ventures. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This Privacy Policy applies to all information collected through our Services, as well as any related services, sales, marketing or events.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important.
              </p>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section id="information-we-collect" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Bot className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                2. Information We Collect
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information You Disclose to Us</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and services, when you participate in activities on the Services or otherwise when you contact us.
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">Information Automatically Collected</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information.
              </p>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section id="how-we-use-your-information" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Shield className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                3. How We Use Your Information
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>To facilitate account creation and logon process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>To post testimonials. We post testimonials on our Services that may contain personal information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>Request feedback. We may use your information to request feedback and to contact you about your use of our Services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-green-400" />
                  <span>To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Data Sharing and Disclosure */}
          <section id="data-sharing-and-disclosure" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                4. Data Sharing and Disclosure
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, Vital Interests.
              </p>
            </div>
          </section>

          {/* Section 5: Data Retention */}
          <section id="data-retention" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Cpu className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                5. Data Retention
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
              </p>
              <p className="text-gray-300 leading-relaxed">
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </div>
          </section>

          {/* Section 6: Your Data Protection Rights */}
          <section id="your-data-protection-rights" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Scale className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                6. Your Data Protection Rights
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
              </p>
            </div>
          </section>

          {/* Section 7: Cookies and Tracking Technologies */}
          <section id="cookies-and-tracking-technologies" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Clock className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                7. Cookies and Tracking Technologies
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
              </p>
            </div>
          </section>

          {/* Section 8: Changes to This Policy */}
          <section id="changes-to-this-policy" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Zap className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                8. Changes to This Policy
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
              </p>
            </div>
          </section>

          {/* Section 9: Contact Us */}
          <section id="contact-us" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Mail className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                9. Contact Us
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have questions or comments about this policy, you may email us at:
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
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
                Questions about our Privacy Policy?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We are committed to protecting your privacy. If you have any questions, please don't hesitate to reach out.
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
                  We're here to help.
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

export default VectriumPrivacy;

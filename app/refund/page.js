"use client"

import React, { useRef, useEffect, useState } from 'react';
import {
  Bot,
  Zap,
  Shield,
  FileText,
  ChevronRight,
  Cpu,
  AlertTriangle,
  Scale,
  Clock,
  Mail
} from 'lucide-react';

const VectriumAgenticPolicy = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

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
    { id: 'eligibility', title: 'Eligibility for Cancellation & Refund', icon: Shield },
    { id: 'how-to-request', title: 'How to Request a Cancellation or Refund', icon: Bot },
    { id: 'processing-time', title: 'Processing Time & Method', icon: Clock },
    { id: 'limitations', title: 'Limitations & Non-Refundable Scenarios', icon: AlertTriangle },
    { id: 'partial-refunds', title: 'Partial Refunds & Usage Deductions', icon: Scale },
    { id: 'policy-changes', title: 'Changes to This Policy', icon: Zap },
    { id: 'contact-us', title: 'Contact Us', icon: Mail }
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const todayStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#000000] to-[#0A0A0A] relative overflow-hidden text-white"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-gray-900/50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 slide-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full backdrop-blur-sm border border-gray-600/30">
            <Bot className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium">Policy Documentation</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Agentic Cancellations & Refund Policy
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Guidelines for canceling or requesting a refund for AI-agent services—ensuring flexibility, transparency,
            and fairness in autonomous agent deployments.
          </p>

          <div className="text-sm text-gray-500">
            <p>Last Updated: {todayStr}</p>
            <p>Effective Date: {todayStr}</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="group flex items-center gap-3 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl
                  border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 text-left backdrop-blur-sm
                  hover:bg-gradient-to-br hover:from-gray-700/50 hover:to-gray-800/50"
              >
                <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg
                  group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
                  <section.icon className="w-4 h-4 text-gray-300" />
                </div>
                <div className="flex-1">
                  <span className="text-white font-medium text-sm">
                    {section.title}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* 1. Introduction */}
          <section id="introduction" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <FileText className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">1. Introduction</h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                This policy governs cancellations and refunds for our autonomous AI agent services. By activating
                or subscribing to an agent service, you acknowledge and accept these terms.
              </p>
            </div>
          </section>

          {/* 2. Eligibility */}
          <section id="eligibility" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Shield className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                2. Eligibility for Cancellation & Refund
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                You are eligible for a full refund if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  The agent has not yet been activated, configured, or deployed on your behalf.
                </li>
                <li>
                  The refund request is made within 14 calendar days of purchase.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Once an agent is deployed or customized actions have been triggered, eligibility for refunds may be
                limited or replaced by partial refunds (see Section 5).
              </p>
            </div>
          </section>

          {/* 3. How to Request */}
          <section id="how-to-request" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Bot className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                3. How to Request a Cancellation or Refund
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                Send your request to{' '}
                <a
                  href="mailto:contact@vectriumventures.com"
                  className="text-blue-400 underline"
                >
                  contact@vectriumventures.com
                </a>
                , including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                <li>Your order or subscription ID</li>
                <li>Date of purchase or activation</li>
                <li>Reason for cancellation/refund</li>
                <li>Any relevant deployment or usage details</li>
              </ul>
            </div>
          </section>

          {/* 4. Processing Time & Method */}
          <section id="processing-time" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                <Clock className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                4. Processing Time & Method
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                Approved cancellations and refunds will be processed within 7–10 business days and issued via the
                original payment method.
              </p>
            </div>
          </section>

          {/* 5. Non-Refundable Scenarios & Limitations */}
          <section id="limitations" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-gray-300 p-3 rounded-xl bg-gradient-to-br
                from-gray-700 to-gray-800" />
              <h2 className="text-3xl font-bold text-white">
                5. Limitations & Non-Refundable Scenarios
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                Refunds are not available for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Agents that have already performed tasks or triggered actions in your environment.</li>
                <li>Customized integrations or API development once started.</li>
                <li>Usage charges for agents that ran beyond free trial or included compute usage.</li>
              </ul>
            </div>
          </section>

          {/* 6. Partial Refunds & Usage Deductions */}
          <section id="partial-refunds" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-6 h-6 text-gray-300 p-3 rounded-xl bg-gradient-to-br
                from-gray-700 to-gray-800" />
              <h2 className="text-3xl font-bold text-white">
                6. Partial Refunds & Usage Deductions
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                If an agent was partially used or executed tasks, we may issue a partial refund that deducts actual
                usage or compute costs incurred on your behalf.
              </p>
            </div>
          </section>

          {/* 7. Changes to Policy */}
          <section id="policy-changes" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-6 h-6 text-gray-300 p-3 rounded-xl bg-gradient-to-br
                from-gray-700 to-gray-800" />
              <h2 className="text-3xl font-bold text-white">
                7. Changes to This Policy
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                We may update this policy at any time. Revised versions will be published here and, if materially
                changed, shared via email or in-app notifications.
              </p>
            </div>
          </section>

          {/* 8. Contact Us */}
          <section id="contact-us" className="slide-in">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-6 h-6 text-gray-300 p-3 rounded-xl bg-gradient-to-br
                from-gray-700 to-gray-800" />
              <h2 className="text-3xl font-bold text-white">
                8. Contact Us
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl
              p-8 border border-gray-700/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                Questions or concerns about this policy? Get in touch at{' '}
                <a
                  href="mailto:contact@vectriumventures.com"
                  className="text-blue-400 underline"
                >
                  contact@vectriumventures.com
                </a>
                . We’ll typically respond within 24–48 hours on business days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VectriumAgenticPolicy;

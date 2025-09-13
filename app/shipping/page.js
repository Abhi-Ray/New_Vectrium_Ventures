"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Truck, Package, Clock, MapPin, Shield, Zap, FileText, ChevronRight, AlertTriangle, Scale, Mail } from 'lucide-react';

const VectriumShipping = () => {
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
    { id: 'processing-time', title: 'Processing Time', icon: Clock },
    { id: 'delivery-methods', title: 'Delivery Methods', icon: Truck },
    { id: 'delivery-areas', title: 'Delivery Areas', icon: MapPin },
    { id: 'tracking-your-order', title: 'Tracking Your Order', icon: Package },
    { id: 'delays-and-issues', title: 'Delays & Issues', icon: AlertTriangle },
    { id: 'shipping-costs', title: 'Shipping Costs', icon: Scale },
    { id: 'policy-updates', title: 'Policy Updates', icon: Zap },
    { id: 'contact-us', title: 'Contact Us', icon: Mail }
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#000000] to-[#0A0A0A] relative overflow-hidden text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-gray-900/50"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 slide-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full backdrop-blur-sm border border-gray-600/30">
            <Truck className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium">Shipping Information</span>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
            Shipping Policy
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8" style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}>
            This Shipping Policy outlines how Vectrium Ventures Pvt Ltd delivers its AI tools, automation solutions, and AI agents to our clients.
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
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className="group flex items-center gap-3 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 text-left backdrop-blur-sm hover:from-gray-700/50 hover:to-gray-800/50"
                >
                  <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg group-hover:from-gray-600 group-hover:to-gray-700">
                    <Icon className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-white font-medium text-sm">{section.title}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-16">
          <section id="introduction" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><FileText className="w-6 h-6 text-gray-300" /> 1. Introduction</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">Vectrium Ventures Pvt Ltd delivers AI-powered tools, automation solutions, and AI agents primarily through digital means. This policy details the timelines, methods, and conditions for order processing and delivery.</p>
            </div>
          </section>

          <section id="processing-time" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><Clock className="w-6 h-6 text-gray-300" /> 2. Processing Time</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">Orders are processed within 1–3 business days after payment confirmation. For custom AI solutions, processing time may vary depending on complexity.</p>
            </div>
          </section>

          <section id="delivery-methods" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><Truck className="w-6 h-6 text-gray-300" /> 3. Delivery Methods</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">Most deliveries are digital via secure download links or API access credentials sent to your registered email. Physical shipments (if applicable) are sent via trusted courier services.</p>
            </div>
          </section>

          <section id="delivery-areas" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><MapPin className="w-6 h-6 text-gray-300" /> 4. Delivery Areas</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">We deliver our AI tools and automation solutions globally. Certain restrictions may apply in regions with legal or regulatory limitations.</p>
            </div>
          </section>

          <section id="tracking-your-order" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><Package className="w-6 h-6 text-gray-300" /> 5. Tracking Your Order</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">For physical shipments, tracking details will be provided via email. For digital products, you will receive confirmation and access details within your account dashboard or registered email.</p>
            </div>
          </section>

          <section id="delays-and-issues" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-yellow-400" /> 6. Delays & Issues</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">Unforeseen circumstances like server downtime, customs delays, or force majeure events may impact delivery timelines. We will notify you promptly in such cases.</p>
            </div>
          </section>

          <section id="shipping-costs" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><Scale className="w-6 h-6 text-gray-300" /> 7. Shipping Costs</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">Digital deliveries are free of shipping charges. Physical shipments, if applicable, will incur costs based on weight, destination, and courier service.</p>
            </div>
          </section>

          <section id="policy-updates" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><Zap className="w-6 h-6 text-gray-300" /> 8. Policy Updates</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300">We may update this Shipping Policy from time to time. Changes will be effective immediately upon posting on our website.</p>
            </div>
          </section>

          <section id="contact-us" className="slide-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3"><Mail className="w-6 h-6 text-gray-300" /> 9. Contact Us</h2>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30">
              <p className="text-gray-300 mb-4">If you have questions about this Shipping Policy, contact us at:</p>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:contact@vectriumventures.com" className="hover:text-white">contact@vectriumventures.com</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VectriumShipping;

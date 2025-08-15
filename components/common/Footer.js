"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Instagram, Linkedin, Phone, Mail, MessageCircle, Cpu, Zap, Bot } from 'lucide-react';

const Footer = () => {
  const socialRefs = useRef([]);
  const linkRefs = useRef([]);
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Initialize enhanced 3D hover effects
  useEffect(() => {
    // Enhanced social icons 3D animation
    const initSocialHover = (element, index) => {
      if (!element) return;

      const handleMouseEnter = () => {
        element.style.transform = 'perspective(1000px) rotateX(-15deg) rotateY(10deg) translateZ(30px) scale(1.2)';
        element.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        // Subtle monochrome glowing effects
        const colors = {
          0: 'rgba(255, 255, 255, 0.15)', // Instagram
          1: 'rgba(255, 255, 255, 0.15)', // LinkedIn  
          2: 'rgba(255, 255, 255, 0.15)', // WhatsApp
          3: 'rgba(255, 255, 255, 0.15)', // Phone
          4: 'rgba(255, 255, 255, 0.15)'  // Email
        };
        
        element.style.boxShadow = `
          0 20px 40px rgba(0, 0, 0, 0.4),
          0 0 30px ${colors[index]},
          inset 0 2px 0 rgba(255, 255, 255, 0.2),
          inset 0 -2px 0 rgba(0, 0, 0, 0.2)
        `;
        
        // Add pulsing effect
        element.style.animation = 'pulse-glow 2s ease-in-out infinite';
      };

      const handleMouseLeave = () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
        element.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        element.style.animation = 'none';
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    };

    // Enhanced link hover effects
    const initLinkHover = (element) => {
      if (!element) return;

      const handleMouseEnter = () => {
        element.style.transform = 'perspective(1000px) rotateX(-5deg) translateZ(10px) translateY(-2px)';
        element.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        element.style.boxShadow = `
          0 10px 25px rgba(255, 255, 255, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
        element.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))';
        element.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        element.style.backdropFilter = 'blur(10px)';
      };

      const handleMouseLeave = () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) translateZ(0px) translateY(0px)';
        element.style.boxShadow = 'none';
        element.style.background = 'transparent';
        element.style.border = '1px solid transparent';
        element.style.backdropFilter = 'none';
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    };

    // Enhanced logo 3D hover effect
    const initLogoHover = (element) => {
      if (!element) return;

      const handleMouseEnter = () => {
        setIsHovered(true);
        element.style.transform = 'perspective(1000px) rotateX(-8deg) rotateY(8deg) translateZ(15px) scale(1.08)';
        element.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        element.style.filter = 'brightness(1.3) drop-shadow(0 15px 30px rgba(255, 255, 255, 0.1))';
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
        element.style.filter = 'brightness(1) drop-shadow(none)';
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    };

    // Apply effects
    socialRefs.current.forEach(initSocialHover);
    linkRefs.current.forEach(initLinkHover);
    if (logoRef.current) initLogoHover(logoRef.current);

    // Add CSS keyframes for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-glow {
        0%, 100% { 
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(255, 255, 255, 0.15),
            inset 0 2px 0 rgba(255, 255, 255, 0.2),
            inset 0 -2px 0 rgba(0, 0, 0, 0.2);
        }
        50% { 
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(255, 255, 255, 0.25),
            inset 0 2px 0 rgba(255, 255, 255, 0.3),
            inset 0 -2px 0 rgba(0, 0, 0, 0.2);
        }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(-5px) rotate(-0.5deg); }
      }
      
      @keyframes neural-pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
      }
      
      .floating-icon {
        animation: float 6s ease-in-out infinite;
      }
      
      .neural-network {
        animation: neural-pulse 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/vectrium_ventures/profilecard/?igsh=cjh0YXhrZWxmbDg5', 
      label: 'Instagram'
    },
    { 
      icon: Linkedin, 
      href: 'linkedin.com/company/vectrium-ventures/', 
      label: 'LinkedIn'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/918815631154', 
      label: 'WhatsApp'
    },
    { 
      icon: Phone, 
      href: 'tel:+918815631154', 
      label: 'Call'
    },
    { 
      icon: Mail, 
      href: 'mailto:contact@vectriumventures.com', 
      label: 'Email'
    }
  ];

  const footerLinks = {
    'Company': [
      { name: 'About', href: '/about' },
      { name: 'Career', href: '/career' },
      { name: 'Contact', href: '/contact' }
    ],
    'Products': [
      { name: 'AI Tools', href: '/ai-tools' },
      { name: 'Automation', href: '/automation' },
      { name: 'AI Agents', href: '/ai-agents' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Shipping Policy', href: '/shipping' },
      { name: 'Refund Policy', href: '/refund' }
    ]
  };

  return (
    <footer 
      ref={containerRef}
      className="bg-gradient-to-b from-[#0A0A0A] to-[#000000] border-t border-gray-800/30 relative overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 2 - 1}deg) rotateY(${mousePosition.x * 2 - 1}deg)`
      }}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="neural-network absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
          <div className="neural-network absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full" style={{ animationDelay: '1s' }}></div>
          <div className="neural-network absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full" style={{ animationDelay: '2s' }}></div>
          <div className="neural-network absolute bottom-1/3 right-1/4 w-1 h-1 bg-gray-300 rounded-full" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" className="neural-network" />
            <line x1="66%" y1="33%" x2="33%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" className="neural-network" style={{ animationDelay: '1s' }} />
            <line x1="33%" y1="75%" x2="75%" y2="66%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" className="neural-network" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        {/* Floating AI icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Cpu className="floating-icon absolute top-1/4 right-1/4 w-6 h-6 text-gray-700 opacity-20" style={{ animationDelay: '0s' }} />
          <Bot className="floating-icon absolute bottom-1/3 left-1/5 w-5 h-5 text-gray-600 opacity-15" style={{ animationDelay: '2s' }} />
          <Zap className="floating-icon absolute top-1/2 left-1/6 w-4 h-4 text-gray-700 opacity-25" style={{ animationDelay: '4s' }} />
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-gray-900/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Company Info - Left Side */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <a 
                href="#" 
                ref={logoRef}
                className="inline-block transition-all duration-600 "
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="/img/logo.png" 
                  alt="Vectrium Ventures" 
                  className="h-24 w-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <h3 
                  className="hidden text-white font-bold text-3xl tracking-tight mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}
                >
                  Vectrium Ventures
                </h3>
              </a>
            </div>
            
            <div className="space-y-6">
              <p 
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
                style={{ 
                  fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif',
                  transform: `translateZ(${isHovered ? '10px' : '0px'})`,
                  transition: 'transform 0.6s ease-out'
                }}
              >
                <span className="text-white font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Vectrium Ventures
                </span> is a next-gen tech company building powerful AI tools, automation workflows, and agentic solutions to transform the way businesses grow.
              </p>
              
              <p 
                className="text-gray-400 text-base leading-relaxed max-w-lg"
                style={{ 
                  fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif',
                  transform: `translateZ(${isHovered ? '5px' : '0px'})`,
                  transition: 'transform 0.6s ease-out 0.1s'
                }}
              >
                We blend innovation with simplicity—delivering real results through cutting-edge technology, human-centered design, and seamless digital experiences.
              </p>
              
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full backdrop-blur-sm border border-gray-600/30">
                <Bot className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm font-medium">AI-Powered Solutions</span>
              </div>
            </div>
          </div>
          
          {/* Links Grid - Right Side */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="space-y-4">
                  <h4 
                    className="text-white font-semibold text-sm uppercase tracking-wider mb-6 relative"
                    style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}
                  >
                    {category}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></div>
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          ref={el => linkRefs.current.push(el)}
                          className="text-gray-400 hover:text-white text-sm transition-all duration-400 block py-2 px-3 -mx-3 rounded-lg group relative overflow-hidden"
                          style={{ 
                            fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif',
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          <span className="relative z-10">{link.name}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mb-12">
          <h4 
            className="text-white font-semibold text-sm uppercase tracking-wider mb-8 text-center relative"
            style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}
          >
            Connect With Us
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </h4>
          <div className="flex justify-center space-x-4 sm:space-x-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  ref={el => socialRefs.current[index] = el}
                  className="w-24 h-16 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center transition-all duration-500 relative overflow-hidden group border border-gray-700/50"

                  style={{ 
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                  }}
                  aria-label={social.label}
                >
                  <Icon size={22} className="text-gray-300 group-hover:text-white relative z-10 transition-colors duration-300" />
                  
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rotating shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p 
              className="text-gray-500 text-sm"
              style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}
            >
              &copy; {new Date().getFullYear()} Vectrium Ventures. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <span 
                className="text-gray-600 text-xs uppercase tracking-wider"
                style={{ fontFamily: 'Geist Sans, system-ui, -apple-system, sans-serif' }}
              >
                Built with Innovation & Precision
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

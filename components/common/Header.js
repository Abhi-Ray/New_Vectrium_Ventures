"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  User,
  LogOut,
  Settings,
  BarChart3,
  Shield,
  CreditCard,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import Link from "next/link";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const navRefs = useRef([]);
  const loginButtonRef = useRef(null);

  // Check if user is logged in based on session
  const isLoggedIn = status === "authenticated" && session;

  // Initialize 3D hover effects for navigation
  useEffect(() => {
    const initNavHover = (element, index) => {
      if (!element) return;

      const handleMouseEnter = (e) => {
        // 3D tilt effect
        element.style.transform =
          "perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(10px)";
        element.style.transition = "all 0.3s cubic-bezier(0.4, 0, 1, 1)";

        // Glowing border with 3D depth
        element.style.boxShadow = `
          0 0 20px rgba(59, 130, 246, 0.4),
          0 5px 15px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
        element.style.border = "1px solid rgba(59, 130, 246, 0.5)";
        element.style.background =
          "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))";
      };

      const handleMouseLeave = (e) => {
        element.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        element.style.boxShadow = "none";
        element.style.border = "1px solid transparent";
        element.style.background = "transparent";
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    // Initialize hover effects for all nav items
    navRefs.current.forEach(initNavHover);

    // Initialize 3D login button effect
    if (loginButtonRef.current) {
      const button = loginButtonRef.current;

      const handleMouseEnter = () => {
        button.style.transform =
          "perspective(1000px) rotateX(-8deg) rotateY(8deg) translateZ(15px) scale(1.05)";
        button.style.boxShadow = `
          0 10px 25px rgba(255, 255, 255, 0.15),
          0 0 30px rgba(255, 255, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          inset 0 -1px 0 rgba(0, 0, 0, 0.3)
        `;
        button.style.background = "rgba(0, 0, 0, 0.3)";
        button.style.backdropFilter = "blur(10px)";
        button.style.border = "1px solid rgba(255, 255, 255, 0.1)";
      };

      const handleMouseLeave = () => {
        button.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)";
        button.style.boxShadow = "0 4px 15px rgba(255, 255, 255, 0.05)";
        button.style.background = "rgba(0, 0, 0, 0.3)";
        button.style.backdropFilter = "blur(10px)";
        button.style.border = "1px solid rgba(255, 255, 255, 0.1)";
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Automation", href: "/automation" },
    { name: "AI Agents", href: "/ai-agents" },
    { name: "Career", href: "/career" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogin = () => {
    // Navigate to login page using Next.js router
    router.push("/login");
  };

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header className="bg-[#0A0A0A] border-b border-gray-800/30 sticky top-0 z-50 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="block transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              <img
                src="/img/logo.png"
                alt="Vectrium Ventures"
                className="h-24 py-2 w-auto"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className="hidden text-white font-bold text-xl tracking-tight"
                style={{
                  fontFamily:
                    "Geist Sans, system-ui, -apple-system, sans-serif",
                }}
              >
                Vectrium Ventures
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  ref={(el) => (navRefs.current[index] = el)}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden"
                  style={{
                    fontFamily:
                      "Geist Sans, system-ui, -apple-system, sans-serif",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:block">
            {!isLoggedIn ? (
              <button
                ref={loginButtonRef}
                onClick={handleLogin}
                className="bg-black/30 backdrop-blur-md text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden border border-white/10 hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                style={{
                  fontFamily:
                    "Geist Sans, system-ui, -apple-system, sans-serif",
                  transformStyle: "preserve-3d",
                  boxShadow: "0 4px 15px rgba(255, 255, 255, 0.05)",
                }}
              >
                <span className="relative z-10">Login</span>
              </button>
            ) : (
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-black/30 backdrop-blur-md border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-110 relative overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                  aria-label="User menu"
                >
                  <User size={18} className="relative z-10" />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-3 w-64 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800/50 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                    style={{
                      boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.8),
                        0 0 0 1px rgba(255, 255, 255, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                  >
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-800/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          {session?.user?.image ? (
                            <img
                              src={session.user.image}
                              alt="Profile"
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-white text-sm font-semibold">
                              {session?.user?.name
                                ? session.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()
                                    .slice(0, 2)
                                : "U"}
                            </span>
                          )}
                        </div>
                        <div>
                          <p
                            className="text-sm font-medium text-white"
                            style={{
                              fontFamily:
                                "Geist Sans, system-ui, -apple-system, sans-serif",
                            }}
                          >
                            {session?.user?.name || "User"}
                          </p>
                          <p
                            className="text-xs text-gray-400 truncate max-w-[180px]"
                            style={{
                              fontFamily:
                                "Geist Sans, system-ui, -apple-system, sans-serif",
                            }}
                          >
                            {session?.user?.email || "No email"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                      <a
                        href="#"
                        disabled
                        className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200 group"
                        style={{
                          fontFamily:
                            "Geist Sans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        <Settings className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                        Profile Settings
                      </a>
                      <a
                        href="#"
                        disabled
                        className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200 group"
                        style={{
                          fontFamily:
                            "Geist Sans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        <BarChart3 className="w-4 h-4 mr-3 text-gray-400 group-hover:text-green-400 transition-colors duration-200" />
                        Dashboard
                      </a>
                    </div>

                    {/* Logout Section */}
                    <div className="border-t border-gray-800/50 pt-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2.5 text-sm text-gray-300 hover:bg-red-900/20 hover:text-red-400 transition-all duration-200 group"
                        style={{
                          fontFamily:
                            "Geist Sans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-3 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-gray-300 hover:text-white p-2 transition-all duration-300 hover:bg-gray-800/30 rounded-lg group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Vercel Style */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 z-50 transition-all duration-300 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Container */}
          <div className="relative mx-4 mt-2">
            <div
              className="bg-black/95 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden"
              style={{
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.8),
                  0 0 0 1px rgba(255, 255, 255, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              {/* Navigation Links */}
              <div className="p-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 relative overflow-hidden"
                    style={{
                      fontFamily:
                        "Geist Sans, system-ui, -apple-system, sans-serif",
                      animationDelay: `${index * 50}ms`,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-base font-medium relative z-10">
                        {link.name}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors duration-200" />
                    </div>

                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-4" />

              {/* Auth Section */}
              <div className="p-2">
                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogin();
                      setIsMenuOpen(false);
                    }}
                    className="group w-full flex items-center justify-between px-4 py-3 rounded-xl bg-black/30 backdrop-blur-md text-white font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] relative overflow-hidden border border-white/10"
                    style={{
                      fontFamily:
                        "Geist Sans, system-ui, -apple-system, sans-serif",
                    }}
                  >
                    <span className="relative z-10">Sign In</span>
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center relative z-10">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    {/* Subtle white gradient shine */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

                    {/* Hover highlight overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ) : (
                  <div className="space-y-1">
                    {/* User Profile Section */}
                    <div className="px-4 py-3 rounded-xl bg-gray-800/30 border border-gray-700/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-gray-700/50">
                          {session?.user?.image ? (
                            <img
                              src={session.user.image}
                              alt="Profile"
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-white text-sm font-semibold">
                              {session?.user?.name
                                ? session.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()
                                    .slice(0, 2)
                                : "U"}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm font-medium text-white truncate"
                            style={{
                              fontFamily:
                                "Geist Sans, system-ui, -apple-system, sans-serif",
                            }}
                          >
                            {session?.user?.name || "User"}
                          </p>
                          <p
                            className="text-xs text-gray-400 truncate"
                            style={{
                              fontFamily:
                                "Geist Sans, system-ui, -apple-system, sans-serif",
                            }}
                          >
                            {session?.user?.email || "No email"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-1">
                      <a
                        href="#"
                        className="group flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                        style={{
                          fontFamily:
                            "Geist Sans, system-ui, -apple-system, sans-serif",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                        <span className="text-sm font-medium">Settings</span>
                      </a>
                      <a
                        href="#"
                        className="group flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                        style={{
                          fontFamily:
                            "Geist Sans, system-ui, -apple-system, sans-serif",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <BarChart3 className="w-4 h-4 mr-3 text-gray-400 group-hover:text-green-400 transition-colors duration-200" />
                        <span className="text-sm font-medium">Dashboard</span>
                      </a>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="group w-full flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-red-400 hover:bg-red-900/20 transition-all duration-200"
                        style={{
                          fontFamily:
                            "Geist Sans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-3 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
                        <span className="text-sm font-medium">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

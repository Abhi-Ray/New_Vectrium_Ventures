"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Rocket,
  FilePenLine,
  Search,
  Target,
  BarChart3,
  TrendingUp,
  Monitor,
  Mail,
  Phone,
  MessageCircle,
  ShoppingBag,
  Package,
  Eye,
  ArrowUpRight,
  Gauge,
  Award,
  Send,
  UserCog,
} from "lucide-react";

const services = [
  {
    icon: UserCog,
    title: "Amazon Account Management",
    description:
      "Complete account management to ensure smooth operations and healthy growth.",
  },
  {
    icon: FilePenLine,
    title: "Listing Creation & Optimization",
    description:
      "SEO optimized listings that rank higher and convert better.",
  },
  {
    icon: Search,
    title: "SEO & Keyword Research",
    description:
      "In-depth keyword research to improve visibility and rankings.",
  },
  {
    icon: Target,
    title: "PPC Campaign Management",
    description:
      "Complete PPC setup, optimization and management for better ROAS.",
  },
  {
    icon: BarChart3,
    title: "Competitor Analysis",
    description:
      "Track competitors and find opportunities to stay ahead.",
  },
  {
    icon: Rocket,
    title: "Product Launch Strategy",
    description:
      "Proven launch strategies to make your products a market success.",
  },
  {
    icon: Monitor,
    title: "Performance Monitoring",
    description:
      "Regular reporting and insights for continuous growth.",
  },
];

const tools = [
  { name: "Helium 10" },
  { name: "Amazon Brand Analytics" },
  { name: "Amazon Advertising" },
  { name: "Seller Central" },
];

const benefits = [
  { icon: Eye, label: "Increase Visibility" },
  { icon: TrendingUp, label: "Better Rankings" },
  { icon: ShoppingBag, label: "More Traffic & Sales" },
  { icon: Gauge, label: "Maximize ROAS" },
  { icon: Award, label: "Build a Strong Brand" },
];

const platforms = [
  { name: "Amazon", logo: "/img/brands/amazon.png" },
  { name: "Flipkart", logo: "/img/brands/flipkart.png" },
  { name: "Meesho", logo: "/img/brands/meesho.png" },
  { name: "Blinkit", logo: "/img/brands/blinkit.png" },
];

function ServiceIcon({ Icon }) {
  return <Icon className="w-7 h-7 text-[#FF9900]" />;
}

export function AmazonGrowthPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white relative overflow-hidden">
      {/* Subtle golden glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#F5B041]/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#FF9900]/10 blur-[140px]" />
        <div
          className="absolute top-0 left-0 w-72 h-72 opacity-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(245,176,65,0.3), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 opacity-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(255,153,0,0.3), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-14">
        {/* ===================== SECTION 1: HERO ===================== */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* LEFT 60% */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="font-bold uppercase tracking-tight leading-[0.92] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{ fontFamily: "Oswald, Bebas Neue, Arial, sans-serif" }}
              >
                <span className="block text-white">Grow Your</span>
                <span className="block text-[#FF9900]">Amazon Business</span>
                <span className="block text-white">With Experts</span>
              </h1>

              {/* thin orange divider */}
              <div className="mt-5 h-px w-32 bg-[#FF9900]" />

              {/* Orange info card */}
              <div
                className="mt-6 rounded-xl p-5 sm:p-6 flex items-start gap-4 max-w-xl"
                style={{
                  background: "#FF9900",
                  boxShadow: "0 10px 30px rgba(0,0,0,.25)",
                }}
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-[#FF9900]" />
                </div>
                <p className="text-black text-sm sm:text-base leading-relaxed font-medium">
                  If you want to grow your{" "}
                  <strong className="font-extrabold">Amazon account</strong>{" "}
                  with the latest tools and strategies,{" "}
                  <strong className="font-extrabold">
                    we are here to help you!
                  </strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT 40% - Laptop mockup with sales dashboard */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Amazon logo top-right */}
              <div className="absolute -top-3 right-0 z-20 bg-white rounded-md px-2 py-1 drop-shadow-[0_4px_12px_rgba(255,153,0,0.3)]">
                <img
                  src="/img/brands/amazon.png"
                  alt="Amazon"
                  className="w-24 sm:w-28 object-contain"
                />
              </div>

              {/* Laptop */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="rounded-t-2xl border-4 border-[#1f1f1f] bg-[#161616] p-3 sm:p-4 shadow-2xl">
                  <div className="rounded-lg bg-[#0B0B0B] p-4 sm:p-5 border border-[#FF9900]/20">
                    {/* Dashboard */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
                        Sales Dashboard
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-500">
                        Last 30 days
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      ₹25,35,680
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-green-400 text-sm font-semibold flex items-center">
                        <ArrowUpRight className="w-4 h-4" /> +35.6%
                      </span>
                      <span className="text-gray-500 text-xs">
                        vs last 30 days
                      </span>
                    </div>

                    {/* Graph - CSS based line chart approximation */}
                    <div className="mt-4 h-24 sm:h-28 relative overflow-hidden rounded-md bg-gradient-to-b from-[#FF9900]/10 to-transparent">
                      <div className="absolute inset-0 flex items-end">
                        {[20, 35, 28, 50, 42, 65, 55, 80, 72, 95].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 mx-px rounded-t-sm bg-gradient-to-t from-[#FF9900]/30 to-[#FF9900]"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bars */}
                    <div className="mt-3 flex items-end gap-1.5 h-12 sm:h-14">
                      {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-[#FF9900]/40 to-[#FF9900]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Laptop base */}
                <div className="h-2 w-[112%] -ml-[6%] bg-[#1f1f1f] rounded-b-xl" />
                <div className="h-1 w-1/3 mx-auto bg-[#2a2a2a] rounded-b-md" />
              </div>

              {/* Shopping cart with amazon box */}
              <div className="absolute -left-3 bottom-6 sm:-left-6 z-20">
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-[#FF9900] flex items-center justify-center shadow-lg rotate-3">
                    <Package className="w-7 h-7 text-black" />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 bg-[#1f1f1f] rounded-full" />
                </div>
              </div>

              {/* Stack of amazon packages */}
              <div className="absolute -right-2 bottom-8 z-20 hidden sm:flex flex-col items-end gap-1">
                <div className="w-10 h-10 rounded bg-[#FF9900]/90 flex items-center justify-center">
                  <Package className="w-5 h-5 text-black" />
                </div>
                <div className="w-8 h-8 rounded bg-[#FF9900]/70 flex items-center justify-center">
                  <Package className="w-4 h-4 text-black" />
                </div>
              </div>

              {/* Circular badge */}
              <div className="absolute -bottom-4 right-2 sm:right-6 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#FF9900] bg-black flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-white leading-tight">
                  More
                  <br />
                  Visibility
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-white leading-tight mt-0.5">
                  More Sales
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#FF9900] font-bold leading-tight mt-0.5">
                  More Growth
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== SECTION 2: OUR SERVICES ===================== */}
        <section className="mt-16 sm:mt-20">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white tracking-wide"
              style={{ fontFamily: "Oswald, Bebas Neue, Arial, sans-serif" }}
            >
              Our Services
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
          </div>
          <div className="mx-auto h-px w-24 bg-[#FF9900]/60 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-px bg-[#FF9900]/20 rounded-xl overflow-hidden border border-[#FF9900]/25">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#0B0B0B] p-5 hover:bg-[#161616] transition-colors duration-300 flex flex-col items-start"
              >
                <div className="mb-3">
                  <ServiceIcon Icon={s.icon} />
                </div>
                <h3
                  className="text-xs sm:text-sm font-bold uppercase text-white leading-tight mb-2"
                  style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#BFBFBF] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== SECTION 3: TOOLS WE USE ===================== */}
        <section className="mt-16 sm:mt-20">
          <div
            className="rounded-xl border border-[#FF9900]/35 p-6 sm:p-8 bg-[#0B0B0B]"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,.25)" }}
          >
            <div className="flex justify-center mb-6">
              <span className="inline-block bg-[#FF9900] text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded">
                Tools We Use
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.map((t, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#FF9900]/25 bg-[#161616] p-4 flex items-center justify-center text-center"
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full border border-[#FF9900]/30 flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-[#FF9900]" />
                    </div>
                    <span className="text-xs sm:text-sm text-white font-medium">
                      {b.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== PLATFORMS WE WORK ON ===================== */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#FF9900] text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded">
              Platforms We Work On
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {platforms.map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#FF9900]/25 bg-[#161616] p-5 sm:p-6 flex items-center justify-center hover:border-[#FF9900]/60 transition-colors duration-300"
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,.25)" }}
              >
                <div
                  className={`flex items-center justify-center ${
                    p.name === "Amazon"
                      ? "bg-white rounded-md px-3 py-1.5"
                      : ""
                  }`}
                >
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-12 sm:max-h-14 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== SECTION 4: CTA ===================== */}
        <section className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT - Growth stats card */}
            <div
              className="rounded-xl border border-[#FF9900]/35 bg-[#0B0B0B] p-6 sm:p-8"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,.25)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-[#FF9900]" />
                <span className="text-xs uppercase tracking-widest text-[#FF9900] font-semibold">
                  Why Choose Us
                </span>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#FF9900]"
                    style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                  >
                    150+
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Products Launched
                  </p>
                </div>
                <div>
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#FF9900]"
                    style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                  >
                    35%+
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Avg. Sales Growth
                  </p>
                </div>
                <div>
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#FF9900]"
                    style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                  >
                    50+
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Happy Sellers
                  </p>
                </div>
                <div>
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#FF9900]"
                    style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                  >
                    4.9★
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Client Rating
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-[#FF9900]/20">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Data-driven strategies, expert execution, and dedicated
                  support to scale your business across multiple platforms.
                </p>
              </div>
            </div>

            {/* RIGHT - CTA */}
            <div className="text-left">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[0.95]"
                style={{ fontFamily: "Oswald, Bebas Neue, Arial, sans-serif" }}
              >
                <span className="text-white block">Let's Take Your</span>
                <span className="text-[#FF9900] block">Amazon Business</span>
                <span className="text-white block">To The Next Level!</span>
              </h2>

              <a
                href="https://wa.me/918602517947"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-6 bg-[#FF9900] text-black font-bold uppercase tracking-wide px-7 py-3.5 rounded-[10px] hover:brightness-110 transition"
                style={{ boxShadow: "0 8px 24px rgba(255,153,0,.25)" }}
              >
                <img
                  src="/img/brands/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                DM Us Today
              </a>
              <p className="mt-3 text-sm text-white">
                for a FREE account review and growth plan.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 5: CONTACT BAR ===================== */}
        <section className="mt-16 sm:mt-20">
          <div
            className="rounded-xl border border-[#FF9900]/35 bg-[#0B0B0B] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#FF9900]/25"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,.25)" }}
          >
            {/* Mail */}
            <div className="p-6 flex flex-col items-center text-center">
              <Mail className="w-7 h-7 text-[#FF9900] mb-2" />
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                Mail ID
              </h4>
              <a
                href="mailto:amazonmanagement84@gmail.com"
                className="text-sm sm:text-base text-white hover:text-[#FF9900] transition break-all"
              >
                amazonmanagement84@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="p-6 flex flex-col items-center text-center">
              <Phone className="w-7 h-7 text-[#FF9900] mb-2" />
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                Phone
              </h4>
              <a
                href="tel:+918602517947"
                className="text-sm sm:text-base text-white hover:text-[#FF9900] transition"
              >
                +91 86025 17947
              </a>
            </div>
            {/* WhatsApp */}
            <div className="p-6 flex flex-col items-center text-center">
              <img
                src="/img/brands/whatsapp.svg"
                alt="WhatsApp"
                className="w-8 h-8 mb-2"
              />
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                WhatsApp
              </h4>
              <a
                href="https://wa.me/918602517947"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-white hover:text-green-400 transition"
              >
                +91 86025 17947
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";
import React, { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Send, User, Mail, Phone, FileText, Briefcase, Link } from "lucide-react";

export function Job({ value = 'job' }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    portfolio: "",
    position: "",
    duration: "", // added for internship
    resume: null,
    cover: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const data = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          data.append(key, formData[key]);
        }
      });
      
      // Include application type (job vs internship)
      data.append('applicationType', value);
  
      const response = await fetch("/api/job", {
        method: "POST",
        body: data,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Application submitted successfully! We'll be in touch soon.",
        });
        
        // Reset form
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          portfolio: "",
          position: "",
          duration: "",
          resume: null,
          cover: "",
        });
        
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
        
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to submit application. Please try again.",
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center py-20">
      <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative z-20 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4">
            {value === 'internship' ? 'Internship Application' : 'Job Application'}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Join our mission to build cutting-edge AI tools and automation. Apply now and be part of the future.
          </p>
        </div>

        {/* Job Form */}
        <div className="bg-black/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                  <User size={16} />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                  <User size={16} />
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <Mail size={16} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <Phone size={16} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required

                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none"
                placeholder="+91 9876543210"
              />
            </div>

            {/* Portfolio */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <Link size={16} />
                LinkedIn / Portfolio
              </label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                required

                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label
                htmlFor="position"
                className="text-gray-300 text-sm font-medium flex items-center gap-2"
              >
                <Briefcase size={16} />
                Position Applying For
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none transition-all duration-200"
                placeholder={value === 'internship' ? 'e.g., AI Intern' : 'e.g., Frontend Developer'}
              />
            </div>

{/* Internship Duration - only for internships */}
{value === 'internship' && (
  <div className="space-y-2">
    <label
      htmlFor="duration"
      className="text-gray-300 text-sm font-medium flex items-center gap-2"
    >
      <FileText size={16} />
      Internship Duration
    </label>
    <input
      type="text"
      id="duration"
      name="duration"
      value={formData.duration || ""}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none"
      placeholder="e.g., 3 months"
    />
  </div>
)}

            {/* Resume Upload */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <FileText size={16} />
                Upload Resume (PDF)
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                accept=".pdf"
                required
                className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-gray-300 hover:file:bg-gray-700"
              />
            </div>

            {/* Cover Letter */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <FileText size={16} />
                Cover Letter / Short Bio
              </label>
              <textarea
                name="cover"
                value={formData.cover}
                onChange={handleChange}
                rows={5}
                required

                className="w-full px-4 py-3 bg-black/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500/20 focus:outline-none resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div
                className={cn(
                  "p-4 rounded-lg text-sm font-medium backdrop-blur-sm",
                  submitStatus.type === "success"
                    ? "bg-green-900/30 text-green-300 border border-green-800/50"
                    : "bg-red-900/30 text-red-300 border border-red-800/50"
                )}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm",
                isSubmitting
                  ? "bg-gray-800/60 cursor-not-allowed border border-gray-700/50"
                  : "bg-gradient-to-r from-black/80 to-gray-900/80 hover:from-black/90 hover:to-gray-900/90 border border-gray-700/50 hover:border-gray-600/50 shadow-lg hover:shadow-xl"
              )}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit Application
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

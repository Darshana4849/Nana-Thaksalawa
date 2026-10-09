import React, { useState } from 'react';
import { PROJECT_METADATA } from '../data/projectData';
import {
  MapPin,
  Copy,
  Check,
  Send,
  AlertCircle,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedViaMailto, setSubmittedViaMailto] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROJECT_METADATA.officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build authentic mailto URI with sanitized params for static hosting compliance
    const mailtoUri = `mailto:${PROJECT_METADATA.officialEmail}?subject=${encodeURIComponent(
      `[Letter Helper Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUri;
    setSubmittedViaMailto(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="text-left max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
          <MessageSquare className="w-4 h-4" />
          <span>Inquiries & Research Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact the Research Team
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          For academic inquiries, educational trials, dataset questions, or research supervision
          discussions regarding the Letter Helper project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Contact Information & Institution (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Institutional Contact Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
            <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
              Project Correspondence
            </h2>

            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="space-y-1">
                <span className="font-semibold text-slate-700 dark:text-slate-200 block">Project Title:</span>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{PROJECT_METADATA.name}</p>
                <p className="text-slate-500 dark:text-slate-400">{PROJECT_METADATA.fullTitle}</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-700 dark:text-slate-200 block">Host Institution:</span>
                <p className="text-slate-800 dark:text-slate-200">{PROJECT_METADATA.institution}</p>
                <p className="text-slate-500 dark:text-slate-400">{PROJECT_METADATA.faculty}</p>
                <p className="text-slate-500 dark:text-slate-400">{PROJECT_METADATA.department}</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-700 dark:text-slate-200 block">Campus Address:</span>
                <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{PROJECT_METADATA.location}</span>
                </div>
              </div>
            </div>

            {/* Email Contact Box with Copy Button */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span>Official Research Email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
              <code className="block p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-xs text-blue-700 dark:text-blue-300 font-semibold select-all">
                {PROJECT_METADATA.officialEmail}
              </code>
            </div>
          </div>

          {/* Ethics & Academic Privacy Notice */}
          <div className="p-5 rounded-2xl bg-slate-900 dark:bg-slate-900/90 text-white space-y-2 text-xs border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Academic Communications Privacy</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              In accordance with university research governance, all correspondence submitted
              through this portal is maintained exclusively for educational and research evaluation
              purposes. No marketing telemetry or automated profiling is utilized.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Send an Inquiry</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below. For transparent static hosting compatibility, clicking submit
                launches your default mail client pre-addressed to the research coordinator.
              </p>
            </div>

            {submittedViaMailto && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Email client opened with message draft!
                </span>
                <p className="text-emerald-800 dark:text-emerald-300">
                  If your mail application did not open automatically, please send your email
                  directly to{' '}
                  <span className="font-mono font-semibold">{PROJECT_METADATA.officialEmail}</span>.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="font-bold text-slate-700 dark:text-slate-300 block">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Dr. A. Perera / Student Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                    errors.name
                      ? 'border-rose-400 bg-rose-50/30 dark:bg-rose-950/30'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-800'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="font-bold text-slate-700 dark:text-slate-300 block">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@institution.edu or name@domain.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                    errors.email
                      ? 'border-rose-400 bg-rose-50/30 dark:bg-rose-950/30'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-800'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-bold text-slate-700 dark:text-slate-300 block">
                  Subject / Topic <span className="text-rose-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Academic Examination Inquiry / Pilot Trial Request"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                    errors.subject
                      ? 'border-rose-400 bg-rose-50/30 dark:bg-rose-950/30'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-800'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-bold text-slate-700 dark:text-slate-300 block">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Please state the nature of your inquiry, department affiliation, or research interest..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                    errors.message
                      ? 'border-rose-400 bg-rose-50/30 dark:bg-rose-950/30'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-800'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

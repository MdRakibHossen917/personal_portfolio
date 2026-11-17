'use client';

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { contactData } from '@/data/contact';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  _hp: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export default function ContactForm() {
  const formStartTime = useRef<number>(Date.now());

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: contactData.projectTypes[0] || 'MERN Stack Web Application',
    message: '',
    _hp: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Full Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Please select a project inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmissionFeedback(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _hp: formData._hp,
          _t: formStartTime.current,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionFeedback({
          type: 'success',
          message:
            data.message ||
            'Thank you! Your message has been delivered successfully. I will get back to you shortly.',
        });

        // Reset form fields
        setFormData({
          name: '',
          email: '',
          projectType: contactData.projectTypes[0] || 'MERN Stack Web Application',
          message: '',
          _hp: '',
        });
        setErrors({});
        formStartTime.current = Date.now();
      } else {
        setSubmissionFeedback({
          type: 'error',
          message:
            data.error ||
            'Failed to deliver message. Please try again or email directly to rakibhossen.dev@gmail.com.',
        });
      }
    } catch {
      setSubmissionFeedback({
        type: 'error',
        message:
          'Network or server error occurred while sending your message. Please check your connection or email directly at rakibhossen.dev@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[14px] border border-slate-800/80 bg-[#10192B] p-6 sm:p-8 shadow-xs">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* Spam Protection Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="_hp">Leave this field blank</label>
          <input
            id="_hp"
            name="_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData._hp}
            onChange={handleChange}
          />
        </div>

        {/* First Row: Full Name and Email Address */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase mb-1.5"
            >
              FULL NAME <span className="text-rose-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              disabled={isSubmitting}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`h-11 w-full rounded-md border bg-[#1E293B] px-3.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed ${
                errors.name
                  ? 'border-rose-500/80 focus:ring-rose-500'
                  : 'border-slate-700/80 focus:border-transparent'
              }`}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 flex items-center gap-1 font-mono text-[11px] text-rose-400"
              >
                <AlertCircle className="h-3 w-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase mb-1.5"
            >
              EMAIL ADDRESS <span className="text-rose-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`h-11 w-full rounded-md border bg-[#1E293B] px-3.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed ${
                errors.email
                  ? 'border-rose-500/80 focus:ring-rose-500'
                  : 'border-slate-700/80 focus:border-transparent'
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 flex items-center gap-1 font-mono text-[11px] text-rose-400"
              >
                <AlertCircle className="h-3 w-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Second Row: Project Type / Inquiries Select */}
        <div>
          <label
            htmlFor="projectType"
            className="block font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase mb-1.5"
          >
            PROJECT TYPE / INQUIRIES <span className="text-rose-400">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            disabled={isSubmitting}
            value={formData.projectType}
            onChange={handleChange}
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            className="h-11 w-full rounded-md border border-slate-700/80 bg-[#1E293B] px-3.5 text-sm text-[#F8FAFC] transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {contactData.projectTypes.map((type) => (
              <option key={type} value={type} className="bg-[#1E293B] text-white">
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p
              id="projectType-error"
              className="mt-1 flex items-center gap-1 font-mono text-[11px] text-rose-400"
            >
              <AlertCircle className="h-3 w-3" />
              <span>{errors.projectType}</span>
            </p>
          )}
        </div>

        {/* Third Row: Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase mb-1.5"
          >
            MESSAGE <span className="text-rose-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            disabled={isSubmitting}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline, and goals..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`min-h-[120px] w-full resize-y rounded-md border bg-[#1E293B] p-3.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed ${
              errors.message
                ? 'border-rose-500/80 focus:ring-rose-500'
                : 'border-slate-700/80 focus:border-transparent'
            }`}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 flex items-center gap-1 font-mono text-[11px] text-rose-400"
            >
              <AlertCircle className="h-3 w-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Form Submission Feedback Notice */}
        {submissionFeedback && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-lg p-3 text-xs leading-relaxed flex items-start gap-2.5 ${
              submissionFeedback.type === 'success'
                ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-200'
                : 'bg-rose-950/40 border border-rose-500/30 text-rose-200'
            }`}
          >
            {submissionFeedback.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
            ) : (
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
            )}
            <span>{submissionFeedback.message}</span>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-indigo-600 focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#10192B] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

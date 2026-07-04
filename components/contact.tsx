"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=ADITYACLOTHINGS,22VX+3V4,Peelamedu,Goldwins,Civil+Aerodrome+Post,Tamil+Nadu+641014";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream bg-linen" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-label text-gold">Get in Touch</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-navy leading-tight">
            Let&apos;s Build Something
            <span className="italic text-gold"> Together</span>
          </h2>
          <p className="text-navy/50 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you&apos;re a domestic retailer or an international buyer, we&apos;re ready
            to discuss your requirements. Reach out and let&apos;s start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details */}
            <div className="bg-navy rounded-2xl p-7 space-y-6">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase mb-4">Contact Information</p>
                <div className="space-y-4">
                  <a
                    href="mailto:adityaclothingscbe@gmail.com"
                    className="flex gap-3 items-start group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                      <Mail size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-cream/40 text-xs">Email</p>
                      <p className="text-cream text-sm group-hover:text-gold transition-colors">
                        adityaclothingscbe@gmail.com
                      </p>
                    </div>
                  </a>

                  <a href="tel:+919600213331" className="flex gap-3 items-start group">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                      <Phone size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-cream/40 text-xs">Mr. K P N Nair</p>
                      <p className="text-cream text-sm group-hover:text-gold transition-colors">
                        +91 96002 13331
                      </p>
                    </div>
                  </a>

                  <a href="tel:+918086338425" className="flex gap-3 items-start group">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                      <Phone size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-cream/40 text-xs">Mr. Ajmal Ahmed</p>
                      <p className="text-cream text-sm group-hover:text-gold transition-colors">
                        +91 80863 38425
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-cream/8">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-start group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <MapPin size={16} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <p className="text-cream/40 text-xs">Factory Address</p>
                      <ExternalLink size={10} className="text-cream/30" />
                    </div>
                    <p className="text-cream text-sm leading-relaxed group-hover:text-gold transition-colors">
                      11/3J, Tashkant Nagar, Gold Wins,
                      <br />
                      Avinashi Road, Coimbatore – 641 062
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map embed */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-navy/10 h-48 relative group"
            >
              <iframe
                title="Aditya Clothings Location"
                src="https://maps.google.com/maps?q=ADITYACLOTHINGS,Peelamedu,Goldwins,Civil+Aerodrome+Post,Tamil+Nadu+641014&output=embed&z=16"
                className="w-full h-full pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium bg-navy/70 px-3 py-1.5 rounded-full">
                  Open in Maps
                </span>
              </div>
            </a>
          </motion.div>

          {/* Right: Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 bg-white border border-navy/8 rounded-2xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-playfair text-2xl text-navy mb-3">
                  Enquiry Sent!
                </h3>
                <p className="text-navy/50 text-sm max-w-xs">
                  Thank you. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", message: "" }); }}
                  className="mt-6 text-gold text-sm underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-playfair text-2xl text-navy mb-6">
                  Send an Enquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-navy/50 text-xs tracking-wider uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-navy/15 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-navy/50 text-xs tracking-wider uppercase mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                        className="w-full px-4 py-3 rounded-lg border border-navy/15 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-navy/50 text-xs tracking-wider uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-navy/15 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-navy/50 text-xs tracking-wider uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-navy/15 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy/50 text-xs tracking-wider uppercase mb-2">
                      Message / Requirements *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your product requirements, quantities, timelines..."
                      className="w-full px-4 py-3 rounded-lg border border-navy/15 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 gradient-gold text-navy font-semibold text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

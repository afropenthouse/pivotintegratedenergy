"use client";
import React from "react";

import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Property Development", href: "/services" },
    { name: "Property Acquisition", href: "/services" },
    { name: "Luxury Rentals", href: "/services" },
    { name: "Facility Management", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand & About */}
          <div>
            <img
              src="/assets/pivot-logo.jpg"
              alt="Pivot Real Estate Development"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 leading-relaxed">
              Pivot Real Estate Development, a sister company to Pivot Integrated Energy Services, specializes in building, acquiring, renting, and delivering luxurious, sustainable properties.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:text-center">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="md:text-right">
            <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
            <div className="flex gap-4 justify-start md:justify-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-secondary-foreground/50">
              Follow us for the latest luxury <br className="hidden lg:block" /> property updates and energy solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10 py-8">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pivot Real Estate Development. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-secondary-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

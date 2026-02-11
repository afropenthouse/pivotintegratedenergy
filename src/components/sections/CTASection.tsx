import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="section-container relative">
        <div className="bg-gradient-primary rounded-3xl p-12 md:p-20 relative overflow-hidden">
          {/* Decorative triangles */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[150px] border-l-transparent border-t-[150px] border-t-primary-foreground/10 border-r-[150px] border-r-transparent hidden md:block" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-primary-foreground/10 border-r-[100px] border-r-transparent hidden md:block" />
          <div className="absolute top-1/2 right-20 w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-primary-foreground/5 border-r-[60px] border-r-transparent hidden lg:block" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-primary-foreground/85 text-lg md:text-xl mb-10 leading-relaxed">
              Let us help you discover the perfect luxury, eco-friendly living space. Our team is ready to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                variant="hero-outline"
                size="xl"
                className="text-lg px-10 py-6 bg-primary-foreground/10 border-primary-foreground group"
                asChild
              >
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                className="text-lg px-10 py-6 border-primary-foreground/50 group"
                asChild
              >
                <a href="tel:+2349167033651">
                  <Phone className="mr-2 h-5 w-5" />
                  +234 (0) 9167033651
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

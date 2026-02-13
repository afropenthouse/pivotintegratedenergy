import React from "react";
import { ArrowRight, Building2, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { icon: Building2, value: "50+", label: "Properties Managed" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Happy Clients" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-building.jpg"
          alt="Luxury real estate development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
      </div>

      {/* Geometric Triangle Decorations */}
      <div className="absolute top-32 right-16 w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-primary border-r-[60px] border-r-transparent opacity-80 hidden lg:block" />
      <div className="absolute top-56 right-40 w-0 h-0 border-l-[35px] border-l-transparent border-b-[60px] border-b-primary/60 border-r-[35px] border-r-transparent hidden lg:block" />
      <div className="absolute bottom-48 left-16 w-0 h-0 border-l-[45px] border-l-transparent border-t-[75px] border-t-primary border-r-[45px] border-r-transparent opacity-70 hidden lg:block" />

      {/* Content */}
      <div className="relative section-container py-20 lg:py-24 lg:max-w-[90%] lg:mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="flex-1 max-w-3xl">
            

            {/* Heading */}
            <h1 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.2] mb-6">
              Building Dreams,
              <span className="block text-primary mt-1">Delivering Excellence</span>
            </h1>

            {/* Description */}
            <p className="animate-slide-up delay-100 text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl leading-relaxed">
              Pivot Real Estate Development specializes in acquiring, building, and delivering luxurious, eco-friendly living spaces that combine elegance, innovation, and environmental responsibility.
            </p>

            {/* CTA Buttons */}
            <div className="animate-slide-up delay-200 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group text-base px-8 py-5" asChild>
                <Link href="/properties">
                  Explore Properties
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-5" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="animate-slide-up delay-300 lg:w-80">
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <stat.icon className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
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
      className="relative min-h-[100vh] flex items-center overflow-hidden"
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
      <div className="relative section-container py-40 lg:py-48">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in mb-10">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              Luxury Eco-Friendly Living
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-slide-up text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-[1.1] mb-10">
            Building Dreams,
            <span className="block text-primary mt-2">Delivering Excellence</span>
          </h1>

          {/* Description */}
          <p className="animate-slide-up delay-100 text-xl md:text-2xl text-primary-foreground/85 mb-14 max-w-2xl leading-relaxed">
            Pivot Real Estate Development specializes in acquiring, building, and delivering luxurious, eco-friendly living spaces that combine elegance, innovation, and environmental responsibility.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-200 flex flex-col sm:flex-row gap-5 mb-20">
            <Button variant="hero" size="xl" className="group text-lg px-10 py-6" asChild>
              <Link href="/properties">
                Explore Properties
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="text-lg px-10 py-6" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-slide-up delay-300 grid grid-cols-3 gap-8 md:gap-16 pt-10 border-t border-primary-foreground/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <stat.icon className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-3">
          <div className="w-1.5 h-3.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


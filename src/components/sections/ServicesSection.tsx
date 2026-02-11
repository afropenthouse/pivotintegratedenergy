import React from "react";
import { Building, Key, Hammer, Settings, Home, TreeDeciduous } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Property Development",
    description:
      "We develop modern, eco-friendly residential and commercial properties with cutting-edge design and sustainable practices.",
  },
  {
    icon: Key,
    title: "Property Acquisition",
    description:
      "Strategic acquisition of prime real estate assets in high-growth locations across Nigeria.",
  },
  {
    icon: Home,
    title: "Luxury Rentals",
    description:
      "Premium short-term and long-term rental properties offering exclusive living experiences.",
  },
  {
    icon: Settings,
    title: "Facility Management",
    description:
      "Comprehensive property management services ensuring optimal maintenance and value retention.",
  },
  {
    icon: Hammer,
    title: "Construction Services",
    description:
      "End-to-end construction supervision, project management, and quality control for new developments.",
  },
  {
    icon: TreeDeciduous,
    title: "Eco-Friendly Solutions",
    description:
      "Integration of sustainable building materials and energy-efficient systems in all our projects.",
  },
];

const ServicesSection = () => {
  return (
     <section id="services" className="section-padding bg-background relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)]" />
       
       <div className="section-container relative">
        {/* Section Header */}
         <div className="text-center mb-20">
           <span className="inline-block px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            What We <span className="text-primary">Offer</span>
          </h2>
           <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From acquisition to management, we provide comprehensive real estate solutions tailored to exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
               className="group relative bg-card border border-border/50 rounded-3xl p-10 card-hover overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Decorative Triangle */}
               <div className="absolute -top-10 -right-10 w-0 h-0 border-l-[80px] border-l-transparent border-b-[80px] border-b-primary/10 border-r-[80px] border-r-transparent transition-all duration-500 group-hover:border-b-primary/30" />

              <div className="relative">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
                   <service.icon className="h-8 w-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>
                 <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                 <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

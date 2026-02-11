import React from "react";
import { Search, FileText, Hammer, KeyRound } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "We understand your vision, preferences, and requirements to find the perfect match.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Planning",
    description: "Our experts craft a detailed plan covering design, budget, timeline, and sustainability goals.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Execution",
    description: "We bring plans to life with precision construction, quality materials, and eco-friendly practices.",
  },
  {
    icon: KeyRound,
    step: "04",
    title: "Delivery",
    description: "Your dream property is handed over with full documentation and ongoing management support.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.05),transparent_60%)]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A streamlined journey from your first inquiry to the keys in your hand.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative group text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-[calc(100%-20%)] h-[2px] bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}

              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-card border border-border/50 mb-8 shadow-sm group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-500">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <item.icon className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

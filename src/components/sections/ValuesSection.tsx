import React from "react";
import { 
  Shield, 
  Lightbulb, 
  ClipboardCheck, 
  Heart, 
  Star, 
  Users, 
  Award, 
  ThumbsUp 
} from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", description: "Honest and transparent in all dealings" },
  { icon: Lightbulb, title: "Innovation", description: "Creative solutions for modern living" },
  { icon: ClipboardCheck, title: "Accountability", description: "Taking responsibility for excellence" },
  { icon: Heart, title: "Excellent Customer Experience", description: "Prioritizing client satisfaction" },
  { icon: Star, title: "Excellence", description: "Striving for the highest standards" },
  { icon: Users, title: "Community", description: "Building lasting relationships" },
  { icon: Award, title: "Credibility", description: "Trusted industry reputation" },
  { icon: ThumbsUp, title: "Reliability", description: "Consistent delivery of promises" },
];

const ValuesSection = () => {
  return (
    <section id="values" className="section-padding bg-secondary overflow-hidden">
      <div className="section-container relative">
        {/* Geometric Decorations */}
         <div className="absolute -top-24 -left-24 w-0 h-0 border-l-[120px] border-l-transparent border-b-[200px] border-b-primary/20 border-r-[120px] border-r-transparent hidden lg:block" />
         <div className="absolute -bottom-24 -right-24 w-0 h-0 border-l-[100px] border-l-transparent border-t-[160px] border-t-primary/20 border-r-[100px] border-r-transparent hidden lg:block" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
         <div className="text-center mb-20 relative">
           <span className="inline-block px-5 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Core Values
          </span>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-8">
            What Drives <span className="text-primary">Us</span>
          </h2>
           <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Our core values define who we are and guide every decision we make in delivering exceptional real estate experiences.
          </p>
        </div>

        {/* Values Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 relative">
          {values.map((value, index) => (
            <div
              key={index}
               className="group text-center p-8 rounded-3xl bg-secondary-foreground/5 hover:bg-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
               <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary-foreground/20 group-hover:scale-110">
                 <value.icon className="h-8 w-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
              </div>
               <h3 className="text-lg md:text-xl font-bold text-secondary-foreground mb-3 transition-colors duration-500 group-hover:text-primary-foreground">
                {value.title}
              </h3>
               <p className="text-sm md:text-base text-secondary-foreground/60 transition-colors duration-500 group-hover:text-primary-foreground/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

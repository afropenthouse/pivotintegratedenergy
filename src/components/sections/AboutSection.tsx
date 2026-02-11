import React from "react";
import { Target, Eye, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
     <section id="about" className="section-padding bg-muted relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
       <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
       
       <div className="section-container relative">
        {/* Section Header */}
         <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            About Us
          </span>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Who We <span className="text-primary">Are</span>
          </h2>
           <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Pivot Real Estate Development, a sister company to Pivot Integrated Energy Services, specializes in building, acquiring, renting, and delivering luxurious, sustainable properties. We are committed to providing eco-friendly living spaces that combine elegance, innovation, and environmental responsibility. Our real estate and sustainability expertise ensures we create modern properties that meet client expectations.
          </p>
        </div>

        {/* Mission & Vision Cards */}
         <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Mission Card */}
           <div className="bg-card rounded-3xl p-10 shadow-card card-hover border border-border/50">
             <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
               <Target className="h-8 w-8 text-primary" />
            </div>
             <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We aim to build, acquire, and rent luxurious properties, delivering exceptional hospitality and exclusive living experiences with unmatched service and environmental responsibility.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-secondary rounded-3xl p-10 shadow-card card-hover border border-primary/20">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-5">Our Vision</h3>
            <p className="text-secondary-foreground/80 leading-relaxed text-lg">
              To provide and deliver exceptional facility management services while excelling in building luxurious, eco-friendly real estate, earning confidence through unmatched quality and innovation.
            </p>
          </div>
        </div>

        {/* Key Points */}
         <div className="bg-gradient-primary rounded-3xl p-10 md:p-16 relative overflow-hidden">
           {/* Decorative triangles */}
           <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-primary-foreground/10 border-r-[100px] border-r-transparent" />
           <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[80px] border-l-transparent border-b-[80px] border-b-primary-foreground/10 border-r-[80px] border-r-transparent" />
           
           <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-10 text-center relative">
            Why Choose Pivot?
          </h3>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[
              "Luxurious, eco-friendly properties",
              "Exceptional hospitality services",
              "Sustainable building practices",
              "Innovation-driven development",
              "Transparent client communication",
              "End-to-end property management",
            ].map((point, index) => (
               <div key={index} className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
                 <CheckCircle className="h-6 w-6 text-primary-foreground flex-shrink-0" />
                 <span className="text-primary-foreground text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

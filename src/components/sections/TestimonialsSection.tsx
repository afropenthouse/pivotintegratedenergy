import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Ogunlesi",
    role: "Homeowner, Lekki Phase 1",
    quote:
      "Pivot transformed our vision into reality. The attention to detail and eco-friendly approach exceeded every expectation. Our home is a masterpiece.",
    rating: 5,
  },
  {
    name: "Chioma Nwosu",
    role: "Investor, Victoria Island",
    quote:
      "Working with Pivot was seamless from start to finish. Their transparency and professionalism set a new standard in Nigerian real estate.",
    rating: 5,
  },
  {
    name: "Emeka Okafor",
    role: "Property Developer Partner",
    quote:
      "As a partner, I've seen firsthand their commitment to quality. Pivot delivers luxury that's sustainable—a rare combination in this market.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it—hear from the people who've experienced the Pivot difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-3xl p-10 card-hover overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Decorative quote */}
              <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="h-24 w-24 text-primary" />
              </div>

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

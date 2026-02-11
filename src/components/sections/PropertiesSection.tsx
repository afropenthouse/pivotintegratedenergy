import React from "react";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { allProperties } from "@/lib/data/properties";

const PropertiesSection = () => {
  const properties = allProperties.filter(p => p.featured).slice(0, 3);
  
  return (
    <section id="properties" className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Luxury <span className="text-primary">Living Spaces</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our portfolio of exceptional properties designed for those who appreciate the finer things in life.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
                {/* Price Overlay */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-secondary/90 backdrop-blur-sm text-secondary-foreground font-bold rounded-lg">
                  {property.priceDisplay}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Link href={`/properties/${property.id}`}>
                  <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-6 pb-4 border-b border-border mb-4">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {property.beds} Beds
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {property.baths} Baths
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {property.sqft} sqft
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn" asChild>
                  <Link href={`/properties/${property.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="xl" className="group" asChild>
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;

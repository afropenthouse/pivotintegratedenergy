"use client";

import { useState } from "react";
import { MapPin, Bed, Bath, Square, ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import { allProperties } from "@/lib/data/properties";

const categories = ["All", "Residential", "Commercial"];
const areas = ["All", "Lekki", "Ikoyi", "Victoria Island"];
const statuses = ["All", "For Sale", "For Rent"];

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeArea, setActiveArea] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || property.type === activeCategory;
    const matchesArea = activeArea === "All" || property.area === activeArea;
    const matchesStatus = activeStatus === "All" || property.status === activeStatus;

    return matchesSearch && matchesCategory && matchesArea && matchesStatus;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setActiveArea("All");
    setActiveStatus("All");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Properties
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              Discover Your <span className="text-primary">Ideal Home</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80">
              Browse through our collection of premium, sustainable properties across Lagos's most exclusive locations.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-6 shadow-soft">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="h-12 lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <div className={`flex-1 lg:flex gap-2 ${showFilters ? "flex flex-col absolute top-full left-0 right-0 bg-background p-6 border-b border-border lg:static lg:p-0 lg:border-none lg:flex-row" : "hidden lg:flex"}`}>
                <div className="flex flex-col lg:flex-row gap-2 flex-1">
                  <select
                    className="h-12 px-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary lg:w-40"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat} Type</option>
                    ))}
                  </select>
                  <select
                    className="h-12 px-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary lg:w-40"
                    value={activeArea}
                    onChange={(e) => setActiveArea(e.target.value)}
                  >
                    {areas.map((area) => (
                      <option key={area} value={area}>{area} Area</option>
                    ))}
                  </select>
                  <select
                    className="h-12 px-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary lg:w-40"
                    value={activeStatus}
                    onChange={(e) => setActiveStatus(e.target.value)}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                {(searchQuery || activeCategory !== "All" || activeArea !== "All" || activeStatus !== "All") && (
                  <Button
                    variant="ghost"
                    className="h-12 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={clearFilters}
                  >
                    <X className="h-5 w-5 mr-2" />
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Available Properties</h2>
              <p className="text-muted-foreground">
                Showing {filteredProperties.length} properties
              </p>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div key={property.id} className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                        {property.status}
                      </span>
                      {property.featured && (
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">
                          {property.type}
                        </span>
                        <Link href={`/properties/${property.id}`}>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {property.title}
                          </h3>
                        </Link>
                      </div>
                      <p className="text-lg font-bold text-primary">{property.priceDisplay}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-6">
                      <MapPin className="h-4 w-4 mr-1 text-primary" />
                      {property.location}
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border mb-6">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{property.sqft} sqft</span>
                      </div>
                    </div>
                    <Button className="w-full group/btn" variant="outline" asChild>
                      <Link href={`/properties/${property.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-muted/30 rounded-3xl border border-dashed border-border">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <h3 className="text-xl font-bold mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-8">
                We couldn't find any properties matching your current filters.
              </p>
              <Button onClick={clearFilters}>Clear all filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Location Banner */}
      <section className="py-12 bg-muted/50">
        <div className="section-container">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-secondary-foreground">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-secondary-foreground/70 text-lg">
                We have off-market properties and upcoming developments that might be perfect for you.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Speak to an Agent</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

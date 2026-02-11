import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  Phone, 
  Mail,
  Calendar,
  ShieldCheck,
  Zap,
  Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { allProperties } from "@/lib/data/properties";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const propertyId = parseInt(id);
  const property = allProperties.find(p => p.id === propertyId);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Back Button */}
          <Link 
            href="/properties" 
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content - Property Details */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-xl">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-bold">
                    {property.status}
                  </Badge>
                  {property.featured && (
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1 text-sm font-bold">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {property.priceDisplay}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-muted/50 rounded-2xl border border-border">
                <div className="flex flex-col items-center text-center p-4">
                  <Bed className="h-6 w-6 text-primary mb-2" />
                  <span className="font-bold">{property.beds}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <Bath className="h-6 w-6 text-primary mb-2" />
                  <span className="font-bold">{property.baths}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <Square className="h-6 w-6 text-primary mb-2" />
                  <span className="font-bold">{property.sqft}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Sq Ft</span>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                  <span className="font-bold">{property.type}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Property Type</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Description</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {property.description}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience luxury living in this eco-friendly masterpiece. Designed with sustainability at its core, this property offers a unique blend of modern architecture and environmental consciousness. From the moment you step inside, you'll notice the attention to detail and the high-quality materials used throughout.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Eco-Friendly Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: Zap, text: "Advanced Solar Energy System" },
                    { icon: Droplets, text: "Smart Water Recycling & Filtration" },
                    { icon: CheckCircle2, text: "Energy-Efficient HVAC Systems" },
                    { icon: CheckCircle2, text: "Sustainable Building Materials" },
                    { icon: CheckCircle2, text: "Smart Home Automation" },
                    { icon: CheckCircle2, text: "EV Charging Infrastructure" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-background border border-border rounded-xl">
                      <feature.icon className="h-5 w-5 text-primary mr-3" />
                      <span className="font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Contact & Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-muted p-8 rounded-3xl border border-border shadow-soft mb-8">
                  <h3 className="text-xl font-bold mb-6 text-center">Interested in this property?</h3>
                  
                  <div className="space-y-4 mb-8">
                    <Button size="lg" className="w-full font-bold" asChild>
                      <Link href="/contact">Schedule a Tour</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full font-bold" asChild>
                      <Link href="/contact">Make an Offer</Link>
                    </Button>
                  </div>

                  <div className="pt-8 border-t border-border/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                        <img src="/assets/pivot-logo.jpg" alt="Agent" className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold">Pivot Energy Real Estate</p>
                        <p className="text-sm text-muted-foreground">Premium Eco-Property Experts</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <a href="tel:+2349167033651" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4 mr-3 text-primary" />
                        <span>+234 (0) 9167033651</span>
                      </a>
                      <a href="mailto:info@pivotenergy.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-4 w-4 mr-3 text-primary" />
                        <span>info@pivotenergy.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Virtual Tour Available</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't visit in person? Schedule a live video tour with one of our expert agents.
                  </p>
                  <Link href="/contact" className="text-primary font-bold hover:underline">
                    Book Virtual Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

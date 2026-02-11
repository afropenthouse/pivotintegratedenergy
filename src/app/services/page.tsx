import { Building, Key, Hammer, Settings, Home, TreeDeciduous, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const services = [
  {
    icon: Building,
    title: "Property Development",
    image: "/assets/service-development.jpg",
    shortDesc: "Modern, eco-friendly residential and commercial properties",
    fullDesc: "We develop modern, eco-friendly residential and commercial properties with cutting-edge design and sustainable practices. Our development process incorporates the latest in green building technology, ensuring each property meets the highest standards of quality and environmental responsibility.",
    features: [
      "Sustainable building materials",
      "Energy-efficient systems",
      "Modern architectural design",
      "Smart home integration",
      "Quality craftsmanship",
      "Timely project delivery",
    ],
  },
  {
    icon: Key,
    title: "Property Acquisition",
    image: "/assets/service-acquisition.jpg",
    shortDesc: "Strategic acquisition of prime real estate assets",
    fullDesc: "Strategic acquisition of prime real estate assets in high-growth locations across Nigeria. Our team of experts identifies and secures valuable properties that offer excellent investment potential and long-term value appreciation.",
    features: [
      "Market analysis & research",
      "Due diligence services",
      "Negotiation support",
      "Legal documentation",
      "Investment advisory",
      "Portfolio management",
    ],
  },
  {
    icon: Home,
    title: "Luxury Rentals",
    image: "/assets/service-rentals.jpg",
    shortDesc: "Premium short-term and long-term rental properties",
    fullDesc: "Premium short-term and long-term rental properties offering exclusive living experiences. Our rental portfolio includes fully furnished luxury apartments, penthouses, and villas in prime Lagos locations.",
    features: [
      "Fully furnished units",
      "Flexible lease terms",
      "24/7 concierge service",
      "Maintenance included",
      "Security services",
      "Premium amenities",
    ],
  },
  {
    icon: Settings,
    title: "Facility Management",
    image: "/assets/service-facility.jpg",
    shortDesc: "Comprehensive property management services",
    fullDesc: "Comprehensive property management services ensuring optimal maintenance and value retention. We handle everything from routine maintenance to emergency repairs, allowing property owners to enjoy hassle-free ownership.",
    features: [
      "Preventive maintenance",
      "Emergency repairs",
      "Tenant management",
      "Financial reporting",
      "Compliance management",
      "Vendor coordination",
    ],
  },
  {
    icon: Hammer,
    title: "Construction Services",
    image: "/assets/service-construction.jpg",
    shortDesc: "End-to-end construction supervision and management",
    fullDesc: "End-to-end construction supervision, project management, and quality control for new developments. Our experienced team ensures every project is completed on time, within budget, and to the highest quality standards.",
    features: [
      "Project planning",
      "Site supervision",
      "Quality control",
      "Budget management",
      "Timeline tracking",
      "Subcontractor coordination",
    ],
  },
  {
    icon: TreeDeciduous,
    title: "Eco-Friendly Solutions",
    image: "/assets/service-eco.jpg",
    shortDesc: "Sustainable building materials and energy systems",
    fullDesc: "Integration of sustainable building materials and energy-efficient systems in all our projects. We are committed to reducing environmental impact while creating beautiful, functional spaces.",
    features: [
      "Solar power systems",
      "Rainwater harvesting",
      "Green landscaping",
      "Waste management",
      "Energy auditing",
      "Sustainable certifications",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-building.jpg" alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
        </div>
        <div className="relative section-container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Expert Solutions for <span className="text-primary">Modern Living</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From sustainable property development to professional facility management, we provide end-to-end solutions that elevate your real estate experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-24">
        <div className="section-container">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.fullDesc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-elevated">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Brief */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
              Our systematic approach ensures quality and transparency at every stage of your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and objectives." },
              { step: "02", title: "Planning", desc: "Strategic design and resource allocation." },
              { step: "03", title: "Execution", desc: "Quality-focused project implementation." },
              { step: "04", title: "Delivery", desc: "Handover and post-completion support." },
            ].map((item, index) => (
              <div key={index} className="relative p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <span className="text-primary font-bold text-4xl mb-4 block">{item.step}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Banner */}
      <section className="py-24">
        <div className="section-container">
          <div className="bg-muted rounded-3xl p-12 flex flex-col lg:flex-row items-center justify-between gap-12 border border-border">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Need a custom real estate solution?</h2>
              <p className="text-muted-foreground text-lg text-center lg:text-left">
                Our experts are ready to provide tailored advice and services to help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <a 
                href="tel:+2349167033651" 
                className="flex items-center justify-center gap-3 px-8 py-4 bg-background border border-border rounded-full hover:bg-muted transition-colors font-bold"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>Call +234 (0) 9167033651</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

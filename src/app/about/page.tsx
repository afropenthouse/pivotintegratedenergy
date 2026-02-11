import { Target, Eye, Award, Users, TreeDeciduous, Briefcase, Shield, Heart, Lightbulb, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const coreValues = [
  {
    icon: TreeDeciduous,
    title: "Environmental Sustainability",
    description: "Building eco-friendly properties that minimize environmental impact.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional quality in every project we undertake.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing cutting-edge technologies and modern design approaches.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with transparency and honesty in all dealings.",
  },
  {
    icon: Handshake,
    title: "Excellent Customer Experience",
    description: "Prioritizing client satisfaction in every interaction.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating effectively to achieve shared goals.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    description: "Maintaining highest standards in service delivery.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Contributing positively to local communities.",
  },
];

const milestones = [
  { year: "2015", title: "Company Founded", description: "Pivot Real Estate Development established in Lagos" },
  { year: "2017", title: "First Major Project", description: "Completed The Lekki Residence flagship development" },
  { year: "2019", title: "Eco Certification", description: "Received green building certification for sustainable practices" },
  { year: "2021", title: "50+ Properties", description: "Reached milestone of 50 properties managed" },
  { year: "2023", title: "Regional Expansion", description: "Expanded operations across multiple Lagos zones" },
  { year: "2024", title: "Innovation Award", description: "Recognized for innovative sustainable building practices" },
];

const team = [
  {
    name: "Babajide Babatope",
    role: "Chief Executive Officer",
    description: "An intellectual leader with years of experience in Management, Business coordination, and Marketing within the banking and energy sectors.",
  },
  {
    name: "Marian Babatope",
    role: "Executive Director",
    description: "Over 12 years of experience in business and operational management within the IT software development and financial services sectors.",
  },
  {
    name: "Abisola Oladiran",
    role: "General Manager",
    description: "Certified facility manager with extensive experience in real estate, hospitality, business operations, and construction supervision.",
  },
  {
    name: "Jimmy Fred Akinmuyisitan",
    role: "Group Chief Financial Officer",
    description: "Fellow of the Institute of Chartered Accountants (FCA) with over 25 years of extensive experience in financial management.",
  },
  {
    name: "Olaoluwa Ogunkoya",
    role: "Chief Financial Officer",
    description: "Chartered Accountant and IFRS certified professional with over 13 years of experience in the Oil and Gas Industry downstream sector.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-building.jpg" alt="About Pivot" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
        </div>
        <div className="relative section-container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Nigeria's <span className="text-primary">Future</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Pivot Real Estate Development, a sister company to Pivot Integrated Energy Services, specializes in building, acquiring, renting, and delivering luxurious, sustainable properties. We are committed to providing eco-friendly living spaces that combine elegance, innovation, and environmental responsibility. Our real estate and sustainability expertise ensures we create modern properties that meet client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-muted border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To build, acquire, and rent luxurious properties, delivering exceptional hospitality and exclusive living experiences with unmatched service and environmental responsibility.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-muted border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide and deliver exceptional facility management services while excelling in building luxurious, eco-friendly real estate, earning confidence through unmatched quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every property we build.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border hover:shadow-card transition-all">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The visionary professionals driving Pivot's commitment to excellence and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/5] bg-muted rounded-2xl mb-6 overflow-hidden relative">
                  {/* Placeholder for member photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                    <Users size={64} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
              A decade of growth, innovation, and building trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 border-l border-primary/30 py-4">
                <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-primary font-bold text-2xl mb-2 block">{milestone.year}</span>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-secondary-foreground/70">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="section-container">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your sustainable home?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join our community of eco-conscious homeowners and experience modern luxury.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/properties">View Properties</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

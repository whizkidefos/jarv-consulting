import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, HomeIcon, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[85vh] min-h-[600px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2000&auto=format&fit=crop"
            alt="Supported Living"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <div className="container relative h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
                Supporting Independent{" "}
                <span className="text-primary">Living</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-300 max-w-xl">
                JARV Consulting provides high-quality supported living services,
                helping adults live independently with the care and support they need.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base w-full sm:w-auto" asChild>
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" className="group w-full sm:w-auto" asChild>
                  <Link href="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: "CQC Registered", icon: Shield },
                  { label: "24/7 Support", icon: Heart },
                  { label: "Experienced Team", icon: Users },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white">
                    <item.icon className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose JARV Consulting?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We provide comprehensive support services tailored to individual needs,
              ensuring the highest standards of care and comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "CQC Registered",
                description: "Fully registered and compliant with Care Quality Commission standards",
                icon: Shield,
              },
              {
                title: "Person-Centered Care",
                description: "Tailored support plans focusing on individual needs and preferences",
                icon: Heart,
              },
              {
                title: "Quality Accommodation",
                description: "Comfortable and well-maintained living spaces",
                icon: HomeIcon,
              },
              {
                title: "Experienced Staff",
                description: "Dedicated team of trained and caring professionals",
                icon: Users,
              },
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
                Comprehensive Care Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Our range of services is designed to provide complete support while
                promoting independence and dignity.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "24/7 Supported Living Accommodation",
                  "Personal Care & Support",
                  "Life Skills Development",
                  "Social Integration Programs",
                  "Mental Health Support",
                  "Medication Management",
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base sm:text-lg">{service}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 sm:mt-8 w-full sm:w-auto" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
                alt="Our Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-primary overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover opacity-10"
              />
            </div>
            <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
                  Ready to Learn More?
                </h2>
                <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-8 text-primary-foreground/90">
                  Contact us today to discuss how we can support you or your loved ones
                  with our comprehensive care services.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Button size="lg" variant="secondary" className="text-base w-full sm:w-auto" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-base w-full sm:w-auto text-white border-white" 
                    asChild
                  >
                    <Link href="/about">About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
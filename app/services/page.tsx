import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bed,
  Brain,
  Clock,
  HandHeart,
  HeartPulse,
  Users2,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
            alt="Our Services"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <div className="container relative h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Comprehensive care and support services tailored to individual needs,
                promoting independence and well-being.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-base" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Our range of services is designed to provide complete support while
              promoting independence and dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Supported Living",
                description: "Comfortable accommodation with 24/7 support to help individuals live independently.",
                icon: Bed,
                features: [
                  "Individual apartments",
                  "Accessible facilities",
                  "Safe and secure environment",
                  "Personalized support plans",
                ],
              },
              {
                title: "Personal Care",
                description: "Personalized care services tailored to individual needs and preferences.",
                icon: HeartPulse,
                features: [
                  "Daily living assistance",
                  "Medication management",
                  "Personal hygiene support",
                  "Health monitoring",
                ],
              },
              {
                title: "Social Support",
                description: "Engaging activities and community integration programs.",
                icon: Users2,
                features: [
                  "Community activities",
                  "Social skills development",
                  "Leisure support",
                  "Group outings",
                ],
              },
              {
                title: "Mental Health Support",
                description: "Specialized support for individuals with mental health needs.",
                icon: Brain,
                features: [
                  "Professional guidance",
                  "Emotional support",
                  "Coping strategies",
                  "Crisis management",
                ],
              },
              {
                title: "24/7 Care",
                description: "Round-the-clock support from our experienced care team.",
                icon: Clock,
                features: [
                  "Emergency response",
                  "Night support",
                  "Continuous monitoring",
                  "Regular check-ins",
                ],
              },
              {
                title: "Life Skills Development",
                description: "Support in developing essential skills for independent living.",
                icon: HandHeart,
                features: [
                  "Budgeting assistance",
                  "Cooking skills",
                  "Home management",
                  "Personal development",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="flex flex-col border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
                alt="Our Care Approach"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive support services that are tailored to each
                individual's needs, ensuring the highest quality of care and support.
              </p>
              <ul className="space-y-4">
                {[
                  "CQC registered and fully compliant",
                  "Experienced and qualified staff",
                  "Person-centered approach",
                  "24/7 support available",
                  "Comprehensive care planning",
                  "Regular reviews and assessments",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" size="lg" asChild>
                <Link href="/contact" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="relative rounded-3xl bg-primary overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover opacity-10"
              />
            </div>
            <div className="relative px-6 py-24 sm:px-16 sm:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
                  Contact us today to discuss how we can support you or your loved ones
                  with our comprehensive care services.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button size="lg" variant="secondary" className="text-base" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base text-white hover:text-white border-white"
                    asChild
                  >
                    <Link href="/about">Learn More</Link>
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
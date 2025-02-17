import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle, Target, Users, Heart, Shield, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
            alt="About Us"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <div className="container relative h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                About JARV Consulting
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Dedicated to providing exceptional care and support services that enhance
                the lives of those we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  JARV Consulting was established with a vision to transform the landscape
                  of supported living services. As a CQC-registered provider, we are
                  committed to maintaining the highest standards of care while promoting
                  independence and dignity for all our service users.
                </p>
                <p>
                  Our journey began with a simple yet powerful mission: to create a
                  supportive environment where individuals can thrive and achieve their
                  full potential. Today, we continue to build on that foundation,
                  combining professional expertise with compassionate care.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-x-6">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link href="/services">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              Our values guide everything we do, ensuring we deliver the highest quality
              care and support to our service users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Person-Centered Approach",
                description: "We put individuals at the heart of everything we do, ensuring care is tailored to personal needs and preferences.",
                icon: Users,
              },
              {
                title: "Quality Standards",
                description: "Our CQC registration demonstrates our commitment to maintaining high standards of care and support.",
                icon: Award,
              },
              {
                title: "Empowerment",
                description: "We support individuals to develop independence and achieve their personal goals.",
                icon: Target,
              },
              {
                title: "Professional Excellence",
                description: "Our team consists of trained professionals dedicated to providing the highest quality of care.",
                icon: CheckCircle,
              },
            ].map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Professional Staff", value: "50+" },
              { label: "Service Users", value: "100+" },
              { label: "Locations", value: "5+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-primary/5 border-2 border-primary/10"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="relative rounded-3xl bg-primary overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover opacity-10"
              />
            </div>
            <div className="relative px-6 py-24 sm:px-16 sm:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Join Our Community
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
                  Experience the difference of our person-centered approach to care
                  and support. Contact us today to learn more.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button size="lg" variant="secondary" className="text-base" asChild>
                    <Link href="/contact">Get Started</Link>
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
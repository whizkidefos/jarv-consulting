import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">About JARV Consulting</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              CQC-registered Adult Social Care and Supported Living company
              specializing in providing comfortable accommodation and support
              services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/services", label: "Our Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@jarvconsulting.co.uk"
                  className="hover:text-primary transition-colors"
                >
                  info@jarvconsulting.co.uk
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>United Kingdom</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>01204 455 850</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {CURRENT_YEAR} JARV Consulting Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
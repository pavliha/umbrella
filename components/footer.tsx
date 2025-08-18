import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UmbrellaLogo } from "@/components/umbrella-logo"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <UmbrellaLogo showText={true} showTagline={true} />
            <p className="text-sm text-muted-foreground">
              Engineering autonomous unmanned systems for air, land, and sea operations since 2020.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions#agriculture" className="text-muted-foreground hover:text-primary">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/solutions#surveillance" className="text-muted-foreground hover:text-primary">
                  Surveillance & Security
                </Link>
              </li>
              <li>
                <Link href="/solutions#logistics" className="text-muted-foreground hover:text-primary">
                  Logistics & Delivery
                </Link>
              </li>
              <li>
                <Link href="/solutions#inspection" className="text-muted-foreground hover:text-primary">
                  Industrial Inspection
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Tech Boulevard, Innovation City, IC 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@umbrella.com.ge</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Umbrella. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              Get In Touch
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Build Your Custom Drone Solution
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Ready to transform your operations with custom drone technology? 
              Our team is here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Inquiry Form</CardTitle>
                  <CardDescription>
                    Tell us about your project and we&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select required onValueChange={(value) => handleChange("projectType", value)}>
                        <SelectTrigger id="projectType">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="photogrammetry">Photogrammetry & 3D Mapping</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="surveillance">Surveillance & Security</SelectItem>
                          <SelectItem value="logistics">Logistics & Delivery</SelectItem>
                          <SelectItem value="energy">Energy & Infrastructure</SelectItem>
                          <SelectItem value="construction">Construction & Mining</SelectItem>
                          <SelectItem value="healthcare">Healthcare & Emergency</SelectItem>
                          <SelectItem value="environmental">Environmental Monitoring</SelectItem>
                          <SelectItem value="maritime">Maritime & Coastal</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <Select onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50k">Under $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="over-500k">Over $500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select onValueChange={(value) => handleChange("timeline", value)}>
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="over-12-months">Over 12 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project requirements, challenges, and goals..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-sm text-muted-foreground">
                        123 Tech Boulevard<br />
                        Innovation City, IC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@umbrella.com.ge<br />
                        sales@umbrella.com.ge
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 4:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white mr-3 flex-shrink-0">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-sm">Review</p>
                        <p className="text-xs text-muted-foreground">
                          Our team reviews your requirements
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white mr-3 flex-shrink-0">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-sm">Consultation</p>
                        <p className="text-xs text-muted-foreground">
                          Schedule a detailed discussion
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white mr-3 flex-shrink-0">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-sm">Proposal</p>
                        <p className="text-xs text-muted-foreground">
                          Receive a custom solution proposal
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white mr-3 flex-shrink-0">
                        4
                      </span>
                      <div>
                        <p className="font-medium text-sm">Development</p>
                        <p className="text-xs text-muted-foreground">
                          Begin building your custom drone
                        </p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-white">Need Immediate Assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4 opacity-90">
                    For urgent inquiries or technical support, our team is available during business hours.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Call Now: +1 (555) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
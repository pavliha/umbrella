import { ArrowRight, Wrench, Lightbulb, Users, Package, HeadphonesIcon, Rocket, Map } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              Our Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              End-to-End Autonomous Systems Engineering
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              From initial concept to deployment, we provide comprehensive engineering services 
              for autonomous unmanned systems across all domains - air, land, sea, and underwater.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10" />
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Autonomous Systems Design</CardTitle>
                <CardDescription>
                  Custom unmanned systems engineered for air, land, sea, and underwater operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• UAV, UGV, USV, UUV system architecture</li>
                  <li>• Autonomy stack development</li>
                  <li>• Sensor suite integration</li>
                  <li>• Navigation & control systems</li>
                  <li>• Mission planning software</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10" />
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Manufacturing</CardTitle>
                <CardDescription>
                  Precision manufacturing with strict quality control standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Prototype development</li>
                  <li>• Small & large batch production</li>
                  <li>• Quality assurance testing</li>
                  <li>• Custom payload integration</li>
                  <li>• Final assembly & calibration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10" />
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Consulting</CardTitle>
                <CardDescription>
                  Expert guidance to maximize your drone operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Operational strategy development</li>
                  <li>• Regulatory compliance assistance</li>
                  <li>• ROI analysis & optimization</li>
                  <li>• Technology roadmap planning</li>
                  <li>• Risk assessment & mitigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10" />
              <CardHeader>
                <Package className="h-10 w-10 text-primary mb-4" />
                <CardTitle>System Integration</CardTitle>
                <CardDescription>
                  Seamless integration with your existing infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Software & API development</li>
                  <li>• Data management systems</li>
                  <li>• Fleet management platforms</li>
                  <li>• IoT sensor integration</li>
                  <li>• Cloud connectivity solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10" />
              <CardHeader>
                <HeadphonesIcon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Training & Support</CardTitle>
                <CardDescription>
                  Comprehensive training and ongoing technical support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Pilot training & certification</li>
                  <li>• Maintenance training programs</li>
                  <li>• 24/7 technical support</li>
                  <li>• Remote diagnostics</li>
                  <li>• On-site assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10" />
              <CardHeader>
                <Rocket className="h-10 w-10 text-primary mb-4" />
                <CardTitle>R&D Partnership</CardTitle>
                <CardDescription>
                  Collaborate on cutting-edge drone technology development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Joint development programs</li>
                  <li>• Technology licensing</li>
                  <li>• Innovation workshops</li>
                  <li>• Patent co-development</li>
                  <li>• Research grants assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10" />
              <CardHeader>
                <Map className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Photogrammetry Services</CardTitle>
                <CardDescription>
                  Professional 3D mapping and surveying solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• High-resolution aerial photography</li>
                  <li>• 3D model generation & point clouds</li>
                  <li>• Orthomosaic mapping</li>
                  <li>• Volumetric analysis</li>
                  <li>• GIS integration & data processing</li>
                  <li>• LiDAR scanning services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Packages</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose from our pre-configured service packages or create a custom solution tailored to your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Starter Package</h3>
                    <p className="text-sm text-muted-foreground">
                      Design consultation, prototype development, and basic training
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Professional Package</h3>
                    <p className="text-sm text-muted-foreground">
                      Full design & manufacturing, integration, and 1-year support
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Enterprise Package</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete end-to-end solution with ongoing R&D partnership
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Patents Filed</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">Industry Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our team of experts is ready to help you design and build the perfect drone solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Download Service Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
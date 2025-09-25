import Link from "next/link"
import { ArrowRight, CheckCircle, Cpu, Settings, Shield, Zap, Plane, Camera, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 inline-block" variant="secondary">
              Autonomous Unmanned Systems Engineering
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Umbrella Technology from blue print to sky
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              We engineer cutting-edge autonomous unmanned systems for air, land, and sea. 
              From UAVs to UGVs, USVs, and UUVs, our custom solutions revolutionize operations across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="min-w-[200px]">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Umbrella?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver autonomous unmanned systems that exceed expectations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Systems Engineering</CardTitle>
                <CardDescription>
                  Complete autonomous unmanned systems designed for air, land, sea, and underwater operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">UAV (Unmanned Aerial Vehicles)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">UGV (Unmanned Ground Vehicles)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">USV/UUV (Surface/Underwater)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Autonomous Intelligence</CardTitle>
                <CardDescription>
                  Advanced AI and control systems for fully autonomous operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Computer vision & SLAM</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-sensor fusion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Swarm coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Reliability & Support</CardTitle>
                <CardDescription>
                  Built to last with comprehensive support throughout the lifecycle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Training & certification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized drones designed for specific industry requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-lg">Photogrammetry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  High-precision 3D mapping, surveying, and volumetric analysis
                </p>
                <Link href="/solutions#photogrammetry" className="text-sm font-medium text-primary hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Precision farming with crop monitoring, spraying, and yield analysis
                </p>
                <Link href="/solutions#agriculture" className="text-sm font-medium text-primary hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Surveillance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced security monitoring with thermal imaging and AI detection
                </p>
                <Link href="/solutions#surveillance" className="text-sm font-medium text-primary hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Infrastructure inspection for power lines, solar farms, and pipelines
                </p>
                <Link href="/solutions#energy" className="text-sm font-medium text-primary hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Our Process
              </Badge>
              <h2 className="text-3xl font-bold mb-6">From Concept to Sky</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our streamlined development process ensures your custom drone solution is delivered on time and exceeds expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Requirements Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      We work closely with you to understand your specific needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Design & Prototyping</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom engineering and rapid prototyping for validation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Manufacturing & Testing</h3>
                    <p className="text-sm text-muted-foreground">
                      Precision manufacturing with rigorous quality control
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Deployment & Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Training, deployment assistance, and ongoing support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">98%</div>
                  <p className="text-lg font-semibold">Client Satisfaction</p>
                  <p className="text-sm text-muted-foreground mt-2">Based on 200+ projects</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold">ISO 9001:2015</p>
                    <p className="text-sm text-muted-foreground">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let&apos;s discuss how our custom drone solutions can elevate your business to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
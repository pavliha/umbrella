import { Award, Target, Users, Lightbulb, Globe, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former NASA engineer with 15+ years in autonomous systems",
    expertise: ["Autonomous Systems", "Aerospace Engineering"]
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "AI specialist with expertise in computer vision and machine learning",
    expertise: ["AI & Machine Learning", "Computer Vision"]
  },
  {
    name: "Emily Watson",
    role: "Head of Design",
    bio: "Industrial designer with focus on aerodynamics and efficiency",
    expertise: ["Aerodynamics", "Industrial Design"]
  },
  {
    name: "James Park",
    role: "Head of Manufacturing",
    bio: "20 years experience in precision manufacturing and quality control",
    expertise: ["Manufacturing", "Quality Control"]
  },
  {
    name: "Dr. Lisa Anderson",
    role: "Head of R&D",
    bio: "PhD in Robotics, leading innovation in drone technology",
    expertise: ["Robotics", "Research & Development"]
  },
  {
    name: "David Thompson",
    role: "Head of Operations",
    bio: "Supply chain expert ensuring efficient delivery and support",
    expertise: ["Operations", "Supply Chain"]
  }
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters in creating the perfect drone solution"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Working closely with clients to exceed expectations"
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Building drones that perform when it matters most"
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to environmentally responsible solutions"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for perfection in everything we do"
  }
]

const milestones = [
  { year: "2020", event: "Company founded by aerospace engineers" },
  { year: "2021", event: "First autonomous UAV system deployed" },
  { year: "2022", event: "Expanded to UGV and maritime systems" },
  { year: "2023", event: "Opened advanced manufacturing facility" },
  { year: "2024", event: "500+ successful deployments worldwide" }
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              About Us
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Pioneering the Future of Autonomous Unmanned Systems
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Founded by aerospace engineers and AI specialists, Umbrella is dedicated to 
              engineering autonomous unmanned systems that operate seamlessly across air, land, and sea domains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Umbrella was born from a vision to create truly autonomous systems that could operate 
                across all domains - air, land, and sea. We recognized the need for comprehensive 
                unmanned systems engineering that goes beyond traditional drone technology.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded in 2020 by a team of NASA engineers and AI researchers, we set out to 
                develop comprehensive autonomous systems that push the boundaries of unmanned technology. 
                Our expertise spans UAVs (drones), UGVs (ground robots), USVs (surface vessels), 
                and UUVs (underwater vehicles).
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proud to have deployed over 500 autonomous unmanned systems worldwide, 
                serving defense, commercial, and research sectors with cutting-edge solutions that 
                redefine what's possible in autonomous operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <p className="text-sm text-muted-foreground">Systems Deployed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <p className="text-sm text-muted-foreground">Patents Filed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower organizations with cutting-edge autonomous unmanned systems that deliver 
                    superior performance across air, land, and sea, enabling new capabilities and operational excellence.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the global leader in autonomous unmanned systems engineering, setting the standard 
                    for innovation, reliability, and multi-domain integration in autonomous operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <value.icon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind Umbrella's innovative autonomous systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <div className="h-20 w-20 rounded-full bg-primary/10 mb-4" />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to revolutionize drone technology
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center mb-1">
                      <Badge variant="outline" className="mr-3">
                        {milestone.year}
                      </Badge>
                      <h3 className="font-semibold">{milestone.event}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about autonomous systems 
              and robotics innovation. Explore opportunities to shape the future with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
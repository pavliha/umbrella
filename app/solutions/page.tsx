import { Leaf, Shield, Package, Zap, Building, Heart, Trees, Waves, Map } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const solutions = [
  {
    id: "agriculture",
    title: "Agriculture",
    icon: Leaf,
    color: "green",
    description: "Revolutionize farming with precision agriculture technology",
    features: [
      "Crop health monitoring with multispectral imaging",
      "Precision pesticide and fertilizer application",
      "Yield prediction and harvest planning",
      "Irrigation management and water conservation",
      "Livestock monitoring and counting"
    ],
    benefits: [
      "Increase crop yields by up to 30%",
      "Reduce chemical usage by 40%",
      "Save water resources",
      "Lower operational costs"
    ]
  },
  {
    id: "surveillance",
    title: "Surveillance & Security",
    icon: Shield,
    color: "blue",
    description: "Advanced aerial surveillance for enhanced security operations",
    features: [
      "24/7 autonomous patrol capabilities",
      "Thermal imaging for night operations",
      "AI-powered threat detection",
      "Real-time video streaming",
      "Perimeter monitoring and intrusion alerts"
    ],
    benefits: [
      "Reduce security personnel costs",
      "Improve response times",
      "Enhanced situational awareness",
      "Comprehensive area coverage"
    ]
  },
  {
    id: "logistics",
    title: "Logistics & Delivery",
    icon: Package,
    color: "orange",
    description: "Efficient last-mile delivery and supply chain solutions",
    features: [
      "Autonomous package delivery",
      "Medical supply transport",
      "Warehouse inventory management",
      "Supply chain tracking",
      "Emergency response delivery"
    ],
    benefits: [
      "Reduce delivery times by 70%",
      "Lower transportation costs",
      "Access remote locations",
      "Minimize carbon footprint"
    ]
  },
  {
    id: "energy",
    title: "Energy & Infrastructure",
    icon: Zap,
    color: "yellow",
    description: "Inspection and maintenance of critical infrastructure",
    features: [
      "Power line and tower inspection",
      "Solar panel monitoring",
      "Wind turbine blade inspection",
      "Pipeline surveillance",
      "Thermal leak detection"
    ],
    benefits: [
      "Reduce inspection costs by 50%",
      "Improve worker safety",
      "Faster issue identification",
      "Predictive maintenance insights"
    ]
  },
  {
    id: "photogrammetry",
    title: "Photogrammetry & 3D Mapping",
    icon: Map,
    color: "indigo",
    description: "High-precision 3D modeling and mapping for various applications",
    features: [
      "Aerial photogrammetry with centimeter-level accuracy",
      "3D point cloud generation and processing",
      "Digital elevation models (DEM) and digital surface models (DSM)",
      "Orthomosaic map creation",
      "Volumetric measurements and calculations",
      "LiDAR integration for enhanced accuracy",
      "GIS-ready data exports"
    ],
    benefits: [
      "99% accuracy in measurements",
      "10x faster than traditional surveying",
      "Cost reduction up to 75%",
      "Complete site documentation",
      "Historical comparison capabilities"
    ]
  },
  {
    id: "construction",
    title: "Construction & Mining",
    icon: Building,
    color: "gray",
    description: "Site monitoring and surveying for construction projects",
    features: [
      "3D site mapping and modeling",
      "Progress tracking and reporting",
      "Volume calculations",
      "Safety compliance monitoring",
      "Equipment tracking"
    ],
    benefits: [
      "Improve project timelines",
      "Enhanced safety compliance",
      "Accurate material estimates",
      "Real-time project insights"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare & Emergency",
    icon: Heart,
    color: "red",
    description: "Life-saving medical delivery and emergency response",
    features: [
      "Emergency medical supply delivery",
      "Search and rescue operations",
      "Disaster assessment",
      "Blood and organ transport",
      "Remote patient monitoring"
    ],
    benefits: [
      "Save critical response time",
      "Access disaster zones safely",
      "Reduce medical logistics costs",
      "Improve patient outcomes"
    ]
  },
  {
    id: "environmental",
    title: "Environmental Monitoring",
    icon: Trees,
    color: "emerald",
    description: "Track and protect our environment with aerial monitoring",
    features: [
      "Wildlife tracking and conservation",
      "Forest fire detection",
      "Pollution monitoring",
      "Ecosystem mapping",
      "Climate data collection"
    ],
    benefits: [
      "Early fire detection",
      "Better conservation planning",
      "Accurate environmental data",
      "Reduced monitoring costs"
    ]
  },
  {
    id: "maritime",
    title: "Maritime & Coastal",
    icon: Waves,
    color: "cyan",
    description: "Ocean and coastal monitoring for various applications",
    features: [
      "Ship inspection and monitoring",
      "Coastal erosion tracking",
      "Marine wildlife monitoring",
      "Oil spill detection",
      "Port security"
    ],
    benefits: [
      "Improved maritime safety",
      "Faster emergency response",
      "Environmental protection",
      "Cost-effective monitoring"
    ]
  }
]

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              Industry Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Tailored Drone Solutions for Every Industry
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Our custom drones are designed to meet the unique challenges of your industry, 
              delivering measurable results and ROI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className={`h-12 w-12 rounded-lg bg-${solution.color}-100 dark:bg-${solution.color}-900 flex items-center justify-center mr-4`}>
                      <solution.icon className={`h-6 w-6 text-${solution.color}-600 dark:text-${solution.color}-400`} />
                    </div>
                    <h2 className="text-3xl font-bold">{solution.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact">
                    <Button>
                      Get Started with {solution.title}
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Benefits</CardTitle>
                      <CardDescription>
                        Measurable impact on your operations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {solution.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                            </div>
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <div className="mt-6 p-6 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Industry Impact</p>
                    <p className="text-2xl font-bold text-primary">
                      {index === 0 && "30% Yield Increase"}
                      {index === 1 && "60% Cost Reduction"}
                      {index === 2 && "70% Faster Delivery"}
                      {index === 3 && "50% Inspection Savings"}
                      {index === 4 && "40% Timeline Improvement"}
                      {index === 5 && "Lives Saved Daily"}
                      {index === 6 && "24/7 Monitoring"}
                      {index === 7 && "90% Coverage Increase"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We specialize in creating custom solutions for unique challenges. 
            Let&apos;s discuss how we can develop a drone solution specifically for your needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Discuss Custom Solution
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
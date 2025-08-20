import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Droplets, Leaf, Smartphone, Hammer, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const practicalSolutions = [
    {
      title: "Low-Cost Protective Structures",
      icon: <Shield className="h-6 w-6" />,
      description: "Simple structures that provide immediate protection from weather extremes",
      items: [
        "Shade cloths (30-50% shade) for heat protection",
        "Plastic tunnels for frost and cold protection",
        "Hail nets for hailstorm damage prevention",
        "Windbreak barriers using local materials",
        "Row covers for multiple weather protection"
      ],
      cost: "Low",
      difficulty: "Easy"
    },
    {
      title: "Drought-Resistant Crops",
      icon: <Sprout className="h-6 w-6" />,
      description: "Climate-adapted crops that require less water and withstand extreme conditions",
      items: [
        "Pearl Millet (drought-tolerant grain)",
        "Sweet Potatoes (deep root system)",
        "Carrots (moderate water needs)",
        "Spinach (cool season hardy)",
        "Indigenous African vegetables",
        "Sorghum (excellent drought tolerance)",
        "Amaranth (heat and drought resistant)"
      ],
      cost: "Low",
      difficulty: "Easy"
    },
    {
      title: "Water Management Systems",
      icon: <Droplets className="h-6 w-6" />,
      description: "Efficient water collection and conservation techniques",
      items: [
        "Rainwater harvesting with buckets and tanks",
        "Drip irrigation systems using recycled bottles",
        "Mulching for moisture retention",
        "Greywater recycling from households",
        "Contour planting for water conservation",
        "Swales and berms for water collection"
      ],
      cost: "Medium",
      difficulty: "Medium"
    },
    {
      title: "Soil Health & Composting",
      icon: <Leaf className="h-6 w-6" />,
      description: "Building resilient soil that can withstand climate stress",
      items: [
        "Composting kitchen and garden waste",
        "Vermiculture (worm farming)",
        "Cover cropping during off-seasons",
        "Organic matter incorporation",
        "Natural pest management",
        "Soil testing and amendment"
      ],
      cost: "Low",
      difficulty: "Easy"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sustainable Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical, affordable, and technology-supported solutions to protect community gardens 
            from climate change impacts and build long-term food security.
          </p>
        </div>

        {/* Practical Solutions Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Hammer className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Practical Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practicalSolutions.map((solution, index) => (
              <Card key={index} className="shadow-card hover:shadow-natural transition-smooth h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="bg-accent/30">
                          {solution.cost} Cost
                        </Badge>
                        <Badge variant="secondary" className="bg-sage/20">
                          {solution.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Tech-Supported Solution Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Smartphone className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Tech-Supported Solution</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <div className="p-3 bg-sky/20 rounded-full">
                      <Smartphone className="h-6 w-6 text-sky" />
                    </div>
                    <span>Garden Guardians Weather Alert System</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    A community-focused weather alert system designed specifically for garden protection, 
                    providing timely warnings about severe weather events that could damage crops.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">How It Works:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Location Input</p>
                          <p className="text-sm text-muted-foreground">User enters their garden's location</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Weather Data Fetch</p>
                          <p className="text-sm text-muted-foreground">System retrieves 7-day forecast via weather API</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Alert Generation</p>
                          <p className="text-sm text-muted-foreground">Triggers warnings for severe weather events</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Protection Recommendations</p>
                          <p className="text-sm text-muted-foreground">Provides specific actions to protect gardens</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Alert Types:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-destructive/10 rounded-lg">
                        <p className="font-medium text-destructive">Heatwave Warning</p>
                        <p className="text-xs text-muted-foreground">Extreme heat alerts</p>
                      </div>
                      <div className="p-3 bg-sky/20 rounded-lg">
                        <p className="font-medium text-sky">Frost Alert</p>
                        <p className="text-xs text-muted-foreground">Cold protection needed</p>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <p className="font-medium text-primary">Heavy Rain</p>
                        <p className="text-xs text-muted-foreground">Flooding potential</p>
                      </div>
                      <div className="p-3 bg-accent/50 rounded-lg">
                        <p className="font-medium text-primary">Strong Winds</p>
                        <p className="text-xs text-muted-foreground">Structural protection</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-semibold text-lg mb-3">Example Alert</h3>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                    <span className="font-semibold text-destructive">Severe Weather Alert</span>
                  </div>
                  <p className="text-sm mb-2">
                    <strong>Location:</strong> Belfast, Mpumalanga
                  </p>
                  <p className="text-sm mb-3">
                    <strong>Alert:</strong> High chance of severe hailstorms in the next 48 hours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Action Required:</strong> Please secure protective covers and move potted plants to shelter.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3">Ready to Protect Your Garden?</h3>
                <p className="text-muted-foreground mb-4">
                  Try our weather alert prototype to see how it can help protect your community garden.
                </p>
                <Link to="/weather">
                  <Button variant="sky" size="lg" className="w-full">
                    Try Weather Alert System
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="bg-accent/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Getting Started: Implementation Priority</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Immediate Protection</h3>
              <p className="text-sm text-muted-foreground">
                Start with shade cloths and basic weather barriers for quick crop protection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Water Management</h3>
              <p className="text-sm text-muted-foreground">
                Implement rainwater collection and drought-resistant crop varieties.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Technology Integration</h3>
              <p className="text-sm text-muted-foreground">
                Add weather monitoring and alert systems for advanced preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Start Building Climate Resilience Today</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These solutions have been tested by real communities. Learn from their experiences and 
            access educational resources to implement these strategies in your own garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/case-studies">
              <Button variant="default" size="lg">
                See Real Examples
              </Button>
            </Link>
            <Link to="/education">
              <Button variant="earth" size="lg">
                Access Learning Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
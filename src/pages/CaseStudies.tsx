import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Sprout, Cloud, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  name: string;
  location: string;
  icon: JSX.Element;
  crops: string[];
  climateProblems: string[];
  solutions: string[];
  description: string;
}

const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      name: "Phumulani Agri-Village Organic Food Garden",
      location: "KwaZulu-Natal",
      icon: <Sprout className="h-6 w-6" />,
      crops: ["Tomatoes", "Spinach", "Carrots", "Onions"],
      climateProblems: ["Hailstorms", "Heavy rainfall", "Strong winds"],
      solutions: [
        "Installed protective shade cloths",
        "Built raised beds for drainage",
        "Created windbreak barriers with local trees",
        "Developed community weather monitoring system"
      ],
      description: "A community-led organic garden serving 150 families, focusing on sustainable practices and climate resilience."
    },
    {
      name: "eKhenana Commune Food Garden",
      location: "Johannesburg, Gauteng",
      icon: <Cloud className="h-6 w-6" />,
      crops: ["Lettuce", "Cabbage", "Beans", "Herbs"],
      climateProblems: ["Drought", "Extreme heat", "Water scarcity"],
      solutions: [
        "Implemented drip irrigation system",
        "Used mulching for moisture retention",
        "Planted drought-resistant varieties",
        "Installed rainwater harvesting tanks"
      ],
      description: "Urban commune garden demonstrating water-wise gardening techniques in a metropolitan setting."
    },
    {
      name: "Elundini Permaculture Food Garden",
      location: "Eastern Cape",
      icon: <MapPin className="h-6 w-6" />,
      crops: ["Sweet potatoes", "Pumpkins", "Maize", "Indigenous vegetables"],
      climateProblems: ["Frost damage", "Erratic rainfall", "Soil degradation"],
      solutions: [
        "Created microclimates with stone walls",
        "Established companion planting systems",
        "Built compost production areas",
        "Used frost protection covers"
      ],
      description: "Permaculture-based garden integrating traditional knowledge with modern climate adaptation techniques."
    },
    {
      name: "Gardendale Farm",
      location: "Western Cape",
      icon: <Zap className="h-6 w-6" />,
      crops: ["Leafy greens", "Root vegetables", "Seasonal fruits", "Medicinal plants"],
      climateProblems: ["Strong coastal winds", "Salt spray", "Water restrictions"],
      solutions: [
        "Erected wind-resistant structures",
        "Implemented greywater recycling",
        "Selected salt-tolerant plant varieties",
        "Created terraced growing areas"
      ],
      description: "Coastal farm adapting to marine climate challenges while maintaining diverse crop production."
    },
    {
      name: "Orangeville Communal Vegetable Garden",
      location: "Free State",
      icon: <Sprout className="h-6 w-6" />,
      crops: ["Potatoes", "Beetroot", "Cabbage", "Green beans"],
      climateProblems: ["Hail damage", "Temperature fluctuations", "Wind erosion"],
      solutions: [
        "Built hail protection nets",
        "Created windbreak hedgerows",
        "Established season extension tunnels",
        "Developed community early warning system"
      ],
      description: "Rural community garden serving 80 households with focus on food security and climate resilience."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning from Real Communities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how communities across South Africa are successfully adapting their food gardens 
            to climate challenges and building resilience for food security.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="shadow-card hover:shadow-natural transition-smooth h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {study.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{study.name}</CardTitle>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{study.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{study.description}</p>
                
                {/* Crops */}
                <div>
                  <h4 className="font-semibold mb-2">Crops Grown</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.crops.map((crop, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-accent/30 text-accent-foreground">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Climate Problems */}
                <div>
                  <h4 className="font-semibold mb-2 text-destructive">Climate Challenges Faced</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.climateProblems.map((problem, idx) => (
                      <Badge key={idx} variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
                        {problem}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-semibold mb-3">Adaptive Solutions Implemented</h4>
                  <ul className="space-y-2">
                    {study.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Learnings */}
        <div className="bg-accent/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Learnings from These Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Community-Led Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Most successful adaptations come from community knowledge and collective action.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Low-Cost Technology</h3>
              <p className="text-sm text-muted-foreground">
                Simple, affordable technologies can provide effective climate protection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Early Warning Systems</h3>
              <p className="text-sm text-muted-foreground">
                Weather monitoring and alerts help communities prepare for climate events.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Note */}
        <div className="bg-card p-6 rounded-lg shadow-card mb-8">
          <h3 className="font-semibold mb-2">📸 Real Photos Coming Soon</h3>
          <p className="text-muted-foreground">
            We are currently collecting photographs from these community gardens to showcase their 
            real-world impact and solutions. These images will be added to enhance the case studies.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Inspired by These Solutions?</h3>
          <p className="text-muted-foreground mb-6">
            Learn how to implement similar protective measures and sustainable practices in your own community garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button variant="default" size="lg">
                See Detailed Solutions
              </Button>
            </Link>
            <Link to="/weather">
              <Button variant="sky" size="lg">
                Get Weather Protection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Play, BookOpen, Link as LinkIcon } from "lucide-react";

const Education = () => {
  const videoResources = [
    {
      title: "How to Build a Shade Cloth Cover",
      description: "Step-by-step guide to creating affordable shade protection for your garden",
      category: "Protection Structures",
      duration: "8 min"
    },
    {
      title: "Rainwater Harvesting Techniques",
      description: "Learn to collect and store rainwater using simple, low-cost methods",
      category: "Water Management",
      duration: "12 min"
    },
    {
      title: "Composting for Beginners",
      description: "Turn kitchen waste into nutrient-rich soil amendment for your plants",
      category: "Soil Health",
      duration: "10 min"
    },
    {
      title: "Climate-Resistant Crop Selection",
      description: "Choose the right varieties for your local climate challenges",
      category: "Crop Planning",
      duration: "15 min"
    }
  ];

  const references = [
    {
      title: "South African Weather Service",
      url: "https://www.weathersa.co.za",
      description: "Official weather forecasts and climate information for South Africa"
    },
    {
      title: "Department of Agriculture, Land Reform and Rural Development",
      url: "https://www.dalrrd.gov.za",
      description: "Government resources for sustainable agriculture and food security"
    },
    {
      title: "Water Research Commission",
      url: "https://www.wrc.org.za",
      description: "Research and guidelines on water-efficient agricultural practices"
    },
    {
      title: "Agricultural Research Council",
      url: "https://www.arc.agric.za",
      description: "Scientific research on climate-resilient farming practices"
    },
    {
      title: "Sustainable Agriculture Programme",
      url: "https://www.sustainableagriculture.co.za",
      description: "Resources for environmentally sustainable farming methods"
    },
    {
      title: "Climate Change Adaptation Guidelines",
      url: "https://www.environment.gov.za/adaptation",
      description: "National guidelines for climate change adaptation in agriculture"
    },
    {
      title: "Indigenous Food Plants Network",
      url: "https://www.indigenousplants.co.za",
      description: "Information on drought-resistant indigenous crops and vegetables"
    },
    {
      title: "Community Garden Resources",
      url: "https://www.communitygardens.org.za",
      description: "Best practices and support for community food garden projects"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Learning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive educational materials, project documentation, and expert resources 
            to build climate-resilient community gardens.
          </p>
        </div>

        {/* Project Presentation Section */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <BookOpen className="h-6 w-6 text-primary" />
                <span>Our Project Presentation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Garden Guardians: Complete Project Documentation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Download our comprehensive presentation containing detailed research, case studies, 
                    solution frameworks, and implementation guidelines for climate-resilient community gardens.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">16 Pages</Badge>
                    <Badge variant="secondary">Case Studies</Badge>
                    <Badge variant="secondary">Solution Framework</Badge>
                    <Badge variant="secondary">Research Data</Badge>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button variant="default" size="lg" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Full Presentation (PDF)</span>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">2.3 MB • PDF Format</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Video Resources Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Play className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Educational Videos & Guides</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            We've compiled practical video tutorials and guides on building resilient gardens, 
            water management, and sustainable growing techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoResources.map((video, index) => (
              <Card key={index} className="shadow-card hover:shadow-natural transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">{video.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {video.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {video.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-full ml-4">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Coming Soon - Video Tutorial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              📹 <strong>Video Content Coming Soon:</strong> We are currently developing practical video tutorials 
              for each solution. Links to professionally produced educational content will be added to enhance 
              the learning experience.
            </p>
          </div>
        </section>

        {/* References Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <LinkIcon className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">References & External Resources</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Access official government resources, research institutions, and expert organizations 
            supporting sustainable agriculture and climate adaptation in South Africa.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {references.map((reference, index) => (
              <Card key={index} className="shadow-card hover:shadow-natural transition-smooth">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{reference.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{reference.description}</p>
                      <div className="flex items-center space-x-2 text-xs text-primary">
                        <ExternalLink className="h-3 w-3" />
                        <span className="truncate">{reference.url}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-4 flex-shrink-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Pathways */}
        <section className="mb-16">
          <Card className="shadow-card bg-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl">Recommended Learning Pathway</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Understand the Problem</h4>
                  <p className="text-sm text-muted-foreground">Learn about climate threats to food gardens</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Study Success Stories</h4>
                  <p className="text-sm text-muted-foreground">Review real-world case studies and solutions</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Implement Solutions</h4>
                  <p className="text-sm text-muted-foreground">Apply practical protection methods</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Use Technology</h4>
                  <p className="text-sm text-muted-foreground">Get weather alerts and monitoring</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Resources */}
        <section>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>💡 Need More Information?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Technical Support</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    For questions about implementing these solutions in your community
                  </p>
                  <Button variant="outline" size="sm">Contact ICT Faculty</Button>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Community Networks</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Connect with other garden guardians and share experiences
                  </p>
                  <Button variant="outline" size="sm">Join Community Groups</Button>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Research Updates</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Stay informed about new climate adaptation research and methods
                  </p>
                  <Button variant="outline" size="sm">Subscribe to Updates</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Education;
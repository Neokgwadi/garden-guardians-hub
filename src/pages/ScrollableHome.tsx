import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, Thermometer, CloudRain, Wind, Users, MapPin, 
  AlertTriangle, Sprout, Cloud, Zap, Hammer, Smartphone, 
  Droplets, Leaf, Download, Play, BookOpen, Target, Award,
  ExternalLink, Heart, Clock
} from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const ScrollableHome = () => {
  const [showWeatherForecast, setShowWeatherForecast] = useState(false);
  const [location, setLocation] = useState("");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleCheckWeather = () => {
    if (location.trim()) {
      setShowWeatherForecast(true);
    }
  };

  const caseStudies = [
    {
      name: "Phumulani Agri-Village",
      location: "KwaZulu-Natal",
      icon: <Sprout className="h-5 w-5" />,
      crops: ["Tomatoes", "Spinach", "Carrots"],
      problems: ["Hailstorms", "Heavy rainfall"],
      solutions: ["Protective shade cloths", "Raised beds", "Weather monitoring"]
    },
    {
      name: "eKhenana Commune",
      location: "Johannesburg, Gauteng",
      icon: <Cloud className="h-5 w-5" />,
      crops: ["Lettuce", "Beans", "Herbs"],
      problems: ["Drought", "Extreme heat"],
      solutions: ["Drip irrigation", "Mulching", "Rainwater harvesting"]
    },
    {
      name: "Elundini Permaculture",
      location: "Eastern Cape",
      icon: <Leaf className="h-5 w-5" />,
      crops: ["Sweet potatoes", "Indigenous vegetables"],
      problems: ["Frost damage", "Soil degradation"],
      solutions: ["Microclimates", "Companion planting", "Composting"]
    }
  ];

  const practicalSolutions = [
    {
      title: "Protective Structures",
      icon: <Shield className="h-5 w-5" />,
      items: ["Shade cloths", "Plastic tunnels", "Hail nets", "Windbreaks"]
    },
    {
      title: "Water Management",
      icon: <Droplets className="h-5 w-5" />,
      items: ["Rainwater harvesting", "Drip irrigation", "Mulching", "Greywater recycling"]
    },
    {
      title: "Climate-Resistant Crops",
      icon: <Sprout className="h-5 w-5" />,
      items: ["Pearl Millet", "Sweet Potatoes", "Indigenous vegetables", "Drought-tolerant varieties"]
    }
  ];

  const teamMembers = [
    "Student Name 1 - 12345678",
    "Student Name 2 - 23456789", 
    "Student Name 3 - 34567890",
    "Student Name 4 - 45678901"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
        
        <div className={`relative z-10 max-w-4xl mx-auto px-4 text-primary-foreground transition-all duration-1000 ${
          visibleSections.has('home') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 p-3 bg-primary-foreground/20 rounded-full mb-6 animate-float">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">Garden Guardians</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Protecting Food Security
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Empowering communities to build resilient food gardens in the face of climate change through sustainable solutions and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 hover:scale-105 transition-transform"
              onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn About The Problem
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 hover:scale-105 transition-transform"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('problem') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Threat to Our Food Gardens</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Climate change is creating unprecedented challenges for community food gardens
            </p>
          </div>

          <Alert className="mb-12 border-destructive/50 bg-destructive/5">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-lg">
              <strong>Critical Impact:</strong> Unexpected weather events are threatening food security in provinces like Emalahleni, Limpopo, and KwaZulu-Natal.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Thermometer, title: "Heatwaves", desc: "Extreme temperatures damaging crops", color: "text-destructive bg-destructive/10" },
              { icon: CloudRain, title: "Heavy Rains", desc: "Flooding and waterlogged soil", color: "text-primary bg-primary/10" },
              { icon: Wind, title: "Strong Winds", desc: "Physical damage to plants", color: "text-sky bg-sky/20" },
              { icon: Users, title: "Food Insecurity", desc: "Impact on community nutrition", color: "text-muted-foreground bg-muted" }
            ].map((threat, index) => (
              <Card key={index} className={`shadow-card hover:shadow-natural transition-all duration-500 hover:scale-105 ${
                visibleSections.has('problem') ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`} style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${threat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <threat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{threat.title}</h3>
                  <p className="text-sm text-muted-foreground">{threat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('case-studies') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Learning from Real Communities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Success stories from communities building climate-resilient gardens across South Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className={`shadow-card hover:shadow-natural transition-all duration-500 hover:scale-105 ${
                visibleSections.has('case-studies') ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`} style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {study.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{study.name}</CardTitle>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{study.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Crops</h4>
                    <div className="flex flex-wrap gap-1">
                      {study.crops.map((crop, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{crop}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-destructive">Challenges</h4>
                    <div className="flex flex-wrap gap-1">
                      {study.problems.map((problem, idx) => (
                        <Badge key={idx} variant="destructive" className="text-xs">{problem}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solutions</h4>
                    <ul className="text-sm space-y-1">
                      {study.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('solutions') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Sustainable Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical, affordable solutions to protect gardens from climate change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {practicalSolutions.map((solution, index) => (
              <Card key={index} className={`shadow-card hover:shadow-natural transition-all duration-500 hover:scale-105 ${
                visibleSections.has('solutions') ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`} style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {solution.icon}
                    </div>
                    <span>{solution.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
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

          <Separator className="my-12" />

          {/* Tech Solution */}
          <div className="bg-accent/20 rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Tech-Supported Solution</h3>
              </div>
              <p className="text-muted-foreground">Weather alert system for garden protection</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Location Input", desc: "Enter garden location" },
                { step: "2", title: "Weather Fetch", desc: "Get 7-day forecast" },
                { step: "3", title: "Alert Generation", desc: "Trigger warnings" },
                { step: "4", title: "Protection Tips", desc: "Specific actions" }
              ].map((step, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weather App Section */}
      <section id="weather" className="py-20 bg-sky/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('weather') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-2 p-3 bg-sky/20 rounded-full mb-6">
              <Shield className="h-8 w-8 text-sky" />
              <span className="text-xl font-bold text-sky">Weather Alert System</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Garden Weather Protection</h2>
            <p className="text-xl text-muted-foreground">
              Try our prototype weather alert system designed for community gardens
            </p>
          </div>

          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle>Check Weather Forecast for Your Garden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex space-x-3">
                <Input
                  type="text"
                  placeholder="e.g., Belfast, Mpumalanga"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleCheckWeather}
                  variant="sky"
                  className="px-6 hover:scale-105 transition-transform"
                >
                  Check Forecast
                </Button>
              </div>
            </CardContent>
          </Card>

          {showWeatherForecast && (
            <div className="space-y-6 animate-fade-in">
              <Alert className="border-sky/50 bg-sky/5">
                <MapPin className="h-5 w-5 text-sky" />
                <AlertDescription className="text-lg">
                  <strong>Weather Forecast for:</strong> {location || "Your Location"}
                </AlertDescription>
              </Alert>

              <Card className="shadow-card border-destructive/50">
                <CardHeader className="bg-destructive/5">
                  <CardTitle className="flex items-center space-x-2 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                    <span>⚠️ Severe Weather Alert</span>
                    <Badge variant="destructive">High Priority</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Alert Details</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Event:</strong> Severe hailstorms expected</p>
                        <p><strong>Timing:</strong> Next 48 hours</p>
                        <p><strong>Area:</strong> {location || "Your region"}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🛡️ Protection Actions</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Secure hail nets over crops</li>
                        <li>• Move potted plants to shelter</li>
                        <li>• Harvest ready produce</li>
                        <li>• Check garden structures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <Alert className="mt-8">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <AlertDescription>
              <strong>🚧 Prototype:</strong> This demonstrates our weather alert concept. A full version would integrate with live weather APIs.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('education') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Educational Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive materials and expert resources for climate-resilient gardening
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-natural transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>Project Documentation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete presentation with research, case studies, and implementation guidelines
                </p>
                <Button variant="default" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF (2.3 MB)
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-natural transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Play className="h-6 w-6 text-primary" />
                  <span>Video Tutorials</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Practical guides on protection structures, water management, and sustainable growing
                </p>
                <Button variant="outline" className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-natural transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <ExternalLink className="h-6 w-6 text-primary" />
                  <span>External Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Links to government resources, research institutions, and expert organizations
                </p>
                <Button variant="earth" className="w-full">
                  View References
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('about') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the Garden Guardians</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              First-year ICT students passionate about technology solutions for food security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Our Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="p-3 bg-accent/20 rounded-lg">
                      <span className="font-medium">{member}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Project Context</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div><strong>Course:</strong> Joint Group Assignment 2025</div>
                <div><strong>Faculty:</strong> Information and Communication Technology</div>
                <div><strong>Focus:</strong> Community Engagement on Food Security</div>
                <div><strong>UN SDGs:</strong> No Poverty & Zero Hunger</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Using technology and innovation to address real-world challenges in food security 
              and climate resilience for vulnerable communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Solutions
              </Button>
              <Button 
                variant="earth" 
                size="lg"
                onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Access Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollableHome;
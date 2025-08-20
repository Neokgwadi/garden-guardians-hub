import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Thermometer, CloudRain, Wind, Users } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-primary-foreground">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 p-3 bg-primary-foreground/20 rounded-full mb-6">
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
            <Link to="/problem">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Learn About The Problem
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30">
                See Our Solutions
              </Button>
            </Link>
            <Link to="/weather">
              <Button variant="sky" size="lg" className="text-lg px-8">
                Get Weather Alerts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Climate change is threatening community food gardens worldwide through unpredictable weather events. 
              We investigate these impacts and propose sustainable, practical, and technology-supported solutions 
              to protect food security for vulnerable communities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Threats Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Climate Threats We Address</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the challenges facing community gardens today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-natural transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Heatwaves</h3>
                <p className="text-sm text-muted-foreground">Extreme temperatures damaging crops</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-natural transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sky/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudRain className="h-6 w-6 text-sky" />
                </div>
                <h3 className="font-semibold mb-2">Heavy Rains</h3>
                <p className="text-sm text-muted-foreground">Flooding and waterlogged soil</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-natural transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Strong Winds</h3>
                <p className="text-sm text-muted-foreground">Structural damage to plants</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-natural transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Food Insecurity</h3>
                <p className="text-sm text-muted-foreground">Impact on community nutrition</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/problem">
              <Button variant="default" size="lg">
                Learn More About These Threats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Garden Guardian Movement
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Discover sustainable solutions, learn from successful case studies, and access our weather alert system to protect your community garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30">
                View Case Studies
              </Button>
            </Link>
            <Link to="/education">
              <Button variant="outline" size="lg" className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30">
                Educational Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
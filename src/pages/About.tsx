import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, ExternalLink, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    { name: "Student Name 1", number: "12345678" },
    { name: "Student Name 2", number: "23456789" },
    { name: "Student Name 3", number: "34567890" },
    { name: "Student Name 4", number: "45678901" },
    { name: "Student Name 5", number: "56789012" },
    { name: "Student Name 6", number: "67890123" }
  ];

  const sdgGoals = [
    {
      number: 1,
      title: "No Poverty",
      description: "Supporting community food gardens helps reduce poverty by providing access to nutritious food and potential income generation.",
      color: "bg-red-500"
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "Our climate-resilient solutions ensure communities maintain access to fresh, healthy food despite weather challenges.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Garden Guardians</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a dedicated team of first-year ICT students passionate about using technology 
            and innovation to address real-world challenges in food security and climate resilience.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="shadow-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <Target className="h-6 w-6 text-primary" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Garden Guardians project represents our commitment to Community Engagement on Food Security 
              through Garden Projects. We believe that combining traditional agricultural knowledge with modern 
              technology can create sustainable solutions for climate-vulnerable communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Community First</h3>
                <p className="text-sm text-muted-foreground">Putting community needs at the center of our solutions</p>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Evidence-Based</h3>
                <p className="text-sm text-muted-foreground">Research-driven approaches to real-world problems</p>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Sustainable Impact</h3>
                <p className="text-sm text-muted-foreground">Long-term solutions for lasting change</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          
          <Card className="shadow-card mb-6">
            <CardHeader>
              <CardTitle>ICT Faculty Students - Class of 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-4 bg-accent/10 rounded-lg border">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">Student #: {member.number}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-muted-foreground">
            <p className="italic">
              "As first-year ICT students, we bring fresh perspectives and enthusiasm to solving 
              complex challenges facing our communities."
            </p>
          </div>
        </section>

        {/* Project Context */}
        <section className="mb-12">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-primary" />
                <span>Academic Project Context</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Project Details</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Course:</strong> Joint Group Assignment (JGA) 2025</li>
                    <li><strong>Faculty:</strong> Information and Communication Technology</li>
                    <li><strong>Focus:</strong> Community Engagement on Food Security</li>
                    <li><strong>Theme:</strong> Garden Projects for Climate Resilience</li>
                    <li><strong>Duration:</strong> Full Academic Year</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Learning Objectives</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Apply ICT solutions to real-world problems</li>
                    <li>• Understand community engagement principles</li>
                    <li>• Research climate adaptation strategies</li>
                    <li>• Develop web-based information systems</li>
                    <li>• Practice collaborative project management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* UN SDGs Alignment */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Alignment with UN Sustainable Development Goals</h2>
            <p className="text-muted-foreground">
              Our project directly contributes to achieving global sustainability targets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sdgGoals.map((goal, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${goal.color} text-white rounded-lg flex items-center justify-center font-bold text-xl`}>
                      {goal.number}
                    </div>
                    <div>
                      <CardTitle className="text-xl">SDG {goal.number}: {goal.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Impact */}
        <section className="mb-12">
          <Card className="shadow-card bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Project Impact & Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <h3 className="font-semibold mb-1">Case Studies</h3>
                  <p className="text-sm text-muted-foreground">Real community gardens analyzed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <h3 className="font-semibold mb-1">Solutions</h3>
                  <p className="text-sm text-muted-foreground">Practical climate adaptation methods</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-semibold mb-1">Tech Solution</h3>
                  <p className="text-sm text-muted-foreground">Weather alert system prototype</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Technology & Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This website was built using modern web technologies as part of our ICT learning journey:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Responsive Design</Badge>
                <Badge variant="secondary">Accessibility</Badge>
                <Badge variant="secondary">Modern UI/UX</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-accent/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a community gardener, researcher, or simply someone who cares about 
            food security, there are many ways to support and engage with our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button variant="default" size="lg">
                Explore Our Solutions
              </Button>
            </Link>
            <Link to="/education">
              <Button variant="earth" size="lg">
                Access Resources
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>Contact Our Faculty</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Thermometer, CloudRain, Wind, Snowflake, MapPin, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Problem = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Threat to Our Food Gardens</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Climate change is creating unprecedented challenges for community food gardens, 
            threatening food security in vulnerable communities across South Africa.
          </p>
        </div>

        {/* Key Statistics Alert */}
        <Alert className="mb-12 border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-lg">
            <strong>Critical Impact:</strong> Unexpected weather events are increasingly damaging community food gardens, 
            putting local food security at risk in provinces like Emalahleni, Limpopo, and KwaZulu-Natal.
          </AlertDescription>
        </Alert>

        {/* Climate Threats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-natural transition-smooth">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <Thermometer className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">Heatwaves</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Extreme heat events are becoming more frequent and intense, causing:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Crop wilting and reduced yields</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Soil moisture depletion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Heat stress on plants and workers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <span>Increased water requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-natural transition-smooth">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sky/20 rounded-full">
                  <Snowflake className="h-6 w-6 text-sky" />
                </div>
                <CardTitle className="text-xl">Cold Snaps & Frost</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Unexpected cold weather events damage vulnerable crops:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-sky rounded-full mt-2 flex-shrink-0"></span>
                  <span>Frost damage to tender plants</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-sky rounded-full mt-2 flex-shrink-0"></span>
                  <span>Slowed growth rates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-sky rounded-full mt-2 flex-shrink-0"></span>
                  <span>Crop loss for temperature-sensitive vegetables</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-sky rounded-full mt-2 flex-shrink-0"></span>
                  <span>Disrupted growing seasons</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-natural transition-smooth">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Heavy Rains & Flooding</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Intense rainfall events create multiple challenges:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Waterlogged soil preventing root breathing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Soil erosion and nutrient loss</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Increased fungal diseases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Difficulty accessing garden areas</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-natural transition-smooth">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-accent/50 rounded-full">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Strong Winds</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                High winds cause immediate and lasting damage:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Physical damage to plants and structures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Increased moisture loss from plants</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Salt spray damage in coastal areas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Destruction of protective barriers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Regional Impact */}
        <div className="bg-muted/30 rounded-lg p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Regional Impact in South Africa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="font-semibold text-lg mb-3">Emalahleni</h3>
              <p className="text-muted-foreground">
                Mining region facing dual challenges of environmental degradation and climate extremes 
                affecting local food production capabilities.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="font-semibold text-lg mb-3">Limpopo</h3>
              <p className="text-muted-foreground">
                Rural communities experiencing increased drought frequency and unpredictable rainfall 
                patterns disrupting traditional farming cycles.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="font-semibold text-lg mb-3">KwaZulu-Natal</h3>
              <p className="text-muted-foreground">
                Coastal province dealing with extreme weather events including flooding and storm damage 
                to community garden infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Why This Matters</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Community food gardens are vital for food security, especially in vulnerable communities. 
              When climate events destroy these gardens, families lose access to fresh, nutritious food, 
              and communities lose their self-sufficiency and resilience.
            </p>
            <p className="text-lg text-muted-foreground">
              The combination of increasing weather unpredictability and the dependence on small-scale 
              food production makes immediate action essential to protect these critical food sources.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Learn About Solutions?</h3>
          <p className="text-muted-foreground mb-6">
            Discover how communities are successfully adapting to climate challenges and protecting their food security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/case-studies">
              <Button variant="default" size="lg">
                See Real-World Solutions
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="earth" size="lg">
                Explore Our Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
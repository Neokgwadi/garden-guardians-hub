import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { CloudRain, Thermometer, Wind, AlertTriangle, MapPin, Clock, Shield } from "lucide-react";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [showForecast, setShowForecast] = useState(false);

  const handleCheckWeather = () => {
    if (location.trim()) {
      setShowForecast(true);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 p-3 bg-sky/20 rounded-full mb-6">
            <Shield className="h-8 w-8 text-sky" />
            <span className="text-xl font-bold text-sky">Weather Alert System</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Garden Guardians Weather Alert</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get early warnings about severe weather events that could threaten your community garden. 
            Protect your crops with timely alerts and specific recommendations.
          </p>
        </div>

        {/* Purpose Section */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <span>How Our Weather Alert System Protects Your Garden</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our weather alert system is specifically designed for community gardens and small-scale farmers. 
              Unlike generic weather apps, we focus on the specific weather events that can damage crops and 
              provide actionable protection recommendations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold">What We Monitor:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-destructive" />
                    <span>Extreme heat & frost warnings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CloudRain className="h-4 w-4 text-primary" />
                    <span>Heavy rain & hail alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Wind className="h-4 w-4 text-accent" />
                    <span>Strong wind advisories</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">What We Provide:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>48-hour advance warnings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Specific protection actions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Location-specific alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Check Interface */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle>Check Weather Forecast for Your Garden</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Enter Your Garden's Location
                </label>
                <div className="flex space-x-3">
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Belfast, Mpumalanga"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleCheckWeather}
                    variant="sky"
                    className="px-6"
                  >
                    Check Weather Forecast
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                💡 <strong>Tip:</strong> Include your city and province for the most accurate results 
                (e.g., "Johannesburg, Gauteng" or "Cape Town, Western Cape")
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Simulated Results */}
        {showForecast && (
          <div className="space-y-6">
            <Alert className="border-sky/50 bg-sky/5">
              <MapPin className="h-5 w-5 text-sky" />
              <AlertDescription className="text-lg">
                <strong>Weather Forecast Retrieved for:</strong> {location || "Your Location"}
              </AlertDescription>
            </Alert>

            {/* Sample Alert */}
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
                      <p><strong>Timing:</strong> Next 48 hours (Peak: Tomorrow afternoon)</p>
                      <p><strong>Severity:</strong> High - Potential crop damage</p>
                      <p><strong>Affected Area:</strong> {location || "Your region"} and surrounding areas</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">🛡️ Immediate Actions Required</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Secure protective hail nets over vulnerable crops</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Move potted plants and seedlings to covered areas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Harvest any ready produce before the storm</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Check and secure any loose garden structures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7-Day Outlook */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>7-Day Garden Weather Outlook</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {[
                    { day: "Today", weather: "Sunny", temp: "24°C", status: "safe" },
                    { day: "Tomorrow", weather: "Hailstorm", temp: "18°C", status: "danger" },
                    { day: "Wed", weather: "Cloudy", temp: "22°C", status: "safe" },
                    { day: "Thu", weather: "Light Rain", temp: "19°C", status: "caution" },
                    { day: "Fri", weather: "Sunny", temp: "26°C", status: "safe" },
                    { day: "Sat", weather: "Windy", temp: "21°C", status: "caution" },
                    { day: "Sun", weather: "Clear", temp: "25°C", status: "safe" }
                  ].map((forecast, index) => (
                    <div key={index} className={`p-3 rounded-lg text-center ${
                      forecast.status === 'danger' ? 'bg-destructive/10 border border-destructive/20' :
                      forecast.status === 'caution' ? 'bg-yellow-50 border border-yellow-200' :
                      'bg-accent/20'
                    }`}>
                      <p className="font-semibold text-sm">{forecast.day}</p>
                      <p className="text-xs text-muted-foreground">{forecast.weather}</p>
                      <p className="text-sm">{forecast.temp}</p>
                      {forecast.status === 'danger' && <Badge variant="destructive" className="text-xs mt-1">Alert</Badge>}
                      {forecast.status === 'caution' && <Badge variant="outline" className="text-xs mt-1">Watch</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Prototype Disclaimer */}
        <Alert className="mt-8">
          <AlertTriangle className="h-5 w-5 text-primary" />
          <AlertDescription>
            <strong>🚧 Prototype Notice:</strong> This is a functional prototype demonstrating the weather alert concept. 
            A full production version would integrate with live weather APIs and provide real-time alerts via SMS or app notifications. 
            The sample data shown above illustrates how the system would work in practice.
          </AlertDescription>
        </Alert>

        {/* Future Features */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle>🚀 Future Features (Full Version)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Alert Delivery</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SMS notifications to mobile phones</li>
                  <li>• WhatsApp alerts for community groups</li>
                  <li>• Email updates with detailed forecasts</li>
                  <li>• Voice calls for severe weather</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Enhanced Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time radar and satellite imagery</li>
                  <li>• Crop-specific protection recommendations</li>
                  <li>• Community sharing of weather impacts</li>
                  <li>• Integration with local weather stations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Weather;
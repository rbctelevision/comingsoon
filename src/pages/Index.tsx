import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Card } from "@/components/ui/card";
import { Tv, Radio, Users, Globe } from "lucide-react";
const heroImage = "/lovable-uploads/7a313ac6-630a-49cd-a28e-890fe28becbd.png";

const Index = () => {
  // Set launch date to August 29th, 2025
  const launchDate = new Date('2025-08-29T00:00:00');

  const features = [
    {
      icon: Tv,
      title: "Live Broadcasting",
      description: "Professional quality live streaming and broadcasting services"
    },
    {
      icon: Radio,
      title: "Multi-Platform",
      description: "Reach audiences across television, radio, and digital platforms"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building meaningful connections through faith-based programming"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Broadcasting inspiring content to audiences worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                RBC Television
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>

            {/* Coming Soon Message */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Our Vision is Coming
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We're preparing to launch a revolutionary broadcasting experience that will inspire, 
                educate, and connect communities around the world.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <CountdownTimer targetDate={launchDate} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What to Expect
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              RBC Television will bring you premium content and cutting-edge broadcasting technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-to-b from-card to-secondary border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RBC Television
            </h4>
          </div>
          <p className="text-muted-foreground mb-4">
            © 2025 RBC Television. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Stay connected. Stay inspired. Coming soon.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

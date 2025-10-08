import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Trophy, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import equipmentImg from '@/assets/equipment.jpg';
import facilitiesImg from '@/assets/facilities.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from equipment to training programs.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome and motivated.',
    },
    {
      icon: Trophy,
      title: 'Results',
      description: 'Committed to helping you achieve measurable, lasting results.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional trainers dedicated to your success every step of the way.',
    },
  ];

  const milestones = [
    { year: '2015', event: 'Elite Fitness Founded' },
    { year: '2017', event: 'Expanded to 5,000+ Members' },
    { year: '2019', event: 'Awarded Best Gym in the City' },
    { year: '2021', event: 'Launched Virtual Training Platform' },
    { year: '2023', event: 'Opened Second Location' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">
              About <span className="text-gradient">Elite Fitness</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2015, Elite Fitness has become the premier destination for fitness
              enthusiasts seeking to transform their lives. Our mission is simple: provide
              world-class facilities, expert guidance, and a supportive community to help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="mb-6">Our <span className="text-gradient">Story</span></h2>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a small neighborhood gym has grown into a thriving fitness
                community. Our founder, a former professional athlete, wanted to create a space
                where people of all fitness levels could train with cutting-edge equipment and
                receive expert coaching.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Today, Elite Fitness serves over 5,000 members and employs 50+ certified trainers.
                We've helped thousands achieve their fitness goals, from weight loss and muscle
                gain to athletic performance and overall wellness.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-black font-bold hover:bg-primary/90 hover:shadow-glow transition-all duration-300">
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img
                src={equipmentImg}
                alt="Elite Fitness Equipment"
                className="rounded-lg shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">Our <span className="text-gradient">Values</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">Our <span className="text-gradient">Journey</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 mb-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-black flex-shrink-0">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-lg text-white font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in order-2 lg:order-1">
              <img
                src={facilitiesImg}
                alt="Elite Fitness Facilities"
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
            <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '200ms' }}>
              <h2 className="mb-6">World-Class <span className="text-gradient">Facilities</span></h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our state-of-the-art facilities include premium equipment, spacious training areas,
                luxury locker rooms, sauna, and recovery zones. Every detail is designed to enhance
                your fitness experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    Latest strength and cardio equipment from top brands
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    Dedicated spaces for CrossFit, yoga, and group classes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    Premium locker rooms with sauna and steam room
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    On-site juice bar and supplement store
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30 hover-glow">
            <CardContent className="p-12 text-center">
              <h2 className="mb-6 text-white">
                Ready to <span className="text-gradient">Transform</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join Elite Fitness today and start your journey to a stronger, healthier you
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-black font-bold text-lg px-8 py-6 hover:shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Users, Target, Dumbbell } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';
import trainer1 from '@/assets/trainer-1.jpg';
import trainer2 from '@/assets/trainer-2.jpg';
import crossfitImg from '@/assets/program-crossfit.jpg';
import cardioImg from '@/assets/program-cardio.jpg';
import yogaImg from '@/assets/program-yoga.jpg';
import equipmentImg from '@/assets/equipment.jpg';

const Home = () => {
  const trainers = [
    {
      name: 'Mike Johnson',
      specialty: 'Strength & Conditioning',
      image: trainer1,
      bio: '10+ years of experience in professional athlete training',
    },
    {
      name: 'Sarah Williams',
      specialty: 'Yoga & Wellness',
      image: trainer2,
      bio: 'Certified yoga instructor and nutrition specialist',
    },
  ];

  const programs = [
    {
      name: 'CrossFit Training',
      duration: '60 min',
      description: 'High-intensity functional fitness for all levels',
      image: crossfitImg,
    },
    {
      name: 'Cardio Blast',
      duration: '45 min',
      description: 'Get your heart pumping with our cardio programs',
      image: cardioImg,
    },
    {
      name: 'Yoga & Wellness',
      duration: '50 min',
      description: 'Find balance and flexibility in body and mind',
      image: yogaImg,
    },
  ];

  const testimonials = [
    {
      name: 'John Davis',
      text: 'Elite Fitness transformed my life! Lost 30 pounds in 3 months.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      text: 'Best trainers and equipment. This gym is next level!',
      rating: 5,
    },
    {
      name: 'Marcus Thompson',
      text: 'The community here is amazing. Always motivated to push harder.',
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: '5000+', label: 'Active Members' },
    { icon: Dumbbell, value: '50+', label: 'Expert Trainers' },
    { icon: Target, value: '100+', label: 'Classes Weekly' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-white mb-6 font-black">
            Transform Your <span className="text-gradient">Body</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the elite. Experience world-class training, expert guidance, and results that last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-black font-bold text-lg px-8 py-6 hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 transition-all duration-300"
            >
              View Programs
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="mb-6">
              Welcome to <span className="text-gradient">Elite Fitness</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're more than just a gym. We're a community dedicated to helping you achieve your
              fitness goals. With state-of-the-art equipment, expert trainers, and a supportive
              environment, your transformation starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">Meet Our <span className="text-gradient">Expert Trainers</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Train with certified professionals who are passionate about your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 overflow-hidden hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                  <p className="text-primary font-medium mb-3">{trainer.specialty}</p>
                  <p className="text-muted-foreground">{trainer.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">Our <span className="text-gradient">Programs</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from a variety of programs designed to match your fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 overflow-hidden hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{program.name}</h3>
                    <span className="text-primary font-medium">{program.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link to="/showroom">
                    <Button className="w-full bg-primary text-black font-bold hover:bg-primary/90">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section
        className="py-32 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url(${equipmentImg})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h2 className="text-white mb-6">
            Limited Time <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join now and get 50% off your first month plus a free personal training session
          </p>
          <Button
            size="lg"
            className="bg-primary text-black font-bold text-lg px-8 py-6 hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Claim Your Offer
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">What Our <span className="text-gradient">Members Say</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-white mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-primary font-bold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

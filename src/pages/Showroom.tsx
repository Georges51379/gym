import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Users, MapPin, Clock } from 'lucide-react';
import trainer1 from '@/assets/trainer-1.jpg';
import trainer2 from '@/assets/trainer-2.jpg';
import crossfitImg from '@/assets/program-crossfit.jpg';
import cardioImg from '@/assets/program-cardio.jpg';
import yogaImg from '@/assets/program-yoga.jpg';
import equipmentImg from '@/assets/equipment.jpg';
import facilitiesImg from '@/assets/facilities.jpg';

const Showroom = () => {
  const trainers = [
    {
      name: 'Mike Johnson',
      specialty: 'Strength & Conditioning',
      image: trainer1,
      experience: '10+ years',
      certifications: ['NASM-CPT', 'CSCS', 'CrossFit Level 2'],
      bio: 'Former professional athlete specializing in strength training and athletic performance. Helped 500+ clients achieve their fitness goals.',
      social: { instagram: '@mikej_fitness', twitter: '@mikejohnson' },
    },
    {
      name: 'Sarah Williams',
      specialty: 'Yoga & Wellness',
      image: trainer2,
      experience: '8+ years',
      certifications: ['RYT-500', 'Precision Nutrition', 'TRX Certified'],
      bio: 'Certified yoga instructor and nutrition specialist focused on holistic wellness and mindful movement.',
      social: { instagram: '@sarahyoga', twitter: '@sarahwilliams' },
    },
  ];

  const programs = [
    {
      name: 'CrossFit Training',
      duration: '60 min',
      description:
        'High-intensity functional fitness combining weightlifting, gymnastics, and metabolic conditioning. Perfect for building strength, endurance, and athletic performance.',
      image: crossfitImg,
      schedule: 'Mon-Fri: 6am, 12pm, 6pm | Sat-Sun: 8am, 10am',
      level: 'All Levels',
    },
    {
      name: 'Cardio Blast',
      duration: '45 min',
      description:
        'Heart-pumping cardio sessions using treadmills, bikes, and rowing machines. Burn calories and improve cardiovascular health with motivating music and expert coaching.',
      image: cardioImg,
      schedule: 'Mon-Fri: 7am, 5pm, 7pm | Sat-Sun: 9am, 11am',
      level: 'Beginner to Advanced',
    },
    {
      name: 'Yoga & Wellness',
      duration: '50 min',
      description:
        'Find balance and flexibility through various yoga styles including Vinyasa, Hatha, and Restorative. Improve mobility, reduce stress, and enhance mind-body connection.',
      image: yogaImg,
      schedule: 'Mon-Fri: 8am, 6pm | Sat-Sun: 10am',
      level: 'All Levels',
    },
  ];

  const equipment = [
    {
      category: 'Strength Training',
      items: [
        'Complete rack of dumbbells (5-150 lbs)',
        'Olympic barbells and bumper plates',
        'Power racks and squat stands',
        'Cable machines and pulley systems',
        'Smith machines',
        'Leg press and hack squat machines',
      ],
    },
    {
      category: 'Cardio Equipment',
      items: [
        'Commercial-grade treadmills',
        'Assault bikes and rowing machines',
        'Ellipticals and stair climbers',
        'Indoor cycling bikes',
        'Jacob\'s Ladder and ski ergs',
      ],
    },
    {
      category: 'Specialized Equipment',
      items: [
        'Functional training rigs',
        'Battle ropes and prowler sleds',
        'TRX suspension trainers',
        'Kettlebells and medicine balls',
        'Plyo boxes and agility equipment',
      ],
    },
  ];

  const facilities = [
    {
      name: 'Locker Rooms',
      description: 'Premium locker rooms with full amenities, showers, and secure storage',
    },
    {
      name: 'Sauna & Steam Room',
      description: 'Relax and recover in our luxury sauna and steam facilities',
    },
    {
      name: 'Juice Bar',
      description: 'Fresh smoothies, protein shakes, and healthy snacks',
    },
    {
      name: 'Pro Shop',
      description: 'Quality supplements, apparel, and fitness accessories',
    },
    {
      name: 'Recovery Zone',
      description: 'Foam rollers, massage guns, and stretching areas',
    },
    {
      name: 'Free WiFi',
      description: 'High-speed internet throughout the facility',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">
              Explore <span className="text-gradient">Elite Fitness</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our world-class trainers, programs, equipment, and facilities
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-background" id="trainers">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">
              Meet Our <span className="text-gradient">Expert Trainers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified professionals dedicated to your success
            </p>
          </div>

          <div className="space-y-12">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 overflow-hidden hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-2">{trainer.name}</h3>
                    <p className="text-primary font-bold text-lg mb-4">{trainer.specialty}</p>
                    <p className="text-muted-foreground mb-6">{trainer.bio}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-white">Experience: {trainer.experience}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium mb-2">Certifications:</p>
                        <div className="flex flex-wrap gap-2">
                          {trainer.certifications.map((cert, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-muted-foreground">
                      <span>{trainer.social.instagram}</span>
                      <span>{trainer.social.twitter}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-secondary" id="programs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">
              Our <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs for every fitness goal
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 overflow-hidden hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {index % 2 === 0 ? (
                    <>
                      <div className="aspect-video md:aspect-auto overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-white mb-2">{program.name}</h3>
                        <p className="text-primary font-bold mb-4">{program.duration}</p>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-white">
                              <span className="font-medium">Schedule:</span> {program.schedule}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-white">
                              <span className="font-medium">Level:</span> {program.level}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </>
                  ) : (
                    <>
                      <CardContent className="p-8 flex flex-col justify-center order-2 md:order-1">
                        <h3 className="text-3xl font-bold text-white mb-2">{program.name}</h3>
                        <p className="text-primary font-bold mb-4">{program.duration}</p>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-white">
                              <span className="font-medium">Schedule:</span> {program.schedule}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-white">
                              <span className="font-medium">Level:</span> {program.level}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <div className="aspect-video md:aspect-auto overflow-hidden order-1 md:order-2">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-background" id="equipment">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">
              State-of-the-Art <span className="text-gradient">Equipment</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium machines and tools for every training style
            </p>
          </div>

          <div className="mb-12 animate-fade-in">
            <img
              src={equipmentImg}
              alt="Gym Equipment"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Dumbbell className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-secondary" id="facilities">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">
              Premium <span className="text-gradient">Facilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for the ultimate fitness experience
            </p>
          </div>

          <div className="mb-12 animate-fade-in">
            <img
              src={facilitiesImg}
              alt="Gym Facilities"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="bg-card border-white/10 hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{facility.name}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background" id="location">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">
              Visit <span className="text-gradient">Our Location</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in the heart of the city
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card border-white/10 animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                      <p className="text-muted-foreground">123 Fitness Street</p>
                      <p className="text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 5am - 11pm</p>
                      <p className="text-muted-foreground">Saturday - Sunday: 7am - 9pm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-96 lg:h-full rounded-lg overflow-hidden border border-white/10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976378711861!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Fitness Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showroom;

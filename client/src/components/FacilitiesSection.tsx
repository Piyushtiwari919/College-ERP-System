import { motion } from 'motion/react';
import { Building, Wifi, Car, Coffee, Dumbbell, Heart, BookOpen, Monitor } from 'lucide-react';
import { Card } from './ui/card';

const facilities = [
  {
    icon: BookOpen,
    title: "Modern Library",
    description: "State-of-the-art library with 50,000+ books, digital resources, and quiet study spaces",
    image: "https://images.unsplash.com/photo-1597920940566-a77511f9327d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGludGVyaW9yfGVufDF8fHx8MTc1ODA0NzA0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Digital Catalog", "24/7 Access", "Research Database", "Silent Zones"]
  },
  {
    icon: Monitor,
    title: "Advanced Laboratories",
    description: "Well-equipped labs for all engineering disciplines with latest equipment and software",
    image: "https://images.unsplash.com/photo-1627704671340-0969d7dbac25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4MDQ3MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Latest Equipment", "Software Licenses", "Research Support", "Safety Protocols"]
  },
  {
    icon: Wifi,
    title: "Campus-wide WiFi",
    description: "High-speed internet connectivity across the entire campus for seamless learning",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
    features: ["100 Mbps Speed", "24/7 Connectivity", "Multiple Access Points", "Secure Network"]
  },
  {
    icon: Building,
    title: "Smart Classrooms",
    description: "Technology-enabled classrooms with projectors, smart boards, and audio systems",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop",
    features: ["Interactive Boards", "Audio Systems", "Climate Control", "Modern Furniture"]
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Comprehensive sports facilities including gymnasium, courts, and outdoor grounds",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    features: ["Indoor Gymnasium", "Basketball Court", "Football Ground", "Cricket Pitch"]
  },
  {
    icon: Coffee,
    title: "Food Courts",
    description: "Multiple dining options with hygienic food preparation and variety of cuisines",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=250&fit=crop",
    features: ["Multiple Cuisines", "Hygienic Preparation", "Affordable Prices", "Comfortable Seating"]
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Dedicated bus services connecting major areas of the city for student convenience",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop",
    features: ["15+ Routes", "GPS Tracking", "Comfortable Seating", "Safe Journey"]
  },
  {
    icon: Heart,
    title: "Medical Centre",
    description: "On-campus medical facility with qualified doctors and emergency care services",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop",
    features: ["Qualified Doctors", "Emergency Care", "First Aid", "Health Checkups"]
  }
];

const facilityStats = [
  { label: "Campus Area", value: "40 Acres" },
  { label: "Laboratory Count", value: "25+" },
  { label: "Library Books", value: "50,000+" },
  { label: "Hostel Capacity", value: "1,200+" }
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed to provide the best learning and living experience
          </p>
        </motion.div>

        {/* Facility Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {facilityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full">
                    <facility.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{facility.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {facility.features.map((feature) => (
                        <div key={feature} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 mr-4"
          >
            Virtual Campus Tour
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Download Campus Map
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
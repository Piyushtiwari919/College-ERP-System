import { motion } from 'motion/react';
import { Users, MapPin, Briefcase, Star } from 'lucide-react';
import { Card } from './ui/card';

const alumniData = [
  {
    name: "Priya Sharma",
    batch: "2020",
    position: "Software Engineer",
    company: "Google",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e5ad?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Rohit Kumar",
    batch: "2019",
    position: "Data Scientist",
    company: "Microsoft",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Anjali Gupta",
    batch: "2021",
    position: "Product Manager",
    company: "Amazon",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Vikash Singh",
    batch: "2018",
    position: "Tech Lead",
    company: "Flipkart",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const stats = [
  { label: "Total Alumni", value: "15,000+", icon: Users },
  { label: "Global Reach", value: "45+ Countries", icon: MapPin },
  { label: "Top Companies", value: "500+", icon: Briefcase },
  { label: "Success Rate", value: "95%", icon: Star }
];

export function AlumniSection() {
  return (
    <section id="alumni" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Distinguished Alumni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proud graduates making their mark across the globe in leading technology companies
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Alumni */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniData.map((alumni, index) => (
            <motion.div
              key={alumni.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative mb-4">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {alumni.batch}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{alumni.name}</h3>
                <p className="text-blue-600 mb-1">{alumni.position}</p>
                <p className="font-medium text-gray-800 mb-2">{alumni.company}</p>
                <p className="text-sm text-gray-600 flex items-center justify-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {alumni.location}
                </p>
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
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Alumni
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
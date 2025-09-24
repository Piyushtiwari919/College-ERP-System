import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, BookOpen, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const alumniData = [
  {
    name: "Mohan Kumar",
    batch: "2020",
    position: "Software Engineer",
    company: "Google",
    location: "Bangalore",
    image: "https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBSe3jKmA6zZgE5U2ojmXjWf6h-Oo2ocdpfL9qMOLao=",
    quote: "The practical approach to learning and emphasis on research at ABES helped me develop strong analytical skills. I'm grateful for the mentorship I received from the faculty."
  },
  {
    name: "Rohit Kumar",
    batch: "2019",
    position: "Data Scientist",
    company: "Microsoft",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "ABES gave me a perfect blend of technical expertise and leadership skills. The campus culture encouraged innovation and collaborative learning."
  },
  {
    name: "Anjali Gupta",
    batch: "2021",
    position: "Product Manager",
    company: "Amazon",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "The industry-relevant curriculum and hands-on projects at ABES prepared me well for my career. The placement support was outstanding."
  },
  {
    name: "Vikash Singh",
    batch: "2018",
    position: "Tech Lead",
    company: "Flipkart",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "ABES fostered my passion for artificial intelligence. The research opportunities and modern labs provided the perfect environment for learning and innovation."
  }
];

export function AlumniSection() {
  return (
    <section id="alumni" className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Distinguished Alumni
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proud graduates making their mark in top technology companies worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumniData.map((alumni, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 h-full bg-gray-200 text-center border-t-4 border-blue-600 rounded-lg shadow-xl">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {alumni.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{alumni.position}</p>
                <div className="space-y-1 text-gray-700 text-sm">
                  <div className="flex items-center justify-center">
                    <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{alumni.company}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{alumni.location}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Batch of {alumni.batch}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
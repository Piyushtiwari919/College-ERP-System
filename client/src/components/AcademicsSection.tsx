import { motion } from 'motion/react';
import { BookOpen, Users, Award, TrendingUp, Clock, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const departments = [
  {
    name: "Computer Science & Engineering",
    code: "CSE",
    duration: "4 Years",
    seats: "180",
    rating: "4.8",
    description: "Comprehensive program covering software development, AI, machine learning, and emerging technologies.",
    specializations: ["AI & ML", "Data Science", "Cybersecurity", "Cloud Computing"]
  },
  {
    name: "Electronics & Communication",
    code: "ECE",
    duration: "4 Years",
    seats: "120",
    rating: "4.7",
    description: "Focus on electronic circuits, communication systems, embedded systems, and IoT technologies.",
    specializations: ["VLSI Design", "Embedded Systems", "Communication Networks", "IoT"]
  },
  {
    name: "Mechanical Engineering",
    code: "ME",
    duration: "4 Years",
    seats: "120",
    rating: "4.6",
    description: "Traditional mechanical engineering with modern manufacturing and automation technologies.",
    specializations: ["Automation", "Thermal Engineering", "Design Engineering", "Manufacturing"]
  },
  {
    name: "Civil Engineering",
    code: "CE",
    duration: "4 Years",
    seats: "60",
    rating: "4.5",
    description: "Infrastructure development, construction management, and sustainable engineering practices.",
    specializations: ["Structural Engineering", "Environmental Engineering", "Transportation", "Construction Management"]
  },
  {
    name: "Information Technology",
    code: "IT",
    duration: "4 Years",
    seats: "60",
    rating: "4.7",
    description: "IT systems, software engineering, web technologies, and digital transformation.",
    specializations: ["Web Development", "Mobile Apps", "Database Systems", "Network Security"]
  },
  {
    name: "Electrical Engineering",
    code: "EE",
    duration: "4 Years",
    seats: "60",
    rating: "4.6",
    description: "Power systems, renewable energy, electrical machines, and smart grid technologies.",
    specializations: ["Power Systems", "Renewable Energy", "Control Systems", "Smart Grids"]
  }
];

export function AcademicsSection() {
  return (
    <section id="academics" className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive engineering programs designed to meet industry demands and foster innovation
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }} // Removed 3D rotation
            >
              <Card className="p-4 h-full hover:shadow-xl transition-all duration-300 bg-gray-200 gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className=" bg-blue-50 text-blue-700 border-blue-200">
                      {dept.code}
                    </Badge>
                    <h3 className="font-bold text-gray-900 text-lg">{dept.name}</h3>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs font-medium text-gray-700">{dept.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600  text-xs leading-snug">{dept.description}</p>
                
                <div className="space-y-1 ">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center text-gray-600">
                      <Clock className="h-3 w-3 mr-1" />
                      Duration
                    </span>
                    <span className="font-medium">{dept.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center text-gray-600">
                      <Users className="h-3 w-3 mr-1" />
                      Available Seats
                    </span>
                    <span className="font-medium">{dept.seats}</span>
                  </div>
                </div>
                
                <div className="mb-1">
                  <h4 className="text-xs font-medium text-gray-700 mb-1">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {dept.specializations.map((spec) => (
                      <Badge key={spec} variant="secondary" className=" p-2">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  View Curriculum
                </motion.button>
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
            className="px-6 py-2 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 mr-4"
          >
            Admission Process
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-sm border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Download Brochure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
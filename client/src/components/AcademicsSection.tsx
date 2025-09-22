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

const academicHighlights = [
  {
    icon: BookOpen,
    title: "AICTE Approved",
    value: "All Programs",
    description: "All engineering programs approved by AICTE"
  },
  {
    icon: Users,
    title: "Faculty Ratio",
    value: "1:12",
    description: "Student to faculty ratio ensuring personalized attention"
  },
  {
    icon: Award,
    title: "Industry Tie-ups",
    value: "50+",
    description: "Partnerships with leading companies for training"
  },
  {
    icon: TrendingUp,
    title: "Placement Rate",
    value: "95%",
    description: "Consistent high placement success rate"
  }
];

export function AcademicsSection() {
  return (
    <section id="academics" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering programs designed to meet industry demands and foster innovation
          </p>
        </motion.div>

        {/* Academic Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academicHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white">
                <highlight.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{highlight.value}</h3>
                <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="outline" className="mb-2 bg-blue-50 text-blue-700 border-blue-200">
                      {dept.code}
                    </Badge>
                    <h3 className="font-bold text-gray-900 mb-2">{dept.name}</h3>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{dept.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{dept.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration
                    </span>
                    <span className="font-medium">{dept.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      Available Seats
                    </span>
                    <span className="font-medium">{dept.seats}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {dept.specializations.map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
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
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 mr-4"
          >
            Admission Process
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Download Brochure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const facultyMembers = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Head of Department - CSE",
    qualification: "Ph.D. in Computer Science",
    experience: "15+ Years",
    specialization: "Artificial Intelligence, Machine Learning",
    publications: "50+ Research Papers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    achievements: ["Best Faculty Award 2023", "IEEE Member", "Research Excellence"]
  },
  {
    name: "Dr. Priya Sharma",
    position: "Professor - Electronics & Communication",
    qualification: "Ph.D. in Electronics",
    experience: "12+ Years",
    specialization: "VLSI Design, Embedded Systems",
    publications: "40+ Research Papers",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e5ad?w=200&h=200&fit=crop&crop=face",
    achievements: ["Outstanding Researcher 2022", "Patent Holder", "Industry Collaborator"]
  },
  {
    name: "Dr. Vikash Singh",
    position: "Associate Professor - Mechanical",
    qualification: "Ph.D. in Mechanical Engineering",
    experience: "10+ Years",
    specialization: "Thermal Engineering, Manufacturing",
    publications: "35+ Research Papers",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    achievements: ["Innovation Award 2023", "Industry Expert", "Consultant"]
  },
  {
    name: "Dr. Anjali Gupta",
    position: "Professor - Information Technology",
    qualification: "Ph.D. in Information Technology",
    experience: "14+ Years",
    specialization: "Data Science, Web Technologies",
    publications: "45+ Research Papers",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    achievements: ["Excellence in Teaching", "Research Grant Recipient", "Conference Speaker"]
  }
];

const facultyStats = [
  {
    icon: Users,
    label: "Total Faculty",
    value: "150+",
    description: "Experienced and qualified faculty members"
  },
  {
    icon: GraduationCap,
    label: "Ph.D. Holders",
    value: "85%",
    description: "Faculty with doctoral degrees"
  },
  {
    icon: BookOpen,
    label: "Research Papers",
    value: "500+",
    description: "Published in international journals"
  },
  {
    icon: Award,
    label: "Faculty Awards",
    value: "25+",
    description: "National and international recognitions"
  }
];

const departments = [
  { name: "Computer Science", faculty: "25", hod: "Dr. Rajesh Kumar" },
  { name: "Electronics & Communication", faculty: "20", hod: "Dr. Priya Sharma" },
  { name: "Mechanical Engineering", faculty: "18", hod: "Dr. Vikash Singh" },
  { name: "Information Technology", faculty: "15", hod: "Dr. Anjali Gupta" },
  { name: "Civil Engineering", faculty: "12", hod: "Dr. Amit Verma" },
  { name: "Electrical Engineering", faculty: "10", hod: "Dr. Sarah Khan" }
];

export function FacultySection() {
  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Distinguished Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts and renowned academicians committed to your success
          </p>
        </motion.div>

        {/* Faculty Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facultyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <h4 className="font-bold text-gray-900 mb-2">{stat.label}</h4>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Faculty */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Featured Faculty Members
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <div className="relative mb-6">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {faculty.experience}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-blue-600 text-sm mb-2">{faculty.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{faculty.qualification}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-2">Specialization:</p>
                    <p className="text-sm font-medium text-gray-800">{faculty.specialization}</p>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      {faculty.publications}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    {faculty.achievements.slice(0, 2).map((achievement) => (
                      <div key={achievement} className="text-xs text-gray-600 flex items-center justify-center">
                        <Award className="h-3 w-3 mr-1 text-yellow-500" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Department-wise Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Department-wise Faculty Strength
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">{dept.name}</h4>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {dept.faculty} Faculty
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Head:</span> {dept.hod}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            View All Faculty
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Research Publications
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
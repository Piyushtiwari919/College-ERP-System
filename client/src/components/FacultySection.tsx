import { motion } from 'motion/react';
import { Award, BookOpen, Users, GraduationCap, Zap } from 'lucide-react';
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
    achievements: ["Best Faculty Award 2023", "IEEE Member"]
  },
  {
    name: "Dr. Durgesh Sharma",
    position: "Professor - ECE",
    qualification: "Ph.D. in Electronics",
    experience: "12+ Years",
    specialization: "VLSI Design, Embedded Systems",
    publications: "40+ Research Papers",
    image: "https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBSe3jKmA6zZgE5U2ojmXjWf6h-Oo2ocdpfL9qMOLao=",
    achievements: ["Outstanding Researcher 2022", "Patent Holder"]
  },
  {
    name: "Dr. Vikash Singh",
    position: "Associate Professor - ME",
    qualification: "Ph.D. in Mechanical Engineering",
    experience: "10+ Years",
    specialization: "Thermal Engineering, Manufacturing",
    publications: "35+ Research Papers",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    achievements: ["Innovation Award 2023", "Industry Expert"]
  },
  {
    name: "Dr. Anjali Gupta",
    position: "Professor - IT",
    qualification: "Ph.D. in Information Technology",
    experience: "14+ Years",
    specialization: "Data Science, Web Technologies",
    publications: "45+ Research Papers",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    achievements: ["Excellence in Teaching", "Research Grant Recipient"]
  }
];

export function FacultySection() {
  return (
    <section id="faculty" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Distinguished Faculty
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn from industry experts and renowned academicians committed to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
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
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {faculty.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{faculty.position}</p>
                <div className="space-y-1 text-gray-700 text-sm">
                  <div className="flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{faculty.specialization}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{faculty.publications}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Award className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{faculty.experience} Experience</span>
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
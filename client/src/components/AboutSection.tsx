import { motion } from 'motion/react';
import { Award, TrendingUp, Users, BookOpen, Target, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const achievements = [
  {
    icon: Award,
    title: "NAAC A+ Accredited",
    description: "Highest grade accreditation for quality education"
  },
  {
    icon: TrendingUp,
    title: "95% Placement Rate",
    description: "Consistently high placement success across all branches"
  },
  {
    icon: Users,
    title: "15,000+ Alumni",
    description: "Strong alumni network across the globe"
  },
  {
    icon: BookOpen,
    title: "50+ Research Papers",
    description: "Published in international journals annually"
  }
];

const performanceMetrics = [
  { label: "Student Satisfaction", value: 92, color: "bg-blue-600" },
  { label: "Industry Partnerships", value: 88, color: "bg-green-600" },
  { label: "Research Quality", value: 85, color: "bg-purple-600" },
  { label: "Infrastructure Rating", value: 95, color: "bg-orange-600" }
];

const highlights = [
  {
    year: "1996",
    title: "College Established",
    description: "Founded with a vision to provide quality technical education"
  },
  {
    year: "2005",
    title: "AICTE Approval",
    description: "Received approval for all engineering programs"
  },
  {
    year: "2015",
    title: "NAAC Accreditation",
    description: "Achieved A+ grade from National Assessment and Accreditation Council"
  },
  {
    year: "2020",
    title: "Research Excellence",
    description: "Established state-of-the-art research facilities and innovation center"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About ABES Engineering College
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A premier institution committed to excellence in engineering education, research, and innovation since 1996
          </p>
        </motion.div>

        {/* College Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Target className="h-8 w-8 text-blue-400 mr-3" />
              Our Mission
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              To provide world-class technical education and foster innovation among students, preparing them to become 
              competent engineers and leaders who can contribute significantly to society and the global economy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are committed to maintaining the highest standards of academic excellence while promoting research, 
              industry collaboration, and holistic development of our students.
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Zap className="h-8 w-8 text-blue-400 mr-3" />
              Our Vision
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              To be a globally recognized institution that transforms young minds into innovative engineers and entrepreneurs, 
              contributing to technological advancement and sustainable development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We envision creating a learning ecosystem that nurtures creativity, critical thinking, and ethical values 
              while keeping pace with rapidly evolving technologies.
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <achievement.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Performance Metrics</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{metric.label}</span>
                  <span className="font-bold">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-3" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <Card className={`p-6 bg-white/10 backdrop-blur-sm border-white/20 max-w-md ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                }`}>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{highlight.year}</div>
                  <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                  <p className="text-gray-300">{highlight.description}</p>
                </Card>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
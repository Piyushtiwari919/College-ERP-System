import { motion } from 'motion/react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  "Admissions", "Courses", "Faculty", "Placements", "Research", "Campus Life"
];

const departments = [
  "Computer Science", "Electronics", "Mechanical", "Civil", "Electrical", "Information Technology"
];

const contactInfo = [
  {
    icon: MapPin,
    text: "19th KM Stone, NH-24, Ghaziabad, UP - 201009"
  },
  {
    icon: Phone,
    text: "+91-120-2764006, 2764016"
  },
  {
    icon: Mail,
    text: "info@abes.ac.in"
  }
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">ABES Engineering</h3>
                <p className="text-sm text-gray-400">College</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A premier institution committed to excellence in engineering education, 
              research, and innovation since 1996.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  href={social.href}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept, index) => (
                <motion.li
                  key={dept}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {dept}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">{info.text}</p>
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
            >
              Get Directions
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ABES Engineering College. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <motion.a
                whileHover={{ color: "#60A5FA" }}
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ color: "#60A5FA" }}
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ color: "#60A5FA" }}
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, Award, Menu, X, GraduationCap, Building, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  // Use separate refs for desktop and mobile to avoid conflicts
  const desktopLoginRef = useRef<HTMLDivElement>(null);
  const mobileLoginRef = useRef<HTMLDivElement>(null);


  const navItems = [
    { icon: GraduationCap, label: 'Academics', href: '#academics' },
    { icon: Building, label: 'Facilities', href: '#facilities' },
    { icon: Users, label: 'Alumni', href: '#alumni' },
    { icon: Calendar, label: 'Events', href: '#events' },
    { icon: Award, label: 'About', href: '#about' },
    { icon: User, label: 'Faculty', href: '#faculty' }
  ];


  // Close login dropdown if clicked outside of either dropdown area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopLoginRef.current && !desktopLoginRef.current.contains(event.target as Node) &&
        mobileLoginRef.current && !mobileLoginRef.current.contains(event.target as Node)
      ) {
        setIsLoginOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">ABES Engineering College</h1>
              <p className="text-sm text-gray-600">ERP Portal</p>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden overflow-visible lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                whileHover={{ scale: 1.1 }}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.a>
            ))}


            {/* Login Dropdown */}
            <div ref={desktopLoginRef} className="relative z-50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </motion.button>


              {isLoginOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-visible z-[999]"
                >
                  {/* FIX: Removed the onClick handler from these Links */}
                  <Link to="/login?role=student" className="block px-4 py-2 hover:bg-gray-100">Student</Link>
                  <Link to="/login?role=faculty" className="block px-4 py-2 hover:bg-gray-100">Faculty</Link>
                  <Link to="/login?role=admin" className="block px-4 py-2 hover:bg-gray-100">Admin</Link>
                </motion.div>
              )}
            </div>
          </nav>


          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>


        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-visible"
        >
          <nav className="py-4 space-y-4 border-t border-gray-200 mt-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                whileHover={{ x: 5 }}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </motion.a>
            ))}


            {/* Mobile Login Dropdown */}
            <div ref={mobileLoginRef} className="relative w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </motion.button>


              {isLoginOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 min-w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-visible z-50"
                >
                  <Link to="/login?role=student" className="block px-4 py-2 hover:bg-gray-100">Student</Link>
                  <Link to="/login?role=faculty" className="block px-4 py-2 hover:bg-gray-100">Faculty</Link>
                  <Link to="/login?role=admin" className="block px-4 py-2 hover:bg-gray-100">Admin</Link>
                </motion.div>
              )}
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}

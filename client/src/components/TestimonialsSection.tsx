import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Software Engineer at Google",
    batch: "2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "ABES Engineering College provided me with not just technical knowledge but also the confidence to tackle real-world challenges. The faculty support and industry exposure were exceptional.",
    company: "Google"
  },
  {
    name: "Sneha Patel",
    role: "Data Scientist at Microsoft",
    batch: "2021",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e5ad?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The practical approach to learning and emphasis on research at ABES helped me develop strong analytical skills. I'm grateful for the mentorship I received from the faculty.",
    company: "Microsoft"
  },
  {
    name: "Rahul Sharma",
    role: "Product Manager at Amazon",
    batch: "2020",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "ABES gave me a perfect blend of technical expertise and leadership skills. The campus culture encouraged innovation and collaborative learning.",
    company: "Amazon"
  },
  {
    name: "Kavya Reddy",
    role: "DevOps Engineer at Netflix",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The industry-relevant curriculum and hands-on projects at ABES prepared me well for my career. The placement support was outstanding.",
    company: "Netflix"
  },
  {
    name: "Amit Gupta",
    role: "ML Engineer at Tesla",
    batch: "2019",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "ABES fostered my passion for artificial intelligence. The research opportunities and modern labs provided the perfect environment for learning and innovation.",
    company: "Tesla"
  },
  {
    name: "Pooja Singh",
    role: "Full Stack Developer at Uber",
    batch: "2022",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The comprehensive curriculum and supportive faculty at ABES helped me become a well-rounded engineer. The campus life was enriching and memorable.",
    company: "Uber"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Hear from our successful graduates who are making their mark in top companies worldwide
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <Quote className="h-12 w-12 text-blue-300 mx-auto mb-6" />
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-blue-100 mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-blue-300"
                />
                <div className="text-left">
                  <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-blue-200">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-blue-300">Batch of {testimonials[currentIndex].batch} • {testimonials[currentIndex].company}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-300' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Secondary Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-300"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-blue-200">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm italic">
                  "{testimonial.text.substring(0, 120)}..."
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
            className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium"
          >
            Read More Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { toast } from 'sonner';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }, 1500);
  };

  const benefits = [
    "Latest college news and updates",
    "Exclusive event invitations",
    "Academic calendar notifications",
    "Alumni success stories",
    "Research and innovation highlights",
    "Career opportunities and placements"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Mail className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Connected with ABES
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss important updates, events, and opportunities from ABES Engineering College
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Subscribe Now</h3>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all duration-300"
                        disabled={isLoading}
                      />
                      <Mail className="absolute right-3 top-3.5 h-5 w-5 text-white/60" />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Subscribe to Newsletter</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-blue-100">
                      You've successfully subscribed to our newsletter. 
                      Check your email for confirmation.
                    </p>
                  </motion.div>
                )}
                
                <p className="text-xs text-blue-200 text-center mt-4">
                  By subscribing, you agree to receive emails from ABES Engineering College. 
                  You can unsubscribe at any time.
                </p>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-blue-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20"
              >
                <div className="flex items-center justify-between text-sm">
                  <span>Join 5,000+ subscribers</span>
                  <span className="text-green-400 font-bold">Free Forever</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-blue-200">
              For urgent inquiries, contact us directly at{' '}
              <a href="mailto:info@abes.ac.in" className="text-white font-bold hover:underline">
                info@abes.ac.in
              </a>{' '}
              or call{' '}
              <a href="tel:+91-120-2764006" className="text-white font-bold hover:underline">
                +91-120-2764006
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
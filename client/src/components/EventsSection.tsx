import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const events = [
  {
    title: "Annual Tech Symposium 2024",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Main Auditorium",
    attendees: "500+",
    type: "Technical",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1747674148491-51f8a5c723db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBldmVudCUyMHNlbWluYXJ8ZW58MXx8fHwxNzU4MDQ2NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Three-day technical symposium featuring workshops, competitions, and industry experts."
  },
  {
    title: "Placement Drive - TCS",
    date: "February 28, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Placement Cell",
    attendees: "200+",
    type: "Placement",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    description: "Campus placement drive for final year students with TCS recruiters."
  },
  {
    title: "Cultural Fest - Anand Utsav",
    date: "April 5-7, 2024",
    time: "5:00 PM - 10:00 PM",
    location: "College Ground",
    attendees: "1000+",
    type: "Cultural",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1492684673450-4602d95e41a6?w=400&h=250&fit=crop",
    description: "Annual cultural festival featuring music, dance, drama, and art competitions."
  },
  {
    title: "Research Paper Presentation",
    date: "January 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall",
    attendees: "150+",
    type: "Academic",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
    description: "Students and faculty presenting their latest research findings and innovations."
  }
];

const eventStats = [
  { label: "Events This Year", value: "45+" },
  { label: "Student Participation", value: "85%" },
  { label: "Industry Partners", value: "25+" },
  { label: "Success Rate", value: "92%" }
];

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            College Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with the vibrant campus life through our diverse range of events and activities
          </p>
        </motion.div>

        {/* Event Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {eventStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={event.status === 'Upcoming' ? 'default' : 'secondary'}
                      className={event.status === 'Upcoming' ? 'bg-green-600' : 'bg-gray-600'}
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      {event.attendees} Expected
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    {event.status === 'Upcoming' ? 'Register Now' : 'View Details'}
                  </motion.button>
                </div>
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
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
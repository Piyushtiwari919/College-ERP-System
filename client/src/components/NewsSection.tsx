import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const newsArticles = [
  {
    title: "ABES Engineering College Ranks Among Top 100 Engineering Colleges in India",
    excerpt: "The college has been recognized for its excellence in academics, research, and placement records in the latest NIRF rankings.",
    date: "March 10, 2024",
    author: "Admin",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    readTime: "3 min read",
    tags: ["Rankings", "Achievement", "NIRF"]
  },
  {
    title: "New Research Center for Artificial Intelligence Inaugurated",
    excerpt: "State-of-the-art AI research facility equipped with latest technology to foster innovation and research among students and faculty.",
    date: "March 5, 2024",
    author: "Dr. Rajesh Kumar",
    category: "Research",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    readTime: "4 min read",
    tags: ["AI", "Research", "Innovation"]
  },
  {
    title: "100% Placement Achievement for 2024 Batch",
    excerpt: "All final year students successfully placed in top companies with average package of 8.5 LPA, highest being 45 LPA.",
    date: "February 28, 2024",
    author: "Placement Cell",
    category: "Placement",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
    readTime: "5 min read",
    tags: ["Placement", "Success", "Career"]
  },
  {
    title: "International Conference on Sustainable Engineering Hosted",
    excerpt: "Three-day international conference brought together researchers from 15 countries to discuss sustainable engineering solutions.",
    date: "February 20, 2024",
    author: "Conference Committee",
    category: "Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    readTime: "6 min read",
    tags: ["Conference", "International", "Sustainability"]
  },
  {
    title: "New Collaboration with Industry Giants Announced",
    excerpt: "Strategic partnerships with Google, Microsoft, and Amazon to provide students with industry exposure and internship opportunities.",
    date: "February 15, 2024",
    author: "Industry Relations",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
    readTime: "4 min read",
    tags: ["Partnership", "Industry", "Opportunities"]
  },
  {
    title: "Students Win National Level Hackathon",
    excerpt: "Team of ABES students secured first place in Smart India Hackathon 2024, developing innovative solution for smart cities.",
    date: "February 10, 2024",
    author: "Student Affairs",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
    readTime: "3 min read",
    tags: ["Hackathon", "Innovation", "Students"]
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Achievement': return 'bg-green-100 text-green-800 border-green-200';
    case 'Research': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Placement': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Event': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Partnership': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export function NewsSection() {
  const featuredNews = newsArticles[0];
  const regularNews = newsArticles.slice(1);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements from ABES Engineering College
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(featuredNews.category)}>
                    {featuredNews.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-none">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredNews.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredNews.author}</span>
                    </div>
                  </div>
                  <span className="text-blue-600">{featuredNews.readTime}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredNews.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </Card>
          </motion.div>

          {/* News List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {regularNews.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-start space-x-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <Badge className={`${getCategoryColor(article.category)} mb-2`} variant="outline">
                        {article.category}
                      </Badge>
                      <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>View All News</span>
            </motion.button>
          </motion.div>
        </div>

        {/* News Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Achievement', 'Research', 'Placement', 'Event', 'Partnership'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
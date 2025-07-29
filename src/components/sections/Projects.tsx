import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Play, Star, Eye, Folder, TrendingUp } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Enterprise-grade e-commerce solution with advanced features including real-time inventory management, AI-powered recommendations, and multi-payment gateway integration.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full Stack",
      status: "Live",
      stars: 156,
      views: "2.1k",
      featured: true
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Intelligent conversational AI platform with natural language processing, context awareness, and seamless real-time communication capabilities.",
      image: "🤖",
      tech: ["React", "Socket.io", "OpenAI", "Express", "TypeScript"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "AI/ML",
      status: "Live", 
      stars: 89,
      views: "1.8k",
      featured: true
    },
    {
      id: 3,
      title: "Project Management Tool",
      description: "Comprehensive project management suite with advanced task tracking, team collaboration, real-time notifications, and detailed analytics dashboard.",
      image: "📋",
      tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "WebSocket"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full Stack",
      status: "Beta",
      stars: 234,
      views: "3.2k",
      featured: true
    },
    {
      id: 4,
      title: "Weather Analytics Platform",
      description: "Advanced weather forecasting dashboard with machine learning predictions, interactive visualizations, and climate trend analysis.",
      image: "🌤️",
      tech: ["React", "Chart.js", "Weather API", "Tailwind", "ML Models"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Data Science",
      status: "Live",
      stars: 67,
      views: "987",
      featured: false
    },
    {
      id: 5,
      title: "DeFi Portfolio Tracker",
      description: "Professional cryptocurrency portfolio management with DeFi protocol integration, yield farming tracking, and advanced risk analysis.",
      image: "💰",
      tech: ["Vue.js", "Node.js", "Web3.js", "CoinGecko API", "WebSocket"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Blockchain",
      status: "Live",
      stars: 198,
      views: "2.7k",
      featured: false
    },
    {
      id: 6,
      title: "Social Analytics Suite",
      description: "Enterprise social media analytics platform with sentiment analysis, competitor tracking, and automated reporting capabilities.",
      image: "📊",
      tech: ["React", "D3.js", "Python", "Flask", "TensorFlow"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Analytics",
      status: "Development",
      stars: 145,
      views: "1.5k",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden pt-32 md:pt-40" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
      </div>
      
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Enhanced Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Folder className="w-4 h-4" />
            Portfolio Showcase
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of carefully crafted digital experiences that showcase innovation, technical excellence, and creative problem-solving
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -12, scale: 1.02 }}
                data-cursor-hover
              >
                {/* Enhanced Project Card */}
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-white/10 group-hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02]" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <motion.div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.status}
                    </motion.div>
                  </div>

                  {/* Project Icon */}
                  <div className="relative mb-8">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                        {project.category}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-lg font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-lg font-medium">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center gap-6 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {project.views}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm flex-1 justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-cursor-hover
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-sm font-medium transition-all duration-300 flex-1 justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-cursor-hover
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Folder className="w-6 h-6 text-muted-foreground" />
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -6, scale: 1.02 }}
                data-cursor-hover
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-white/10 group-hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-2xl">{project.image}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted/50 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <a href={project.github} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Github size={12} />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={12} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss your next project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                <Play className="w-5 h-5" />
                View All Projects
              </motion.button>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 text-foreground rounded-2xl font-medium hover:bg-card/80 transition-colors backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
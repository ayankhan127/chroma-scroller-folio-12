import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory, cart persistence, and seamless checkout.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses using OpenAI API. Socket.io for instant messaging and beautiful UI/UX.",
      image: "🤖",
      tech: ["React", "Socket.io", "OpenAI", "Express"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Project Management Tool",
      description: "Collaborative project management platform with drag-and-drop boards, real-time updates, and team collaboration features.",
      image: "📋",
      tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Beautiful weather application with animated backgrounds, location-based forecasts, and interactive charts using Chart.js.",
      image: "🌤️",
      tech: ["React", "Chart.js", "Weather API", "Tailwind"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto portfolio tracker with price alerts, news integration, and beautiful charts for market analysis.",
      image: "💰",
      tech: ["Vue.js", "Node.js", "CoinGecko API", "WebSocket"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Social media analytics dashboard with data visualization, engagement metrics, and automated report generation.",
      image: "📊",
      tech: ["React", "D3.js", "Python", "Flask"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Data Viz"
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
    <section id="projects" className="section-padding bg-muted/30" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work that I'm proud to showcase
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="cartoon-card group hover:shadow-2xl cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              data-cursor-hover
            >
              {/* Project Image/Icon */}
              <div className="relative mb-6 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
                <div className="text-6xl text-center group-hover:animate-bounce">
                  {project.image}
                </div>
                <motion.div
                  className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {project.category}
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-colors"
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
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-cartoon group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
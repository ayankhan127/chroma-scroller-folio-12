import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Coffee, Heart, Zap, Sparkles, Award, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Code, color: "from-blue-500 to-cyan-500" },
    { number: "3+", label: "Years Excellence", icon: Award, color: "from-purple-500 to-pink-500" },
    { number: "25+", label: "Happy Clients", icon: Users, color: "from-green-500 to-emerald-500" },
    { number: "∞", label: "Creative Solutions", icon: Globe, color: "from-orange-500 to-red-500" },
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
    <section id="about" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-r from-transparent via-primary/5 to-transparent h-px w-full" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/10 via-transparent to-primary/10 rounded-full blur-3xl" />
      
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Getting to know me
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with passion, precision, and a touch of creativity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Visual Section */}
          <motion.div variants={itemVariants} className="space-y-10">
            {/* Enhanced Profile Section */}
            <div className="relative">
              <motion.div
                className="relative w-96 h-96 mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl" />
                
                {/* Main Card */}
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="text-9xl animate-float">🚀</div>
                  
                  {/* Animated Particles */}
                  <motion.div
                    className="absolute top-8 left-8 w-2 h-2 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="absolute top-16 right-12 w-1 h-1 bg-accent rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-12 left-16 w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </motion.div>
              
              {/* Floating Professional Icons */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💼
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⚡
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg shadow-lg"
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                🎯
              </motion.div>
            </div>

            {/* Enhanced Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="relative group"
                  whileHover={{ scale: 1.05, y: -8 }}
                  data-cursor-hover
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-white/10 text-center group-hover:border-primary/20 transition-all duration-300">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Professional Introduction */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
              <div className="space-y-6 text-lg leading-relaxed pl-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Hello, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ayan</span> 👋
                  </h3>
                  
                  <p className="text-foreground/90">
                    A passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and 
                    <span className="text-accent font-semibold"> Digital Craftsman</span> who transforms ideas into 
                    exceptional digital experiences. I believe that great code is not just functional—it's elegant, 
                    scalable, and tells a story.
                  </p>
                  
                  <p className="text-muted-foreground">
                    With expertise spanning modern web technologies, I specialize in building robust applications 
                    that seamlessly blend cutting-edge technology with intuitive user experiences. From concept 
                    to deployment, I ensure every project meets the highest standards of quality and performance.
                  </p>
                  
                  <p className="text-muted-foreground">
                    When I'm not architecting solutions or optimizing performance, you'll find me exploring emerging 
                    technologies, contributing to open-source projects, or mentoring fellow developers in the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Expertise */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Core Expertise</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'React/Next.js', level: 'Expert' },
                  { name: 'TypeScript', level: 'Advanced' },
                  { name: 'Node.js', level: 'Expert' },
                  { name: 'Cloud (AWS)', level: 'Advanced' },
                  { name: 'Database Design', level: 'Expert' },
                  { name: 'DevOps', level: 'Intermediate' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group p-3 rounded-xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-white/10 hover:border-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    data-cursor-hover
                  >
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {skill.level}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div variants={itemVariants} className="pt-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10">
                <p className="text-foreground/80 mb-4">
                  Ready to bring your vision to life? Let's create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="group shadow-xl flex-1"
                    data-cursor-hover
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Start a Project
                    <Heart className="w-4 h-4 ml-2 text-red-400 group-hover:animate-pulse" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group flex-1"
                    data-cursor-hover
                  >
                    <Coffee className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Grab Coffee & Chat
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
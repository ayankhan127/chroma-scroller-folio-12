import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Palette, Server, Cloud, Zap } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-600" },
        { name: "Next.js", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        { name: "Framer Motion", level: 88, color: "from-purple-400 to-purple-600" },
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
        { name: "Python", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "Express.js", level: 90, color: "from-gray-500 to-gray-700" },
        { name: "GraphQL", level: 82, color: "from-pink-400 to-pink-600" },
        { name: "REST APIs", level: 94, color: "from-indigo-400 to-indigo-600" },
      ]
    },
    {
      title: "Database & DevOps",
      icon: Database, 
      gradient: "from-orange-500 via-red-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 87, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 83, color: "from-blue-500 to-blue-700" },
        { name: "Docker", level: 80, color: "from-blue-400 to-blue-500" },
        { name: "AWS", level: 78, color: "from-orange-400 to-orange-600" },
        { name: "Git", level: 95, color: "from-red-400 to-red-600" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden pt-32 md:pt-40" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            <Code2 className="w-4 h-4" />
            Technical Expertise
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks that power modern digital solutions
          </p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -12, scale: 1.02 }}
              data-cursor-hover
            >
              {/* Card with gradient border */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Category Header */}
                <div className="text-center mb-8 relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300"
                    animate={{ 
                      rotateY: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: categoryIndex * 0.8,
                      ease: "easeInOut"
                    }}
                  >
                    <category.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.15,
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-foreground">
                          {skill.name}
                        </span>
                        <motion.span 
                          className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.15 + 0.3 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0, opacity: 0 }}
                          animate={isInView ? { 
                            width: `${skill.level}%`, 
                            opacity: 1 
                          } : { 
                            width: 0, 
                            opacity: 0 
                          }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.15 + 0.5,
                            duration: 1.2,
                            ease: "easeOut" 
                          }}
                        />
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={isInView ? { x: '100%' } : { x: '-100%' }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.15 + 1.5,
                            duration: 1,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Achievement Stats */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            className="relative p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 backdrop-blur-xl border border-white/10"
            whileHover={{ scale: 1.02, y: -5 }}
            data-cursor-hover
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Code2, number: "15+", label: "Technologies Mastered", color: "text-blue-500" },
                { icon: Zap, number: "50+", label: "Projects Delivered", color: "text-purple-500" },
                { icon: Cloud, number: "3+", label: "Years Experience", color: "text-green-500" },
                { icon: Database, number: "99%", label: "Client Satisfaction", color: "text-orange-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
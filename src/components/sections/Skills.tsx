import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 88 },
      ]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "GraphQL", level: 82 },
        { name: "REST APIs", level: 94 },
      ]
    },
    {
      title: "Database & Tools",
      icon: "🛠️", 
      skills: [
        { name: "MongoDB", level: 87 },
        { name: "PostgreSQL", level: 83 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 78 },
        { name: "Git", level: 95 },
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
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="cartoon-card group hover:shadow-2xl"
              whileHover={{ y: -10 }}
              data-cursor-hover
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <motion.div
                  className="text-4xl mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: categoryIndex * 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.6 
                    }}
                  >
                    {/* Skill Name and Percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: "easeOut" 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center space-x-8 cartoon-card bg-gradient-to-r from-primary/10 to-accent/10"
            whileHover={{ scale: 1.05 }}
            data-cursor-hover
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
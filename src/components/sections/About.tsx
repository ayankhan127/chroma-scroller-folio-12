import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Coffee, Heart, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "3+", label: "Years Experience", icon: Zap },
    { number: "∞", label: "Cups of Coffee", icon: Coffee },
    { number: "100%", label: "Passion & Love", icon: Heart },
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
    <section id="about" className="section-padding bg-muted/30" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer who loves creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Fun Facts */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent p-1"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                  <div className="text-8xl animate-float">🤖</div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                💻
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="cartoon-card text-center group hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ scale: 1.05, y: -5 }}
                  data-cursor-hover
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 group-hover:animate-bounce" />
                  <div className="text-2xl font-bold text-primary group-hover:text-primary-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-foreground">
                Hi there! I'm <span className="text-primary font-semibold">Ayan</span>, 
                a passionate full-stack developer who believes in the power of code to 
                create amazing digital experiences. With a cartoon-loving heart and a 
                serious dedication to clean, efficient code.
              </p>
              
              <p className="text-muted-foreground">
                I specialize in modern web technologies like React, Node.js, and TypeScript. 
                Whether it's building responsive user interfaces, creating robust APIs, or 
                optimizing for performance, I love every aspect of the development process.
              </p>
              
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or enjoying a good cup of coffee while sketching 
                out my next big idea.
              </p>
            </div>

            {/* Skills Tags */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {[
                'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 
                'MongoDB', 'Docker', 'GraphQL', 'Next.js', 'Tailwind CSS'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  data-cursor-hover
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced CTA */}
            <motion.div variants={itemVariants} className="pt-6">
              <Button
                variant="gradient"
                size="lg"
                className="group shadow-2xl"
                data-cursor-hover
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Let's Work Together
                <Heart className="w-4 h-4 ml-2 text-red-400 group-hover:animate-pulse" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
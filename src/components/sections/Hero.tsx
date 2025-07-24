import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@ayan.dev", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-modern bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Robot Avatar */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative mx-auto w-64 h-64 group">
            {/* Outer Ring with Rotating Elements */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-accent rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-4 h-4 bg-accent rounded-full"></div>
            </motion.div>
            
            {/* Main Avatar Container */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-3 backdrop-blur-sm border border-primary/30">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
                </div>
                
                {/* Robot Character */}
                <motion.div 
                  className="relative z-10"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/lovable-uploads/a20aa7e3-9466-435e-80b0-3d441d33a88f.png" 
                    alt="Code with Ayan Logo" 
                    className="w-40 h-40 object-contain filter drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Floating Status Indicators */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold shadow-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Online
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg"
              animate={{ 
                y: [0, -5, 0],
                x: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚡ Ready to Code
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span 
              className="text-foreground block mb-2"
              animate={{ 
                textShadow: [
                  "0 0 0px hsl(var(--foreground))",
                  "0 0 10px hsl(var(--primary) / 0.3)",
                  "0 0 0px hsl(var(--foreground))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Hello, I'm
            </motion.span>
            <motion.span 
              className="text-gradient-neon text-6xl md:text-8xl lg:text-9xl font-black"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Ayan
            </motion.span>
          </motion.h1>
          
          {/* Dynamic Role Display */}
          <motion.div
            className="text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-6 font-medium"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.span
              key="role"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block"
            >
              Full Stack Developer & Creative Coder
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          I create amazing web experiences with modern technologies, 
          turning ideas into beautiful, functional applications that make a difference.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Button
            variant="cartoon"
            size="xl"
            className="group shadow-2xl"
            data-cursor-hover
          >
            <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Download CV
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity"
              initial={false}
            />
          </Button>
          
          <Button
            variant="outline"
            size="xl"
            className="group relative overflow-hidden"
            data-cursor-hover
          >
            <Code className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
            View My Work
            <Zap className="w-4 h-4 ml-2 group-hover:text-yellow-400 transition-colors" />
          </Button>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-2xl bg-gradient-to-br from-muted to-muted/50 hover:from-primary/10 hover:to-accent/10 transition-all duration-500 group border border-border/50 hover:border-primary/30"
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <social.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              
              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                {social.label}
              </motion.div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border-2 border-primary"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
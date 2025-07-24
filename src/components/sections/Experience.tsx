import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of microservices architecture serving 1M+ users. Mentored junior developers and improved system performance by 40%.",
      achievements: [
        "Architected scalable microservices with Node.js and Docker",
        "Reduced API response time by 60% through optimization",
        "Led team of 5 developers on major product launches"
      ],
      skills: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      icon: "💼"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2021 - 2022",
      description: "Developed responsive web applications using React and modern CSS frameworks. Collaborated with design team to create pixel-perfect UIs.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Implemented modern CSS animations and interactions",
        "Improved user engagement by 35% through UX enhancements"
      ],
      skills: ["React", "JavaScript", "CSS", "Figma", "Git"],
      icon: "🎨"
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2021",
      description: "Started my professional journey building web applications with HTML, CSS, and JavaScript. Quickly adapted to modern frameworks and tools.",
      achievements: [
        "Learned React and Node.js within first 3 months",
        "Contributed to 10+ client projects successfully",
        "Received 'Quick Learner' award from management"
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Express"],
      icon: "🚀"
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements along the way
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px w-0.5 bg-gradient-to-b from-primary to-accent"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-lg z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.3 + 0.8 }}
                >
                  {exp.icon}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`cartoon-card ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  data-cursor-hover
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Building size={14} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-cartoon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            📄 Download Full Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Product Manager",
      company: "TechCorp Inc.",
      image: "👩‍💼",
      rating: 5,
      text: "Ayan delivered exceptional work on our e-commerce platform. His attention to detail and ability to translate complex requirements into beautiful, functional code is remarkable. The project was completed ahead of schedule!"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CTO",
      company: "StartupXYZ",
      image: "👨‍💻",
      rating: 5,
      text: "Working with Ayan was a game-changer for our startup. He not only built an amazing application but also provided valuable insights on architecture and scalability. Highly recommend!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "UI/UX Designer",
      company: "Design Studio",
      image: "👩‍🎨",
      rating: 5,
      text: "Ayan has an incredible eye for design implementation. He perfectly translated our designs into responsive, interactive web applications. The animations and micro-interactions were flawless!"
    },
    {
      id: 4,
      name: "David Wilson",
      title: "Marketing Director",
      company: "Digital Agency",
      image: "👨‍💼",
      rating: 5,
      text: "The landing pages Ayan created for our campaigns significantly improved our conversion rates. His understanding of user psychology and technical implementation is outstanding."
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Founder",
      company: "EcoTech Solutions",
      image: "👩‍🚀",
      rating: 5,
      text: "Ayan helped us build our sustainability tracking platform from scratch. His expertise in both frontend and backend development made the entire process smooth and efficient."
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/30" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from satisfied clients and collaborators
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            key={currentIndex}
            className="cartoon-card max-w-4xl mx-auto text-center relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote Icon */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Quote size={16} className="text-primary-foreground" />
            </motion.div>

            {/* Client Avatar */}
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
                {testimonials[currentIndex].image}
              </div>
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Client Info */}
            <div className="text-center">
              <h4 className="font-display font-bold text-foreground text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-primary font-medium">
                {testimonials[currentIndex].title}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted'
                }`}
                whileHover={{ scale: 1.2 }}
                data-cursor-hover
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support" },
            { number: "∞", label: "Coffee Consumed" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center cartoon-card hover:bg-primary hover:text-primary-foreground group"
              whileHover={{ scale: 1.05, y: -5 }}
              data-cursor-hover
            >
              <div className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
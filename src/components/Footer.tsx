import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@ayan.dev", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              data-cursor-hover
            >
              <span className="text-3xl">🤖</span>
              <span className="text-xl font-display font-bold text-gradient">
                Code with Ayan
              </span>
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate full-stack developer creating amazing web experiences 
              with modern technologies and cartoon-style creativity.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    whileHover={{ x: 5 }}
                    data-cursor-hover
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                📧 hello@ayan.dev
              </p>
              <p className="text-muted-foreground">
                📱 +1 (555) 123-4567
              </p>
              <p className="text-muted-foreground">
                📍 San Francisco, CA
              </p>
            </div>

            {/* Fun Fact */}
            <motion.div
              className="mt-4 p-3 bg-primary/10 rounded-lg"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-xs text-primary font-medium">
                ☕ Always brewing new ideas!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Code with Ayan. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 fill-current" />
            </motion.span>
            <span>and lots of ☕</span>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </motion.div>

        {/* Hidden Easter Egg */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs text-muted-foreground/50">
            🎉 You found the easter egg! You're awesome! 🎉
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
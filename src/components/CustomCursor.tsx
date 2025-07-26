import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(true);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const newX = e.clientX;
    const newY = e.clientY;
    
    // Calculate velocity for organic movement
    setVelocity({
      x: newX - mousePosition.x,
      y: newY - mousePosition.y
    });
    
    setMousePosition({ x: newX, y: newY });
  }, [mousePosition]);

  const handleInteractiveEnter = useCallback(() => setCursorState('interactive'), []);
  const handleTextEnter = useCallback(() => setCursorState('text'), []);
  const handleLinkEnter = useCallback(() => setCursorState('link'), []);
  const handleDefaultEnter = useCallback(() => setCursorState('default'), []);
  const handleMouseDown = useCallback(() => setCursorState('click'), []);
  const handleMouseUp = useCallback(() => setCursorState('default'), []);

  useEffect(() => {
    const addEventListeners = () => {
      // Interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, [data-cursor-hover], [role="button"], .cursor-pointer, input[type="button"], input[type="submit"]'
      );
      
      // Text elements  
      const textElements = document.querySelectorAll(
        'p, h1, h2, h3, h4, h5, h6, span:not(.icon), div[contenteditable], input[type="text"], input[type="email"], textarea'
      );
      
      // Link elements
      const linkElements = document.querySelectorAll('a');

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleInteractiveEnter);
        el.addEventListener('mouseleave', handleDefaultEnter);
      });

      textElements.forEach(el => {
        el.addEventListener('mouseenter', handleTextEnter);
        el.addEventListener('mouseleave', handleDefaultEnter);
      });

      linkElements.forEach(el => {
        el.addEventListener('mouseenter', handleLinkEnter);
        el.addEventListener('mouseleave', handleDefaultEnter);
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleInteractiveEnter);
          el.removeEventListener('mouseleave', handleDefaultEnter);
        });
        textElements.forEach(el => {
          el.removeEventListener('mouseenter', handleTextEnter);
          el.removeEventListener('mouseleave', handleDefaultEnter);
        });
        linkElements.forEach(el => {
          el.removeEventListener('mouseenter', handleLinkEnter);
          el.removeEventListener('mouseleave', handleDefaultEnter);
        });
      };
    };

    let cleanup = addEventListeners();

    const observer = new MutationObserver(() => {
      cleanup();
      cleanup = addEventListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setIsVisible(false));
    window.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      cleanup();
      observer.disconnect();
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setIsVisible(false));
      window.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, [updateMousePosition, handleInteractiveEnter, handleTextEnter, handleLinkEnter, handleDefaultEnter, handleMouseDown, handleMouseUp]);

  // Organic blob cursor variants
  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'hsl(var(--primary))',
      borderRadius: '50%',
      scale: 1,
      mixBlendMode: 'difference',
    },
    interactive: {
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      scale: 1,
      mixBlendMode: 'normal',
      border: '2px solid hsl(var(--primary))',
    },
    text: {
      width: 2,
      height: 20,
      backgroundColor: 'hsl(var(--foreground))',
      borderRadius: '1px',
      scale: 1,
      mixBlendMode: 'difference',
    },
    link: {
      width: 16,
      height: 16,
      backgroundColor: 'hsl(var(--accent))',
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      scale: 1.2,
      mixBlendMode: 'difference',
    },
    click: {
      width: 8,
      height: 8,
      backgroundColor: 'hsl(var(--destructive))',
      borderRadius: '50%',
      scale: 0.8,
      mixBlendMode: 'difference',
    }
  };

  return (
    <>
      {/* Main liquid cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          ...cursorVariants[cursorState as keyof typeof cursorVariants],
          opacity: isVisible ? 1 : 0,
          rotate: cursorState === 'interactive' ? [0, 180, 360] : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          rotate: cursorState === 'interactive' ? {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          } : {}
        }}
      />

      {/* Trailing blob effect */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: cursorState === 'interactive' ? 48 : 24,
          height: cursorState === 'interactive' ? 48 : 24,
          opacity: isVisible ? (cursorState === 'text' ? 0 : 0.2) : 0,
          borderRadius: cursorState === 'interactive' 
            ? '60% 40% 30% 70% / 60% 30% 70% 40%' 
            : '70% 30% 30% 70% / 70% 70% 30% 30%',
          backgroundColor: cursorState === 'link' ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          delay: 0.05,
        }}
      />

      {/* Organic particles for interactive state */}
      {cursorState === 'interactive' && (
        <motion.div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full"
              animate={{
                x: [
                  0,
                  Math.cos((i * Math.PI * 2) / 4 + Date.now() * 0.001) * 20,
                  Math.cos((i * Math.PI * 2) / 4 + Date.now() * 0.001 + Math.PI) * 15,
                  0
                ],
                y: [
                  0,
                  Math.sin((i * Math.PI * 2) / 4 + Date.now() * 0.001) * 20,
                  Math.sin((i * Math.PI * 2) / 4 + Date.now() * 0.001 + Math.PI) * 15,
                  0
                ],
                scale: [0, 1, 0.5, 0],
                opacity: [0, 0.8, 0.4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Velocity-based morphing trail */}
      <motion.div
        className="fixed pointer-events-none z-[9996] bg-primary/10 rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: Math.min(40, Math.max(16, Math.abs(velocity.x) + Math.abs(velocity.y))),
          height: Math.min(40, Math.max(16, Math.abs(velocity.x) + Math.abs(velocity.y))),
          opacity: isVisible ? 0.15 : 0,
          borderRadius: `${50 + Math.sin(Date.now() * 0.003) * 20}% ${50 + Math.cos(Date.now() * 0.004) * 20}% ${50 + Math.sin(Date.now() * 0.005) * 20}% ${50 + Math.cos(Date.now() * 0.006) * 20}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          delay: 0.15,
        }}
      />
    </>
  );
};

export default CustomCursor;
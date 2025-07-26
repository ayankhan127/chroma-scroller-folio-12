import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  useEffect(() => {
    // Function to add event listeners to all interactive elements
    const addEventListeners = () => {
      // Use a more comprehensive selector for interactive elements
      const hoverElements = document.querySelectorAll(
        'button, a, [data-cursor-hover], input, textarea, select, [role="button"], [tabindex], .cursor-pointer'
      );
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        hoverElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    // Add initial event listeners
    let cleanup = addEventListeners();

    // Create a mutation observer to watch for new elements
    const observer = new MutationObserver(() => {
      cleanup(); // Clean up old listeners
      cleanup = addEventListeners(); // Add listeners to new elements
    });

    // Start observing the document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Mouse event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cleanup();
      observer.disconnect();
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  return (
    <>
      {/* Main cursor - morphing shape */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: isClicking ? '12px' : isHovering ? '40px' : '20px',
          height: isClicking ? '12px' : isHovering ? '40px' : '20px',
          borderRadius: isHovering ? '0%' : '50%',
          backgroundColor: isClicking ? 'hsl(var(--destructive))' : isHovering ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
      
      {/* Animated trail particles */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? 3 : 1.5,
          opacity: isHovering ? 0.8 : 0.2,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.1,
        }}
      >
        <div className="relative w-12 h-12">
          <motion.div 
            className="absolute w-2 h-2 bg-primary/60 rounded-full"
            animate={{ 
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
              scale: [1, 0.5, 1, 0.5, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
          <motion.div 
            className="absolute w-2 h-2 bg-accent/60 rounded-full"
            animate={{ 
              x: [0, -15, 0, 15, 0],
              y: [0, 15, 0, -15, 0],
              scale: [0.5, 1, 0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </motion.div>
      
      {/* Outer ring effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] border-2 border-primary/20 rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          width: isHovering ? '80px' : '40px',
          height: isHovering ? '80px' : '40px',
          opacity: isHovering ? 0.4 : 0.1,
          borderWidth: isHovering ? '3px' : '1px',
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: 0.15,
        }}
      />
    </>
  );
};

export default CustomCursor;
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
      {/* Main cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor trail effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998] border border-primary/30"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay: 0.05,
        }}
      />
    </>
  );
};

export default CustomCursor;
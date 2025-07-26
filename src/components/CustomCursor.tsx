import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(true);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => setCursorVariant('hover'), []);
  const handleMouseLeave = useCallback(() => setCursorVariant('default'), []);
  const handleTextEnter = useCallback(() => setCursorVariant('text'), []);
  const handleLinkEnter = useCallback(() => setCursorVariant('link'), []);
  const handleMouseDown = useCallback(() => setCursorVariant('click'), []);
  const handleMouseUp = useCallback(() => setCursorVariant('default'), []);

  useEffect(() => {
    const addEventListeners = () => {
      // Interactive elements
      const hoverElements = document.querySelectorAll(
        'button, [data-cursor-hover], [role="button"], .cursor-pointer'
      );
      
      // Text elements
      const textElements = document.querySelectorAll(
        'p, h1, h2, h3, h4, h5, h6, span, div[contenteditable], input, textarea'
      );
      
      // Link elements
      const linkElements = document.querySelectorAll('a');

      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      textElements.forEach(el => {
        el.addEventListener('mouseenter', handleTextEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      linkElements.forEach(el => {
        el.addEventListener('mouseenter', handleLinkEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        hoverElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
        textElements.forEach(el => {
          el.removeEventListener('mouseenter', handleTextEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
        linkElements.forEach(el => {
          el.removeEventListener('mouseenter', handleLinkEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
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

    // Mouse event listeners
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
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave, handleTextEnter, handleLinkEnter, handleMouseDown, handleMouseUp]);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
      width: 16,
      height: 16,
      border: 'none',
    },
    hover: {
      scale: 2.5,
      backgroundColor: 'transparent',
      mixBlendMode: 'normal',
      width: 60,
      height: 60,
      border: '2px solid hsl(var(--primary))',
    },
    text: {
      scale: 1,
      backgroundColor: 'transparent',
      mixBlendMode: 'normal',
      width: 2,
      height: 24,
      border: '1px solid hsl(var(--foreground))',
    },
    link: {
      scale: 1.5,
      backgroundColor: 'hsl(var(--accent))',
      mixBlendMode: 'difference',
      width: 20,
      height: 20,
      border: 'none',
    },
    click: {
      scale: 0.8,
      backgroundColor: 'hsl(var(--destructive))',
      mixBlendMode: 'difference',
      width: 12,
      height: 12,
      border: 'none',
    }
  };

  const trailVariants = {
    default: { scale: 1, opacity: 0.3 },
    hover: { scale: 3, opacity: 0.1 },
    text: { scale: 0.5, opacity: 0.2 },
    link: { scale: 2, opacity: 0.4 },
    click: { scale: 0.5, opacity: 0.5 }
  };

  return (
    <>
      {/* Cursor trail */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full border border-primary/20"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          ...trailVariants[cursorVariant as keyof typeof trailVariants],
          opacity: isVisible ? trailVariants[cursorVariant as keyof typeof trailVariants].opacity : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: 0.1,
        }}
        initial={false}
      >
        <div className="w-16 h-16" />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: cursorVariants[cursorVariant as keyof typeof cursorVariants].mixBlendMode as any,
        }}
        animate={{
          ...cursorVariants[cursorVariant as keyof typeof cursorVariants],
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
        initial={false}
      />

      {/* Magnetic effect particles */}
      {cursorVariant === 'hover' && (
        <motion.div
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 25,
                y: Math.sin((i * Math.PI * 2) / 6) * 25,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
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

      {/* Text cursor line */}
      {cursorVariant === 'text' && (
        <motion.div
          className="fixed pointer-events-none z-[9998] bg-foreground"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            width: '2px',
            height: '24px',
          }}
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
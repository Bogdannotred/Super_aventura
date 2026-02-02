import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            const tagName = e.target.tagName.toLowerCase();
            if (tagName === 'button' || tagName === 'a' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 border-2 border-brand-DEFAULT pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            animate={{
                x: mousePosition.x - (isHovering ? 40 : 16),
                y: mousePosition.y - (isHovering ? 40 : 16),
                width: isHovering ? 80 : 32,
                height: isHovering ? 80 : 32,
                borderRadius: "50%",
                opacity: 1,
                backgroundColor: isHovering ? 'rgba(14, 165, 233, 1)' : 'transparent'
            }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 0.5
            }}
        />
    );
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    });

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('button, a, .interactable')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(211,47,47,0.7)] hidden md:flex rounded-full border-2"
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                width: isHovering ? 48 : 32,
                height: isHovering ? 48 : 32,
                backgroundColor: isHovering ? 'rgba(211,47,47,0.2)' : 'transparent',
                borderColor: isHovering ? '#d32f2f' : 'rgba(211, 47, 47, 0.8)',
                scale: isClicking ? 0.75 : 1,
            }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
        >
            <motion.div
                className="bg-blood rounded-full shadow-[0_0_10px_rgba(211,47,47,1)]"
                animate={{
                    width: 8,
                    height: 8,
                    scale: isHovering ? 1.5 : 1
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;

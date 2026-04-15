import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center relative pt-20 px-6 overflow-hidden">
            <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-2/3 flex flex-col items-start"
                >
                    <h2 className="text-blood font-display uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-4 animate-pulse">
                        Classified Operation
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase leading-none mb-6 text-white tracking-tighter relative" id="glitch-title" data-text="SURVIVE">
                        SURVIVE<br /><span className="text-transparent border-text">THE FALL</span>
                    </h1>
                    <p className="font-body text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                        A brutal, unapologetic tactical experience. Trust no one. Every bullet counts in the most realistic
                        simulation ever created.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="bg-white text-dark hover:bg-gray-200 font-display px-8 py-4 uppercase tracking-widest text-lg font-bold transition-all interactable custom-btn">
                            Watch Trailer
                        </button>
                        <button className="bg-transparent border border-blood text-blood hover:bg-blood/10 font-display px-8 py-4 uppercase tracking-widest text-lg font-bold transition-all interactable custom-btn">
                            Join Beta
                        </button>
                    </div>
                </motion.div>
            </div>
            <div className="absolute inset-0 pointer-events-none scanlines opacity-30 z-20"></div>
        </section>
    );
};

export default Hero;

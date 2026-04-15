import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Shield, Globe } from 'lucide-react';

const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
    };

    return (
        <section id="intel" className="py-24 px-6 relative bg-dark">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="h-px bg-blood w-12"></div>
                    <h3 className="font-display uppercase tracking-widest text-blood text-xl">Intel</h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div variants={itemVariants} className="bg-panel border border-bordercolor p-8 group hover:border-blood transition-all duration-300 interactable hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(211,47,47,0.3)]">
                        <div className="text-blood mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Crosshair size={48} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-display text-2xl uppercase mb-3 text-white group-hover:text-blood transition-colors">
                            Hyper-Realistic Ballistics
                        </h4>
                        <p className="text-gray-500 font-body text-sm leading-relaxed">
                            Physical armor degradation, precise material penetration, and realistic bullet drop. Every
                            engagement is lethal.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-panel border border-bordercolor p-8 group hover:border-blood transition-all duration-300 interactable hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(211,47,47,0.3)]">
                        <div className="text-blood mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Shield size={48} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-display text-2xl uppercase mb-3 text-white group-hover:text-blood transition-colors">
                            Tactical Liberty
                        </h4>
                        <p className="text-gray-500 font-body text-sm leading-relaxed">
                            No fixed classes. Customize your operative with over 500 attachment combinations and modular
                            gear setups.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-panel border border-bordercolor p-8 group hover:border-blood transition-all duration-300 interactable hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(211,47,47,0.3)]">
                        <div className="text-blood mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Globe size={48} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-display text-2xl uppercase mb-3 text-white group-hover:text-blood transition-colors">
                            Persistent World
                        </h4>
                        <p className="text-gray-500 font-body text-sm leading-relaxed">
                            A dynamic combat zone where shifts in faction dominance permanently alter the landscape and
                            available resources.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Factions = () => {
    return (
        <section id="factions" className="py-24 px-6 relative bg-dark border-t border-bordercolor overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="h-px bg-blood w-12"></div>
                    <h3 className="font-display uppercase tracking-widest text-blood text-xl">The Factions</h3>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 h-[600px] w-full group/container">
                    {/* Faction 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex-1 bg-[#111] relative overflow-hidden group border border-bordercolor hover:border-blood transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer interactable hover:flex-[2] opacity-100 group-hover/container:opacity-50 hover:!opacity-100"
                    >
                        <img src="/assets/soldier.png" alt="Vanguard" className="absolute inset-0 w-full h-full object-cover object-top opacity-30 group-hover:opacity-70 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="text-blood font-display text-sm tracking-widest uppercase mb-2">Assault Class</div>
                            <h4 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mb-4">Vanguard</h4>
                            <p className="text-gray-400 font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                                Frontline specialists equipped with heavy assault weaponry and kinetic plating. Best suited
                                for direct confrontation and breaching operations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Faction 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="flex-1 bg-[#111] relative overflow-hidden group border border-bordercolor hover:border-blood transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer interactable hover:flex-[2] opacity-100 group-hover/container:opacity-50 hover:!opacity-100"
                    >
                        <div className="absolute inset-0 bg-[url('/assets/bg.png')] bg-cover bg-center opacity-20 group-hover:opacity-60 transition-opacity duration-500 grayscale"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="text-white font-display text-sm tracking-widest uppercase mb-2">Stealth Class</div>
                            <h4 className="text-3xl md:text-5xl font-display font-bold text-gray-300 group-hover:text-white uppercase mb-4">Phantom</h4>
                            <p className="text-gray-400 font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                                Reconnaissance and infiltration experts. Utilizing active camouflage and suppressed weaponry
                                to disrupt enemy comms and eliminate high-value targets.
                            </p>
                        </div>
                    </motion.div>

                    {/* Faction 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 bg-[#111] relative overflow-hidden group border border-bordercolor hover:border-blood transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer interactable hover:flex-[2] opacity-100 group-hover/container:opacity-50 hover:!opacity-100"
                    >
                        <img src="/assets/titan.png" alt="Titan" className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-0"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="text-gray-500 group-hover:text-blood transition-colors font-display text-sm tracking-widest uppercase mb-2">Heavy Support</div>
                            <h4 className="text-3xl md:text-5xl font-display font-bold text-gray-300 group-hover:text-white uppercase mb-4">Titan</h4>
                            <p className="text-gray-400 font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                                Area denial and sustained fire. Equipped with light machine guns and explosive ordinance to
                                hold chokepoints and suppress hostile forces.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Factions;

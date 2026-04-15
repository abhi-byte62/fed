import React from 'react';
import { motion } from 'framer-motion';

const Arsenal = () => {
    return (
        <section id="arsenal" className="py-24 px-6 relative overflow-hidden bg-gradient-to-t from-black to-dark">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 relative z-10"
                >
                    <div className="aspect-[4/5] bg-panel border-l-4 border-blood relative overflow-hidden group">
                        <img src="/assets/soldier.png" alt="Tactical Operator" className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                            <p className="font-display text-blood tracking-widest uppercase text-sm mb-1">Operative</p>
                            <h4 className="font-display text-3xl uppercase text-white">Ghost Squad</h4>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 border-l border-bordercolor pl-8 md:pl-16"
                >
                    <h2 className="font-display text-4xl md:text-6xl uppercase mb-8 text-white">
                        <span className="text-blood">Lethal</span> Execution
                    </h2>
                    <div className="space-y-8">
                        <div className="border-b border-bordercolor pb-6 group interactable cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <h5 className="font-display text-xl uppercase text-white group-hover:text-blood transition-colors">
                                    Advanced Weapon Manipulation
                                </h5>
                                <span className="text-blood transition-transform group-hover:rotate-90">+</span>
                            </div>
                            <p className="font-body text-gray-500 text-sm h-auto opacity-100 transition-all">True-to-life weapon handling routines including tactical reloads, chamber checking, and malfunction clearing.</p>
                        </div>
                        <div className="border-b border-bordercolor pb-6 group interactable cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <h5 className="font-display text-xl uppercase text-gray-400 group-hover:text-blood transition-colors">
                                    CQC Mechanics
                                </h5>
                                <span className="text-blood transition-transform group-hover:rotate-90">+</span>
                            </div>
                        </div>
                        <div className="border-b border-bordercolor pb-6 group interactable cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <h5 className="font-display text-xl uppercase text-gray-400 group-hover:text-blood transition-colors">
                                    Dynamic Lighting & Night Vision
                                </h5>
                                <span className="text-blood transition-transform group-hover:rotate-90">+</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Arsenal;

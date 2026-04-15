import React from 'react';
import { motion } from 'framer-motion';

const BetaForm = () => {
    return (
        <section className="py-32 px-6 relative bg-panel flex items-center justify-center border-t border-bordercolor overflow-hidden">
            {/* Abstract Background shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blood rounded-full opacity-5 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900 rounded-full opacity-5 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto max-w-4xl text-center relative z-10"
            >
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-white mb-6">
                    Gain <span className="text-blood">Clearance</span>
                </h2>
                <p className="text-gray-400 font-body text-lg mb-12 max-w-2xl mx-auto">
                    The operation is classified. Enlist now to receive closed beta access, exclusive operator gear, and
                    mission briefings before deployment.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative flex-grow">
                        <input
                            type="email"
                            placeholder="ENTER SECURE COMMS (EMAIL)"
                            className="w-full bg-dark/50 border border-bordercolor text-white font-body px-6 py-4 focus:outline-none focus:border-blood transition-colors placeholder:text-gray-600 interactable"
                            required
                        />
                        {/* Corner brackets */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 pointer-events-none"></div>
                    </div>
                    <button type="submit" className="bg-blood hover:bg-blood-dark text-white font-display px-10 py-4 uppercase tracking-widest font-bold transition-all interactable custom-btn whitespace-nowrap shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:shadow-[0_0_30px_rgba(211,47,47,0.6)]">
                        Decrypt Code
                    </button>
                </form>
                <p className="text-gray-600 font-display text-xs uppercase tracking-widest mt-6">
                    *ACCESS IS NOT GUARANTEED. REVIEW PROTOCOLS.
                </p>
            </motion.div>
        </section>
    );
};

export default BetaForm;

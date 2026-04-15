import React from 'react';

const Navbar = () => {
    return (
        <header className="fixed w-full top-0 z-50 transition-colors duration-300 bg-dark/80 backdrop-blur-md border-b border-bordercolor">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-display font-bold tracking-widest text-white uppercase cursor-pointer group">
                    BL<span className="text-blood transition-colors group-hover:text-white">A</span>CKOUT
                </div>

                <nav className="hidden md:flex gap-8 font-display uppercase tracking-wider text-sm">
                    <a href="#intel" className="hover:text-blood transition-colors cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-blood after:transition-all hover:after:w-full">Intel</a>
                    <a href="#arsenal" className="hover:text-blood transition-colors cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-blood after:transition-all hover:after:w-full">Arsenal</a>
                    <a href="#factions" className="hover:text-blood transition-colors cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-blood after:transition-all hover:after:w-full">Factions</a>
                </nav>

                <button className="hidden md:block bg-blood hover:bg-blood-dark text-white font-display px-6 py-2 uppercase tracking-widest text-sm transition-all shadow-[0_0_15px_rgba(211,47,47,0.4)] hover:shadow-[0_0_25px_rgba(211,47,47,0.8)] custom-btn interactable">
                    Pre-Order
                </button>

                <button className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;

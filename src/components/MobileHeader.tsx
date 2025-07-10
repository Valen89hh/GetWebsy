import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú si la pantalla es grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        className="lg:hidden text-white focus:outline-none z-[60] cursor-pointer"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          // Icono X
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Icono hamburguesa
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Modal animado - slide from top */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 h-screen bg-background bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            <a
              href="#services"
              className="text-white text-xl font-agrandir-bold"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#precios"
              className="text-white text-xl font-agrandir-bold"
              onClick={() => setIsOpen(false)}
            >
              Precios
            </a>
            <a
              href="#proyectos"
              className="text-white text-xl font-agrandir-bold"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              <button className="px-6 h-[42px] bg-transparent border border-primary cursor-pointer inline-flex justify-center items-center  rounded-full transition-all hover:bg-primary/10">
                <span className="text-sm translate-y-0.5 text-primary font-agrandir-bold leading-none m-0 p-0 uppercase text-center">
                    Contáctanos
                </span>
            </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

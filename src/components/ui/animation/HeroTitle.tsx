import { motion } from 'framer-motion'

export default function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-agrandir-heavy text-white leading-tight text-center lg:text-left"
    >
      Lleva tu <span className="text-gradient-custom">Negocio</span> al mundo digital
    </motion.h1>
  )
}

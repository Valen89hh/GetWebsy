import { motion } from 'framer-motion'

export default function BlobsBackground() {
  return (
    <>
      {/* Blob inferior izquierdo - naranja */}
      <motion.div
        initial={{ opacity: 0.2, scale: 0.8, y: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.2,
        }}
        className="absolute w-[500px] h-[500px] bottom-[-150px] left-[-150px] blur-[50px] z-0"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#EF9364" d="M59,-57C71.1,-46.9,71.8,-23.5,65.5,-6.3C59.2,10.8,45.8,21.6,33.7,35.8C21.6,49.9,10.8,67.3,-1.3,68.6C-13.3,69.9,-26.7,54.9,-43,40.8C-59.3,26.7,-78.5,13.3,-80.7,-2.2C-82.9,-17.7,-68,-35.4,-51.7,-45.5C-35.4,-55.5,-17.7,-57.9,2.9,-60.8C23.5,-63.7,46.9,-67,59,-57Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Blob superior derecho - morado */}
      <motion.div
        initial={{ opacity: 0.2, scale: 0.8, y: -50 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.4,
        }}
        className="absolute w-[500px] h-[500px] blur-[50px] top-[-150px] right-[-150px] z-0"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#8B7BCF" d="M37.8,-56.4C42.6,-48.4,35.9,-29,38.8,-14C41.7,0.9,54.3,11.3,58.3,25.2C62.4,39,58,56.4,46.8,65.2C35.7,74,17.9,74.3,5.9,66.3C-6.1,58.2,-12.2,41.7,-20.4,32C-28.6,22.2,-38.8,19,-45.3,11.7C-51.9,4.3,-54.9,-7.2,-50.2,-14.7C-45.5,-22.1,-33.2,-25.4,-23.5,-31.8C-13.9,-38.2,-6.9,-47.7,4.8,-54.3C16.5,-60.8,32.9,-64.4,37.8,-56.4Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

    </>
  )
}

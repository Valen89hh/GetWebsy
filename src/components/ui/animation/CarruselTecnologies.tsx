import { motion } from "framer-motion";
import nextjs from "../../../assets/tecs/nextjs.svg";
import vercel from "../../../assets/tecs/vercel.svg";
import react from "../../../assets/tecs/react.svg";
import tailwindcss from "../../../assets/tecs/tailwindcss.svg";
import ts from "../../../assets/tecs/ts.svg";
import supabase from "../../../assets/tecs/supabase.svg";
import css from "../../../assets/tecs/css.svg";
import js from "../../../assets/tecs/js.svg";
import html from "../../../assets/tecs/html.svg";
import node from "../../../assets/tecs/node.svg";
import figma from "../../../assets/tecs/figma.svg";
import lucide from "../../../assets/tecs/lucide.svg";
import docker from "../../../assets/tecs/docker.svg";
import php from "../../../assets/tecs/php.svg";
import mysql from "../../../assets/tecs/mysql.svg";

const technologies = [
  { src: nextjs.src, name: "Nextjs" },
  { src: vercel.src, name: "Vercel" },
  { src: react.src, name: "React" },
  { src: tailwindcss.src, name: "Tailwindcss" },
  { src: ts.src, name: "TypeScript" },
  { src: supabase.src, name: "Supabase" },
  { src: css.src, name: "CSS" },
];

const lowerTechnologies = [
  { src: js.src, name: "Js" },
  { src: html.src, name: "Html" },
  { src: node.src, name: "Node" },
  { src: figma.src, name: "Figma" },
  { src: lucide.src, name: "Lucide" },
  { src: docker.src, name: "Docker" },
  { src: php.src, name: "Php" },
  { src: mysql.src, name: "Mysql" },
];

const CardTecnology = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="pr-6">
        <div className="p-3 w-fit h-12 md:h-15 inline-flex justify-center items-center rounded-md border border-border">
        <img
            src={src}
            alt={name}
            className="object-contain max-w-full max-h-full h-[40px] w-auto"
        />
        </div>
    </div>
  );
};

const CarruserTecnologies = () => {
  return (
    <div className="flex overflow-x-hidden flex-col gap-4 py-8 border-t border-b border-muted">
        <div className="flex">
            <motion.div
                className="flex flex-shrink-0"
                initial={{x: 0}}
                animate={{ x: "-100%"}}
                transition={{ duration: 60, repeat: Infinity, ease: "linear"}}
            >
                {/* Contenido original + duplicado */}
                {technologies.map((tech, index) => (
                    <CardTecnology key={index} src={tech.src} name={tech.name} />
                ))}
            </motion.div>
            <motion.div
                className="flex flex-shrink-0"
                initial={{x: 0}}
                animate={{ x: "-100%"}}
                transition={{ duration: 60, repeat: Infinity, ease: "linear"}}
            >
                {/* Contenido original + duplicado */}
                {technologies.map((tech, index) => (
                    <CardTecnology key={index} src={tech.src} name={tech.name} />
                ))}
            </motion.div>
        </div>
        <div className="flex">
            <motion.div
                className="flex flex-shrink-0"
                initial={{x: "-100%"}}
                animate={{ x: 0}}
                transition={{ duration: 30, repeat: Infinity, ease: "linear"}}
            >
                {/* Contenido original + duplicado */}
                {lowerTechnologies.map((tech, index) => (
                    <CardTecnology key={index} src={tech.src} name={tech.name} />
                ))}
            </motion.div>
            <motion.div
                className="flex flex-shrink-0"
                initial={{x: "-100%"}}
                animate={{ x: 0}}
                transition={{ duration: 30, repeat: Infinity, ease: "linear"}}
            >
                {/* Contenido original + duplicado */}
                {lowerTechnologies.map((tech, index) => (
                    <CardTecnology key={index} src={tech.src} name={tech.name} />
                ))}
            </motion.div>
            <motion.div
                className="flex flex-shrink-0"
                initial={{x: "-100%"}}
                animate={{ x: 0}}
                transition={{ duration: 30, repeat: Infinity, ease: "linear"}}
            >
                {/* Contenido original + duplicado */}
                {lowerTechnologies.map((tech, index) => (
                    <CardTecnology key={index} src={tech.src} name={tech.name} />
                ))}
            </motion.div>
        </div>
    </div>
  );
};

export default CarruserTecnologies;

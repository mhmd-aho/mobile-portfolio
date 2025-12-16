import { NavLink } from "react-router";
import {frontEndStack, tools} from "../lib/data"
import {motion} from 'motion/react';
import {containerVariants, itemVariants} from "/src/lib/animtion";
export default function About() {
    return (
        <section className="max-sm:min-h-screen w-screen flex flex-col justify-start items-center gap-4 sm:gap-8 p-2 sm:p-4 bg-black/10 dark:bg-white/10 backdrop-blur-[3px]">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <motion.h1 variants={itemVariants} className="text-2xl font-bold text-black dark:text-white">About me</motion.h1>
                <motion.p variants={itemVariants} className="text-black dark:text-white">I’m a self-taught front-end web developer, dedicated to turning ideas into creative and impactful digital experiences.
          I specialize in building seamless, responsive, and intuitive user interfaces using modern technologies like React and Tailwind CSS.</motion.p>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <motion.h1 variants={itemVariants} className="text-2xl font-bold text-black dark:text-white">My stack</motion.h1>
                <div className="flex flex-col gap-1 justify-start items-start pl-2">
                    <motion.h2 variants={itemVariants} className="text-xl font-semibold text-black dark:text-white">Front-end</motion.h2>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex justify-start items-center gap-2 flex-wrap">
                        {frontEndStack.map((item) => (
                            <motion.div key={item.name} variants={itemVariants} className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 rounded-lg shadow-lg">
                                <img className="h-full w-auto" src={item.src} alt={item.name} />
                                <p className="text-black dark:text-white">{item.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="flex flex-col gap-1 justify-start items-start pl-2">
                    <motion.h2 variants={itemVariants} className="text-xl font-semibold text-black dark:text-white">Tools</motion.h2>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex justify-start items-center gap-2 flex-wrap">
                        {tools.map((item) => (
                            <motion.div key={item.name} variants={itemVariants} className="flex justify-between items-center gap-2 p-2 h-12 border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 rounded-lg shadow-lg">
                                <img className="h-full" src={item.src} alt={item.name} />
                                <p className="text-black dark:text-white">{item.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            <motion.button whileTap={{scale: 0.95}} transition={{type: "spring", stiffness: 260, damping: 20}} className="border border-blue-600 dark:border-cyan-600 bg-blue-500 dark:bg-cyan-500 py-2 w-11/12 text-center text-black/50 dark:text-white/50 rounded-lg mt-4"><NavLink to="/contact">Let's Work Together</NavLink></motion.button>
        </section>
    )
}
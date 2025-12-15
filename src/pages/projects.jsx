import { useState } from "react"
import { projects } from "../lib/data"
import {motion, AnimatePresence} from 'motion/react';
import {containerVariants, itemVariants} from "/src/lib/animtion";

export default function Projects() {
    const [showModal,setShowModal] = useState(null);

    return (
        <section className="min-h-screen w-screen flex flex-col justify-start items-center gap-4 p-2 bg-black/10 dark:bg-white/10 backdrop-blur-[3px]">  
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <motion.h1 variants={itemVariants} className="text-2xl font-bold text-black dark:text-white">Projects</motion.h1>
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex flex-col gap-2 justify-start items-start h-fit w-full p-2 sm:px-20">
                    {projects.map((project,index)=>{
                        return(
                            <motion.div onClick={()=>setShowModal(index)} key={index} variants={itemVariants} className="relative flex flex-col justify-start items-start h-96 w-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 rounded-lg shadow-lg">
                                <div className="h-1/2 w-full overflow-hidden rounded-t-lg">
                                    <img className="h-full w-full object-cover" src={project.src} alt={project.name} />    
                                </div>
                                <div className="flex flex-col gap-1 justify-start items-start h-1/2 w-full p-2">
                                    <h2 className="text-xl font-semibold text-black dark:text-white">{project.name}</h2>
                                    <p className="text-sm text-black/50 dark:text-white/50">{project.des}</p>
                                </div>
                                <AnimatePresence>
                                {
                                    showModal === index && (
                                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={(e)=>{
                                            e.stopPropagation()
                                            setShowModal(null)
                                        }} className="bg-black/70 backdrop-blur-md absolute inset-0 h-full flex justify-center items-center rounded-lg">
                                            <div className="flex gap-2 justify-start items-start h-fit w-fit p-2">
                                                <motion.a whileTap={{scale: 0.95}} transition={{type: "spring", stiffness: 260, damping: 20}} onClick={(e)=>e.stopPropagation()} className="px-4 py-2 border rounded-lg border-blue-600 dark:border-cyan-600 bg-blue-500 dark:bg-cyan-500 shadow-lg text-black/50" href={project.link} target="_blank" rel="noopener noreferrer">Visit</motion.a>
                                                <motion.a whileTap={{scale: 0.95}} transition={{type: "spring", stiffness: 260, damping: 20}} onClick={(e)=>e.stopPropagation()} className="px-4 py-2 border rounded-lg border-white/20 bg-white/10 shadow-lg text-white/50" href={project.repo} target="_blank" rel="noopener noreferrer">Repo</motion.a>
                                            </div>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}
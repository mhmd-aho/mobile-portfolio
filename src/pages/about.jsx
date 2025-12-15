import { NavLink } from "react-router";
import {frontEndStack, tools} from "../lib/data"
import {motion} from 'motion/react';
import {containerVariants, itemVariants} from "/src/lib/animtion";
const gsapSvg = (<svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-13" viewBox="0 0 82 30">
                    <path fill="#0ae448" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
                    <path fill="#0ae448" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
                </svg>)
const motionSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 9" className="h-auto w-6 fill-black dark:fill-white">
      <path d="M9.062 0L4.32 8.992H0L3.703 1.971C4.277.882 5.709 0 6.902 0zM19.656 2.248c0-1.242.967-2.248 2.16-2.248s2.16 1.006 2.16 2.248-0.967 2.248-2.16 2.248-2.16-1.006-2.16-2.248zM9.872 0h4.32L9.45 8.992H5.13zM14.974 0h4.32L15.592 7.021c-.574 1.089-2.007 1.971-3.2 1.971h-2.16z" />
    </svg>)
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
                                {
                                    item.svg?
                                    <div
                        className={`flex justify-center items-center ${
                        item.name === "Motion"
                            ? "bg-yellow-400 rounded-md p-2 h-10 w-10"
                            : "bg-neutral-950 rounded-md p-2 h-10 w-10"
                        }`}
                    >
                        {item.name === "Motion"? motionSvg : gsapSvg}
                    </div>:
                                <img className="h-full w-auto" src={item.src} alt={item.name} />
                                }
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
            <motion.button whileTap={{scale: 0.95}} transition={{type: "spring", stiffness: 260, damping: 20}} className="border border-blue-600 dark:border-cyan-600 bg-blue-500 dark:bg-cyan-500 py-2 w-full text-center text-black/50 dark:text-white/50 rounded-lg mt-4"><NavLink to="/contact">Let's Work Together</NavLink></motion.button>
        </section>
    )
}
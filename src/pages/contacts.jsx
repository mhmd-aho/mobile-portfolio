import { contactApp } from "/src/lib/data";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {containerVariants, itemVariants} from "/src/lib/animtion";
export default function Contacts() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Failed to send message", error);
        alert("Failed to send message");
      })
      .finally(() => setLoading(false));
  };
    return (
       <section className="h-[75vh] sm:h-[85vh] w-screen flex flex-col justify-start items-center gap-4 sm:gap-8 p-2 sm:p-4 bg-black/10 dark:bg-white/10 backdrop-blur-[3px]">
        <div className=" flex flex-col gap-4 justify-center items-center h-fit w-full">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <motion.h2 variants={itemVariants} className="text-2xl font-bold text-black dark:text-white">Get in touch</motion.h2>
                <motion.p variants={itemVariants} className="text-sm sm:text-base dark:text-white/80 text-black/80 w-full text-start">
                  Have a project in mind or just want to say hello?<br/>
                  I'm here to help!
                </motion.p>
            </motion.div>
            <motion.form ref={formRef} onSubmit={sendEmail} variants={containerVariants} initial="hidden" whileInView="visible" className="flex flex-col gap-2 sm:gap-4 justify-center items-center h-fit w-full px-4 sm:px-8">
                <label className="sr-only" htmlFor="Name"></label>
                <motion.input variants={itemVariants} name="name" id="name" className="border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 p-3 w-full text-black dark:text-white/60 placeholder:text-black/60 dark:placeholder:text-white/60 rounded-lg backdrop-blur-[2px]" type="text" placeholder="Name" required />
                <label className="sr-only" htmlFor="Email"></label>
                <motion.input variants={itemVariants} name="email" id="email" className="border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 p-3 w-full text-black dark:text-white/60 placeholder:text-black/60 dark:placeholder:text-white/60 rounded-lg backdrop-blur-[2px]" type="email" placeholder="Email" required />
                <label className="sr-only" htmlFor="Message"></label>
                <motion.textarea variants={itemVariants} name="message" id="message" className="border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 p-3 w-full text-black dark:text-white/60 placeholder:text-black/60 dark:placeholder:text-white/60 rounded-lg backdrop-blur-[2px]" placeholder="Message" required></motion.textarea>
                <motion.button variants={itemVariants} whileTap={{scale: 0.95}} transition={{type: "spring", stiffness: 260, damping: 20}} disabled={loading} className="border border-blue-600 dark:border-cyan-600 bg-blue-500 dark:bg-cyan-500 py-3 w-full text-black/50 rounded-lg" type="submit">{loading ? "Sending..." : "Send Message"}</motion.button>
            </motion.form>
            <motion.div variants={itemVariants} className="flex justify-between items-center w-full">
                <div className="h-px w-1/4 bg-black dark:bg-white rounded-full"/>
                <p className="text-[12px] sm:text-sm text-black dark:text-white/80 w-1/2 text-center ">Or reach me directly at</p>
                <div className="h-px w-1/4 bg-black dark:bg-white rounded-full"/>
            </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex justify-center items-center gap-6 w-full">
          {
            contactApp.map((app,index)=>(
              <motion.a key={index} href={app.link} variants={itemVariants} whileTap={{scale: 0.95,backgroundColor: "oklch(62.3% 0.214 259.815)"}} transition={{type: "spring", stiffness: 260, damping: 20}} className="sm:h-14 sm:w-14 h-12 w-12 p-2 bg-black/10 dark:bg-white/10 duration-300 rounded-full flex justify-center items-center" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src={app.icon} alt="icon" className="h-8 w-8" />
              </motion.a>
            ))
          }
        </motion.div>
        
      </div>
        </section>
    )   
}
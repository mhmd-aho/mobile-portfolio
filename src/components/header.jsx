import Navbar from "/src/components/navbar";
import light from '/src/assets/img/icons8-sun-30.png';
import dark from '/src/assets/img/icons8-moon-30.png';
export default function Header({setTheme,theme}) {
  return (
    <header className="
      w-full h-[25vh]
      flex flex-col items-center justify-between
      border-b border-black/20 dark:border-white/20
      p-2
      pt-6
      bg-black/10 dark:bg-white/10
      backdrop-blur-[3px]
    ">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="dark:text-white text-black absolute top-2 right-2"><img className="w-6" src={theme === "dark" ? dark : light} alt={theme === "dark" ? "light" : "dark"} /></button>
      <h1 className="
        text-2xl sm:text-3xl 
        font-bold text-black dark:text-white
        text-center leading-tight
      ">
        Mohamad Abou Hamoud
      </h1>
      <h2 className="
        dark:text-cyan-600 
        text-blue-600 
        text-base sm:text-lg 
        font-medium 
        text-center
      ">
        Frontend Developer
      </h2>
      <p className="
        text-xs sm:text-sm
        dark:text-cyan-600/80 
        text-blue-600/80 
        text-center
        font-semibold
        ">
        Saida, Lebanon
      </p>
      <Navbar />
    </header>
  )
}

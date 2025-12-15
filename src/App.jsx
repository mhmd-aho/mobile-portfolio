import { createBrowserRouter } from "react-router";
import { RouterProvider} from "react-router/dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import Certifications from "./pages/certifications";
import Layout from "./layout";
import { useState,useEffect } from "react";
function App() {
  const [isMobile,setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize",handleResize);
    return () => {
      window.removeEventListener("resize",handleResize);
    }
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          index: true,
          element: <About/>
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path:'certifications',
          element:<Certifications/>
        },
        { 
          path: "contact",
          element: <Contacts />,
        },
      ]
    }
  ])
  return (
    isMobile?(
    <main className="min-h-screen w-screen overflow-x-hidden">
        <RouterProvider router={router} />
    </main>):(
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white p-6 text-center gap-4">
  <h1 className="text-3xl font-semibold">
    Desktop Experience Available
  </h1>

  <p className="text-white/70 max-w-xl">
    You are currently viewing the mobile version of my portfolio.
    For the full experience — including advanced animations, layouts,
    and interactions — please visit the desktop version.
  </p>

  <a
    href="https://mhmd-aho.github.io/portfolio/"
    className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition"
  >
    Go to Desktop Portfolio
  </a>

  <p className="text-sm text-white/40 mt-2">
    Prefer mobile? You may continue browsing here.
  </p>
</div>

    ))
}

export default App

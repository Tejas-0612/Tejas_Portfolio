import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
    {/* // <div className="mt-8 mx-12 flex justify-between items-center">
    // <div className="">
    //   <span className="text-5xl"> &lt;</span>
    //    <span className="xyz  text-red-500 text-5xl">Tejas</span>
    //   <span className="text-5xl"> /&gt;</span>
    //   </div> */}
       <Header />
      <Hero />
      <AboutMe/>  
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;

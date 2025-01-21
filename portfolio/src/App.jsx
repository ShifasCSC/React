
// export default App
import './App.scss';
import About from './Components/About';
import Intro from './Components/Intro';
// import Nav from './Components/Nav';
import './App.css'
import Tech from './Components/Tech';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Nav from './Components/Nav';


function App() {



  return (
    <>
      <div className='antialiased selection:bg-gray-400 selection:text-gray-600'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
        </div>
        <div className='container mb-40 mx-auto px-8'>
          <Nav />
          <Intro />
          <About />
          <Tech />
          <Project />
          <Contact />
        </div>
      </div>

    </>
  );
}

export default App;

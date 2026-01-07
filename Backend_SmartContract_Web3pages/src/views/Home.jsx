import { useEffect } from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'
import Header from '../components/Header'
import { heroBackground } from "../assets";
import Footer from "../pagecomponents/Footer";

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
      <Header/>
      <div className="absolute overflow-hidden max-h-fit left-1/2 top-30 w-[100%]  -translate-x-1/2 bottom-30 md:w-[100%] -z-50">
            <img
              src={heroBackground}
              className="w-full "
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
      <Hero />
      <Projects projects={projects} />
      <CreateProject />
      <AddButton />
      <Footer />
    </>
  )
}

export default Home

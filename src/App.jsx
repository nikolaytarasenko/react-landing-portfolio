import Navbar from './components/Navbar/Navbar'
import Hero from './scenes/Hero/Hero'
import Projects from './scenes/Projects/Projects'
import About from './scenes/About/About'
import Contact from './scenes/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App

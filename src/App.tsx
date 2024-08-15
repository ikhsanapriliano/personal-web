import About from "./sections/About"
import Experience from "./sections/Experience"
import Expertise from "./sections/Expertise"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Home from "./sections/Home"
import Portfolio from "./sections/Portfolio"

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Home />
        <About />
        <Expertise />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default App

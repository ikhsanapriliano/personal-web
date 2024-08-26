import { useEffect, useRef } from "react"
import About from "../sections/About"
import Experience from "../sections/Experience"
import Expertise from "../sections/Expertise"
import Home from "../sections/Home"
import Portfolio from "../sections/Portfolio"

const Main = () => {
    const home = useRef<HTMLDivElement>(null)
    const about = useRef<HTMLDivElement>(null)
    const expertise = useRef<HTMLDivElement>(null)
    const experience = useRef<HTMLDivElement>(null)
    const portfolio = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const path = window.location.href.split("/#")[1]
        const width = window.innerWidth
        const padding = width > 700 ? 80 : 60

        switch (path) {
            case "about":
                window.scrollTo({ top: about.current!.getBoundingClientRect().top - padding })
                break
            case "expertise":
                window.scrollTo({ top: expertise.current!.getBoundingClientRect().top - padding })
                break
            case "experience":
                window.scrollTo({ top: experience.current!.getBoundingClientRect().top - padding })
                break
            case "portfolio":
                window.scrollTo({ top: portfolio.current!.getBoundingClientRect().top - padding })
                break
            default:
                window.scrollTo({ top: home.current!.getBoundingClientRect().top - padding })
        }
    }, [])

    return (
        <main className="container mx-auto">
            <Home home={home} />
            <About about={about} />
            <Expertise expertise={expertise} />
            <Experience experience={experience} />
            <Portfolio portfolio={portfolio} />
        </main>
    )
}

export default Main
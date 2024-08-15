import { useState } from "react"
import PortfolioCard from "../components/PortfolioCard"

const Portfolio = () => {
    const [current, setCurrent] = useState(-1)
    const portfolios = ["port"]

    return (
        <section id="portfolio" className="px-10 py-10 flex flex-col justify-center gap-5">
            <p className="text-xl font-semibold">Portfolio</p>
            <div className="grid grid-cols-2 gap-5">
                {
                    portfolios.map((_item, index) => (
                        <PortfolioCard key={index} index={index} current={current} setCurrent={setCurrent} />
                    ))
                }
            </div>
        </section>
    )
}

export default Portfolio
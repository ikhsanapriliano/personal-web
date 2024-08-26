import { useState } from "react"
import PortfolioCard from "../components/PortfolioCard"

export interface Portfolio {
    id: number,
    title: string,
    image: string,
    desc: string,
    path: string
}

const Portfolio = ({ portfolio }: { portfolio: React.RefObject<HTMLDivElement> }) => {
    const [current, setCurrent] = useState(-1)
    const portfolios: Portfolio[] = [
        {
            id: 1,
            title: "Gowesmart",
            image: "/gowesmart/gowesmart-1.jpg",
            desc: "Gowesmart is an e-commerce website specializing in bicycles.",
            path: "/gowesmart"
        }
    ]

    return (
        <section ref={portfolio} id="portfolio" className="px-5 xl:px-10 py-10 flex flex-col justify-center gap-5 text-[12px] md:text-[16px]">
            <p className="text-xl font-semibold">Portfolio</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    portfolios.map((item) => (
                        <PortfolioCard
                            key={item.id}
                            item={item}
                            current={current}
                            setCurrent={setCurrent} />
                    ))
                }
            </div>
        </section>
    )
}

export default Portfolio
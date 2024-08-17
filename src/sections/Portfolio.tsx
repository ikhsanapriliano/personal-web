import { useState } from "react"
import PortfolioCard from "../components/PortfolioCard"
import Modal from "../components/Modal"

export interface Portfolio {
    id: number,
    title: string,
    image: string,
    desc1: string,
    desc2: string,
    tech: string[],
    link: {
        figma: string,
        github: string,
        preview: string
    }
}

const Portfolio = () => {
    const [current, setCurrent] = useState(-1)
    const portfolios: Portfolio[] = [
        {
            id: 1,
            title: "Gowesmart",
            image: "/gowesmart.jpg",
            desc1: "Gowesmart is an e-commerce website specializing in bicycles.",
            desc2: "Gowesmart is an e-commerce website specializing in bicycles. It features functionalities such as registration, login, forgot password, profile editing, shopping cart, transactions, product reviews, and admin management. Gowesmart is also integrated with the Midtrans payment gateway for processing payments.",
            tech: ["HTML/CSS", "Javascript", "Nextjs", "Tailwind", "Radix Ui", "Zustand", "Firebase", "Axios", "Golang", "Gin", "Gorm", "Postgresql", "Figma"],
            link: {
                figma: "https://www.figma.com/design/HoMfOLm23mHUAhWDTlK0FX/gowesmart?node-id=0-1&t=A2ZXllZi7wZwbwjF-0",
                github: "https://github.com/gowesmart",
                preview: "https://gowesmart-eta.vercel.app"
            }
        }
    ]

    return (
        <section id="portfolio" className="px-5 xl:px-10 py-10 flex flex-col justify-center gap-5 text-[12px] md:text-[16px]">
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
            <Modal />
        </section>
    )
}

export default Portfolio
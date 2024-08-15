import React from "react"
import gowesmart from "../assets/gowesmart.jpg"

interface Portfolio {
    index: number,
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

const PortfolioCard = ({ index, current, setCurrent }: Portfolio) => {


    return (
        <div
            onMouseEnter={() => { setCurrent(index) }}
            onMouseLeave={() => { setCurrent(-1) }}>
            <div className="h-[250px] overflow-hidden">
                <img src={gowesmart} alt="gowesmart" className={`${current == index ? "scale-110" : null} duration-150`} />
            </div>
            <div className="py-2">
                <p className="font-semibold text-lg">Gowesmart</p>
                <div className="flex gap-3 flex-wrap">
                    <p>Javascript</p>
                    <p>Next Js</p>
                    <p>Tailwind</p>
                    <p>Firebase</p>
                    <p>Golang</p>
                    <p>Gorm</p>
                    <p>PostgreSql</p>
                </div>
                <div className="flex gap-3 mt-4">
                    <a href="https://github.com/gowesmart" className="border border-primary hover:bg-gray-100 py-1 px-3 rounded-md" target="_blank">Github</a>
                    <a href="https://www.figma.com/design/HoMfOLm23mHUAhWDTlK0FX/gowesmart?node-id=0-1&t=MgnC0LgPfhtYZb5A-0" target="_blank" className="border border-primary hover:bg-gray-100 py-1 px-3 rounded-md">Figma</a>
                    <a href="https://gowesmart-eta.vercel.app" className="border border-primary hover:bg-gray-100 py-1 px-3 rounded-md" target="_blank">Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
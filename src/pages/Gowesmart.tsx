import { Carousel } from "flowbite-react"
import { useEffect, useRef, useState } from "react"

const Gowesmart = () => {
    const ref = useRef<HTMLDivElement>(null)
    const width = window.innerWidth
    const fill = width > 1000 ? (width > 1600 ? 6 : 5) : (width > 330 ? 4 : 3)
    const images = [
        "/gowesmart/gowesmart-1.jpg",
        "/gowesmart/gowesmart-2.jpg",
        "/gowesmart/gowesmart-3.jpg",
        "/gowesmart/gowesmart-4.jpg",
        "/gowesmart/gowesmart-5.jpg",
        "/gowesmart/gowesmart-6.jpg",
        "/gowesmart/gowesmart-7.jpg",
        "/gowesmart/gowesmart-8.jpg",
        "/gowesmart/gowesmart-9.jpg",
        "/gowesmart/gowesmart-10.jpg",
    ]
    const [current, setCurrent] = useState(images[0])

    const renderImages = () => {
        const components = []

        let start = 0
        for (let i = 0; i < Math.ceil((images.length / fill)); i++) {
            components.push(
                <div key={i} className={`flex px-2 md:px-0 gap-2 md:gap-5 justify-center`}>
                    {
                        images.slice(start, start + fill).map((item, index) => (
                            <div onClick={() => {
                                setCurrent(item)
                                ref.current?.scrollIntoView()
                            }} key={index} className="w-[90px] md:w-[240px] overflow-hidden cursor-pointer">
                                <img src={item} alt="gowesmart" className="w-full h-auto hover:scale-110 duration-200" />
                            </div>
                        ))
                    }
                </div>
            )

            start += fill
        }

        return components
    }

    useEffect(() => {
        ref.current?.scrollIntoView()
    }, [])

    return (
        <main ref={ref} className="min-h-screen pt-[80px] container mx-auto">
            <section className="md:pt-5">
                <div className={`w-full ${width > 350 ? "h-[180px]" : "h-[140px]"} ${width > 400 ? "h-[200px]" : ""} md:h-[300px] xl:h-[600px] overflow-hidden`}>
                    <img src={current} alt="gowesmart" className="w-full h-auto" />
                </div>
                <div className="h-[60px] md:h-[150px]">
                    <Carousel slide={false} indicators={false}
                        rightControl={images.length <= fill || width < 1000 ? <></> : null}
                        leftControl={images.length <= fill || width < 1000 ? <></> : null}>
                        {
                            renderImages()
                        }
                    </Carousel>
                </div>
                <article className="py-5 xl:py-10 px-5 xl:px-10 flex flex-col gap-10 text-[14px] xl:text-[16px]">
                    <div>
                        <h1 className="font-semibold text-lg xl:text-xl">Gowesmart</h1>
                        <p>Gowesmart is an e-commerce website specializing in bicycles. It features functionalities such as registration, login, forgot password, profile editing, shopping cart, transactions, product reviews, and admin management. Gowesmart is also integrated with the Midtrans payment gateway for processing payments. This website was developed together with a group of 5 people.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Key Features</h2>
                        <ul className="list-disc list-inside">
                            <li>Responsive website design for desktop, tablet, and mobile devices.</li>
                            <li>Registration and login with JWT (JSON Web Token) implementation.</li>
                            <li>Product search based on brand name, bike category, bike price range, and bike release year.</li>
                            <li>Cart feature allowing users to add multiple products to the cart before checkout.</li>
                            <li>Transaction feature integrated with Midtrans Payment Gateway for payment processing.</li>
                            <li>Review feature where users can provide ratings and comments on purchased products.</li>
                            <li>Admin dashboard where admins can add or remove products, users, and categories.</li>
                            <li>Integration with Firebase Cloud Storage for product image storage.</li>
                            <li>User dashboard where users can view transaction history and continue transactions if not paid.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">My Contributions</h2>
                        <ul className="list-disc list-inside">
                            <li>Developed transaction features on both the Frontend and Backend.</li>
                            <li>Assisted in creating product review features on both the Frontend and Backend.</li>
                            <li>Integrated Midtrans Payment Gateway for payment processing.</li>
                            <li>Integrated Firebase Cloud Storage for photo storage.</li>
                            <li>Created the landing page and product page on the Frontend.</li>
                            <li>Implemented product search and filter features on the Frontend.</li>
                            <li>Designed the website using Figma.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Technical Stack</h2>
                        <ul className="list-disc list-inside">
                            <li>Frontend: HTML/CSS, Javascript, Next Js, Tailwind, Zustand, Firebase.</li>
                            <li>Backend: Golang, Gin, Gorm, Postgresql.</li>
                            <li>Other Tools: Github, Figma.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-2 xl:gap-5">
                        <a href={"https://www.figma.com/design/HoMfOLm23mHUAhWDTlK0FX/gowesmart?node-id=0-1&t=A2ZXllZi7wZwbwjF-0"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-brands fa-figma mr-2"></i>Figma</a>
                        <a href={"https://github.com/gowesmart"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-brands fa-github mr-2"></i>Github</a>
                        <a href={"https://gowesmart-eta.vercel.app"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-solid fa-globe mr-2"></i>Preview</a>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Gowesmart
import { Carousel } from "flowbite-react"
import { useEffect, useRef, useState } from "react"

const Orineko = () => {
    const ref = useRef<HTMLDivElement>(null)
    const width = window.innerWidth
    const fill = width > 1000 ? (width > 1600 ? 6 : 5) : (width > 330 ? 4 : 3)
    const images = [
        "/orineko/orineko-1.jpg",
        "/orineko/orineko-2.jpg",
        "/orineko/orineko-3.jpg",
        "/orineko/orineko-4.jpg",
        "/orineko/orineko-5.jpg",
        "/orineko/orineko-6.jpg",
        "/orineko/orineko-7.jpg",
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
                                <img src={item} alt="orineko" className="w-full h-auto hover:scale-110 duration-200" />
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
                        <h1 className="font-semibold text-lg xl:text-xl">Orineko</h1>
                        <p>Orineko is the first freelance project I worked on. This website is built using React.js. The focus of the website is to allow users to purchase class packages offered by Orineko and join a Telegram group after completing the payment. There is also an admin dashboard to manage transaction history and users. This project was completed in approximately 1 month with a team of 3 frontend freelance members.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Key Features</h2>
                        <ul className="list-disc list-inside">
                            <li>Responsive website design for desktop, tablet, and mobile devices.</li>
                            <li>Registration and login with JWT (JSON Web Token) and mailer implementation.</li>
                            <li>Transaction feature with payment gateway integration for processing payments.</li>
                            <li>Ability to join a Telegram group after completing the payment.</li>
                            <li>Admin dashboard for managing users and transaction history.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">My Contributions</h2>
                        <ul className="list-disc list-inside">
                            <li>Handled the registration feature.</li>
                            <li>Managed the forgot password feature.</li>
                            <li>Oversaw the transaction feature.</li>
                            <li>Managed the success/failure page after payment.</li>
                            <li>Fixed several minor bugs on the website.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Technical Stack</h2>
                        <ul className="list-disc list-inside">
                            <li>Frontend:  Javascript, React Js, Tailwind, Ant Design.</li>
                            <li>Other Tools:  Github, Postman.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-2 xl:gap-5">
                        <a href={"https://orineko.io"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-solid fa-globe mr-2"></i>Preview</a>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Orineko
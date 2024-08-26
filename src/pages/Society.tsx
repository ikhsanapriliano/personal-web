import { Carousel } from "flowbite-react"
import { useEffect, useRef, useState } from "react"

const Society = () => {
    const ref = useRef<HTMLDivElement>(null)
    const width = window.innerWidth
    const fill = width > 1000 ? (width > 1600 ? 6 : 5) : (width > 330 ? 4 : 3)
    const images = [
        "/society/society-1.jpg",
        "/society/society-2.jpg",
        "/society/society-3.jpg",
        "/society/society-4.jpg",
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
                                <img src={item} alt="society" className="w-full h-auto hover:scale-110 duration-200" />
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
                        <h1 className="font-semibold text-lg xl:text-xl">Society</h1>
                        <p>Society is a web-based chat application (similar to WhatsApp Web) using Next.js for the frontend and Express.js for the backend. It includes several features such as registration, login, a dashboard to view chat history and user statuses (online or offline), chat history search, user search, and the ability to send and receive messages. Some features in this project are still under development, but the main features have been deployed and can be viewed through the link above. This project was done individually.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Key Features</h2>
                        <ul className="list-disc list-inside">
                            <li>Responsive website design for desktop, tablet, and mobile devices (in progress).</li>
                            <li>Registration and login with JWT (JSON Web Token) implementation.</li>
                            <li>Chat history search based on message content and unread status.</li>
                            <li>User search based on username and email.</li>
                            <li>Real-time chatting feature using WebSocket.</li>
                            <li>Real-time user status indicating whether they are online or offline.</li>
                            <li>Real-time message read status updates.</li>
                            <li>Integration with Firebase Cloud Storage for profile photo and chat document storage (in progress).</li>
                            <li>Profile editing feature (in progress).</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Technical Stack</h2>
                        <ul className="list-disc list-inside">
                            <li>Frontend: Typescript, Next Js, Tailwind, Redux, Firebase, Axios, Websocket, Framer Motion.</li>
                            <li>Backend: Typescript, Express Js, Postgresql, Prisma, Websocket.</li>
                            <li>Other Tools: Github, VPS, Docker, Nginx.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-2 xl:gap-5">
                        <a href={"https://github.com/ikhsanapriliano/society"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-brands fa-github mr-2"></i>Github</a>
                        <a href={"http://society.my.id"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-solid fa-globe mr-2"></i>Preview</a>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Society
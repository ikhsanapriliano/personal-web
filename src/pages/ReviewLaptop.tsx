import { Carousel } from "flowbite-react"
import { useEffect, useRef, useState } from "react"

const ReviewLaptop = () => {
    const ref = useRef<HTMLDivElement>(null)
    const width = window.innerWidth
    const fill = width > 1000 ? (width > 1600 ? 6 : 5) : (width > 330 ? 4 : 3)
    const images = [
        "/review-laptop/review-laptop-1.jpg",
        "/review-laptop/review-laptop-2.jpg",
        "/review-laptop/review-laptop-3.jpg",
        "/review-laptop/review-laptop-4.jpg",
        "/review-laptop/review-laptop-5.jpg",
        "/review-laptop/review-laptop-6.jpg",
        "/review-laptop/review-laptop-7.jpg",
        "/review-laptop/review-laptop-8.jpg",
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
                                <img src={item} alt="review-laptop" className="w-full h-auto hover:scale-110 duration-200" />
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
                <div className={`w-full h-auto overflow-hidden`}>
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
                        <h1 className="font-semibold text-lg xl:text-xl">Review Laptop</h1>
                        <p>Review Laptop is a website where users can view and add reviews for laptops. The website is built using React.js for the frontend and Golang for the backend. This project includes several features, such as registration and login, searching for laptops based on brand and category, viewing laptops that users have previously reviewed, and an admin dashboard to add, edit, or delete laptops. This project was done individually.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Key Features</h2>
                        <ul className="list-disc list-inside">
                            <li>Registration and login with JWT implementation.</li>
                            <li>Search for laptops based on brand and category.</li>
                            <li>View laptops that users have reviewed.</li>
                            <li>Admin dashboard for managing laptop CRUD operations.</li>
                            <li>User profile management.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg xl:text-xl">Technical Stack</h2>
                        <ul className="list-disc list-inside">
                            <li>Frontend: Javascript, React Js, Tailwind, Context, Firebase.</li>
                            <li>Backend:  Golang, Gin, Gorm, Postgresql.</li>
                            <li>Other Tools:  Github, Postman, Swagger, Vercel, Supabase.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-2 xl:gap-5">
                        <a href={"https://github.com/ikhsanapriliano/review-laptop"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-brands fa-github mr-2"></i>Github</a>
                        <a href={"https://review-laptop.vercel.app/"} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-solid fa-globe mr-2"></i>Preview</a>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default ReviewLaptop
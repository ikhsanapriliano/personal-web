import { useEffect, useRef } from "react"

const Contact = () => {
    const contact = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const path = window.location.href
        const width = window.innerWidth
        const padding = width > 700 ? 80 : 60

        if (path.includes("contact")) {
            window.scrollTo({ top: contact.current!.getBoundingClientRect().top - padding })
        }
    }, [])

    return (
        <section ref={contact} id="contact" className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-semibold text-xl text-white">Contact Me</h2>
            <div className="flex text-[30px] gap-7">
                <a href="https://www.linkedin.com/in/ikhsan-apriliano/" target="_blank"><i className="fa-brands text-white fa-linkedin"></i></a>
                <a href="https://wa.me/+6281572832083" target="_blank"><i className="fa-brands text-white fa-whatsapp"></i></a>
                <a href="mailto:ikhsanapriliano4@gmail.com"><i className="fa-solid text-white fa-envelope"></i></a>
            </div>
        </section>
    )
}

export default Contact
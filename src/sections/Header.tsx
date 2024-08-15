import { useState } from "react"

const Header = () => {
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            <header className="h-[80px] flex items-center border-b z-50 fixed top-0 left-0 right-0 bg-white px-5 xl:px-0">
                <section className="container mx-auto flex justify-between items-center">
                    <a href="/"><h1 className="font-bold text-lg">Ikhsan Apriliano</h1></a>
                    <nav className="hidden gap-5 xl:flex">
                        <a href="/#home">Home</a>
                        <a href="/#about">About</a>
                        <a href="/#expertise">Expertise</a>
                        <a href="/#experience">Experience</a>
                        <a href="/#portfolio">Portfolio</a>
                        <a href="/#contact">Contact</a>
                    </nav>
                    <button onClick={() => { setIsModal(prev => !prev) }} className="inline-block xl:hidden"><i className={`fa-solid ${isModal ? "fa-xmark" : "fa-bars"}`}></i></button>
                </section>
            </header>
            <nav onClick={() => { setIsModal(prev => !prev) }} className={`${isModal ? "flex" : "hidden"} flex-col gap-5 xl:hidden fixed mt-[80px] top-0 left-0 right-0 border-b shadow-md z-[60] bg-white py-10 items-center`}>
                <a href="/#home">Home</a>
                <a href="/#about">About</a>
                <a href="/#expertise">Expertise</a>
                <a href="/#experience">Experience</a>
                <a href="/#portfolio">Portfolio</a>
                <a href="/#contact">Contact</a>
            </nav>
        </>
    )
}

export default Header
import Profile from "../assets/profile.jpg"

const Home = () => {
    return (
        <section id="home" className="pt-[80px] h-screen flex gap-20 justify-center items-center">
            <div className="w-[300px] h-[300px] overflow-hidden relative rounded-full">
                <img src={Profile} alt="profile" className="absolute top-[-50px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <p>Hello, I'm</p>
                <h1 className="text-2xl font-bold">Ikhsan Apriliano Hidayat</h1>
                <p className="font-semibold text-lg">Software Developer</p>
                <div className="flex gap-3">
                    <a href="/#about" className="w-[120px] py-2 flex justify-center items-center border border-primary rounded-full hover:bg-gray-100">About</a>
                    <a href="/#contact" className="w-[120px] py-2 flex justify-center items-center bg-primary text-white rounded-full hover:opacity-80">Contact</a>
                </div>
                <div className="flex gap-3 text-[30px]">
                    <a href="https://www.linkedin.com/in/ikhsan-apriliano/" target="_blank"><i className="fa-brands fa-linkedin hover:opacity-80"></i></a>
                    <a href="https://github.com/ikhsanapriliano" target="_blank"><i className="fa-brands fa-github hover:opacity-80"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Home
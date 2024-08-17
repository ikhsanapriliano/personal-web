import ExperienceCard from "../components/ExperienceCard"

const Experience = () => {
    return (
        <section id="experience" className="px-5 xl:px-10 py-10 flex flex-col justify-center gap-5 text-[12px] md:text-[16px]">
            <p className="font-semibold text-xl">Experience</p>
            <div className="xl:px-5">
                <ExperienceCard />
            </div>
        </section>
    )
}

export default Experience
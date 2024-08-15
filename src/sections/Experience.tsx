import ExperienceCard from "../components/ExperienceCard"

const Experience = () => {
    return (
        <section id="experience" className="px-10 py-10 flex flex-col justify-center gap-5">
            <p className="font-semibold text-xl">Experience</p>
            <div className="px-5">
                <ExperienceCard />
            </div>
        </section>
    )
}

export default Experience
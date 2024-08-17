import Skill from "../components/Skill"

const Expertise = () => {
    const skills = [
        "HTML / CSS",
        "Javascript",
        "Typescript",
        "React Js",
        "Next Js",
        "Golang",
        "Tailwind",
        "Figma",
        "Firebase"
    ]

    return (
        <section id="expertise" className="flex flex-col justify-center px-5 xl:px-10 py-10 gap-5 text-[12px] xl:text-[16px]">
            <h2 className="text-xl font-semibold">Expertise</h2>
            <div className="grid grid-cols-2 xl:flex gap-3 flex-wrap">
                {
                    skills.map((item, index) => (
                        <Skill key={index} name={item} />
                    ))
                }
            </div>
        </section>
    )
}

export default Expertise
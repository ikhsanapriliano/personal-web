interface Skill {
    name: string
}

const Skill = ({ name }: Skill) => {
    return (
        <div className="flex justify-center items-center gap-3 py-2 px-4 rounded-md border border-primary cursor-default hover:bg-gray-100">
            <i className="fa-solid fa-circle-check"></i>
            <p>{name}</p>
        </div>
    )
}

export default Skill
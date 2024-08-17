const ExperienceCard = () => {
    return (
        <div className="flex gap-10">
            <div className="hidden md:flex justify-center items-center relative">
                <div className="w-5 h-5 bg-primary rounded-full absolute top-0 left-0 right-0"></div>
                <div className="h-full border-l border-gray-500 ml-[10px]"></div>
            </div>
            <div className="border border-primary rounded-md p-5 md:my-5 w-full">
                <p className="font-semibold">Orineko (Juni 2024 - Juli 2024)</p>
                <p>Freelance Front End Web Developer React Js</p>
                <a href="https://orineko.io" target="_blank" className="underline hover:opacity-80">[orineko.io]</a>
                <div className="md:px-5 py-3">
                    <p>Tasks I Worked On :</p>
                    <ul className="list-disc list-inside">
                        <li>Managed the registration feature.</li>
                        <li>Managed the forgot password feature.</li>
                        <li>Managed the transaction feature.</li>
                        <li>Handled the post-payment success/failure page.</li>
                        <li>Fixed minor bugs on the website.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
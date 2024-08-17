import { AnimatePresence, motion } from "framer-motion"
import useModal, { ModalStore } from "../store/Modal"

const Modal = () => {
    const modal: ModalStore = useModal() as ModalStore

    return (
        <AnimatePresence>
            {
                modal.data?.id &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => modal.closeModal()}
                    className="fixed bg-black bg-opacity-40 inset-0 flex justify-center items-center z-[60] text-[12px] xl:text-[16px]">
                    <motion.div layoutId={String(modal.data.id)}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        className="bg-white relative h-[550px] w-[1000px] overflow-auto"
                        onClick={(e) => { e.stopPropagation() }}>
                        <div
                            className="fixed w-full xl:w-[1000px] flex justify-end">
                            <button onClick={() => modal.closeModal()} className="bg-red-500 text-white xl:text-primary xl:bg-white py-2 px-7 my-5 mx-5 xl:mx-7 rounded-md font-semibold opacity-30 hover:opacity-80 duration-150">
                                <i className="fa-solid fa-xmark mr-1 text-white xl:text-primary"></i> Close
                            </button>
                        </div>
                        <div>
                            <img src={modal.data.image} alt="gowesmart" />
                        </div>
                        <article className="p-5 xl:p-7">
                            <h1 className="font-semibold text-[16px] xl:text-xl">{modal.data.title}</h1>
                            <p>{modal.data.desc2}</p>
                            <p className="font-semibold text-[16px] xl:text-xl mt-5 xl:mt-7">Techstack</p>
                            <ol className="list-disc list-inside grid grid-cols-2 xl:grid-cols-4">
                                {
                                    modal.data.tech.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))
                                }
                            </ol>
                            <p className="font-semibold text-[16px] xl:text-xl mt-5 xl:mt-7">Link</p>
                            <div className="flex flex-col xl:flex-row gap-2 xl:gap-5 mt-2">
                                <a href={modal.data.link.figma} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-brands fa-figma mr-2"></i>Figma</a>
                                <a href={modal.data.link.github} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-brands fa-github mr-2"></i>Github</a>
                                <a href={modal.data.link.preview} target="_blank" className="py-2 xl:py-1 px-5 border border-primary hover:bg-gray-100 duration-150"><i className="fa-solid fa-globe mr-2"></i>Preview</a>
                            </div>
                        </article>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal
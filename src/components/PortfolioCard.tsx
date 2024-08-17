import React from "react"
import { motion } from "framer-motion"
import { Portfolio } from "../sections/Portfolio"
import useModal, { ModalStore } from "../store/Modal"

interface PortfolioCard {
    item: Portfolio,
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
}

const PortfolioCard = ({ item, current, setCurrent }: PortfolioCard) => {
    const modal: ModalStore = useModal() as ModalStore

    return (
        <>
            <motion.div
                layoutId="index"
                className="border shadow-md overflow-hidden">
                <div
                    onMouseEnter={() => { setCurrent(item.id) }}
                    onMouseLeave={() => { setCurrent(-1) }}
                    onClick={() => { modal.setModal(item) }}
                    className="h-fit overflow-hidden cursor-pointer">
                    <img src={item.image} alt="gowesmart" className={`${current == item.id ? "scale-110" : null} duration-150`} />
                </div>
                <div className="py-2 px-3 xl:p-5">
                    <p className="font-semibold md:text-lg">{item.title}</p>
                    <p className="max-h-[23px] md:max-h-fit overflow-hidden">{item.desc1}</p>
                    <div className="flex w-full justify-end mt-2">
                        <button
                            onClick={() => { modal.setModal(item) }}
                            className="font-semibold hover:opacity-80 flex items-center">Details <i className="fa-solid fa-arrow-right-long ml-1"></i></button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default PortfolioCard
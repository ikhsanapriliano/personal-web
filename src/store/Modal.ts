import { create } from "zustand";
import { Portfolio } from "../sections/Portfolio";

export interface ModalStore {
    isModal: boolean;
    data: Portfolio | null;
    setModal: (payload: Portfolio) => void;
    closeModal: () => void;
}

const useModal = create(
    (set): ModalStore => ({
        isModal: false,
        data: null,
        setModal: (payload: Portfolio) => set({ isModal: true, data: payload }),
        closeModal: () => set({ isModal: false, data: null }),
    })
);

export default useModal;

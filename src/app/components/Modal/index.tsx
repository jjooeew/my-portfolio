"use client";

import { motion, type Variants } from "framer-motion";
import { Backdrop } from "../Backdrop"
import { createPortal } from "react-dom";

const dropIn: Variants = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

type ModalProps = {
    handleClose: () => void;
    text: string;
}

export const Modal = ({ 
    handleClose, text 
}: ModalProps) => {
    return createPortal(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal bg-green-500"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>, document.body
    )
}
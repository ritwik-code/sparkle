import { motion } from "framer-motion";
import Backdrop from "../backdrop";
import { MouseEventHandler } from "react";

const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1 },
    exit: { y: "100vh", opacity: 0 }
}

const Modal = ({ handleClose, component }: { handleClose: MouseEventHandler, component: React.ReactNode }) => {
    return (<Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className="m-auto grid h-auto place-items-center pt-5 xl:w-3/4 sm:w-full bg-white"
            variants={dropIn}
        >
            {/* <div className='grid h-auto place-items-center pt-5 xl:w-3/4 sm:w-full bg-white'> */}
                {<button onClick={handleClose}>
                    Close
                </button>}
                {component}
            {/* </div> */}
        </motion.div>
    </Backdrop>)
}

export default Modal;
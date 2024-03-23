import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import 'intro.js/introjs.css';


const Backdrop = ({ children, onClick}:{children:React.ReactNode, onClick:MouseEventHandler<HTMLDivElement>}) =>{
return(
    <motion.div 
    className="bg-black bg-opacity-50 absolute h-full w-full top-0 left-0 flex items-center justify-center"
    onClick={onClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        {children}
    </motion.div>
);
};

export default Backdrop;
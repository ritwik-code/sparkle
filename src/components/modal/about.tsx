import { motion } from "framer-motion";
import Backdrop from "../backdrop";
import { MouseEventHandler } from "react";

const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1 },
    exit: { y: "100vh", opacity: 0 }
}

const AboutModal = ({ handleClose }: { handleClose: MouseEventHandler<HTMLDivElement> }) => {
    return (<Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className="m-auto flex items-center flex-col"
            variants={dropIn}
        >

            <div className='grid h-auto place-items-center pt-5 w-1/2 bg-white'>

                <div className='w-3/4'>
                    <div className="mt-5">
                        <h1 className='text-center font-customFont font-outline-05 font-bold text-2xl md:text-3xl lg:text-4xl'>ABOUT</h1>
                    </div>
                    <div className="mt-5">
                        <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>As a child, we all loved listening to our parents when they read a storybook,
                            or when they shared the story of how they met for the very first time. Stories give us hope, excitement, and most importantly, they create a sense of belonging.</h2>
                    </div>
                    <div className="mt-5">
                        <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>The name Sparkle is inspired by the idea of shining brightly, with unique flashes of light
                            representing personal experiences. Sharing your stories with others will enhance this sparkle and help you to see yourself and other team members in a new light. </h2>
                    </div>
                    <div className="mt-5">
                        <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'> At its core, Sparkle is about building strong, long-lasting relationships and mutual support.
                            We believe that by playing the game, you will not only have a good time with your colleagues, but you will also be better equipped to tackle challenges together and achieve better results. </h2>
                    </div>
                    <div className="mt-5">
                        <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Let us kindle the fire and Sparkle!</h2>
                    </div>
                    <div className="mt-5 pb-16">
                        <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Stefano Cheri & Ritwik Mishra</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    </Backdrop>)
}

export default AboutModal;
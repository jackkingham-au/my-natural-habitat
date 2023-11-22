import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const Plaque = () => {
    const [open, setOpen] = useState(false)

    const spring = useSpring({
        y: open ? 0 : 500
    })

    return (
        <>
            <p className="text-lg font-semibold rounded-full w-6 h-6 bg-black/30 fixed z-50 right-4 bottom-4 text-white flex items-center justify-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>?</p>

            <animated.div style={spring} className="absolute bottom-4 right-4 pr-8 z-10" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div className=" bg-black/50 rounded-md px-2 py-1 flex items-center justify-center flex-col sm:flex-row">
                    <a className="text-[12px] text-white m-1 block" target="_blank" rel="noopener noreferrer" href="https://readyplayer.me">Avatar by Ready Player Me -</a>
                    <a className="text-[12px] text-white m-1 block" target="_blank" rel="noopener noreferrer" href="https://poly.pizza/u/Poly%20by%20Google">Models by Poly by Google -</a>
                    <a className="text-[12px] text-white m-1 block" href="https://poly.pizza/m/7qAyGZnerYt" target="_blank" rel="noopener noreferrer">Table by Hunter Paramore</a>
                </div>
            </animated.div>
        </>
    );
}

export default Plaque;
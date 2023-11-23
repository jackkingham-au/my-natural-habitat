import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { Box } from "react-bootstrap-icons";

const Plaque = () => {
    const [open, setOpen] = useState(false)

    const spring = useSpring({
        scale: open ? 1 : 0,
        opacity: open ? 1 : 0,
    })

    const overlayClose = (e: React.MouseEvent) => {
        if ((e.target as any).id === 'overlay') setOpen(false);
    }

    return (
        <>
            <button className="text-2xl font-semibold rounded-full w-12 h-12 bg-black/30 fixed z-50 right-4 bottom-4 text-white flex items-center justify-center" onClick={() => setOpen(!open)}>
                ?
            </button>

            <animated.div style={spring} id="overlay" onClick={(e) => overlayClose(e)} className="p-4 fixed top-0 right-0 bg-black/80 left-0 bottom-0 z-50 flex items-center justify-center">
                <button onClick={() => setOpen(false)} className="fixed top-4 text-2xl right-4 z-[60] uppercase text-white bg-white/30 w-12 h-12 rounded-full">
                    X
                </button>

                <div className="p-4 md:p-8 rounded-md bg-black/80 max-w-[600px]">
                    <h1 className="text-white text-xl mb-2 font-bold">My Natural Habitat</h1>
                    <h5 className="text-white mb-2 text-lg font-light">Observe, Jack in his natural habitat...</h5>
                    <p className="text-white font-light text-md">I wanted to capture something humourous, whilst applying various 3D techniques. Using assets aquired from various sources, I designed the model using Blender, and applied the typing animation using Mixamo.</p>

                    <p className="text-white font-light text-md mt-4">Designed & Made by <a href="http://jackkingham.com" target="_blank" rel="noopener noreferrer" className="flex-inline hover:underline font-medium">Jack Kingham</a>.</p>

                    <h6 className="font-medium text-white text-lg mt-8 mb-4">Assets From</h6>
                    <a className="text-md w-fit hover:underline text-white my-4 flex items-center justify-start" target="_blank" rel="noopener noreferrer" href="https://readyplayer.me">
                        <Box size={16} className="mr-2" />
                        Avatar by Ready Player Me
                    </a>

                    <a className="text-md w-fit hover:underline text-white my-4 flex items-center justify-start" target="_blank" rel="noopener noreferrer" href="https://poly.pizza/u/Poly%20by%20Google">
                        <Box size={16} className="mr-2" />
                        Models by Poly by Google
                    </a>
                    <a className="text-md w-fit hover:underline text-white my-4 flex items-center justify-start" href="https://poly.pizza/m/7qAyGZnerYt" target="_blank" rel="noopener noreferrer">
                        <Box size={16} className="mr-2" />
                        Table by Hunter Paramore
                    </a>
                </div>
            </animated.div>
        </>
    );
}

export default Plaque;
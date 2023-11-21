const Plaque = () => {

    return (
        <>
            <div className="bg-black/70 p-4 rounded-lg absolute bottom-24 left-1/2 w-[80%] sm:w-fit -translate-x-1/2 z-50">
                <h1 className="text-xl text-white">Observe, Jack in his natural habitat...</h1>
            </div>

            <div className="absolute bottom-0 right-0">
                <div className=" bg-black/50 rounded-tl-lg px-2 py-1 flex items-center justify-center flex-col sm:flex-row">
                    <a className="text-[12px] text-white m-2 block" target="_blank" rel="noopener noreferrer" href="https://poly.pizza/u/Poly%20by%20Google">Models by Poly by Google [CC-BY]</a>
                    <a className="text-[12px] text-white m-2 block" href="https://poly.pizza/m/7qAyGZnerYt" target="_blank" rel="noopener noreferrer">Table by Hunter Paramore [CC-BY] via Poly Pizza</a>
                </div>
            </div>

        </>
    );
}

export default Plaque;
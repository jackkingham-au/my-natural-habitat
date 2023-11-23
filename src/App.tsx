import { Loader } from "@react-three/drei";
import ThreeJsScene from "./components/three/ThreeJsScene";

const App = () => {

    return (
        <>
            <ThreeJsScene />
            <Loader />
        </>
    )
}

export default App;
import { Canvas } from "@react-three/fiber";
import Scene from "../models/Scene";
import { Box, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Root = () => {

    return (
        <Canvas
            camera={{
                position: [
                    10, 10, 10
                ]
            }}
        >
            <Suspense fallback={null}>
                <Environment preset="city" />
                <OrbitControls
                    autoRotate
                    enablePan={false}
                    enableDamping={false}
                    enableRotate
                    makeDefault
                    maxAzimuthAngle={Math.PI}
                    minPolarAngle={1}
                    maxPolarAngle={1}
                    maxDistance={20}
                    minDistance={15}
                />
                <Scene scale={5} />
                <Box args={[15, 11, 0.5]} position={[0, -0.5, 3]} rotation-x={Math.PI / 2}>
                    <meshStandardMaterial color={'#9e9e9e'} />
                </Box>
            </Suspense>
        </Canvas>
    )
}

export default Root;
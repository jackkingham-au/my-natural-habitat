import { useTexture } from "@react-three/drei";

const useAvatarTextures = () => {

    const textures = useTexture([
        '/textures/baseColor.jpg',
        '/textures/Wolf3D_Teeth.jpg',
        '/textures/glasses-01-D.png',
        '/textures/hair-18-N.jpg',
        '/textures/body-athletic-m-N.jpg',
        '/textures/outfit-basic-01-v2-m-bottom-D.jpg',
        '/textures/outfit-basic-01-v2-m-bottom-N.jpg', // INDEX 6
        '/textures/outfit-basic-01-v2-m-bottom-R.jpg',
        '/textures/outfit-basic-01-v2-m-footwear-M-outfit-basic-01-v2-m-footwear-R.jpg',
        '/textures/outfit-basic-01-v2-m-footwear-N.jpg',
        '/textures/outfit-basic-01-v2-m-top-D.jpg',
        '/textures/outfit-basic-01-v2-m-top-M-outfit-basic-01-v2-m-top-R.jpg',
        '/textures/outfit-basic-01-v2-m-top-N.jpg' // INDEX 13
    ])

    return textures;
}

export default useAvatarTextures;
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("cubes")) {
      alert(
        "Controls :\n- WASD Keys : Move\n- Mouse : Look Around\n- Space : Jump\n- 1-5 Keys : Switch Blocks\n- Click : Add Block\n- Alt + Click : Remove Block \n\n To start select OK and then select the '+' icon on your screen.\n\n"
      );
    }
  }, []);
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor plus-cursor">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
